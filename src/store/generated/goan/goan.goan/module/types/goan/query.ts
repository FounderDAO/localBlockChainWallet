/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../goan/params";
import { CustomTx } from "../goan/custom_tx";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "goan.goan";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCustomTxRequest {
  id: number;
}

export interface QueryGetCustomTxResponse {
  CustomTx: CustomTx | undefined;
}

export interface QueryAllCustomTxRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCustomTxResponse {
  CustomTx: CustomTx[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetCustomTxRequest: object = { id: 0 };

export const QueryGetCustomTxRequest = {
  encode(
    message: QueryGetCustomTxRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCustomTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomTxRequest,
    } as QueryGetCustomTxRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomTxRequest {
    const message = {
      ...baseQueryGetCustomTxRequest,
    } as QueryGetCustomTxRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCustomTxRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomTxRequest>
  ): QueryGetCustomTxRequest {
    const message = {
      ...baseQueryGetCustomTxRequest,
    } as QueryGetCustomTxRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCustomTxResponse: object = {};

export const QueryGetCustomTxResponse = {
  encode(
    message: QueryGetCustomTxResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CustomTx !== undefined) {
      CustomTx.encode(message.CustomTx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCustomTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomTxResponse,
    } as QueryGetCustomTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CustomTx = CustomTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomTxResponse {
    const message = {
      ...baseQueryGetCustomTxResponse,
    } as QueryGetCustomTxResponse;
    if (object.CustomTx !== undefined && object.CustomTx !== null) {
      message.CustomTx = CustomTx.fromJSON(object.CustomTx);
    } else {
      message.CustomTx = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCustomTxResponse): unknown {
    const obj: any = {};
    message.CustomTx !== undefined &&
      (obj.CustomTx = message.CustomTx
        ? CustomTx.toJSON(message.CustomTx)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomTxResponse>
  ): QueryGetCustomTxResponse {
    const message = {
      ...baseQueryGetCustomTxResponse,
    } as QueryGetCustomTxResponse;
    if (object.CustomTx !== undefined && object.CustomTx !== null) {
      message.CustomTx = CustomTx.fromPartial(object.CustomTx);
    } else {
      message.CustomTx = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomTxRequest: object = {};

export const QueryAllCustomTxRequest = {
  encode(
    message: QueryAllCustomTxRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCustomTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomTxRequest,
    } as QueryAllCustomTxRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCustomTxRequest {
    const message = {
      ...baseQueryAllCustomTxRequest,
    } as QueryAllCustomTxRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomTxRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomTxRequest>
  ): QueryAllCustomTxRequest {
    const message = {
      ...baseQueryAllCustomTxRequest,
    } as QueryAllCustomTxRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomTxResponse: object = {};

export const QueryAllCustomTxResponse = {
  encode(
    message: QueryAllCustomTxResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CustomTx) {
      CustomTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCustomTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomTxResponse,
    } as QueryAllCustomTxResponse;
    message.CustomTx = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CustomTx.push(CustomTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCustomTxResponse {
    const message = {
      ...baseQueryAllCustomTxResponse,
    } as QueryAllCustomTxResponse;
    message.CustomTx = [];
    if (object.CustomTx !== undefined && object.CustomTx !== null) {
      for (const e of object.CustomTx) {
        message.CustomTx.push(CustomTx.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomTxResponse): unknown {
    const obj: any = {};
    if (message.CustomTx) {
      obj.CustomTx = message.CustomTx.map((e) =>
        e ? CustomTx.toJSON(e) : undefined
      );
    } else {
      obj.CustomTx = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomTxResponse>
  ): QueryAllCustomTxResponse {
    const message = {
      ...baseQueryAllCustomTxResponse,
    } as QueryAllCustomTxResponse;
    message.CustomTx = [];
    if (object.CustomTx !== undefined && object.CustomTx !== null) {
      for (const e of object.CustomTx) {
        message.CustomTx.push(CustomTx.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a CustomTx by id. */
  CustomTx(request: QueryGetCustomTxRequest): Promise<QueryGetCustomTxResponse>;
  /** Queries a list of CustomTx items. */
  CustomTxAll(
    request: QueryAllCustomTxRequest
  ): Promise<QueryAllCustomTxResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("goan.goan.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  CustomTx(
    request: QueryGetCustomTxRequest
  ): Promise<QueryGetCustomTxResponse> {
    const data = QueryGetCustomTxRequest.encode(request).finish();
    const promise = this.rpc.request("goan.goan.Query", "CustomTx", data);
    return promise.then((data) =>
      QueryGetCustomTxResponse.decode(new Reader(data))
    );
  }

  CustomTxAll(
    request: QueryAllCustomTxRequest
  ): Promise<QueryAllCustomTxResponse> {
    const data = QueryAllCustomTxRequest.encode(request).finish();
    const promise = this.rpc.request("goan.goan.Query", "CustomTxAll", data);
    return promise.then((data) =>
      QueryAllCustomTxResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
