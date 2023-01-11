import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DocumentDocTypeEnum {
    Stmt = "STMT",
    Tax = "TAX",
    Ebill = "EBILL"
}
export declare class Document extends SpeakeasyBase {
    accountID?: number;
    docType?: DocumentDocTypeEnum;
    formType?: string;
    id?: string;
    lastUpdated?: string;
    name?: string;
    source?: string;
    status?: string;
}
