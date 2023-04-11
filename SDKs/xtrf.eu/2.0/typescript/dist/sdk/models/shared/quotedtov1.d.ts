import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldDTO } from "./customfielddto";
import { FinanceDTO } from "./financedto";
import { InstructionsDTO } from "./instructionsdto";
import { QuoteDatesDTO } from "./quotedatesdto";
import { TaskDTO } from "./taskdto";
/**
 * Success
 */
export declare class QuoteDTOv1 extends SpeakeasyBase {
    automaticallyAcceptSentQuote?: boolean;
    categoriesIds?: number[];
    contactPersonId?: number;
    customFields?: CustomFieldDTO[];
    customerId?: number;
    dates?: QuoteDatesDTO;
    finance?: FinanceDTO;
    id?: number;
    idNumber?: string;
    instructions?: InstructionsDTO;
    isClassicQuote?: boolean;
    name?: string;
    quoteId?: string;
    salesPersonId?: number;
    status?: string;
    tasks?: TaskDTO[];
}
