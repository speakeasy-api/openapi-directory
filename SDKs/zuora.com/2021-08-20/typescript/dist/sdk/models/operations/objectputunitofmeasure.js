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
exports.ObjectPutUnitOfMeasureResponse = exports.ObjectPutUnitOfMeasureRequest = exports.ObjectPutUnitOfMeasureHeaders = exports.ObjectPutUnitOfMeasureQueryParams = exports.ObjectPutUnitOfMeasurePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectPutUnitOfMeasurePathParams = /** @class */ (function (_super) {
    __extends(ObjectPutUnitOfMeasurePathParams, _super);
    function ObjectPutUnitOfMeasurePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ObjectPutUnitOfMeasurePathParams.prototype, "id", void 0);
    return ObjectPutUnitOfMeasurePathParams;
}(utils_1.SpeakeasyBase));
exports.ObjectPutUnitOfMeasurePathParams = ObjectPutUnitOfMeasurePathParams;
var ObjectPutUnitOfMeasureQueryParams = /** @class */ (function (_super) {
    __extends(ObjectPutUnitOfMeasureQueryParams, _super);
    function ObjectPutUnitOfMeasureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" }),
        __metadata("design:type", Boolean)
    ], ObjectPutUnitOfMeasureQueryParams.prototype, "rejectUnknownFields", void 0);
    return ObjectPutUnitOfMeasureQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectPutUnitOfMeasureQueryParams = ObjectPutUnitOfMeasureQueryParams;
var ObjectPutUnitOfMeasureHeaders = /** @class */ (function (_super) {
    __extends(ObjectPutUnitOfMeasureHeaders, _super);
    function ObjectPutUnitOfMeasureHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectPutUnitOfMeasureHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectPutUnitOfMeasureHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectPutUnitOfMeasureHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectPutUnitOfMeasureHeaders = ObjectPutUnitOfMeasureHeaders;
var ObjectPutUnitOfMeasureRequest = /** @class */ (function (_super) {
    __extends(ObjectPutUnitOfMeasureRequest, _super);
    function ObjectPutUnitOfMeasureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectPutUnitOfMeasurePathParams)
    ], ObjectPutUnitOfMeasureRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectPutUnitOfMeasureQueryParams)
    ], ObjectPutUnitOfMeasureRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectPutUnitOfMeasureHeaders)
    ], ObjectPutUnitOfMeasureRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProxyModifyUnitOfMeasure)
    ], ObjectPutUnitOfMeasureRequest.prototype, "request", void 0);
    return ObjectPutUnitOfMeasureRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectPutUnitOfMeasureRequest = ObjectPutUnitOfMeasureRequest;
var ObjectPutUnitOfMeasureResponse = /** @class */ (function (_super) {
    __extends(ObjectPutUnitOfMeasureResponse, _super);
    function ObjectPutUnitOfMeasureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectPutUnitOfMeasureResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectPutUnitOfMeasureResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyCreateOrModifyResponse)
    ], ObjectPutUnitOfMeasureResponse.prototype, "proxyCreateOrModifyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectPutUnitOfMeasureResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectPutUnitOfMeasureResponse.prototype, "statusCode", void 0);
    return ObjectPutUnitOfMeasureResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectPutUnitOfMeasureResponse = ObjectPutUnitOfMeasureResponse;
