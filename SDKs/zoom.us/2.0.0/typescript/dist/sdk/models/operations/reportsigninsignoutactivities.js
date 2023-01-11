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
exports.ReportSignInSignOutActivitiesResponse = exports.ReportSignInSignOutActivitiesRequest = exports.ReportSignInSignOutActivities200ApplicationJson = exports.ReportSignInSignOutActivities200ApplicationJsonActivityLogs = exports.ReportSignInSignOutActivitiesSecurity = exports.ReportSignInSignOutActivitiesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportSignInSignOutActivitiesQueryParams = /** @class */ (function (_super) {
    __extends(ReportSignInSignOutActivitiesQueryParams, _super);
    function ReportSignInSignOutActivitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], ReportSignInSignOutActivitiesQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivitiesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ReportSignInSignOutActivitiesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], ReportSignInSignOutActivitiesQueryParams.prototype, "to", void 0);
    return ReportSignInSignOutActivitiesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReportSignInSignOutActivitiesQueryParams = ReportSignInSignOutActivitiesQueryParams;
var ReportSignInSignOutActivitiesSecurity = /** @class */ (function (_super) {
    __extends(ReportSignInSignOutActivitiesSecurity, _super);
    function ReportSignInSignOutActivitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportSignInSignOutActivitiesSecurity.prototype, "oAuth", void 0);
    return ReportSignInSignOutActivitiesSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportSignInSignOutActivitiesSecurity = ReportSignInSignOutActivitiesSecurity;
var ReportSignInSignOutActivities200ApplicationJsonActivityLogs = /** @class */ (function (_super) {
    __extends(ReportSignInSignOutActivities200ApplicationJsonActivityLogs, _super);
    function ReportSignInSignOutActivities200ApplicationJsonActivityLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_type" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJsonActivityLogs.prototype, "clientType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJsonActivityLogs.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJsonActivityLogs.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], ReportSignInSignOutActivities200ApplicationJsonActivityLogs.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJsonActivityLogs.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJsonActivityLogs.prototype, "version", void 0);
    return ReportSignInSignOutActivities200ApplicationJsonActivityLogs;
}(utils_1.SpeakeasyBase));
exports.ReportSignInSignOutActivities200ApplicationJsonActivityLogs = ReportSignInSignOutActivities200ApplicationJsonActivityLogs;
// ReportSignInSignOutActivities200ApplicationJson
/**
 * Report object
**/
var ReportSignInSignOutActivities200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportSignInSignOutActivities200ApplicationJson, _super);
    function ReportSignInSignOutActivities200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activity_logs", elemType: ReportSignInSignOutActivities200ApplicationJsonActivityLogs }),
        __metadata("design:type", Array)
    ], ReportSignInSignOutActivities200ApplicationJson.prototype, "activityLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivities200ApplicationJson.prototype, "to", void 0);
    return ReportSignInSignOutActivities200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportSignInSignOutActivities200ApplicationJson = ReportSignInSignOutActivities200ApplicationJson;
var ReportSignInSignOutActivitiesRequest = /** @class */ (function (_super) {
    __extends(ReportSignInSignOutActivitiesRequest, _super);
    function ReportSignInSignOutActivitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportSignInSignOutActivitiesQueryParams)
    ], ReportSignInSignOutActivitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportSignInSignOutActivitiesSecurity)
    ], ReportSignInSignOutActivitiesRequest.prototype, "security", void 0);
    return ReportSignInSignOutActivitiesRequest;
}(utils_1.SpeakeasyBase));
exports.ReportSignInSignOutActivitiesRequest = ReportSignInSignOutActivitiesRequest;
var ReportSignInSignOutActivitiesResponse = /** @class */ (function (_super) {
    __extends(ReportSignInSignOutActivitiesResponse, _super);
    function ReportSignInSignOutActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportSignInSignOutActivitiesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportSignInSignOutActivitiesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportSignInSignOutActivitiesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportSignInSignOutActivities200ApplicationJson)
    ], ReportSignInSignOutActivitiesResponse.prototype, "reportSignInSignOutActivities200ApplicationJSONObject", void 0);
    return ReportSignInSignOutActivitiesResponse;
}(utils_1.SpeakeasyBase));
exports.ReportSignInSignOutActivitiesResponse = ReportSignInSignOutActivitiesResponse;
