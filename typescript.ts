type demo1<T extends (...args: any) => any> = T extends (arg: infer R) => infer R? R : any;
// 这段代码定义了一个泛型类型 demo1，它接受一个参数 T，T 又是一个函数类型。demo1 的类型判断了 T 是否是一个接受一个参数的函数，并且通过 infer 关键字分别推断出该参数的类型为 R，以及函数的返回值类型也为 R。如果判断成立，则 demo1 的类型为 R，否则为 any。这段代码主要用于提取函数参数的类型。

type ts1<TData,TParams extends Array<any>> = (...params: TParams) => Promise<TData>
type ts2 = ts1<string,[]>;
//type ts2 = () => Promise<string>
type ts3 = ts1<string,[1,2,3]>; 
//type ts3 = (params_0: 1, params_1: 2, params_2: 3) => Promise<string>
