import { Observable, shareReplay } from 'rxjs';

export function statisticObservable<T>(cb: () => T): Observable<T> {
  return new Observable<T>((subscriber) => {
    let t = request();

    function request(): number {
      return requestAnimationFrame(() => {
        subscriber.next(cb());
        t = request();
      });
    }

    return () => cancelAnimationFrame(t);
  }).pipe(
    shareReplay({
      refCount: true,
      bufferSize: 1,
    })
  );
}
