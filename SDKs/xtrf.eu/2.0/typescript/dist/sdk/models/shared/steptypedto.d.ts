import { SpeakeasyBase } from "../../../internal/utils";
import { StepTypeSemanticsDto } from "./steptypesemanticsdto";
export declare class StepTypeDto extends SpeakeasyBase {
    id?: string;
    jobTypeId?: number;
    name?: string;
    semantics?: StepTypeSemanticsDto;
}
