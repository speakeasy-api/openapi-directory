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
exports.RecordingStatusUpdateResponse = exports.RecordingStatusUpdateRequest = exports.RecordingStatusUpdateSecurity = exports.RecordingStatusUpdateRequests = exports.RecordingStatusUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingStatusUpdatePathParams = /** @class */ (function (_super) {
    __extends(RecordingStatusUpdatePathParams, _super);
    function RecordingStatusUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], RecordingStatusUpdatePathParams.prototype, "meetingId", void 0);
    return RecordingStatusUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingStatusUpdatePathParams = RecordingStatusUpdatePathParams;
var RecordingStatusUpdateRequests = /** @class */ (function (_super) {
    __extends(RecordingStatusUpdateRequests, _super);
    function RecordingStatusUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], RecordingStatusUpdateRequests.prototype, "any", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], RecordingStatusUpdateRequests.prototype, "any1", void 0);
    return RecordingStatusUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.RecordingStatusUpdateRequests = RecordingStatusUpdateRequests;
var RecordingStatusUpdateSecurity = /** @class */ (function (_super) {
    __extends(RecordingStatusUpdateSecurity, _super);
    function RecordingStatusUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingStatusUpdateSecurity.prototype, "oAuth", void 0);
    return RecordingStatusUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingStatusUpdateSecurity = RecordingStatusUpdateSecurity;
var RecordingStatusUpdateRequest = /** @class */ (function (_super) {
    __extends(RecordingStatusUpdateRequest, _super);
    function RecordingStatusUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingStatusUpdatePathParams)
    ], RecordingStatusUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingStatusUpdateRequests)
    ], RecordingStatusUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingStatusUpdateSecurity)
    ], RecordingStatusUpdateRequest.prototype, "security", void 0);
    return RecordingStatusUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingStatusUpdateRequest = RecordingStatusUpdateRequest;
var RecordingStatusUpdateResponse = /** @class */ (function (_super) {
    __extends(RecordingStatusUpdateResponse, _super);
    function RecordingStatusUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingStatusUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingStatusUpdateResponse.prototype, "statusCode", void 0);
    return RecordingStatusUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingStatusUpdateResponse = RecordingStatusUpdateResponse;
