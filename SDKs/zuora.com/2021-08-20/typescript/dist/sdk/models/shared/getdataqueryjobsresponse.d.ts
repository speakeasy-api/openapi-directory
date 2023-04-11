import { SpeakeasyBase } from "../../../internal/utils";
import { DataQueryJob } from "./dataqueryjob";
/**
 * OK
 */
export declare class GetDataQueryJobsResponse extends SpeakeasyBase {
    /**
     * List of data query jobs. The query jobs are listed in reverse order of creation.
     *
     * @remarks
     *
     */
    data?: DataQueryJob[];
}
