import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A successful request
 */
export declare class FileObject extends SpeakeasyBase {
    /**
     * Created date in UTC
     */
    createdDateUtc?: string;
    /**
     * Folder relation object's UUID
     */
    folderId?: string;
    /**
     * File object's UUID
     */
    id?: string;
    /**
     * MimeType of the file (image/png, image/jpeg, application/pdf, etc..)
     */
    mimeType?: string;
    /**
     * File Name
     */
    name?: string;
    /**
     * Numeric value in bytes
     */
    size?: number;
    /**
     * Updated date in UTC
     */
    updatedDateUtc?: string;
    user?: User;
}
