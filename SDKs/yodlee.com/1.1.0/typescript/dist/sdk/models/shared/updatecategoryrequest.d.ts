import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateCategoryRequestSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare class UpdateCategoryRequest extends SpeakeasyBase {
    categoryName?: string;
    highLevelCategoryName?: string;
    id: number;
    source: UpdateCategoryRequestSourceEnum;
}
