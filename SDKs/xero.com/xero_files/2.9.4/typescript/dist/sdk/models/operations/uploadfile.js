"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileResponse = exports.UploadFileRequest = exports.UploadFileSecurity = exports.UploadFileRequestBody = exports.UploadFileHeaders = exports.UploadFileQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UploadFileQueryParams = /** @class */ (function (_super) {
    __extends(UploadFileQueryParams, _super);
    function UploadFileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FolderId" }),
        __metadata("design:type", String)
    ], UploadFileQueryParams.prototype, "folderId", void 0);
    return UploadFileQueryParams;
}(utils_1.SpeakeasyBase));
exports.UploadFileQueryParams = UploadFileQueryParams;
var UploadFileHeaders = /** @class */ (function (_super) {
    __extends(UploadFileHeaders, _super);
    function UploadFileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], UploadFileHeaders.prototype, "xeroTenantId", void 0);
    return UploadFileHeaders;
}(utils_1.SpeakeasyBase));
exports.UploadFileHeaders = UploadFileHeaders;
var UploadFileRequestBody = /** @class */ (function (_super) {
    __extends(UploadFileRequestBody, _super);
    function UploadFileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=body" }),
        __metadata("design:type", String)
    ], UploadFileRequestBody.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=filename" }),
        __metadata("design:type", String)
    ], UploadFileRequestBody.prototype, "filename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=mimeType" }),
        __metadata("design:type", String)
    ], UploadFileRequestBody.prototype, "mimeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UploadFileRequestBody.prototype, "name", void 0);
    return UploadFileRequestBody;
}(utils_1.SpeakeasyBase));
exports.UploadFileRequestBody = UploadFileRequestBody;
var UploadFileSecurity = /** @class */ (function (_super) {
    __extends(UploadFileSecurity, _super);
    function UploadFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UploadFileSecurity.prototype, "oAuth2", void 0);
    return UploadFileSecurity;
}(utils_1.SpeakeasyBase));
exports.UploadFileSecurity = UploadFileSecurity;
var UploadFileRequest = /** @class */ (function (_super) {
    __extends(UploadFileRequest, _super);
    function UploadFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileQueryParams)
    ], UploadFileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileHeaders)
    ], UploadFileRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadFileRequestBody)
    ], UploadFileRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileSecurity)
    ], UploadFileRequest.prototype, "security", void 0);
    return UploadFileRequest;
}(utils_1.SpeakeasyBase));
exports.UploadFileRequest = UploadFileRequest;
var UploadFileResponse = /** @class */ (function (_super) {
    __extends(UploadFileResponse, _super);
    function UploadFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadFileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FileObject)
    ], UploadFileResponse.prototype, "fileObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UploadFileResponse.prototype, "statusCode", void 0);
    return UploadFileResponse;
}(utils_1.SpeakeasyBase));
exports.UploadFileResponse = UploadFileResponse;
