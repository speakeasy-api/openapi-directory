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
exports.DeleteCallLogResponse = exports.DeleteCallLogRequest = exports.DeleteCallLogPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteCallLogPathParams = /** @class */ (function (_super) {
    __extends(DeleteCallLogPathParams, _super);
    function DeleteCallLogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=callLogId" }),
        __metadata("design:type", String)
    ], DeleteCallLogPathParams.prototype, "callLogId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], DeleteCallLogPathParams.prototype, "userId", void 0);
    return DeleteCallLogPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteCallLogPathParams = DeleteCallLogPathParams;
var DeleteCallLogRequest = /** @class */ (function (_super) {
    __extends(DeleteCallLogRequest, _super);
    function DeleteCallLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteCallLogPathParams)
    ], DeleteCallLogRequest.prototype, "pathParams", void 0);
    return DeleteCallLogRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteCallLogRequest = DeleteCallLogRequest;
var DeleteCallLogResponse = /** @class */ (function (_super) {
    __extends(DeleteCallLogResponse, _super);
    function DeleteCallLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeleteCallLogResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteCallLogResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteCallLogResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteCallLogResponse.prototype, "deleteCallLog204ApplicationJSONAny", void 0);
    return DeleteCallLogResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteCallLogResponse = DeleteCallLogResponse;
