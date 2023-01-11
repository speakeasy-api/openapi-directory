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
exports.DeleteDocumentPropertiesResponse = exports.DeleteDocumentPropertiesRequest = exports.DeleteDocumentPropertiesHeaders = exports.DeleteDocumentPropertiesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteDocumentPropertiesPathParams = /** @class */ (function (_super) {
    __extends(DeleteDocumentPropertiesPathParams, _super);
    function DeleteDocumentPropertiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=documentPropertiesId" }),
        __metadata("design:type", String)
    ], DeleteDocumentPropertiesPathParams.prototype, "documentPropertiesId", void 0);
    return DeleteDocumentPropertiesPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteDocumentPropertiesPathParams = DeleteDocumentPropertiesPathParams;
var DeleteDocumentPropertiesHeaders = /** @class */ (function (_super) {
    __extends(DeleteDocumentPropertiesHeaders, _super);
    function DeleteDocumentPropertiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], DeleteDocumentPropertiesHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], DeleteDocumentPropertiesHeaders.prototype, "zuoraTrackId", void 0);
    return DeleteDocumentPropertiesHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteDocumentPropertiesHeaders = DeleteDocumentPropertiesHeaders;
var DeleteDocumentPropertiesRequest = /** @class */ (function (_super) {
    __extends(DeleteDocumentPropertiesRequest, _super);
    function DeleteDocumentPropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteDocumentPropertiesPathParams)
    ], DeleteDocumentPropertiesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteDocumentPropertiesHeaders)
    ], DeleteDocumentPropertiesRequest.prototype, "headers", void 0);
    return DeleteDocumentPropertiesRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteDocumentPropertiesRequest = DeleteDocumentPropertiesRequest;
var DeleteDocumentPropertiesResponse = /** @class */ (function (_super) {
    __extends(DeleteDocumentPropertiesResponse, _super);
    function DeleteDocumentPropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CommonResponseType)
    ], DeleteDocumentPropertiesResponse.prototype, "commonResponseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteDocumentPropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteDocumentPropertiesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteDocumentPropertiesResponse.prototype, "statusCode", void 0);
    return DeleteDocumentPropertiesResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteDocumentPropertiesResponse = DeleteDocumentPropertiesResponse;
