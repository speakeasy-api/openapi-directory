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
exports.ParticipantFeedbackResponse = exports.ParticipantFeedbackRequest = exports.ParticipantFeedback200ApplicationJson = exports.ParticipantFeedback200ApplicationJsonParticipants = exports.ParticipantFeedback200ApplicationJsonParticipantsQualityEnum = exports.ParticipantFeedbackQueryParams = exports.ParticipantFeedbackTypeEnum = exports.ParticipantFeedbackPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ParticipantFeedbackPathParams = /** @class */ (function (_super) {
    __extends(ParticipantFeedbackPathParams, _super);
    function ParticipantFeedbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], ParticipantFeedbackPathParams.prototype, "meetingId", void 0);
    return ParticipantFeedbackPathParams;
}(utils_1.SpeakeasyBase));
exports.ParticipantFeedbackPathParams = ParticipantFeedbackPathParams;
var ParticipantFeedbackTypeEnum;
(function (ParticipantFeedbackTypeEnum) {
    ParticipantFeedbackTypeEnum["Past"] = "past";
    ParticipantFeedbackTypeEnum["PastOne"] = "pastOne";
    ParticipantFeedbackTypeEnum["Live"] = "live";
})(ParticipantFeedbackTypeEnum = exports.ParticipantFeedbackTypeEnum || (exports.ParticipantFeedbackTypeEnum = {}));
var ParticipantFeedbackQueryParams = /** @class */ (function (_super) {
    __extends(ParticipantFeedbackQueryParams, _super);
    function ParticipantFeedbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ParticipantFeedbackQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ParticipantFeedbackQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ParticipantFeedbackQueryParams.prototype, "type", void 0);
    return ParticipantFeedbackQueryParams;
}(utils_1.SpeakeasyBase));
exports.ParticipantFeedbackQueryParams = ParticipantFeedbackQueryParams;
var ParticipantFeedback200ApplicationJsonParticipantsQualityEnum;
(function (ParticipantFeedback200ApplicationJsonParticipantsQualityEnum) {
    ParticipantFeedback200ApplicationJsonParticipantsQualityEnum["Good"] = "GOOD";
    ParticipantFeedback200ApplicationJsonParticipantsQualityEnum["NotGood"] = "NOT GOOD";
})(ParticipantFeedback200ApplicationJsonParticipantsQualityEnum = exports.ParticipantFeedback200ApplicationJsonParticipantsQualityEnum || (exports.ParticipantFeedback200ApplicationJsonParticipantsQualityEnum = {}));
var ParticipantFeedback200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(ParticipantFeedback200ApplicationJsonParticipants, _super);
    function ParticipantFeedback200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], ParticipantFeedback200ApplicationJsonParticipants.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ParticipantFeedback200ApplicationJsonParticipants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], ParticipantFeedback200ApplicationJsonParticipants.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], ParticipantFeedback200ApplicationJsonParticipants.prototype, "userId", void 0);
    return ParticipantFeedback200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.ParticipantFeedback200ApplicationJsonParticipants = ParticipantFeedback200ApplicationJsonParticipants;
var ParticipantFeedback200ApplicationJson = /** @class */ (function (_super) {
    __extends(ParticipantFeedback200ApplicationJson, _super);
    function ParticipantFeedback200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ParticipantFeedback200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ParticipantFeedback200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: ParticipantFeedback200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], ParticipantFeedback200ApplicationJson.prototype, "participants", void 0);
    return ParticipantFeedback200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ParticipantFeedback200ApplicationJson = ParticipantFeedback200ApplicationJson;
var ParticipantFeedbackRequest = /** @class */ (function (_super) {
    __extends(ParticipantFeedbackRequest, _super);
    function ParticipantFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ParticipantFeedbackPathParams)
    ], ParticipantFeedbackRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ParticipantFeedbackQueryParams)
    ], ParticipantFeedbackRequest.prototype, "queryParams", void 0);
    return ParticipantFeedbackRequest;
}(utils_1.SpeakeasyBase));
exports.ParticipantFeedbackRequest = ParticipantFeedbackRequest;
var ParticipantFeedbackResponse = /** @class */ (function (_super) {
    __extends(ParticipantFeedbackResponse, _super);
    function ParticipantFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ParticipantFeedbackResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ParticipantFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ParticipantFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ParticipantFeedback200ApplicationJson)
    ], ParticipantFeedbackResponse.prototype, "participantFeedback200ApplicationJSONObject", void 0);
    return ParticipantFeedbackResponse;
}(utils_1.SpeakeasyBase));
exports.ParticipantFeedbackResponse = ParticipantFeedbackResponse;
