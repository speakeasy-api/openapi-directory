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
exports.ObjectPostFeatureResponse = exports.ObjectPostFeatureRequest = exports.ObjectPostFeatureHeaders = exports.ObjectPostFeatureQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectPostFeatureQueryParams = /** @class */ (function (_super) {
    __extends(ObjectPostFeatureQueryParams, _super);
    function ObjectPostFeatureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" }),
        __metadata("design:type", Boolean)
    ], ObjectPostFeatureQueryParams.prototype, "rejectUnknownFields", void 0);
    return ObjectPostFeatureQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectPostFeatureQueryParams = ObjectPostFeatureQueryParams;
var ObjectPostFeatureHeaders = /** @class */ (function (_super) {
    __extends(ObjectPostFeatureHeaders, _super);
    function ObjectPostFeatureHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectPostFeatureHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectPostFeatureHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectPostFeatureHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectPostFeatureHeaders = ObjectPostFeatureHeaders;
var ObjectPostFeatureRequest = /** @class */ (function (_super) {
    __extends(ObjectPostFeatureRequest, _super);
    function ObjectPostFeatureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectPostFeatureQueryParams)
    ], ObjectPostFeatureRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectPostFeatureHeaders)
    ], ObjectPostFeatureRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ObjectPostFeatureRequest.prototype, "request", void 0);
    return ObjectPostFeatureRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectPostFeatureRequest = ObjectPostFeatureRequest;
var ObjectPostFeatureResponse = /** @class */ (function (_super) {
    __extends(ObjectPostFeatureResponse, _super);
    function ObjectPostFeatureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectPostFeatureResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectPostFeatureResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyBadRequestResponse)
    ], ObjectPostFeatureResponse.prototype, "proxyBadRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyCreateOrModifyResponse)
    ], ObjectPostFeatureResponse.prototype, "proxyCreateOrModifyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectPostFeatureResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectPostFeatureResponse.prototype, "statusCode", void 0);
    return ObjectPostFeatureResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectPostFeatureResponse = ObjectPostFeatureResponse;
