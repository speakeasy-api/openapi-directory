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
exports.Event = exports.EventTypeEnum = exports.EventStateEnum = exports.EventDirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var EventDirectionEnum;
(function (EventDirectionEnum) {
    EventDirectionEnum["Inbound"] = "INBOUND";
    EventDirectionEnum["Outbound"] = "OUTBOUND";
})(EventDirectionEnum = exports.EventDirectionEnum || (exports.EventDirectionEnum = {}));
var EventStateEnum;
(function (EventStateEnum) {
    EventStateEnum["Initializing"] = "INITIALIZING";
    EventStateEnum["Ringing"] = "RINGING";
    EventStateEnum["Active"] = "ACTIVE";
    EventStateEnum["Held"] = "HELD";
    EventStateEnum["RemoteHeld"] = "REMOTE_HELD";
    EventStateEnum["Detached"] = "DETACHED";
    EventStateEnum["Rejected"] = "REJECTED";
    EventStateEnum["Cancelled"] = "CANCELLED";
    EventStateEnum["Answered"] = "ANSWERED";
    EventStateEnum["Missed"] = "MISSED";
})(EventStateEnum = exports.EventStateEnum || (exports.EventStateEnum = {}));
var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["Call"] = "CALL";
})(EventTypeEnum = exports.EventTypeEnum || (exports.EventTypeEnum = {}));
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Event.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answerTime" }),
        __metadata("design:type", Date)
    ], Event.prototype, "answerTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callerId" }),
        __metadata("design:type", String)
    ], Event.prototype, "callerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], Event.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Event.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], Event.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], Event.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Event.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], Event.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=smsData" }),
        __metadata("design:type", String)
    ], Event.prototype, "smsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], Event.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Event.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Event.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uciId" }),
        __metadata("design:type", Number)
    ], Event.prototype, "uciId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], Event.prototype, "userId", void 0);
    return Event;
}(utils_1.SpeakeasyBase));
exports.Event = Event;
