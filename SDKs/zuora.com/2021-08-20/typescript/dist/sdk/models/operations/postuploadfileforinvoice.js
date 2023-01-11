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
exports.PostUploadFileForInvoiceResponse = exports.PostUploadFileForInvoiceRequest = exports.PostUploadFileForInvoiceRequestBody = exports.PostUploadFileForInvoiceRequestBodyFile = exports.PostUploadFileForInvoiceHeaders = exports.PostUploadFileForInvoicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostUploadFileForInvoicePathParams = /** @class */ (function (_super) {
    __extends(PostUploadFileForInvoicePathParams, _super);
    function PostUploadFileForInvoicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoiceId" }),
        __metadata("design:type", String)
    ], PostUploadFileForInvoicePathParams.prototype, "invoiceId", void 0);
    return PostUploadFileForInvoicePathParams;
}(utils_1.SpeakeasyBase));
exports.PostUploadFileForInvoicePathParams = PostUploadFileForInvoicePathParams;
var PostUploadFileForInvoiceHeaders = /** @class */ (function (_super) {
    __extends(PostUploadFileForInvoiceHeaders, _super);
    function PostUploadFileForInvoiceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostUploadFileForInvoiceHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostUploadFileForInvoiceHeaders.prototype, "zuoraTrackId", void 0);
    return PostUploadFileForInvoiceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUploadFileForInvoiceHeaders = PostUploadFileForInvoiceHeaders;
var PostUploadFileForInvoiceRequestBodyFile = /** @class */ (function (_super) {
    __extends(PostUploadFileForInvoiceRequestBodyFile, _super);
    function PostUploadFileForInvoiceRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostUploadFileForInvoiceRequestBodyFile.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], PostUploadFileForInvoiceRequestBodyFile.prototype, "file", void 0);
    return PostUploadFileForInvoiceRequestBodyFile;
}(utils_1.SpeakeasyBase));
exports.PostUploadFileForInvoiceRequestBodyFile = PostUploadFileForInvoiceRequestBodyFile;
var PostUploadFileForInvoiceRequestBody = /** @class */ (function (_super) {
    __extends(PostUploadFileForInvoiceRequestBody, _super);
    function PostUploadFileForInvoiceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostUploadFileForInvoiceRequestBodyFile)
    ], PostUploadFileForInvoiceRequestBody.prototype, "file", void 0);
    return PostUploadFileForInvoiceRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostUploadFileForInvoiceRequestBody = PostUploadFileForInvoiceRequestBody;
var PostUploadFileForInvoiceRequest = /** @class */ (function (_super) {
    __extends(PostUploadFileForInvoiceRequest, _super);
    function PostUploadFileForInvoiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUploadFileForInvoicePathParams)
    ], PostUploadFileForInvoiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUploadFileForInvoiceHeaders)
    ], PostUploadFileForInvoiceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostUploadFileForInvoiceRequestBody)
    ], PostUploadFileForInvoiceRequest.prototype, "request", void 0);
    return PostUploadFileForInvoiceRequest;
}(utils_1.SpeakeasyBase));
exports.PostUploadFileForInvoiceRequest = PostUploadFileForInvoiceRequest;
var PostUploadFileForInvoiceResponse = /** @class */ (function (_super) {
    __extends(PostUploadFileForInvoiceResponse, _super);
    function PostUploadFileForInvoiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUploadFileForInvoiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostUploadFileForInvoiceResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PostUploadFileResponse)
    ], PostUploadFileForInvoiceResponse.prototype, "postUploadFileResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUploadFileForInvoiceResponse.prototype, "statusCode", void 0);
    return PostUploadFileForInvoiceResponse;
}(utils_1.SpeakeasyBase));
exports.PostUploadFileForInvoiceResponse = PostUploadFileForInvoiceResponse;
