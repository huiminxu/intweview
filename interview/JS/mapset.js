// for...of 可以用来遍历 Map 和 Set

Map
// set(key, value) 、get(key)、has(key)、delete(key) 和 clear() 方法，size
Set 
// add、has、delete

WeakMap


// WeakMap 的 key 只能是非空对象（non-null object）。WeakMap 对它的 key 仅保持弱引用，也就是说它不阻止垃圾回收器回收它所引用的 key。WeakMap 最大的好处是可以避免内存泄漏。一个仅被 WeakMap 作为 key 而引用的对象，会被垃圾回收器回收掉。
