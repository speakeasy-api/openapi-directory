import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileToUploadDtoFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
/**
 * Uploaded file
 */
export declare class FileToUploadDto extends SpeakeasyBase {
    file?: FileToUploadDtoFile;
}
