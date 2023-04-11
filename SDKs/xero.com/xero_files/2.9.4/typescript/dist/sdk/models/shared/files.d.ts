import { SpeakeasyBase } from "../../../internal/utils";
import { FileObject } from "./fileobject";
/**
 * search results matching criteria
 */
export declare class Files extends SpeakeasyBase {
    items?: FileObject[];
    page?: number;
    perPage?: number;
    totalCount?: number;
}
