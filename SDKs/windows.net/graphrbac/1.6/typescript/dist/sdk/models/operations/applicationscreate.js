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
exports.ApplicationsCreateResponse = exports.ApplicationsCreateRequest = exports.ApplicationsCreateRequests = exports.ApplicationsCreateQueryParams = exports.ApplicationsCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ApplicationsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApplicationsCreatePathParams, _super);
    function ApplicationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ApplicationsCreatePathParams.prototype, "tenantID", void 0);
    return ApplicationsCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.ApplicationsCreatePathParams = ApplicationsCreatePathParams;
var ApplicationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApplicationsCreateQueryParams, _super);
    function ApplicationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ApplicationsCreateQueryParams.prototype, "apiVersion", void 0);
    return ApplicationsCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.ApplicationsCreateQueryParams = ApplicationsCreateQueryParams;
var ApplicationsCreateRequests = /** @class */ (function (_super) {
    __extends(ApplicationsCreateRequests, _super);
    function ApplicationsCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApplicationCreateParameters)
    ], ApplicationsCreateRequests.prototype, "applicationCreateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApplicationCreateParameters)
    ], ApplicationsCreateRequests.prototype, "applicationCreateParameters1", void 0);
    return ApplicationsCreateRequests;
}(utils_1.SpeakeasyBase));
exports.ApplicationsCreateRequests = ApplicationsCreateRequests;
var ApplicationsCreateRequest = /** @class */ (function (_super) {
    __extends(ApplicationsCreateRequest, _super);
    function ApplicationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApplicationsCreatePathParams)
    ], ApplicationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApplicationsCreateQueryParams)
    ], ApplicationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApplicationsCreateRequests)
    ], ApplicationsCreateRequest.prototype, "request", void 0);
    return ApplicationsCreateRequest;
}(utils_1.SpeakeasyBase));
exports.ApplicationsCreateRequest = ApplicationsCreateRequest;
var ApplicationsCreateResponse = /** @class */ (function (_super) {
    __extends(ApplicationsCreateResponse, _super);
    function ApplicationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ApplicationsCreateResponse.prototype, "application", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ApplicationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GraphError)
    ], ApplicationsCreateResponse.prototype, "graphError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ApplicationsCreateResponse.prototype, "statusCode", void 0);
    return ApplicationsCreateResponse;
}(utils_1.SpeakeasyBase));
exports.ApplicationsCreateResponse = ApplicationsCreateResponse;
