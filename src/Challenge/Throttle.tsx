type Func = (...args: any[]) => void;

export function throttle<T extends Func>(func: T, timeout: number) {

  let ready = true;

  return ((...args: Parameters<T>) => {
    if (!ready) return;

    ready = false;

    func(...args);

    setTimeout(() => {
      ready = true; 
    }, timeout);

  }) as T;

}

function sayHello(name: string) {
  console.log(`Hello ${name}!`); 
}

const throttledSayHello = throttle(sayHello, 1000);

// Compilation errors:
//throttledSayHello(123); 
//const throttledSayHello2 = throttle(sayHello, 'timeout');