// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#decorators
// https://github.com/Microsoft/TypeScript/issues/2249
// requires         "experimentalDecorators": true,
// experimental, but Angular heavily relies on it
// will be aligned with ES7 decorators once they are final 
// https://github.com/wycats/javascript-decorators/blob/master/README.md

// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Function, propertyKey: string | symbol, parameterIndex: number) => void;

// Angular 2 use case
// @Component({
//     selector: 'hello-app',
// })
// @View({
//     templateUrl: 'hello.html'
// })
// class HelloCmp {
//   ...
// }

console.log('Decorators');

@Component
class MyClass {
  @Id
  myField: string;
  
  @readonly
  @enumerable(false)
  myMethod(@NotNull myParam: string) { }
}
// @Id MyClass {} myField
// @enumerable false
// @NotNull MyClass {} myMethod 0
// @enumerable-inner MyClass {} myMethod Object {writable: true, enumerable: true, configurable: true}
// @readonly MyClass {} myMethod Object {writable: true, enumerable: false, configurable: true}
// @Component MyClass() {}

function NotNull(target: any, propertyKey: string, parameterIndex: number) {
  console.log('@NotNull', target, propertyKey, parameterIndex);
}

// no parameters required, so we can use this short version
function readonly(target, name, descriptor) {
  console.log('@readonly', target, name, descriptor);
  // target: MyClass
  // name: 'myMethod'
  // descriptor: property configuration
  descriptor.writable = false;
}

// takes value as parameter of type boolean
function enumerable(value: boolean) {
  console.log('@enumerable', value);
  return function(target, name, descriptor) {
    console.log('@enumerable-inner', target, name, descriptor);
    descriptor.enumerable = value;
  }
}

function Component(target: Function) {
  console.log('@Component', target);
  
}

function Id(target: Object, propertyKey: string) {
  console.log('@Id', target, propertyKey);
}

