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
exports.RemoveVideosFromProjectResponse = exports.RemoveVideosFromProjectRequest = exports.RemoveVideosFromProjectSecurity = exports.RemoveVideosFromProjectQueryParams = exports.RemoveVideosFromProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RemoveVideosFromProjectPathParams = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectPathParams, _super);
    function RemoveVideosFromProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], RemoveVideosFromProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], RemoveVideosFromProjectPathParams.prototype, "userId", void 0);
    return RemoveVideosFromProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromProjectPathParams = RemoveVideosFromProjectPathParams;
var RemoveVideosFromProjectQueryParams = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectQueryParams, _super);
    function RemoveVideosFromProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=should_delete_clips" }),
        __metadata("design:type", Boolean)
    ], RemoveVideosFromProjectQueryParams.prototype, "shouldDeleteClips", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], RemoveVideosFromProjectQueryParams.prototype, "uris", void 0);
    return RemoveVideosFromProjectQueryParams;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromProjectQueryParams = RemoveVideosFromProjectQueryParams;
var RemoveVideosFromProjectSecurity = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectSecurity, _super);
    function RemoveVideosFromProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemoveVideosFromProjectSecurity.prototype, "oauth2", void 0);
    return RemoveVideosFromProjectSecurity;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromProjectSecurity = RemoveVideosFromProjectSecurity;
var RemoveVideosFromProjectRequest = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectRequest, _super);
    function RemoveVideosFromProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveVideosFromProjectPathParams)
    ], RemoveVideosFromProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveVideosFromProjectQueryParams)
    ], RemoveVideosFromProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveVideosFromProjectSecurity)
    ], RemoveVideosFromProjectRequest.prototype, "security", void 0);
    return RemoveVideosFromProjectRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromProjectRequest = RemoveVideosFromProjectRequest;
var RemoveVideosFromProjectResponse = /** @class */ (function (_super) {
    __extends(RemoveVideosFromProjectResponse, _super);
    function RemoveVideosFromProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveVideosFromProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveVideosFromProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], RemoveVideosFromProjectResponse.prototype, "error", void 0);
    return RemoveVideosFromProjectResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveVideosFromProjectResponse = RemoveVideosFromProjectResponse;
