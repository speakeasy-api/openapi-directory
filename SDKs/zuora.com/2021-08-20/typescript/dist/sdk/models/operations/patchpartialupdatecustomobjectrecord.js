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
exports.PatchPartialUpdateCustomObjectRecordResponse = exports.PatchPartialUpdateCustomObjectRecordRequest = exports.PatchPartialUpdateCustomObjectRecordHeaders = exports.PatchPartialUpdateCustomObjectRecordPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchPartialUpdateCustomObjectRecordPathParams = /** @class */ (function (_super) {
    __extends(PatchPartialUpdateCustomObjectRecordPathParams, _super);
    function PatchPartialUpdateCustomObjectRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchPartialUpdateCustomObjectRecordPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], PatchPartialUpdateCustomObjectRecordPathParams.prototype, "object", void 0);
    return PatchPartialUpdateCustomObjectRecordPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchPartialUpdateCustomObjectRecordPathParams = PatchPartialUpdateCustomObjectRecordPathParams;
var PatchPartialUpdateCustomObjectRecordHeaders = /** @class */ (function (_super) {
    __extends(PatchPartialUpdateCustomObjectRecordHeaders, _super);
    function PatchPartialUpdateCustomObjectRecordHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchPartialUpdateCustomObjectRecordHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PatchPartialUpdateCustomObjectRecordHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PatchPartialUpdateCustomObjectRecordHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Version" }),
        __metadata("design:type", Date)
    ], PatchPartialUpdateCustomObjectRecordHeaders.prototype, "zuoraVersion", void 0);
    return PatchPartialUpdateCustomObjectRecordHeaders;
}(utils_1.SpeakeasyBase));
exports.PatchPartialUpdateCustomObjectRecordHeaders = PatchPartialUpdateCustomObjectRecordHeaders;
var PatchPartialUpdateCustomObjectRecordRequest = /** @class */ (function (_super) {
    __extends(PatchPartialUpdateCustomObjectRecordRequest, _super);
    function PatchPartialUpdateCustomObjectRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchPartialUpdateCustomObjectRecordPathParams)
    ], PatchPartialUpdateCustomObjectRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchPartialUpdateCustomObjectRecordHeaders)
    ], PatchPartialUpdateCustomObjectRecordRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/merge-patch+json" }),
        __metadata("design:type", Object)
    ], PatchPartialUpdateCustomObjectRecordRequest.prototype, "request", void 0);
    return PatchPartialUpdateCustomObjectRecordRequest;
}(utils_1.SpeakeasyBase));
exports.PatchPartialUpdateCustomObjectRecordRequest = PatchPartialUpdateCustomObjectRecordRequest;
var PatchPartialUpdateCustomObjectRecordResponse = /** @class */ (function (_super) {
    __extends(PatchPartialUpdateCustomObjectRecordResponse, _super);
    function PatchPartialUpdateCustomObjectRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CommonErrorResponse)
    ], PatchPartialUpdateCustomObjectRecordResponse.prototype, "commonErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchPartialUpdateCustomObjectRecordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatchPartialUpdateCustomObjectRecordResponse.prototype, "customObjectRecordWithAllFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatchPartialUpdateCustomObjectRecordResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchPartialUpdateCustomObjectRecordResponse.prototype, "statusCode", void 0);
    return PatchPartialUpdateCustomObjectRecordResponse;
}(utils_1.SpeakeasyBase));
exports.PatchPartialUpdateCustomObjectRecordResponse = PatchPartialUpdateCustomObjectRecordResponse;
