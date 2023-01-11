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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWordListResponse = exports.DeleteWordListRequest = exports.DeleteWordListHeaders = exports.DeleteWordListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteWordListPathParams = /** @class */ (function (_super) {
    __extends(DeleteWordListPathParams, _super);
    function DeleteWordListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=permalink" }),
        __metadata("design:type", String)
    ], DeleteWordListPathParams.prototype, "permalink", void 0);
    return DeleteWordListPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteWordListPathParams = DeleteWordListPathParams;
var DeleteWordListHeaders = /** @class */ (function (_super) {
    __extends(DeleteWordListHeaders, _super);
    function DeleteWordListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=auth_token" }),
        __metadata("design:type", String)
    ], DeleteWordListHeaders.prototype, "authToken", void 0);
    return DeleteWordListHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteWordListHeaders = DeleteWordListHeaders;
var DeleteWordListRequest = /** @class */ (function (_super) {
    __extends(DeleteWordListRequest, _super);
    function DeleteWordListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteWordListPathParams)
    ], DeleteWordListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteWordListHeaders)
    ], DeleteWordListRequest.prototype, "headers", void 0);
    return DeleteWordListRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteWordListRequest = DeleteWordListRequest;
var DeleteWordListResponse = /** @class */ (function (_super) {
    __extends(DeleteWordListResponse, _super);
    function DeleteWordListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeleteWordListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteWordListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteWordListResponse.prototype, "statusCode", void 0);
    return DeleteWordListResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteWordListResponse = DeleteWordListResponse;
