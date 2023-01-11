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
exports.RecordingDeleteOneResponse = exports.RecordingDeleteOneRequest = exports.RecordingDeleteOneSecurity = exports.RecordingDeleteOneQueryParams = exports.RecordingDeleteOneActionEnum = exports.RecordingDeleteOnePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingDeleteOnePathParams = /** @class */ (function (_super) {
    __extends(RecordingDeleteOnePathParams, _super);
    function RecordingDeleteOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], RecordingDeleteOnePathParams.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=recordingId" }),
        __metadata("design:type", String)
    ], RecordingDeleteOnePathParams.prototype, "recordingId", void 0);
    return RecordingDeleteOnePathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingDeleteOnePathParams = RecordingDeleteOnePathParams;
var RecordingDeleteOneActionEnum;
(function (RecordingDeleteOneActionEnum) {
    RecordingDeleteOneActionEnum["Trash"] = "trash";
    RecordingDeleteOneActionEnum["Delete"] = "delete";
})(RecordingDeleteOneActionEnum = exports.RecordingDeleteOneActionEnum || (exports.RecordingDeleteOneActionEnum = {}));
var RecordingDeleteOneQueryParams = /** @class */ (function (_super) {
    __extends(RecordingDeleteOneQueryParams, _super);
    function RecordingDeleteOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], RecordingDeleteOneQueryParams.prototype, "action", void 0);
    return RecordingDeleteOneQueryParams;
}(utils_1.SpeakeasyBase));
exports.RecordingDeleteOneQueryParams = RecordingDeleteOneQueryParams;
var RecordingDeleteOneSecurity = /** @class */ (function (_super) {
    __extends(RecordingDeleteOneSecurity, _super);
    function RecordingDeleteOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingDeleteOneSecurity.prototype, "oAuth", void 0);
    return RecordingDeleteOneSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingDeleteOneSecurity = RecordingDeleteOneSecurity;
var RecordingDeleteOneRequest = /** @class */ (function (_super) {
    __extends(RecordingDeleteOneRequest, _super);
    function RecordingDeleteOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingDeleteOnePathParams)
    ], RecordingDeleteOneRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingDeleteOneQueryParams)
    ], RecordingDeleteOneRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingDeleteOneSecurity)
    ], RecordingDeleteOneRequest.prototype, "security", void 0);
    return RecordingDeleteOneRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingDeleteOneRequest = RecordingDeleteOneRequest;
var RecordingDeleteOneResponse = /** @class */ (function (_super) {
    __extends(RecordingDeleteOneResponse, _super);
    function RecordingDeleteOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingDeleteOneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingDeleteOneResponse.prototype, "statusCode", void 0);
    return RecordingDeleteOneResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingDeleteOneResponse = RecordingDeleteOneResponse;
