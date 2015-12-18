// casts
let obj: Object;

// const array5: any[] = obj; // nope 
const array6: any[] = obj as any[]; 
const array7: any[] = <any[]>obj; 

let num: number;
// const array8: any[] = <any[]>num; // nope, no down-cast possible 

