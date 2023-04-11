import { SpeakeasyBase } from "../../../internal/utils";
import { DepartmentVisitedTag } from "./departmentvisitedtag";
export declare class Document extends SpeakeasyBase {
    accountId: string;
    accountName: string;
    carttag: string;
    checkouttag: string;
    dataEntityId: string;
    departmentVisitedTag: DepartmentVisitedTag;
    email: string;
    followers: string[];
    id: string;
    rclastsession: string;
    rclastsessiondate: string;
}
