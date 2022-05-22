import { CustomError } from "../errors";
import { ICycleInfo } from "../interfaces";
import { ResponseData } from "../types";


export class ResponseService {
  createSuccessResponse(
    message?: string,
    data?:
      | ResponseData
      | ResponseData[]
      | undefined
      | ICycleInfo
      | Array<ICycleInfo>,
  ): {
    message: string;
    data?:
      | ResponseData
      | ResponseData[]
      | undefined
      | ICycleInfo
      | Array<ICycleInfo>;
    success: boolean;
  } {
    return { message: message ?? "Success", success: true, data};
  }
  createErrorResponse(e: CustomError) {
    return { message: e.message, success: false };
  }
}
