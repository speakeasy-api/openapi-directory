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
exports.GetAllRecordsForCustomObjectTypeResponse = exports.GetAllRecordsForCustomObjectTypeRequest = exports.GetAllRecordsForCustomObjectTypeHeaders = exports.GetAllRecordsForCustomObjectTypeQueryParams = exports.GetAllRecordsForCustomObjectTypePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllRecordsForCustomObjectTypePathParams = /** @class */ (function (_super) {
    __extends(GetAllRecordsForCustomObjectTypePathParams, _super);
    function GetAllRecordsForCustomObjectTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypePathParams.prototype, "object", void 0);
    return GetAllRecordsForCustomObjectTypePathParams;
}(utils_1.SpeakeasyBase));
exports.GetAllRecordsForCustomObjectTypePathParams = GetAllRecordsForCustomObjectTypePathParams;
var GetAllRecordsForCustomObjectTypeQueryParams = /** @class */ (function (_super) {
    __extends(GetAllRecordsForCustomObjectTypeQueryParams, _super);
    function GetAllRecordsForCustomObjectTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypeQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypeQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetAllRecordsForCustomObjectTypeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypeQueryParams.prototype, "q", void 0);
    return GetAllRecordsForCustomObjectTypeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllRecordsForCustomObjectTypeQueryParams = GetAllRecordsForCustomObjectTypeQueryParams;
var GetAllRecordsForCustomObjectTypeHeaders = /** @class */ (function (_super) {
    __extends(GetAllRecordsForCustomObjectTypeHeaders, _super);
    function GetAllRecordsForCustomObjectTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypeHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypeHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypeHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Version" }),
        __metadata("design:type", Date)
    ], GetAllRecordsForCustomObjectTypeHeaders.prototype, "zuoraVersion", void 0);
    return GetAllRecordsForCustomObjectTypeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAllRecordsForCustomObjectTypeHeaders = GetAllRecordsForCustomObjectTypeHeaders;
var GetAllRecordsForCustomObjectTypeRequest = /** @class */ (function (_super) {
    __extends(GetAllRecordsForCustomObjectTypeRequest, _super);
    function GetAllRecordsForCustomObjectTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllRecordsForCustomObjectTypePathParams)
    ], GetAllRecordsForCustomObjectTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllRecordsForCustomObjectTypeQueryParams)
    ], GetAllRecordsForCustomObjectTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllRecordsForCustomObjectTypeHeaders)
    ], GetAllRecordsForCustomObjectTypeRequest.prototype, "headers", void 0);
    return GetAllRecordsForCustomObjectTypeRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllRecordsForCustomObjectTypeRequest = GetAllRecordsForCustomObjectTypeRequest;
var GetAllRecordsForCustomObjectTypeResponse = /** @class */ (function (_super) {
    __extends(GetAllRecordsForCustomObjectTypeResponse, _super);
    function GetAllRecordsForCustomObjectTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllRecordsForCustomObjectTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllRecordsForCustomObjectTypeResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.QueryCustomObjectRecordsResponse)
    ], GetAllRecordsForCustomObjectTypeResponse.prototype, "queryCustomObjectRecordsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllRecordsForCustomObjectTypeResponse.prototype, "statusCode", void 0);
    return GetAllRecordsForCustomObjectTypeResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllRecordsForCustomObjectTypeResponse = GetAllRecordsForCustomObjectTypeResponse;
