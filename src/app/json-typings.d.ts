/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}
declare module 'ipfs'{
  const value:any;
  export default value
}

declare module 'stream-buffers'{
  const value:any;
  export default value
}
