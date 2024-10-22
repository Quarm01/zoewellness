/* VimeoPlayer - v4.37.15 - 2024-10-22 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    d as t,
    a as n,
    i,
    s as o,
    C as r,
    c as a,
    b as s,
    e as l,
    u as c,
    L as d,
    g as u,
    f as p,
    x as _,
    h as v,
    j as m,
    t as f,
    k as h,
    V as g,
    l as b,
    m as E,
    n as y,
    o as C,
    r as T,
    p as L,
    q as w,
    P as A,
    T as S,
    v as I,
    w as P,
    y as O,
    z as k,
    A as R,
    G as N,
    B as D,
    D as M,
    F as x,
    E as B,
    Q as V,
    S as U,
    H as F,
    I as H,
    J as G,
    R as W,
    K as Y,
    M as q,
    N as $,
    O as K,
    U as j,
    W as z,
    X,
    Y as Z,
    Z as J,
    $ as Q,
    a0 as ee,
    a1 as te,
    a2 as ne,
    a3 as ie,
    a4 as oe,
    a5 as re,
    a6 as ae,
    a7 as se,
    a8 as le,
    a9 as ce,
    aa as de,
    ab as ue,
    ac as pe,
    ad as _e,
    ae as ve,
    af as me,
    ag as fe,
    ah as he,
    ai as ge,
    aj as be,
    ak as Ee,
    al as ye,
    am as Ce,
    an as Te,
    ao as Le,
    ap as we,
    aq as Ae,
    ar as Se,
    as as Ie,
    at as Pe,
    au as Oe,
    av as ke,
    aw as Re,
    ax as Ne,
    ay as De,
    az as Me,
    aA as xe,
    aB as Be,
    aC as Ve,
    aD as Ue,
    aE as Fe,
    aF as He,
    aG as Ge,
    aH as We,
    aI as Ye,
    aJ as qe,
    aK as $e,
    aL as Ke,
    aM as je,
    aN as ze,
    aO as Xe,
    aP as Ze,
    aQ as Je,
    aR as Qe,
    aS as et,
    aT as tt,
    aU as nt,
    aV as it,
    aW as ot,
    aX as rt,
    aY as at,
    aZ as st
} from "./vendor.module.js";
export {
    aa as BigScreen, aZ as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
let lt = {};

function ct(e = "", t = {}) {
    var n;
    if ((null == (n = lt.en) ? void 0 : n[e]) && (e = lt.en[e]), Object.keys(t).forEach(n => {
            e = e.replace(new RegExp(`{${n}}`, "g"), t[n])
        }), e.match(/\{\w+}/)) throw new Error("Missing token definition.");
    return e
}

function dt(e) {
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? Math.floor(e / 1e3) + "." + Math.round(e % 1e3 / 100) + "K" : Math.floor(e / 1e6) + "." + Math.round(e % 1e6 / 1e5) + "M"
}

function ut(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}
const pt = function(t, ...n) {
        const i = n => n.length >= t.length ? t.apply(this, n) : (...t) => i([].concat(e(n), t));
        return i([])
    }((e, t) => Object.keys(e).every(n => e[n] === t[n])),
    _t = (e = []) => ({
        get: t => t ? e.find(pt(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(pt(t)), 1).pop()
    });

function vt(e, t, n = document.styleSheets[0]) {
    try {
        n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t)
    } catch (De) {}
}

function mt(e = document.activeElement, t = null) {
    try {
        e.blur()
    } catch (De) {
        t && t(De)
    }
}

function ft(e = document.activeElement, t = null) {
    try {
        e.focus()
    } catch (De) {
        t && t(De)
    }
}

function ht(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function gt(e) {
    try {
        return new URL(e).origin
    } catch (De) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function bt({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        s = n - i * a,
        l = i - n / a;
    if (s > 0 && s < o || l > 0 && l < o) {
        const e = n / (n - s),
            t = i / (i - l);
        r = At(Math.max(e, t), 3)
    }
    return {
        extraWidth: s,
        extraHeight: l,
        scaleFactor: r
    }
}

function Et(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function yt(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let s = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        l = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${l},top=${s},${c}`)
}

function Ct(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work))|(videoji|videoshipinurl)\.(hk|cn))(?=$|\/)/.test(e)
    }(e) ? gt(e) : ""
}

function Tt(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)|(videoji|videoshipinurl)\.(hk|cn))\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = Lt(i),
        a = t(window.location.search),
        s = t(`${i}`.split("?")[1]),
        l = Object.assign(a, s, o);
    return n(`${e}/video/${r}/config`, l)
}

function Lt(e) {
    if (ut(e)) return parseInt(e, 10);
    const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
    if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
    return parseInt(t[2], 10)
}

function wt(e) {
    for (var t, n, i = (e || document).querySelectorAll("[tabindex]"), o = [], r = 0, a = 0, s = i.length; a < s; a++) t = i[a], n = window.getComputedStyle(t, ""), t.tabIndex > 0 && "none" !== n.display && n.opacity > 0 && "hidden" !== n.visibility && (o[r++] = t);
    var l = o.shift();
    l && (l.focus(), l.blur())
}

function At(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function St(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function It(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) It(e, i, t[i])
}

function Pt(e, t, n) {
    n.forEach(n => {
        e(n, (...e) => {
            t.apply(void 0, [n].concat(e))
        })
    })
}

function Ot(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function kt(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce((e, t) => (...n) => e(t.apply(void 0, n)))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (;
        (null == (n = e) ? void 0 : n.parentElement) && !St(e, t);) {
        var n;
        e = e.parentElement
    }
    return St(e, t) ? e : null
}));
let Rt = 0;

function Nt(e = "p") {
    return `${e}${++Rt}`
}
const Dt = {
        _spatialUnsupported: Nt(),
        _spatialFailure: Nt()
    },
    Mt = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    xt = {
        _seek: Nt(),
        _changeVolume: Nt(),
        _changeMuted: Nt(),
        _hideOverlay: Nt(),
        _showOverlay: Nt(),
        _updateOverlay: Nt(),
        _setActivePage: Nt(),
        _updateEmailCapture: Nt(),
        _updateWebinarStartTime: Nt(),
        _openPopup: Nt(),
        _reset: Nt(),
        _changeLoop: Nt(),
        _changeQuality: Nt(),
        _openVimeo: Nt(),
        _changeColor: Nt(),
        _disableVolume: Nt(),
        _enableVolume: Nt(),
        _disableCaptions: Nt(),
        _enableCaptions: Nt(),
        _forceFullscreen: Nt(),
        _turnCaptionsOn: Nt(),
        _turnCaptionsOff: Nt(),
        _changeCaptionsStyles: Nt(),
        _resetCaptionsStyles: Nt(),
        _toggleNativeControls: Nt(),
        _showOutro: Nt(),
        _hideOutro: Nt(),
        _setControlsVisibility: Nt(),
        _overrideControlbarBehavior: Nt(),
        _activatePictureInPicture: Nt(),
        _deactivatePictureInPicture: Nt(),
        _attachSpatialPlaybackEvents: Nt(),
        _toggleSpatialPlayback: Nt(),
        _revealSpatialControls: Nt(),
        _setTime: Nt(),
        _addCard: Nt(),
        _removeCard: Nt(),
        _changePlaybackRate: Nt(),
        _destroy: Nt(),
        _changeAudioTrack: Nt(),
        _requestCompleteLiveSubtitles: Nt(),
        _openRemoteComponent: Nt(),
        _closeRemoteComponent: Nt(),
        _updateLiveSubtitleRequests: Nt()
    },
    Bt = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    Vt = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    Ut = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    Ft = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    Ht = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    Gt = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    Wt = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    Yt = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    qt = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    $t = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    },
    Kt = {
        _apiError: Nt(),
        _error: Nt(),
        _playRejected: Nt(),
        _playResolved: Nt(),
        _paused: Nt(),
        _pausedForAd: Nt(),
        _resumedAfterAd: Nt(),
        _ended: Nt(),
        _volumeChanged: Nt(),
        _mutedChanged: Nt(),
        _qualityChanged: Nt(),
        _targetTimeReached: Nt(),
        _cuepoint: Nt(),
        _firstTimeUpdate: Nt(),
        _playbackRateChanged: Nt(),
        _nudgeAttempted: Nt(),
        _showNudgeNotification: Nt(),
        _nudgeEnded: Nt(),
        _fragmentChanged: Nt(),
        _fullscreenButtonPressed: Nt(),
        _pauseButtonPressed: Nt(),
        _playButtonPressed: Nt(),
        _prefsButtonPressed: Nt(),
        _ccButtonPressed: Nt(),
        _chapterSeekAttempted: Nt(),
        _chapterSeek: Nt(),
        _chapterHoverStateOn: Nt(),
        _chapterHoverStateOff: Nt(),
        _chapterChanged: Nt(),
        _scrubbingStarted: Nt(),
        _scrubbingEnded: Nt(),
        _volumeScrubbingStarted: Nt(),
        _volumeScrubbingEnded: Nt(),
        _controlBarVisibilityChanged: Nt(),
        _toastVisibilityChanged: Nt(),
        _sidedockVisibilityChanged: Nt(),
        _menuVisibilityChanged: Nt(),
        _captionsChanged: Nt(),
        _cuePointAdded: Nt(),
        _cuePointRemoved: Nt(),
        _stereoscopicButtonPressed: Nt(),
        _menuPanelOpened: Nt(),
        _menuPanelClosed: Nt(),
        _menuCentered: Nt(),
        _badgePressed: Nt(),
        _muteAutoplayed: Nt(),
        _willEnterFullscreen: Nt(),
        _didEnterFullscreen: Nt(),
        _willExitFullscreen: Nt(),
        _didExitFullscreen: Nt(),
        _likeButtonPressed: Nt(),
        _watchLaterButtonPressed: Nt(),
        _shareButtonPressed: Nt(),
        _embedButtonPressed: Nt(),
        _vodButtonPressed: Nt(),
        _collectionsButtonPressed: Nt(),
        _followButtonPressed: Nt(),
        _overlayOpened: Nt(),
        _overlayClosed: Nt(),
        _overlayCleared: Nt(),
        _overlayCloseButtonPressed: Nt(),
        _facebookButtonPressed: Nt(),
        _twitterButtonPressed: Nt(),
        _tumblrButtonPressed: Nt(),
        _emailButtonPressed: Nt(),
        _embedCodeCopied: Nt(),
        _popupOpened: Nt(),
        _debugButtonPressed: Nt(),
        _emailCaptureSubmitted: Nt(),
        _popupClosed: Nt(),
        _shareViewShown: Nt(),
        _embedViewShown: Nt(),
        _shareViewEnd: Nt(),
        _embedViewEnd: Nt(),
        _showAndroidVRDeepLink: Nt(),
        _showEmailCaptureForm: Nt(),
        _debugDataChange: Nt(),
        _mousedOut: Nt(),
        _mousedOver: Nt(),
        _mouseTimeout: Nt(),
        _liked: Nt(),
        _unliked: Nt(),
        _addedToWatchLater: Nt(),
        _removedFromWatchLater: Nt(),
        _userLogIn: Nt(),
        _userLoggedIn: Nt(),
        _userLoggedOut: Nt(),
        _loginFailure: Nt(),
        _colorChanged: Nt(),
        _configChanged: Nt(),
        _liveEventSettingsChanged: Nt(),
        _passwordUnlocked: Nt(),
        _privateUnlocked: Nt(),
        _enteredTinyMode: Nt(),
        _enteredMiniMode: Nt(),
        _enteredNormalMode: Nt(),
        _assetUrlsRefreshed: Nt(),
        _embedSettingChanged: Nt(),
        _createInteractiveChanged: Nt(),
        _ottMetadataSet: Nt(),
        _outroDisplayed: Nt(),
        _outroHidden: Nt(),
        _outroVideoPressed: Nt(),
        _becameActive: Nt(),
        _becameInactive: Nt(),
        _tipped: Nt(),
        _emailCaptureSuccess: Nt(),
        _emailCaptureFailure: Nt(),
        _webinarFormSuccess: Nt(),
        _loadVideo: Nt(),
        _swapVideo: Nt(),
        _outroLinkPressed: Nt(),
        _followed: Nt(),
        _unfollowed: Nt(),
        _outroImagePressed: Nt(),
        _outroCtaPressed: Nt(),
        _cardDisplayed: Nt(),
        _cardPressed: Nt(),
        _spaceChanged: Nt(),
        _emailCaptureEnd: Nt(),
        _displayContextChanged: Nt(),
        _titleModuleReady: Nt(),
        _sidedockModuleReady: Nt(),
        _controlBarModuleReady: Nt(),
        _videoModuleReady: Nt(),
        _overlayModuleReady: Nt(),
        _notificationModuleReady: Nt(),
        _statsModuleReady: Nt(),
        _apiModuleReady: Nt(),
        _ready: Nt(),
        _notificationHidden: Nt(),
        _alertVisibilityChanged: Nt(),
        _airPlayAvailable: Nt(),
        _airPlayNotAvailable: Nt(),
        _airPlayActivated: Nt(),
        _airPlayDeactivated: Nt(),
        _airPlayButtonPressed: Nt(),
        _adBuffering: Nt(),
        _adComplete: Nt(),
        _adClicked: Nt(),
        _adError: Nt(),
        _adPaused: Nt(),
        _adResumed: Nt(),
        _adStarted: Nt(),
        _adSkipped: Nt(),
        _allAdsCompleted: Nt(),
        _logMetric: Nt(),
        _webinarRegistrantBlocked: Nt(),
        _webinarRegistrantUnblocked: Nt(),
        _interactiveReady: Nt(),
        _interactiveHotspotClicked: Nt(),
        _interactiveOverlayPanelClicked: Nt(),
        _interactiveMarkerClicked: Nt(),
        _interactiveSeekCall: Nt(),
        _transcriptChanged: Nt(),
        _rightContentAreaVisibilityChange: Nt(),
        _rightContentAreaEnabled: Nt(),
        _rightContentAreaDisabled: Nt(),
        _transcriptNavActive: Nt(),
        _transcriptSessionStarted: Nt(),
        _transcriptKeyPressed: Nt(),
        _aiWidgetKeyPressed: Nt(),
        _qoeSurveyPresented: Nt(),
        _parentUrlAvailable: Nt(),
        _liveEventSafeToPlay: Nt(),
        _startTimeUpdated: Nt(),
        _endTimeUpdated: Nt(),
        _remoteComponentMounted: Nt(),
        _accessGateOpened: Nt(),
        _accessGateClosed: Nt(),
        _accessGateUnlocked: Nt(),
        _eventedStoreCreated: Nt()
    },
    jt = {
        _seek: Nt(),
        _play: Nt(),
        _pause: Nt(),
        _playbackRateChange: Nt()
    },
    zt = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    Xt = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9,
        webinarBlocked: 10,
        webinarLocked: 11,
        webinarUnlocked: 12,
        webinarFull: 13
    },
    Zt = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        TOAST_VISIBILITY_CHANGED: "toastvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DURATION_CHANGE: "durationchange",
        EMAIL_CAPTURE_FAILED: "emailcapturefailed",
        EMAIL_CAPTURE: "emailcapture",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        REMOTE_PLAYBACK_AVAILABILITY_CHANGE: "remoteplaybackavailabilitychange",
        REMOTE_PLAYBACK_CONNECTING: "remoteplaybackconnecting",
        REMOTE_PLAYBACK_CONNECT: "remoteplaybackconnect",
        REMOTE_PLAYBACK_DISCONNECT: "remoteplaybackdisconnect",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        PLAYER_LOGIN_SUCCESSFUL: "playerLoginSuccessful",
        PLAYER_LOGIN_FAILED: "playerLoginFailed",
        COMPONENT_VISIBILITY_CHANGE: "componentVisibilityChange",
        APP_BREAKPOINT_CHANGE: "appBreakpointChange",
        LOAD_VIDEO: "loadVideo"
    },
    Jt = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    Qt = !0 === o.iOS,
    en = {
        NOTHING: "nothing",
        BEGINNING: "beginning",
        EMAIL: "email",
        VOD: "vod",
        VIDEOS: "videos",
        LINK: "link",
        THREEVIDEOS: "threevideos",
        PROMOTED: "promoted",
        SHARE: "share"
    },
    tn = ["t", "start", "at"],
    nn = "one",
    on = "two",
    rn = "three",
    an = "four",
    sn = {
        [nn]: "000000",
        [on]: "00adef",
        [rn]: "ffffff",
        [an]: "000000"
    },
    ln = {
        [nn]: "color_one",
        [on]: "color_two",
        [rn]: "color_three",
        [an]: "color_four"
    },
    cn = {
        [nn]: "colorOne",
        [on]: "colorTwo",
        [rn]: "colorThree",
        [an]: "colorFour"
    };
var dn;
! function(e) {
    e.POPUP = "popup", e.ON_SITE = "onsite"
}(dn || (dn = {}));
var un = dn;
const pn = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144],
    _n = () => ({
        id: "error",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        modal: !0,
        final: !0
    });
var vn = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        id: "not-supported",
        title: "Unsupported viewing environment",
        message: 'Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="new-window">Help Center</a>.',
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        id: "drm-failure",
        title: "Rights issue",
        message: "We’re having trouble authorizing playback for this video. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        id: "not-supported",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        id: "not-supported",
        final: !1
    }),
    MediaDecodeError: () => ({
        id: "decode",
        final: !1
    }),
    MediaNetworkError: () => ({
        id: "network",
        title: "Network error",
        message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    MediaUnknownError: () => ({
        id: "unknown",
        title: "Browser error",
        message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    FileError: () => ({
        id: "telecine-file-error",
        final: !1
    }),
    DownloadError: () => ({
        id: "telecine-download-error",
        final: !1
    }),
    MediaUrlExpired: () => ({
        id: "media-url-expired",
        title: "Playback error",
        message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !1
    }),
    ScannerError: () => ({
        id: "scanner-error",
        final: !1
    }),
    PlayerError: _n
});
const mn = e => ({
        onClick: e,
        onKeyDown: t => {
            "Enter" !== t.key && " " !== t.key || e(t)
        }
    }),
    fn = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function(e) {
        return o.clipboardAPI ? function(t, n) {
            try {
                var i = function(e, t, n) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(navigator.clipboard.writeText(e), (function() {
                    return !0
                }))
            } catch (De) {
                return n()
            }
            return i && i.then ? i.then(void 0, n) : i
        }(0, (function(t) {
            return hn(e)
        })) : hn(e)
    }));

function hn(e) {
    const t = document.createElement("textarea");
    t.value = e, document.body.appendChild(t), t.select();
    const n = document.execCommand("copy");
    return document.body.removeChild(t), n
}
const gn = (e, t, n) => {
    var i;
    return null !== (i = t[n]) && void 0 !== i ? i : e[n]
};

function bn(e, t) {
    return !e || 0 === e.length || -1 !== e.indexOf(t)
}
const En = e => [Xt.main, Xt.privateUnlocked, Xt.webinarUnlocked].includes(e),
    yn = (e, t) => e && (e.contains(t.target) || e === t.target),
    Cn = (...e) => e.reduce((e, t) => t ? e ? `${e} ${t}` : t : e, null),
    Tn = (e = [], t) => e.map(e => (e.active = `${e.id}` === t, e)),
    Ln = e => {
        let t = 0,
            n = 0;
        if (e) {
            const {
                left: i,
                right: o
            } = ht(e), {
                borderLeftWidth: r,
                borderRightWidth: a
            } = window.getComputedStyle(e, "");
            t = i + parseInt(r, 10), n = o - parseInt(a, 10)
        }
        return {
            leftOffsetValue: t,
            rightOffsetValue: n
        }
    },
    wn = e => {
        let {
            clientX: t
        } = e;
        return e.targetTouches && e.targetTouches.length > 0 && (t = e.targetTouches[0].clientX, e.preventDefault()), t
    },
    An = (e, t) => Math.max(e - t.startTime, 0),
    Sn = (e, t) => {
        const {
            startTime: n,
            endTime: i,
            duration: o
        } = t;
        return e < n ? 0 : e > i ? 1 : An(e, t) / o
    },
    In = (e, t) => {
        const {
            startTime: n,
            endTime: i
        } = t;
        return e < n ? 0 : e > i ? 1 : (e - n) / (i - n)
    },
    Pn = (e, t = !0) => {
        const n = 100 * (t ? At(e, 2) : e);
        return `${Math.max(Math.min(n,100),0)}%`
    },
    On = (e, t) => {
        const {
            startTime: n,
            duration: i
        } = t;
        return n + i * e
    },
    kn = (e, t) => {
        const {
            duration: n
        } = t;
        return n * e || 0
    },
    Rn = (e, t, n) => (n - t) * e + t,
    Nn = (e, t, n) => (e - t) / (n - t),
    Dn = (e, t) => e.filter(e => {
        const n = e.startTime >= t.startTime && e.startTime <= t.endTime,
            i = e.endTime >= t.startTime && e.endTime <= t.endTime,
            o = e.startTime < t.startTime && e.endTime >= t.endTime;
        return n || i || o
    });
let Mn, xn, Bn, Vn, Un, Fn, Hn, Gn, Wn;
! function(e) {
    e.VP_PLAYER_UI_OVERLAYS = "vp-player-ui-overlays", e.VP_PLAYER_UI_CONTAINER = "vp-player-ui-container", e.VP_VIDEO_WRAPPER = "vp-video-wrapper", e.VP_OVERLAY_WRAPPER = "vp-overlay-wrapper", e.VP_OVERLAY_LABELLEDBY = "vp-overlay-labelledby", e.VP_CONTROLS = "vp-controls", e.VP_CHAPTER_BUTTON = "vp-chapter-button", e.VP_CAST_BUTTON = "vp-cast-button", e.VP_PREFS = "vp-prefs", e.VP_MENU_INFO = "vp-menu-info", e.VP_INTERACTIVE_MARKER = "vp-interactive-marker", e.VP_PROGRESS = "vp-progress", e.VP_LIVE_STATUS = "vp-live-status", e.VP_LIVE_STATUS_CIRCLE = "vp-live-status-circle", e.VP_LIVE_VIEWER_COUNT = "vp-live-viewer-count", e.VP_PIP_OVERLAY = "vp-pip-overlay", e.VP_CAPTIONS = "vp-captions", e.VP_MENU = "vp-menu", e.VP_SPIN = "vp-spin", e.VP_TOOLTIP = "vp-tooltip", e.VP_SIDEDOCK = "vp-sidedock", e.VP_BADGE = "vp-badge", e.VP_TITLE = "vp-title", e.VP_UNMUTE = "vp-unmute", e.VP_ALERT = "vp-alert", e.VP_CAPTIONS_LINE = "vp-captions-line", e.COMPASS_WRAPPER = "compass-wrapper", e.STEREOSCOPIC = "stereoscopic", e.VOD_BUTTON = "vod-button", e.VOD_ICON = "vod-icon", e.CC = "cc", e.AIRPLAY = "airplay", e.ON = "on", e.PIP = "pip", e.VOLUME = "volume", e.CUSTOM_LOGO = "custom-logo", e.FULLSCREEN = "fullscreen", e.CUEPOINT = "cuepoint", e.THUMB_PREVIEW = "thumb-preview", e.THUMB = "thumb", e.COLLECTIONS_BUTTON = "collections-button", e.COLLECTIONS_ICON = "collections-icon", e.LIKE_BUTTON = "like-button", e.LIKE_ICON = "like-icon", e.WATCH_LATER_BUTTON = "watch-later-button", e.WATCH_LATER_ICON = "watch-later-icon", e.FILL = "fill", e.PIP_ICON = "pip-icon", e.SHOWFOCUS = "showfocus"
}(Mn || (Mn = {})),
function(e) {
    e.EXCLUDE_GLOBAL_BUTTON_STYLES = "exclude-global-button-styles", e.ENTER_FULLSCREEN_ICON = "enter-fullscreen-icon", e.EXIT_FULLSCREEN_ICON = "exit-fullscreen-icon", e.TITLE_TAG = "titleTag", e.CONTENT_AREA_BACKGROUND_CONTAINER = "vp-content-area-background", e.REMOTE_ACCESS_GATE = "vp-remote-access-gate"
}(xn || (xn = {})),
function(e) {
    e.RIGHT_CONTENT_AREA = "right-content-area"
}(Bn || (Bn = {})),
function(e) {
    e.TRANSCRIPT_LIST = "transcript-list", e.TRANSCRIPT_CUE_PREFIX = "transcript-cue", e.TRANSCRIPT_MENU = "transcript-menu", e.TRANSCRIPT_VIEWER = "transcript-viewer", e.TRANSCRIPT_CONTROL_BAR_BUTTON = "transcript-control-bar-button"
}(Vn || (Vn = {})),
function(e) {
    e.AI_WIDGET_ID = "ai-widget"
}(Un || (Un = {})),
function(e) {
    e.QOE_SURVEY_TEXT = "qoe-survey-text", e.REPLAY = "replay", e.BROADCAST_OVER = "broadcast-over"
}(Fn || (Fn = {})),
function(e) {
    e.TITLE_TEXT = "title-text"
}(Hn || (Hn = {})),
function(e) {
    e.TEXT_TRACK_ID_PREFIX = "telecine-track-"
}(Gn || (Gn = {})),
function(e) {
    e.EMPTY = "empty", e.SHARE = "share", e.HELP = "help", e.ERROR = "error", e.APP_REDIRECT = "app-redirect", e.PRIVATE_LOCKED = "private-locked", e.WEBINAR_BLOCKED = "webinar-blocked", e.WEBINAR_CONFIRMATION = "webinar-confirmation", e.EMAIL_CAPTURE = "email-capture", e.NOT_SUPPORTED = "not-supported", e.INTERACTIVE = "interactive"
}(Wn || (Wn = {}));
const Yn = [Wn.HELP],
    qn = `.${Mn.VP_OVERLAY_WRAPPER}`,
    $n = e => e.querySelector(qn),
    Kn = e => {
        if (e) {
            const t = $n(e);
            if (t && !t.classList.contains("hidden") && !t.classList.contains("out")) return !0
        }
        return !1
    },
    jn = e => {
        const t = $n(e);
        return t && Kn(e) ? t.getAttribute("name") : Wn.EMPTY
    },
    zn = e => Yn.includes(e),
    Xn = e => (e => void 0 !== e.settings)(e) ? !e.settings.background && 0 !== e.settings.controls : !e.background && e.controls,
    Zn = e => (Date.now() - e) / 1e3,
    Jn = e => Math.round(1e3 * e),
    Qn = (e, t, n) => {
        const i = String(e);
        return new Array(t - i.length + 1).join(n || "0") + i
    },
    ei = (e, t) => {
        const n = Math.ceil(e) < 0;
        e = Math.abs(e);
        var i = Math.floor(e / 3600 % 60),
            o = Math.floor(e / 60 % 60);
        if (e = Math.floor(e % 60), t) {
            var r = e + " second" + (1 === e ? "" : "s");
            return o > 0 && (r = o + " minute" + (1 === o ? "" : "s") + ", " + r), i > 0 && (r = i + " hour" + (1 === i ? "" : "s") + ", " + r), r
        }
        return (n ? "-" : "") + (i > 0 ? i + ":" : "") + Qn(o, 2) + ":" + Qn(e, 2)
    };

function ti(e, t) {
    const n = new Intl.DateTimeFormat(t, {
        dateStyle: "full",
        timeStyle: "short"
    }).format(e);
    return n.charAt(0).toUpperCase() + n.slice(1)
}
let ni, ii, oi;
! function(e) {
    e.ONE = "--color-one", e.TWO = "--color-two", e.THREE = "--color-three", e.FOUR = "--color-four", e.ONE_MONOCHROME = "--color-one-monochrome", e.TWO_MONOCHROME = "--color-two-monochrome", e.ONE_OPACITY_NINETY = "--color-one-opacity-ninety", e.THREE_OPACITY_TWENTY = "--color-three-opacity-twenty", e.ONE_MONOCHROME_OPACITY_TWENTY = "--color-one-monochrome-opacity-twenty", e.TWO_MONOCHROME_OPACITY_TWENTY = "--color-two-monochrome-opacity-twenty", e.ONE_MONOCHROME_OPACITY_SIXTY = "--color-one-monochrome-opacity-sixty", e.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-one-monochrome-opacity-twenty-eighty", e.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-two-monochrome-opacity-twenty-eighty"
}(ni || (ni = {})),
function(e) {
    e[e.ZERO = 0] = "ZERO", e[e.TWENTY = .2] = "TWENTY", e[e.TWENTY_FIVE = .25] = "TWENTY_FIVE", e[e.FIFTY = .5] = "FIFTY", e[e.SIXTY = .6] = "SIXTY", e[e.SEVENTY_FIVE = .75] = "SEVENTY_FIVE", e[e.EIGHTY = .8] = "EIGHTY", e[e.NINETY = .9] = "NINETY", e[e.ONE_HUNDRED = 1] = "ONE_HUNDRED"
}(ii || (ii = {})),
function(e) {
    e.LIGHT = "light", e.DARK = "dark"
}(oi || (oi = {}));
const ri = (e = "") => 4 === (e = e.replace("#", "")).length || 8 === e.length,
    ai = (e, t, n, i) => {
        let o;
        try {
            o = new r(e)
        } catch (l) {
            return ""
        }
        const s = (e => r.white.contrast(e).ratio >= 4.5 ? oi.DARK : oi.LIGHT)(o);
        return n && (o = a(s === oi.DARK ? r.white : r.black)), null == t || i && ri(e) ? ri(e) ? o.hexWithAlpha : o.hex : ("object" == typeof t && (t = t[s]), o.alpha = t, o.hexWithAlpha)
    },
    si = e => e.map(([e, t]) => ((e, t) => e + ":" + t + ";")(e, t)).join("\n"),
    li = () => {};

function ci(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function di(e, t) {
    try {
        var n = e()
    } catch (De) {
        return t(De)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const ui = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}((function(e) {
    return di(e, (function(e) {
        return ci(new Promise(e => setTimeout(e, 1e3)), (function() {
            let t;
            if (e instanceof Error) {
                const n = e.message,
                    i = null == n ? void 0 : n.split(" ").find(e => e.includes("http"));
                t = new URL(i), t.searchParams.set("t", `${Date.now()}`)
            }
            return di((function() {
                return ci(
                    import (t.href))
            }), (function() {
                throw e
            }))
        }))
    }))
}));
let pi, _i, vi, mi, fi, hi, gi, bi, Ei, yi, Ci, Ti, Li, wi, Ai, Si, Ii;
! function(e) {
    e.CONNECTED = "CONNECTED", e.CONNECTING = "CONNECTING", e.NOT_CONNECTED = "NOT_CONNECTED", e.NOT_SETUP = "NOT_SETUP", e.NO_DEVICES_AVAILABLE = "NO_DEVICES_AVAILABLE", e.SETUP_DONE = "SETUP_DONE"
}(pi || (pi = {})),
function(e) {
    e.VimeoPlayer = "VimeoPlayer", e.BackgroundPlayer = "BackgroundPlayer", e.ChromelessPlayer = "Chromeless"
}(_i || (_i = {})),
function(e) {
    e.NORMAL = "normal", e.MINI = "mini", e.TINY = "tiny"
}(vi || (vi = {})),
function(e) {
    e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR"
}(mi || (mi = {})),
function(e) {
    e[e.HAVE_NOTHING = 0] = "HAVE_NOTHING", e[e.HAVE_METADATA = 1] = "HAVE_METADATA", e[e.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e[e.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e[e.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA"
}(fi || (fi = {})),
function(e) {
    e.FIELD_MARKERS = "markers", e.FIELD_CLIP_ID = "clip_id", e.FIELD_PROFILE_ID = "profile_id", e.FIELD_PLAYER_SIZE = "player_size", e.FIELD_DROPPED_FRAMES = "dropped_frames", e.FIELD_TOTAL_FRAMES = "total_frames", e.FIELD_BANDWIDTH = "bandwidth", e.FIELD_STREAMS = "streams", e.FIELD_FILES = "files", e.FIELD_VIDEO_DIMS = "video_dims", e.FIELD_MIN_BANDWIDTH = "min_bandwidth", e.FIELD_MAX_BANDWIDTH = "max_badwidth", e.FIELD_BUFFER_OCCUPANCY = "buffer_occupancy", e.FIELD_LIVE_LATENCY = "live_latency", e.FIELD_SCANNERS = "scanner", e.FIELD_VR_HEADSET = "vr_headset"
}(hi || (hi = {})),
function(e) {
    e.AUTO = "auto"
}(gi || (gi = {})),
function(e) {
    e.PRIVACY_PUBLIC = "anybody", e.PRIVACY_NOBODY = "nobody", e.PRIVACY_FOLLOW = "contacts", e.PRIVACY_PASSWORD = "password", e.PRIVACY_USER = "users", e.PRIVACY_PURGATORY = "purgatory", e.PRIVACY_HIDE_FROM_VIMEO = "disable", e.PRIVACY_PAYTOVIEW = "ptv", e.PRIVACY_PAYTOVIEWEXTRA = "ptv_extra", e.PRIVACY_UNLISTED = "unlisted", e.PRIVACY_STOCK = "stock"
}(bi || (bi = {})),
function(e) {
    e.MEDIA_SOURCE_SCANNER = "MediaSourceScanner", e.HLS_LIVE_SCANNER = "HLSLiveScanner"
}(Ei || (Ei = {})),
function(e) {
    e.PLAY = "play", e.PAUSE = "pause", e.REPLAY = "replay", e.TRAILER = "trailer"
}(yi || (yi = {})),
function(e) {
    e.FONT_SIZE = "fontSize", e.FONT_FAMILY = "fontFamily", e.FONT_OPACITY = "fontOpacity", e.COLOR = "color", e.EDGE_STYLE = "edgeStyle"
}(Ci || (Ci = {})),
function(e) {
    e.BG_OPACITY = "bgOpacity", e.BG_COLOR = "bgColor"
}(Ti || (Ti = {})),
function(e) {
    e.WINDOW_OPACITY = "windowOpacity", e.WINDOW_COLOR = "windowColor"
}(Li || (Li = {})),
function(e) {
    e[e.FONT_SIZE = Ci.FONT_SIZE] = "FONT_SIZE", e[e.FONT_FAMILY = Ci.FONT_FAMILY] = "FONT_FAMILY", e[e.FONT_OPACITY = Ci.FONT_OPACITY] = "FONT_OPACITY", e[e.COLOR = Ci.COLOR] = "COLOR", e[e.EDGE_STYLE = Ci.EDGE_STYLE] = "EDGE_STYLE", e[e.BG_OPACITY = Ti.BG_OPACITY] = "BG_OPACITY", e[e.BG_COLOR = Ti.BG_COLOR] = "BG_COLOR", e[e.WINDOW_OPACITY = Li.WINDOW_OPACITY] = "WINDOW_OPACITY", e[e.WINDOW_COLOR = Li.WINDOW_COLOR] = "WINDOW_COLOR"
}(wi || (wi = {})),
function(e) {
    e.CCMenu = "c", e.PrefsMenu = "h", e.Transcript = "T"
}(Ai || (Ai = {})),
function(e) {
    e.SINGLE_VIDEO_VIEW_MANAGE = "single_video_view_manage", e.SINGLE_VIDEO_VIEW_RECIPIENT = "single_video_view_recipient", e.EMBEDDED_PAGE = "embedded_page", e.CLIP_PAGE = "clip_page", e.LIVE_EVENT_SETTINGS_PAGE = "live_event_settings_page"
}(Si || (Si = {})),
function(e) {
    e[e.CacheMiss = 0] = "CacheMiss", e[e.MidCacheHit = 1] = "MidCacheHit", e[e.EdgeCacheHit = 2] = "EdgeCacheHit"
}(Ii || (Ii = {}));
const {
    VIMEO_URL: Pi,
    SVV_RECIPIENT_URL: Oi,
    SVV_MANAGE_URL: ki,
    CLIP_URL: Ri,
    PROFILE_URL: Ni,
    VOD_URL: Di,
    VOD_VIDEO_MANAGE_URL: Mi,
    NO_DESTINATION: xi
} = {
    VIMEO_URL: "vimeoUrl",
    SVV_RECIPIENT_URL: "svvRecipientUrl",
    SVV_MANAGE_URL: "svvManageUrl",
    CLIP_URL: "clipUrl",
    PROFILE_URL: "profileUrl",
    VOD_URL: "vodUrl",
    VOD_VIDEO_MANAGE_URL: "vodVideoManageUrl",
    NO_DESTINATION: "noDestination"
}, Bi = {
    "vimeo-logo": {
        viewer: {
            unlisted: Ri,
            password: Ri,
            disable: Pi,
            nobody: Ri,
            anybody: Ri,
            ptv: Di,
            privateMode: Pi
        },
        creator: {
            unlisted: ki,
            password: ki,
            disable: ki,
            nobody: ki,
            anybody: ki,
            ptv: Mi,
            privateMode: ki
        }
    },
    "video-title": {
        viewer: {
            unlisted: Oi,
            password: Ri,
            disable: Ni,
            nobody: ki,
            anybody: Ri,
            ptv: Di,
            privateMode: Pi
        },
        creator: {
            unlisted: ki,
            password: ki,
            disable: ki,
            nobody: ki,
            anybody: ki,
            ptv: Mi,
            privateMode: ki
        }
    },
    "video-portrait": {
        viewer: {
            unlisted: Ni,
            password: Ni,
            disable: Ni,
            nobody: Ni,
            anybody: Ni,
            ptv: Ni,
            privateMode: Pi
        },
        creator: {
            unlisted: Ni,
            password: Ni,
            disable: Ni,
            nobody: Ni,
            anybody: Ni,
            ptv: Mi,
            privateMode: ki
        }
    },
    "video-byline": {
        viewer: {
            unlisted: Ni,
            password: Ni,
            disable: Ni,
            nobody: Ni,
            anybody: Ni,
            ptv: Ni,
            privateMode: Pi
        },
        creator: {
            unlisted: Ni,
            password: Ni,
            disable: Ni,
            nobody: Ni,
            anybody: Ni,
            ptv: Mi,
            privateMode: ki
        }
    },
    "chapter-share-base": {
        viewer: {
            unlisted: Oi,
            password: xi,
            disable: xi,
            nobody: xi,
            anybody: Ri,
            ptv: Di,
            privateMode: xi
        },
        creator: {
            unlisted: Oi,
            password: xi,
            disable: xi,
            nobody: xi,
            anybody: Ri,
            ptv: Di,
            privateMode: xi
        }
    }
};

function Vi(e = {}) {
    const t = {
        selectDestination(e) {
            const n = Bi[e];
            if (!n) return "";
            const i = t.isOwner ? n.creator : n.viewer;
            return t.isPrivateMode ? i.privateMode : i[t.videoPrivacy]
        },
        get [Ri]() {
            return Zi(t[Pi], e)
        },
        get [Oi]() {
            var n, i;
            return Qi(t[Pi], null == (n = e.video) ? void 0 : n.id, null == (i = e.video) ? void 0 : i.unlisted_hash)
        },
        get [ki]() {
            var n;
            return Ji(t[Pi], null == (n = e.video) ? void 0 : n.id)
        },
        get [Pi]() {
            return `https://${e.vimeo_url}`
        },
        get [Ni]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.owner) ? void 0 : n.url
        },
        get [Di]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.vod) ? void 0 : n.url
        },
        get [Mi]() {
            var t, n;
            return `https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(n=t.vod)?void 0:n.id}/settings/basic`
        },
        get [xi]() {
            return ""
        },
        get videoPrivacy() {
            var t;
            return null == (t = e.video) ? void 0 : t.privacy
        },
        get isPrivateMode() {
            var t;
            return !!(null == (t = e.user) ? void 0 : t.private_mode_enabled)
        },
        get isOwner() {
            var t, n, i;
            return (null == (t = e.user) ? void 0 : t.id) === (null == (n = e.video) || null == (i = n.owner) ? void 0 : i.id)
        }
    };
    return t
}

function Ui(e, t) {
    let n = "";
    const i = Vi(t),
        o = i.selectDestination(e);
    return i[o] && (n = i[o]), n
}
const Fi = /^(%20|\s)*(javascript|data)/im,
    Hi = /[^\x20-\x7E]/gim,
    Gi = /^([^:]+):/gm,
    Wi = [".", "/"];

function Yi(e, t, n) {
    qi(e, t) || ((e = "") => e.includes("?"))(e) && (e += `&${t}=`);
    const i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
    return e.replace(i, "$1" + t + "=" + n + "$2")
}

function qi(e, t) {
    return -1 !== (null == e ? void 0 : e.indexOf(`?${t}=`)) || -1 !== (null == e ? void 0 : e.indexOf(`&${t}=`))
}

function $i(e) {
    return -1 !== e.indexOf("VideoController")
}

function Ki(e, t = window.location.href) {
    const n = Vi(e),
        i = -1 !== e.embed.context.indexOf("ClipController"),
        o = function(e, t) {
            const n = Ji(t),
                i = function(e, t) {
                    return `${e}/manage/showcases/`
                }(t);
            return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
        }(t, n.vimeoUrl),
        r = $i(e.embed.context) && (-1 !== t.indexOf(n.svvRecipientUrl) || t === n.clipUrl);
    return function(e, t) {
        const n = function(e, t) {
                return `${e}/live/broadcaster/event/`
            }(t),
            i = function(e, t) {
                return `${e}/live/rtmp/event/`
            }(t);
        return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
    }(t, n.vimeoUrl) ? Si.LIVE_EVENT_SETTINGS_PAGE : o ? Si.SINGLE_VIDEO_VIEW_MANAGE : r ? Si.SINGLE_VIDEO_VIEW_RECIPIENT : i ? Si.CLIP_PAGE : Si.EMBEDDED_PAGE
}

function ji(e, t, n) {
    if (!e) return "";
    const [i] = e.split("#");
    return `${i}#t=${t}&end=${n}`
}
const zi = e => {
        const t = e.match(Gi);
        return null == t ? void 0 : t[0]
    },
    Xi = e => e ? decodeURI(encodeURI((e => {
        e = e.trim();
        const t = zi(e);
        return e && !t && (e = `https://${e}`), e
    })((e => {
        let t = e.replace(Hi, "");
        if ((e => Wi.indexOf(e[0]) > -1)(t)) return t;
        const n = zi(t);
        return n && Fi.test(n) ? "" : t
    })(e)))) : null,
    Zi = (e, t) => {
        var n, i;
        const o = null == (n = t.video) ? void 0 : n.id,
            r = null == (i = t.video) ? void 0 : i.unlisted_hash;
        return `${e}/${o}${r?"/"+r:""}`
    };

function Ji(e, t) {
    return `${e}/manage/videos/${null!=t?t:""}`
}
const Qi = (e, t, n) => n ? `${e}/${t}/${n}` : `${e}/${t}`;

function eo(e) {
    return !(!o.browser.chromium || e.video.spatial || "stock" === e.video.privacy || "https:" !== window.location.protocol)
}
const to = s("Storage Access", "color: #fff; background-color: #fc6203; padding: 2px; border-radius: 2px;"),
    no = () => o.storageAccessAPI;
let io, oo;

function ro(e) {
    return e.video.ecdn ? e.video.live_event ? "vimeo-live-ecdn" : "vimeo-vod-ecdn" : l(e.embed.interactive) ? e.request.flags.ott ? "vimeo-ott-vod" : e.video.webinar && "ended" !== e.video.webinar.status ? "vimeo-live-webinar" : e.video.live_event ? "vimeo-live" : e.embed.context && -1 !== e.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.video.vod ? "vimeo-ondemand" : "vimeo-vod" : "vimeo-interactive-vod"
}! function(e) {
    e.started = "started", e.done = "done", e.error = "error"
}(io || (io = {})),
function(e) {
    e.pending = "pending", e.active = "active", e.started = "started", e.ended = "ended"
}(oo || (oo = {}));
const ao = () => {
        const [e, t, n] = "4.37.15".split(".");
        return {
            full: "4.37.15",
            major: e,
            minor: t,
            patch: n
        }
    },
    so = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function lo() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : so && (e = "mobile"), e
}

function co() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function uo(e) {
    var t;
    const {
        user: n,
        video: i
    } = e;
    let o = "viewer";
    return n.team_id && (o = n.id === n.team_origin_user_id ? "admin" : "contributor"), n.id === (null == (t = i.owner) ? void 0 : t.id) && (o = "owner"), o
}

function po(e, t) {
    return e === t ? "square" : t > e ? "portrait" : "landscape"
}

function _o(e) {
    return (null == e ? void 0 : e.status) === oo.ended ? "ended" : (null == e ? void 0 : e.status) === oo.started ? "streaming" : (null == e ? void 0 : e.status) === oo.pending ? "unavailable" : "unknown"
}

function vo(e) {
    return e.webinar ? "webinar" : e.live_event ? "live_event" : "other"
}

function mo(e) {
    var t;
    return (null == e ? void 0 : e.length) && (null == (t = e.find(e => e.is_current)) ? void 0 : t.id) || null
}

function fo(e) {
    return e === bi.PRIVACY_PUBLIC ? "public" : e === bi.PRIVACY_PASSWORD ? "password" : e === bi.PRIVACY_UNLISTED ? "unlisted" : e === bi.PRIVACY_HIDE_FROM_VIMEO ? "hide_from_vimeo" : "private"
}
var ho;

function go(e) {
    const t = e.akamai_request_bc,
        n = e.x_cache;
    return t ? function(e) {
        return e.includes(ho.Origin) ? Ii.CacheMiss : e.includes(ho.Peer) || e.includes(ho.ParentCache) || e.includes(ho.CloudWrapper) ? Ii.MidCacheHit : Ii.EdgeCacheHit
    }(t) : n ? function(e) {
        return "HIT" === e.substr(0, 3) ? Ii.MidCacheHit : "HIT" === e.substr(-3) ? Ii.EdgeCacheHit : Ii.CacheMiss
    }(n) : Ii.CacheMiss
}! function(e) {
    e.Origin = "c=o", e.Peer = "c=p", e.ParentCache = "c=c", e.CloudWrapper = "c=w"
}(ho || (ho = {}));
const bo = (e, t) => e.split("/").slice(4).join("/"),
    Eo = e => e.split("/")[4],
    yo = (e, t) => function(n) {
        try {
            const {
                type: i,
                url: o
            } = n;
            return i && o && o.includes(e) && (i === p.MANIFEST || i === p.SEGMENT) ? _(n, t) : null
        } catch (De) {
            return Promise.reject(De)
        }
    },
    Co = () => {
        var e;
        const t = u(window, "_hiveStats", {
                cdnResponseBytes: 0,
                p2pResponseBytes: 0,
                partners: {}
            }),
            {
                cdnResponseBytes: n,
                p2pResponseBytes: i,
                partners: o
            } = t;
        return {
            ecdnBytesByCdn: n,
            ecdnBytesPeered: i,
            ecdnPeers: (null !== (e = Object.keys(o)) && void 0 !== e ? e : []).length
        }
    },
    To = () => {
        const e = u(window, "_kollectiveStats", {
                originBytes: 0,
                ecdnBytes: 0,
                currentPeerConnections: 0
            }),
            {
                originBytes: t,
                ecdnBytes: n,
                currentPeerConnections: i
            } = e;
        return {
            ecdnBytesByCdn: t,
            ecdnBytesPeered: n,
            ecdnPeers: i
        }
    },
    Lo = e => {
        const t = {
            hive: Co,
            kollective: To
        };
        return t[e] ? t[e]() : {
            ecdnBytesByCdn: 0,
            ecdnBytesPeered: 0,
            ecdnPeers: 0
        }
    },
    wo = ({
        newPriority: e,
        currentPriority: t,
        priorityOrder: n
    }) => {
        const i = n.indexOf(t),
            o = n.indexOf(e);
        return -1 === i || -1 === o || i > o
    },
    Ao = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function(e) {
        return new Promise(t => {
            if (!o.intersectionObserver) return void t();
            const n = new IntersectionObserver((function(e) {
                const [i] = e;
                (null == i ? void 0 : i.isIntersecting) && (t(), n.disconnect())
            }), {
                threshold: .5
            });
            n.observe(e)
        })
    }));

function So(e) {
    return (null == e ? void 0 : e.parentElement) === document.body
}
const Io = () => {
    try {
        return window.self !== window.top
    } catch (De) {
        return !0
    }
};

function Po(e, t) {
    const [n, i] = t;
    let o = i - n;
    for (var r, a = v(e); !(r = a()).done;) {
        const e = r.value,
            [t, a] = e,
            s = Math.max(n, t),
            l = Math.min(i, a);
        o -= Math.max(0, l - s)
    }
    return Math.max(o, 0)
}

function Oo(e) {
    return Jn(At(e, 3))
}
const ko = e => {
        var t;
        const n = null == e || null == (t = e.ingest) ? void 0 : t.start_time;
        if (!n) return 12e3;
        const i = 12e3 - (Date.now() - n);
        return Math.min(Math.max(i, 0), 12e3)
    },
    Ro = e => !!e && e.status === oo.started && 0 === ko(e);

function No(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function Do(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (De) {}
    return null
}
let Mo, xo, Bo;
! function(e) {
    e.EMPTY = "empty", e.LEAD_CAPTURE_FORM = "lead_capture_form"
}(Mo || (Mo = {})),
function(e) {
    e.BEFORE_VIDEO = "before_video", e.DURING_VIDEO = "during_video", e.AFTER_VIDEO = "after_video"
}(xo || (xo = {})),
function(e) {
    e.OPENED = "access_gate_opened", e.CLOSED = "access_gate_closed", e.ERROR = "access_gate_error"
}(Bo || (Bo = {}));
const Vo = {
        [Mo.LEAD_CAPTURE_FORM]: [Xt.main, Xt.privateUnlocked, Xt.webinarUnlocked]
    },
    Uo = `.${xn.REMOTE_ACCESS_GATE}`,
    Fo = e => e.querySelector(Uo),
    Ho = (e, t) => null != t ? t : !!e && (!!Fo(e) && (e => {
        if (e) {
            const t = Fo(e);
            if (t) return t.id || Mo.EMPTY
        }
        return Mo.EMPTY
    })(e) !== Mo.EMPTY),
    Go = (e, t) => {
        const i = t.vimeo_url;
        let o = {
            lc_param_session_id: t.request.session
        };
        return t.video.unlisted_hash && (o.lc_param_unlisted_hash = t.video.unlisted_hash), n(`https://${i}${e}`, o)
    },
    Wo = (e, t, n = null) => {
        switch (e) {
            case Mo.LEAD_CAPTURE_FORM:
                return {
                    purpose: e,
                    url: Go(`/leadcapture/video/${t.video.id}/form`, t),
                    title: "Lead Capture Form",
                    gateId: n
                };
            default:
                return {
                    purpose: Mo.EMPTY,
                    url: "",
                    title: "",
                    gateId: n
                }
        }
    },
    Yo = (e, t) => {
        if (e === Mo.LEAD_CAPTURE_FORM) {
            var n;
            let e = (e => "lc_" + e.video.id)(t),
                i = Do(e);
            return i || (e = (e => {
                const {
                    id: t,
                    unlisted_hash: n
                } = e.video;
                return "lc_" + ((e, t = 0) => {
                    let n = 3735928559 ^ t,
                        i = 1103547991 ^ t;
                    for (let o, r = 0; r < e.length; r++) o = e.charCodeAt(r), n = Math.imul(n ^ o, 2654435761), i = Math.imul(i ^ o, 1597334677);
                    return n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), (4294967296 * (2097151 & i) + (n >>> 0)).toString()
                })(n ? `${t}:${n}` : `${t}`)
            })(t), i = Do(e), null !== (n = i) && void 0 !== n ? n : "")
        }
        return ""
    },
    qo = (e, t) => !!Yo(e, t);

function $o(e, t) {
    var n;
    const i = Yo(Mo.LEAD_CAPTURE_FORM, e);
    var o, r;
    if (null == (n = e.user) ? void 0 : n.lead) return {
        leadUuid: (null == (o = e.user.lead) ? void 0 : o.id) || i,
        contentType: null == (r = e.user.lead) ? void 0 : r.type
    };
    if (e.video.webinar) {
        const n = `${e.video.webinar.id}_webinar_registrant`;
        if (!t.get("webinar.webinarRegistrantUuid")) {
            const e = Do(n);
            t.dispatch((e => ({
                type: "WEBINAR_REGISTRANT_UUID_AVAILABLE",
                payload: {
                    registrantUuid: e
                }
            }))(e))
        }
        return {
            leadUuid: t.get("webinar.webinarRegistrantUuid")
        }
    }
    return i ? {
        leadUuid: i
    } : {}
}
var Ko;
! function(e) {
    e.NOT_LOGGED_IN = "not_logged_in", e.LOGGED_IN_STORAGE_ACCESS_REQUIRED = "logged_in_storage_access_required", e.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED = "storage_access_granted_login_unconfirmed", e.ALL_ACCESS_ATTEMPTS_FAILED = "all_access_attempts_failed"
}(Ko || (Ko = {}));
var jo = Ko;
const zo = {
    storageAccessRequired: no,
    requestCookieAccess: e => new Promise((t, n) => document.requestStorageAccess().then(() => {
        to("User granted storage access"), t(!0)
    }, () => {
        e(), to("User storage access denied:"), t(!1)
    }).catch(n))
};

function Xo(e, t, n) {
    return e / t * n
}

function Zo(e = "") {
    try {
        const t = null == e ? void 0 : e.split(".")[1],
            n = JSON.parse(atob(t)).exp;
        return f(n) >= 0
    } catch (De) {
        throw new Error("Failed to parse PHP token.")
    }
}
const Jo = (e, t) => !e.isLive() || t;
let Qo, er, tr, nr, ir, or, rr, ar, sr, lr;
! function(e) {
    e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e.XXL = "xxl"
}(Qo || (Qo = {})),
function(e) {
    e.MD = "md", e.SM = "sm", e.XS = "xs", e.CUSTOM = "custom"
}(er || (er = {})),
function(e) {
    e.PRIMARY = "primary", e.ALTERNATIVE = "alternative", e.CUSTOM = "custom"
}(tr || (tr = {})),
function(e) {
    e.LEFT = "left", e.RIGHT = "right"
}(nr || (nr = {})),
function(e) {
    e.RESET = "reset", e.BUTTON = "button", e.SUBMIT = "submit"
}(ir || (ir = {})),
function(e) {
    e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl"
}(or || (or = {})),
function(e) {
    e.NORMAL = "normal", e.BOLD = "bold", e[e.NUM_500 = 500] = "NUM_500"
}(rr || (rr = {})),
function(e) {
    e.CUSTOM = "custom", e.WHITE = "white"
}(ar || (ar = {})),
function(e) {
    e.SM = "sm", e.LG = "lg"
}(sr || (sr = {})),
function(e) {
    e.FULL_CONTROLS = "full-controls", e.VOLUME_SLIDER = "volume-slider", e.PROGRESS_BAR = "progress-bar"
}(lr || (lr = {}));
const cr = (e, t, n, i) => {
        var o, r;
        if (e === lr.FULL_CONTROLS && !(null == (o = i.request.ab_tests) || null == (r = o.small_player_redesign) ? void 0 : r.group)) return !0;
        switch (e) {
            case lr.FULL_CONTROLS:
            case lr.VOLUME_SLIDER:
                return t !== vi.MINI && t !== vi.TINY && n !== Qo.XXS;
            case lr.PROGRESS_BAR:
                return t !== vi.TINY;
            default:
                return !1
        }
    },
    dr = !!window.newrelic && "function" == typeof window.newrelic.addToTrace && "function" == typeof window.newrelic.noticeError && "function" == typeof window.newrelic.setErrorHandler && "function" == typeof window.newrelic.setCustomAttribute,
    ur = ["chrome-extension:", "moz-extension:"].includes(document.location.protocol),
    pr = Date.now(),
    _r = ["NotAllowedError", "AbortError", "PlayInterrupted", "Failed to load image", "window.__withBuiltIn is not a function", "window.__timeSinceLastTimeout is not a function", "div:has(> iframe[id=", "No cast extension found", "Cast is not available on this browser."];
let vr, mr, fr;
! function(e) {
    e.WEB_GLOBAL = "vimeo.web_global", e.COPY_VIDEO_EMBED_CODE = "workflow.copy_video_embed_code", e.PLAYER_PERFORMANCE_MEASUREMENT = "vimeo.player_performance_measurement", e.CHAPTER_SEGMENT_CLICK = "vimeo.chapter_segment_click", e.CLICK = "vimeo.click", e.TIMING_OBJECT_CONNECT = "vimeo.timing_object_connect", e.TIMING_OBJECT_DISCONNECT = "vimeo.timing_object_disconnect", e.EMBEDDED_TRANSCRIPT_CLICK = "vimeo.embedded_transcript_click", e.CLOSED_CAPTIONS_CLICK = "vimeo.closed_captions_click", e.MULTI_AUDIO_TRACK_CLICK = "vimeo.multi_audio_track_click", e.VIEW_PLAYER_CSAT_V1 = "vimeo.view_player_csat_v1", e.SELECT_THUMBS_UP_PLAYER_CSAT_V1 = "vimeo.select_thumbs_up_player_csat_v1", e.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1 = "vimeo.select_thumbs_down_player_csat_v1", e.DISMISS_PLAYER_CSAT_V1 = "vimeo.dismiss_player_csat_v1", e.DVR_MODE_ENTERED = "vimeo.dvr_mode_entered", e.SEEK_BEHIND_LIVE_EDGE = "vimeo.seek_behind_live_edge", e.SKIP_TO_LIVE_CLICK = "vimeo.skip_to_live_click", e.SEEK_TO_LIVE_EDGE = "vimeo.seek_to_live_edge", e.PLAY_VIDEO = "vimeo.play_video", e.FINISH_VIDEO = "vimeo.finish_video", e.START_VIDEO_SCRUB = "vimeo.start_video_scrub", e.END_VIDEO_SCRUB = "vimeo.end_video_scrub", e.WATCH_VIDEO_HEARTBEAT = "vimeo.watch_video_heartbeat", e.EMBED_SEGMENT = "vimeo.embed_segment", e.PLAY_SEGMENT = "vimeo.play_segment", e.WATCH_FULL_VIDEO = "vimeo.watch_full_video", e.SEEK_INSIDE_SEGMENT = "vimeo.seek_inside_segment", e.SHARE_CHAPTER = "vimeo.share_chapter", e.CHAPTER_PLAYED = "vimeo.chapter_played", e.OPEN_AI_OPTIONS = "vimeo.open_ai_options", e.PROCESS_STEP = "vimeo.process_step", e.REMOTE_COMPONENT_LOADED = "vimeo.remote_component_loaded", e.REMOTE_COMPONENT_TIMEOUT = "vimeo.remote_component_timeout", e.REACH_TIME_ACTION = "vimeo.reach_time_action", e.VIEW_HOTSPOT = "vimeo.view_hotspot", e.CLICK_HOTSPOT = "vimeo.click_hotspot", e.VIEW_OVERLAY = "vimeo.view_overlay", e.CLOSE_OVERLAY = "vimeo.close_overlay", e.CLICK_OVERLAY = "vimeo.click_overlay", e.VIEW_POLL = "vimeo.view_poll", e.VOTE_POLL = "vimeo.vote_poll"
}(vr || (vr = {})),
function(e) {
    e.TEAM = "team_context", e.ACTION = "action_context", e.VIEW = "view_context", e.WEB = "web_context", e.VIDEO = "video_context", e.PLAYER = "player_context", e.LIVE = "live_context", e.PRODUCT_ANALYTICS = "product_analytics_context", e.TARGET_TEAM = "target_team_context", e.USER_FACING_VIDEO_ANALYTICS = "user_facing_video_analytics_context", e.THIRD_PARTY_INTEGRATION = "third_party_integration_context"
}(mr || (mr = {})),
function(e) {
    e[e.WEB_GLOBAL = 5] = "WEB_GLOBAL", e[e.COPY_VIDEO_EMBED_CODE = 5] = "COPY_VIDEO_EMBED_CODE", e[e.PLAYER_PERFORMANCE_MEASUREMENT = 1] = "PLAYER_PERFORMANCE_MEASUREMENT", e[e.CHAPTER_SEGMENT_CLICK = 2] = "CHAPTER_SEGMENT_CLICK", e[e.CLICK = 83] = "CLICK", e[e.TIMING_OBJECT_CONNECT = 1] = "TIMING_OBJECT_CONNECT", e[e.TIMING_OBJECT_DISCONNECT = 1] = "TIMING_OBJECT_DISCONNECT", e[e.EMBEDDED_TRANSCRIPT_CLICK = 6] = "EMBEDDED_TRANSCRIPT_CLICK", e[e.CLOSED_CAPTIONS_CLICK = 2] = "CLOSED_CAPTIONS_CLICK", e[e.MULTI_AUDIO_TRACK_CLICK = 1] = "MULTI_AUDIO_TRACK_CLICK", e[e.PLAY_VIDEO = 2] = "PLAY_VIDEO", e[e.FINISH_VIDEO = 2] = "FINISH_VIDEO", e[e.START_VIDEO_SCRUB = 2] = "START_VIDEO_SCRUB", e[e.END_VIDEO_SCRUB = 1] = "END_VIDEO_SCRUB", e[e.WATCH_VIDEO_HEARTBEAT = 2] = "WATCH_VIDEO_HEARTBEAT", e[e.EMBED_SEGMENT = 1] = "EMBED_SEGMENT", e[e.PLAY_SEGMENT = 1] = "PLAY_SEGMENT", e[e.WATCH_FULL_VIDEO = 1] = "WATCH_FULL_VIDEO", e[e.SEEK_INSIDE_SEGMENT = 1] = "SEEK_INSIDE_SEGMENT", e[e.SHARE_CHAPTER = 1] = "SHARE_CHAPTER", e[e.CHAPTER_PLAYED = 1] = "CHAPTER_PLAYED", e[e.OPEN_AI_OPTIONS = 4] = "OPEN_AI_OPTIONS", e[e.PROCESS_STEP = 1] = "PROCESS_STEP", e[e.REMOTE_COMPONENT_LOADED = 1] = "REMOTE_COMPONENT_LOADED", e[e.REMOTE_COMPONENT_TIMEOUT = 1] = "REMOTE_COMPONENT_TIMEOUT", e[e.REACH_TIME_ACTION = 1] = "REACH_TIME_ACTION", e[e.VIEW_HOTSPOT = 1] = "VIEW_HOTSPOT", e[e.CLICK_HOTSPOT = 1] = "CLICK_HOTSPOT", e[e.VIEW_OVERLAY = 1] = "VIEW_OVERLAY", e[e.CLOSE_OVERLAY = 1] = "CLOSE_OVERLAY", e[e.CLICK_OVERLAY = 1] = "CLICK_OVERLAY", e[e.VIEW_POLL = 1] = "VIEW_POLL", e[e.VOTE_POLL = 1] = "VOTE_POLL", e[e.TEAM = 5] = "TEAM", e[e.ACTION = 5] = "ACTION", e[e.VIEW = 3] = "VIEW", e[e.WEB = 25] = "WEB", e[e.VIDEO = 10] = "VIDEO", e[e.PLAYER = 5] = "PLAYER", e[e.LIVE = 6] = "LIVE", e[e.PRODUCT_ANALYTICS = 41] = "PRODUCT_ANALYTICS", e[e.TARGET_TEAM = 6] = "TARGET_TEAM", e[e.USER_FACING_VIDEO_ANALYTICS = 2] = "USER_FACING_VIDEO_ANALYTICS", e[e.THIRD_PARTY_INTEGRATION = 5] = "THIRD_PARTY_INTEGRATION", e[e.DEFAULT = -1] = "DEFAULT"
}(fr || (fr = {}));
const hr = {
        [vr.WEB_GLOBAL]: fr.WEB_GLOBAL,
        [vr.COPY_VIDEO_EMBED_CODE]: fr.COPY_VIDEO_EMBED_CODE,
        [vr.PLAYER_PERFORMANCE_MEASUREMENT]: fr.PLAYER_PERFORMANCE_MEASUREMENT,
        [vr.CHAPTER_SEGMENT_CLICK]: fr.CHAPTER_SEGMENT_CLICK,
        [vr.CLICK]: fr.CLICK,
        [vr.TIMING_OBJECT_CONNECT]: fr.TIMING_OBJECT_CONNECT,
        [vr.TIMING_OBJECT_DISCONNECT]: fr.TIMING_OBJECT_DISCONNECT,
        [vr.EMBEDDED_TRANSCRIPT_CLICK]: fr.EMBEDDED_TRANSCRIPT_CLICK,
        [vr.CLOSED_CAPTIONS_CLICK]: fr.CLOSED_CAPTIONS_CLICK,
        [vr.MULTI_AUDIO_TRACK_CLICK]: fr.MULTI_AUDIO_TRACK_CLICK,
        [vr.VIEW_PLAYER_CSAT_V1]: fr.DEFAULT,
        [vr.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: fr.DEFAULT,
        [vr.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: fr.DEFAULT,
        [vr.DISMISS_PLAYER_CSAT_V1]: fr.DEFAULT,
        [vr.DVR_MODE_ENTERED]: fr.DEFAULT,
        [vr.SEEK_BEHIND_LIVE_EDGE]: fr.DEFAULT,
        [vr.SKIP_TO_LIVE_CLICK]: fr.DEFAULT,
        [vr.SEEK_TO_LIVE_EDGE]: fr.DEFAULT,
        [vr.PLAY_VIDEO]: fr.PLAY_VIDEO,
        [vr.FINISH_VIDEO]: fr.FINISH_VIDEO,
        [vr.START_VIDEO_SCRUB]: fr.START_VIDEO_SCRUB,
        [vr.END_VIDEO_SCRUB]: fr.END_VIDEO_SCRUB,
        [vr.WATCH_VIDEO_HEARTBEAT]: fr.WATCH_VIDEO_HEARTBEAT,
        [vr.EMBED_SEGMENT]: fr.EMBED_SEGMENT,
        [vr.PLAY_SEGMENT]: fr.PLAY_SEGMENT,
        [vr.WATCH_FULL_VIDEO]: fr.WATCH_FULL_VIDEO,
        [vr.SEEK_INSIDE_SEGMENT]: fr.SEEK_INSIDE_SEGMENT,
        [vr.SHARE_CHAPTER]: fr.SHARE_CHAPTER,
        [vr.CHAPTER_PLAYED]: fr.CHAPTER_PLAYED,
        [vr.OPEN_AI_OPTIONS]: fr.OPEN_AI_OPTIONS,
        [vr.PROCESS_STEP]: fr.PROCESS_STEP,
        [vr.REMOTE_COMPONENT_LOADED]: fr.REMOTE_COMPONENT_LOADED,
        [vr.REMOTE_COMPONENT_TIMEOUT]: fr.REMOTE_COMPONENT_TIMEOUT,
        [vr.REACH_TIME_ACTION]: fr.REACH_TIME_ACTION,
        [vr.VIEW_HOTSPOT]: fr.VIEW_HOTSPOT,
        [vr.CLICK_HOTSPOT]: fr.CLICK_HOTSPOT,
        [vr.VIEW_OVERLAY]: fr.VIEW_OVERLAY,
        [vr.CLOSE_OVERLAY]: fr.CLOSE_OVERLAY,
        [vr.CLICK_OVERLAY]: fr.CLICK_OVERLAY,
        [vr.VIEW_POLL]: fr.VIEW_POLL,
        [vr.VOTE_POLL]: fr.VOTE_POLL,
        [mr.TEAM]: fr.TEAM,
        [mr.ACTION]: fr.ACTION,
        [mr.VIEW]: fr.VIEW,
        [mr.WEB]: fr.WEB,
        [mr.VIDEO]: fr.VIDEO,
        [mr.PLAYER]: fr.PLAYER,
        [mr.LIVE]: fr.LIVE,
        [mr.PRODUCT_ANALYTICS]: fr.PRODUCT_ANALYTICS,
        [mr.USER_FACING_VIDEO_ANALYTICS]: fr.USER_FACING_VIDEO_ANALYTICS,
        [mr.TARGET_TEAM]: fr.TARGET_TEAM,
        [mr.THIRD_PARTY_INTEGRATION]: fr.THIRD_PARTY_INTEGRATION
    },
    gr = [mr.PLAYER, mr.VIDEO, mr.WEB, mr.TEAM],
    br = [mr.TEAM, mr.VIDEO, mr.LIVE, mr.PRODUCT_ANALYTICS, mr.USER_FACING_VIDEO_ANALYTICS, mr.TARGET_TEAM, mr.THIRD_PARTY_INTEGRATION],
    Er = {
        [vr.VIEW_PLAYER_CSAT_V1]: [].concat(gr, [mr.VIEW]),
        [vr.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: [].concat(gr, [mr.ACTION]),
        [vr.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: [].concat(gr, [mr.ACTION]),
        [vr.DISMISS_PLAYER_CSAT_V1]: [].concat(gr, [mr.ACTION]),
        [vr.DVR_MODE_ENTERED]: [].concat(gr, [mr.VIEW, mr.LIVE, mr.PRODUCT_ANALYTICS]),
        [vr.SEEK_BEHIND_LIVE_EDGE]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS]),
        [vr.SKIP_TO_LIVE_CLICK]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS]),
        [vr.SEEK_TO_LIVE_EDGE]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS]),
        [vr.PLAY_VIDEO]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS, mr.TARGET_TEAM, mr.USER_FACING_VIDEO_ANALYTICS]),
        [vr.FINISH_VIDEO]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS, mr.TARGET_TEAM, mr.USER_FACING_VIDEO_ANALYTICS]),
        [vr.START_VIDEO_SCRUB]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS, mr.TARGET_TEAM, mr.USER_FACING_VIDEO_ANALYTICS]),
        [vr.END_VIDEO_SCRUB]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS, mr.TARGET_TEAM, mr.USER_FACING_VIDEO_ANALYTICS]),
        [vr.WATCH_VIDEO_HEARTBEAT]: [].concat(gr, [mr.ACTION, mr.LIVE, mr.PRODUCT_ANALYTICS, mr.TARGET_TEAM, mr.USER_FACING_VIDEO_ANALYTICS]),
        [vr.WATCH_FULL_VIDEO]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS]),
        [vr.SEEK_INSIDE_SEGMENT]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS]),
        [vr.SHARE_CHAPTER]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS]),
        [vr.CHAPTER_PLAYED]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS]),
        [vr.EMBED_SEGMENT]: [].concat(gr, [mr.VIEW, mr.PRODUCT_ANALYTICS]),
        [vr.PLAY_SEGMENT]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS]),
        [vr.OPEN_AI_OPTIONS]: [mr.TEAM, mr.ACTION, mr.PRODUCT_ANALYTICS, mr.WEB, mr.VIDEO],
        [vr.PROCESS_STEP]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS]),
        [vr.REMOTE_COMPONENT_LOADED]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS, mr.THIRD_PARTY_INTEGRATION]),
        [vr.REMOTE_COMPONENT_TIMEOUT]: [].concat(gr, [mr.ACTION, mr.PRODUCT_ANALYTICS, mr.THIRD_PARTY_INTEGRATION]),
        [vr.REACH_TIME_ACTION]: [].concat(br, [mr.VIEW]),
        [vr.VIEW_HOTSPOT]: [].concat(br, [mr.VIEW]),
        [vr.CLICK_HOTSPOT]: [].concat(br, [mr.ACTION]),
        [vr.VIEW_OVERLAY]: [].concat(br, [mr.VIEW]),
        [vr.CLOSE_OVERLAY]: [].concat(br, [mr.ACTION]),
        [vr.CLICK_OVERLAY]: [].concat(br, [mr.ACTION]),
        [vr.VIEW_POLL]: [].concat(br, [mr.VIEW]),
        [vr.VOTE_POLL]: [].concat(br, [mr.ACTION])
    };
let yr;

function Cr(t, n) {
    let i, r = null,
        a = null,
        s = null,
        l = null,
        c = 0,
        d = 0,
        u = [],
        p = !1,
        _ = !1,
        v = !1,
        m = 0,
        f = 0,
        y = h(),
        C = !0,
        T = !0;

    function L() {
        O(), n(vr.PLAY_VIDEO, t.config, k(vr.PLAY_VIDEO)), l = s
    }

    function w() {
        t.backbone.seeking || (p = !1, S(), n(vr.FINISH_VIDEO, t.config, k(vr.FINISH_VIDEO)), T = !1, P())
    }

    function A() {
        p && _ && !v && (_ = !1, O(), n(vr.END_VIDEO_SCRUB, t.config, k(vr.END_VIDEO_SCRUB)), l = s, I())
    }

    function S() {
        let e = m;
        (t.backbone.seeking || v) && (e = f), s = At(e, 3), c && (n(vr.WATCH_VIDEO_HEARTBEAT, t.config, function() {
            const e = k(vr.WATCH_VIDEO_HEARTBEAT);
            return E(E({}, e), {}, {
                log_view_time: c,
                log_view_time_excluding_repeats: Math.min(d, c),
                previous_log_end_time: l,
                is_first_log: C
            })
        }()), c = 0, d = 0, C = !1, l = s)
    }

    function I() {
        i || (i = setInterval(S, 1e4))
    }

    function P() {
        clearInterval(i), i = null
    }

    function O() {
        const e = At(Jn(t.currentTime), 3);
        r ? r++ : r = 1, a = e, s = e, c = 0, d = 0, f = e, y = h()
    }

    function k(e) {
        let n;
        switch (e) {
            case vr.FINISH_VIDEO:
                n = {
                    session_segment_id: r,
                    segment_start_time: a,
                    log_end_time: s,
                    is_first_log: T
                };
                break;
            case vr.PLAY_VIDEO:
                n = {
                    session_segment_id: r,
                    segment_start_time: a,
                    log_end_time: s,
                    video_duration_ms: Oo(t.config.video.duration)
                };
                break;
            default:
                n = {
                    session_segment_id: r,
                    segment_start_time: a,
                    log_end_time: s
                }
        }
        return n
    }
    t.events.on(g.PLAY, (function() {
        if (I(), !p)
            if (p = !0, t.backbone.isLive()) {
                const e = ({
                    currentTime: n
                }) => {
                    0 !== n && (L(), t.events.off(g.TIME_UPDATE, e))
                };
                t.events.on(g.TIME_UPDATE, e)
            } else L()
    })), t.events.on(g.PAUSE, (function() {
        t.backbone.ended || t.backbone.seeking || v || (S(), P())
    })), t.events.on(g.SEEKING, (function() {
        p && !_ && (_ = !0, S(), n(vr.START_VIDEO_SCRUB, t.config, k(vr.START_VIDEO_SCRUB)), P())
    })), t.events.on(g.SEEKED, b(A, 750)), t.events.on(g.ENDED, w), t.events.on(g.TIME_UPDATE, (function() {
        if (t.backbone.seeking) return;
        const n = Jn(At(t.currentTime, 3)),
            i = v ? f : n;
        let r = Math.round(i - f);
        const s = h();
        if (r = function(e, n, i) {
                const o = t.backbone.playbackRate || 1,
                    r = y || i,
                    a = Math.round((i - r) * o),
                    s = Math.max(a, 0),
                    l = Oo(t.config.video.duration);
                return !t.backbone.isLive() && l && n > l || s && e > 1.3 * s ? Math.min(e, s) : e
            }(r, i, s), r <= 0) return;
        m = i;
        const l = [a, i];
        if (c += r, o.iOS && t.backbone.isLive()) {
            d += At(Po(u, l), 3);
            const t = function(e, t) {
                const [n, i] = t;
                return e.map((e, t) => {
                    const [o, r] = e;
                    return n >= o && n <= r || i >= o && i <= r || o <= n && r >= i || n <= o && i >= r ? t : null
                }).filter(e => null !== e)
            }(u, l);
            u = function(t, n, i) {
                const [o, r] = n;
                let a;
                if (i.length) a = Math.min.apply(Math, e(i));
                else {
                    const e = t.findIndex(e => o < e[0]);
                    a = -1 === e ? t.length : e
                }
                const s = e(t),
                    l = [Math.min.apply(Math, [o].concat(e(i.map(e => t[e][0])))), Math.max.apply(Math, [r].concat(e(i.map(e => t[e][1]))))];
                return s.splice(a, i.length, l), s
            }(u, l, t)
        } else {
            const e = t.backbone.played;
            d += At(Po(u, l), 3), u = function(e) {
                const t = e.length,
                    n = [];
                for (let i = 0; i < t; i++) {
                    const t = e.start(i),
                        o = e.end(i);
                    n.push([Jn(At(t, 3)), Jn(At(o, 3))])
                }
                return n
            }(e)
        }
        f = i, y = s, t.config.embed.loop && function(e) {
            if (p && e >= Oo(t.config.video.duration) - 300) {
                w();
                const e = () => {
                    t.currentTime >= 0 && (t.events.off(g.TIME_UPDATE, e), L())
                };
                t.events.on(g.TIME_UPDATE, e)
            }
        }(m)
    })), t.events.on(Kt._scrubbingStarted, (function() {
        v = !0
    })), t.events.on(Kt._scrubbingEnded, (function() {
        v = !1, _ && A()
    })), t.events.on(Kt._configChanged, e => {
        e && (P(), r = null, a = null, s = null, l = null, c = 0, d = 0, u = [], p = !1, _ = !1, v = !1, m = 0, f = 0, y = h(), T = !0, C = !0)
    }), window.addEventListener("pagehide", (function() {
        S()
    }))
}! function(e) {
    e.WORKFLOW = "Workflow", e.PLAYBACK = "Playback"
}(yr || (yr = {}));
let Tr = {
        transcriptId: null,
        transcriptStartTime: null,
        transcriptDefaultLanguage: null,
        currentTime: null,
        leadUuid: null,
        contentType: null,
        playerBreakpoint: null,
        playerWidth: 0,
        playerHeight: 0
    },
    Lr = function() {
        function e(e) {
            this.player = e, this._configure(), this._setupEventListeners()
        }
        var t = e.prototype;
        return t._configure = function() {
            const e = this._getBPService(),
                t = Sr(vr.WEB_GLOBAL, this.player.config),
                n = new y.Configuration(e, t);
            y.BigPictureClient.configure(n)
        }, t._setupEventListeners = function() {
            wr(E({
                playerBreakpoint: this.player.store.get("ui.player.breakpoint"),
                playerWidth: this.player.store.get("ui.player.width"),
                playerHeight: this.player.store.get("ui.player.height")
            }, $o(this.player.config, this.player.store))), this.player.events.on(g.TIME_UPDATE, ({
                currentTime: e
            }) => {
                wr({
                    currentTime: e
                })
            }), this.player.events.on(Kt._transcriptSessionStarted, ({
                id: e,
                startTime: t,
                defaultLanguage: n
            }) => {
                wr({
                    transcriptId: e,
                    transcriptStartTime: t,
                    transcriptDefaultLanguage: n
                })
            }), this.player.events.on(Kt._accessGateClosed, e => {
                (null == e ? void 0 : e.leadUuid) && wr({
                    leadUuid: e.leadUuid
                })
            }), this.player.events.on(Kt._configChanged, () => {
                wr(E({}, $o(this.player.config, this.player.store)))
            }), this.player.store.watch("ui.player.breakpoint", e => {
                wr({
                    playerBreakpoint: e
                })
            }), this.player.store.watch("ui.player.width", e => {
                wr({
                    playerWidth: e
                })
            }), this.player.store.watch("ui.player.height", e => {
                wr({
                    playerHeight: e
                })
            })
        }, t._getBPService = function() {
            const e = this.player.config.request.urls.telemetry_base;
            let t;
            return t = e === y.Service.FRESNEL_PROD_CN ? y.Service.FRESNEL_PROD_CN : e === y.Service.FRESNEL_PROD ? y.Service.FRESNEL_PROD : y.Service.FRESNEL_DEV, t
        }, e
    }();

function wr(e) {
    Object.assign(Tr, e)
}

function Ar(e) {
    return hr[e]
}

function Sr(e, t, n = {}) {
    const i = function(e, t, n = {}) {
            return Object.assign({}, function(e, t) {
                var n, i, r, a, s;
                const {
                    user: l,
                    request: c,
                    video: d,
                    embed: u
                } = t;
                switch (e) {
                    case vr.WEB_GLOBAL:
                        return {
                            user: {
                                subscription_type: l.account_type || null,
                                is_mod: !!l.mod,
                                session_id: c.session || null,
                                teams: l.team_id ? [{
                                    team_id: l.team_id,
                                    team_role: uo(t)
                                }] : [],
                                user_id: l.id || null,
                                vuid: Do("vuid") || null,
                                flags: c.flags ? Object.keys(c.flags) : null,
                                is_free_trial: !1
                            },
                            application: {
                                application: "vimeo",
                                vimeo_language: c.lang || "en",
                                product: ro(t),
                                build_environment: "production",
                                version: ao()
                            },
                            platform: {
                                device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                                screen: {
                                    dpi: screen.pixelDepth,
                                    height: screen.height,
                                    width: screen.width,
                                    size: `${screen.width} x ${screen.height}`
                                },
                                network: null,
                                platform: "web"
                            }
                        };
                    case vr.COPY_VIDEO_EMBED_CODE:
                        return {
                            hash: d.unlisted_hash,
                            height: d.height,
                            is_video_password_protected: "password" === d.privacy,
                            product: yr.WORKFLOW,
                            sizing: u.playsinline ? "fixed" : "responsive",
                            video_embed_privacy: d.embed_permission,
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            width: d.width,
                            actor_resource_role: null,
                            actor_team_role: null,
                            entry_page: null,
                            is_preset_applied: null,
                            location: null,
                            page: null,
                            path: null,
                            team_owner_id: null,
                            team_size: null,
                            team_subscription_type: null,
                            upload_id: null,
                            video_app_id: null,
                            video_status: null,
                            video_type: null
                        };
                    case vr.PLAYER_PERFORMANCE_MEASUREMENT:
                        return {
                            module_player: !1,
                            device_type: lo(),
                            browser: Object.keys(o.browser).find(e => o.browser[e]) || "",
                            device_os: co(),
                            iframed: Io(),
                            measurement_type: null,
                            measurement_value: null
                        };
                    case vr.CHAPTER_SEGMENT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: (null == (r = d.owner) ? void 0 : r.id) || 0,
                            is_creator_mode: !!l.owner,
                            chapter_seek_event_delta: null,
                            fragment_no_chapters_at_seek: null,
                            is_chapter_seek: null,
                            nearest_chapter_start_time: null,
                            seek_event_start_time: null,
                            total_no_chapters_at_seek: null
                        };
                    case vr.CLICK:
                        return {
                            page: Ki(t),
                            click_type: null,
                            copy: null,
                            device_type: null,
                            feature: null,
                            location: null,
                            name: null,
                            path: null,
                            target: null,
                            target_path: null,
                            type: null
                        };
                    case vr.EMBEDDED_TRANSCRIPT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: (null == (a = d.owner) ? void 0 : a.id) || 0,
                            total_clip_duration: At(d.duration, 2),
                            embedded_transcript_session_id: Tr.transcriptId,
                            session_duration: At(Zn(Tr.transcriptStartTime), 2),
                            default_transcript_language: Tr.transcriptDefaultLanguage,
                            video_timestamp: At(Tr.currentTime, 2) || 0,
                            copy: null,
                            current_transcript_language: null,
                            element: null,
                            location: null,
                            name: null
                        };
                    case vr.CLOSED_CAPTIONS_CLICK:
                        return {
                            video_id: d.id,
                            video_privacy: d.privacy,
                            final_action_reset_all: null,
                            has_changed_background: null,
                            has_changed_font: null,
                            has_changed_window: null,
                            has_clicked_background: null,
                            has_clicked_window: null,
                            has_clicked_customize: null,
                            has_clicked_font: null,
                            has_customized: null,
                            has_reset_all: null,
                            language_selected: null
                        };
                    case vr.MULTI_AUDIO_TRACK_CLICK:
                        return {
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            video_owner_id: `${null==(s=d.owner)?void 0:s.id}`,
                            page: Ki(t),
                            event_name: null,
                            has_selected_track: null,
                            initial_track: null,
                            track_selected: null
                        };
                    case vr.OPEN_AI_OPTIONS:
                        return {
                            if_uploader: !!l.owner,
                            value: null
                        };
                    case vr.REACH_TIME_ACTION:
                        return {
                            time_action_id: null
                        };
                    case vr.VIEW_HOTSPOT:
                        return {
                            hotspot_id: null
                        };
                    case vr.CLICK_HOTSPOT:
                        return {
                            hotspot_id: null,
                            overlay_id: null,
                            click_action_type: null,
                            clickout_id: null
                        };
                    case vr.VIEW_OVERLAY:
                        return {
                            overlay_id: null
                        };
                    case vr.CLOSE_OVERLAY:
                        return {
                            overlay_id: null,
                            dwell_time: null
                        };
                    case vr.CLICK_OVERLAY:
                        return {
                            overlay_id: null,
                            click_action_type: null,
                            clickout_id: null
                        };
                    case vr.VIEW_POLL:
                        return {
                            poll_id: null
                        };
                    case vr.VOTE_POLL:
                        return {
                            poll_id: null,
                            poll_option_id: null,
                            is_poll_option_correct: null
                        };
                    default:
                        return {}
                }
            }(e, t), n)
        }(e, t, n),
        r = Ar(e);
    return new y.Event(e, r, i)
}

function Ir(e, t, n = {}, i = {}) {
    const r = Sr(e, t, n),
        a = function(e, t, n = {}) {
            const i = Er[e];
            return i ? i.reduce((e, i) => {
                var r;
                if (i === mr.LIVE && !(null == (r = t.video) ? void 0 : r.live_event_id)) return e;
                const a = Ar(i),
                    s = n[i] || {},
                    l = function(e, t, n = {}) {
                        return Object.assign({}, function(e, t) {
                            var n, i, r, a;
                            const {
                                embed: s,
                                user: l,
                                request: c,
                                video: d
                            } = t;
                            switch (e) {
                                case mr.TEAM:
                                    return {
                                        team_owner_id: l.team_origin_user_id,
                                        team_subscription_type: l.account_type,
                                        team_role: uo(t),
                                        team_id: l.team_id,
                                        joined_team_at: null,
                                        resource_permission_level: null,
                                        team_size: null
                                    };
                                case mr.WEB:
                                    return {
                                        location: "player",
                                        page_name: Ki(t),
                                        referrer: c.referrer,
                                        copy: null,
                                        path: null,
                                        referrer_page_name: null,
                                        target: null,
                                        target_path: null
                                    };
                                case mr.VIDEO:
                                    return {
                                        video_id: d.id,
                                        title: d.title,
                                        video_privacy: d.privacy,
                                        video_embed_privacy: d.embed_permission,
                                        content_rating: [`${null==(n=d.rating)?void 0:n.id}`],
                                        duration: Math.round(d.duration),
                                        resolution: `${d.width}x${d.height}`,
                                        video_height: d.height,
                                        video_width: d.width,
                                        orientation: po(d.width, d.height),
                                        is_auto_cc_enabled: null,
                                        upload_method_api: null,
                                        upload_method_api_id: null,
                                        is_demo: null,
                                        video_owner_id: (null == (i = d.owner) ? void 0 : i.id) || 0,
                                        video_owner_account_type: (null == (r = d.owner) ? void 0 : r.account_type) || "",
                                        video_categories: null,
                                        has_embed_available: !!s.settings.embed,
                                        video_version_id: mo(null == (a = d.version) ? void 0 : a.available),
                                        embed_context: s.context
                                    };
                                case mr.PLAYER:
                                    return {
                                        player_session_id: c.session,
                                        total_video_duration: d.duration,
                                        video_timestamp: At(Tr.currentTime, 2) || 0,
                                        player_location: s.on_site ? "onsite" : "embed",
                                        player_breakpoint: Tr.playerBreakpoint,
                                        player_width: Math.floor(Tr.playerWidth),
                                        player_height: Math.floor(Tr.playerHeight)
                                    };
                                case mr.ACTION:
                                    return {
                                        feature: "player",
                                        action_type: o.touch ? "tap" : "click"
                                    };
                                case mr.VIEW:
                                    return {
                                        feature: "player",
                                        view_type: "impression"
                                    };
                                case mr.LIVE:
                                    return {
                                        recurring_live_event_id: `${d.live_event_id}`,
                                        live_event_id: null,
                                        live_status: _o(null == d ? void 0 : d.live_event),
                                        live_production_method: null,
                                        encoder_type: null,
                                        audience_type: vo(d),
                                        lead_source: null,
                                        event_privacy: fo(d.privacy),
                                        live_feature: null,
                                        is_guest_speaker: null
                                    };
                                case mr.PRODUCT_ANALYTICS:
                                    return {
                                        product: "viewer_experience",
                                        feature: "player",
                                        location: "player",
                                        modal_name: null,
                                        flow: null,
                                        element: null,
                                        copy: null,
                                        device_type: lo(),
                                        is_user_facing_data: null,
                                        entity_type: null
                                    };
                                case mr.TARGET_TEAM:
                                    return {
                                        is_team_member: !!l.team_id,
                                        team_owner_id: l.team_origin_user_id,
                                        team_subscription_type: l.account_type,
                                        team_role: uo(t),
                                        team_id: l.team_id,
                                        team_size: null,
                                        resource_permission_level: null,
                                        joined_team_at: null
                                    };
                                case mr.USER_FACING_VIDEO_ANALYTICS:
                                    const e = c.atid,
                                        [u, p] = e.split(".").map(Number);
                                    return {
                                        session_ts: p,
                                        session_id: u,
                                        lead_id: Tr.leadUuid,
                                        content_type: Tr.contentType,
                                        is_do_not_track: !!s.dnt,
                                        playback_route: "player_embed",
                                        is_session_live: null
                                    };
                                case mr.THIRD_PARTY_INTEGRATION:
                                    return {
                                        is_integration: !1,
                                        integration_id: null,
                                        integration_type: null,
                                        integration_name: null,
                                        app_id: null,
                                        managed_user_id: null,
                                        partner_bucket: null,
                                        is_partner: null
                                    };
                                default:
                                    return {}
                            }
                        }(e, t), n)
                    }(i, t, s);
                return e[i] = new y.EventContext(i, a, l), e
            }, {}) : {}
        }(e, t, i);
    y.BigPictureClient.sendEventWithContexts(r, a)
}
const Pr = {
    product_analytics_context: {
        product: "analysis",
        feature: "interactive"
    }
};
let Or = function() {
    function e(e) {
        C(this, "_overlayOpenTime", void 0), C(this, "_player", void 0), this._player = e, this._overlayOpenTime = new Map
    }
    var t = e.prototype;
    return t._sendEvent = function(e, t = {}) {
        Ir(e, this._player.config, t, Pr)
    }, t.sendReachTimeAction = function({
        timeActionId: e
    }) {
        this._sendEvent(vr.REACH_TIME_ACTION, {
            time_action_id: e
        })
    }, t.sendViewHotspot = function({
        hotspotId: e
    }) {
        this._sendEvent(vr.VIEW_HOTSPOT, {
            hotspot_id: e
        })
    }, t.sendClickHotspot = function({
        hotspotId: e,
        clickActionType: t,
        clickoutId: n,
        overlayId: i
    }) {
        this._sendEvent(vr.CLICK_HOTSPOT, {
            hotspot_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null,
            overlay_id: null != i ? i : null
        })
    }, t.sendViewOverlay = function({
        overlayId: e
    }) {
        this._overlayOpenTime.set(e, h()), this._sendEvent(vr.VIEW_OVERLAY, {
            overlay_id: e
        })
    }, t.sendCloseOverlay = function({
        overlayId: e
    }) {
        const t = this._overlayOpenTime.get(e),
            n = h() - t;
        this._sendEvent(vr.CLOSE_OVERLAY, {
            overlay_id: e,
            dwell_time: n
        })
    }, t.sendClickOverlay = function({
        overlayId: e,
        clickActionType: t,
        clickoutId: n
    }) {
        this._sendEvent(vr.CLICK_OVERLAY, {
            overlay_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null
        })
    }, t.sendViewPoll = function({
        pollId: e
    }) {
        this._sendEvent(vr.VIEW_POLL, {
            poll_id: e
        })
    }, t.sendVotePoll = function({
        pollId: e,
        pollOptionId: t,
        isPollOptionCorrect: n
    }) {
        this._sendEvent(vr.VOTE_POLL, {
            poll_id: e,
            poll_option_id: t,
            is_poll_option_correct: null != n ? n : null
        })
    }, e
}();

function kr(e) {
    return Math.random() <= e
}

function Rr(e, t, n = .1) {
    kr(n) && ((e, t = {}) => {
        if (dr && e) {
            const n = Object.assign({}, t, {
                manually_captured: 1,
                player_lifespan_seconds: Math.round((Date.now() - pr) / 1e3)
            });
            newrelic.noticeError(e, n)
        }
    })(e, t)
}
window.addEventListener("unhandledrejection", e => {
    e.preventDefault(), e.reason && Rr(e.reason, {
        unhandled_rejection: 1
    })
});
var Nr = {
    setUp: function(e) {
        ((e, t = _i.VimeoPlayer) => {
            dr && (((e, t) => {
                var n, i, o;
                const r = {
                    environment: "dev" === e.request.build.js ? "dev" : "production",
                    js_modules: !0,
                    version_js: e.request.build.js,
                    version_backend: e.request.build.backend,
                    visibility_state: document.visibilityState,
                    vimeo_session: e.request.session,
                    locale: e.request.lang,
                    product: ro(e),
                    video_embed_permission: e.video.embed_permission,
                    video_privacy: e.video.privacy,
                    live_session_id: null == (n = e.video.live_event) ? void 0 : n.id,
                    rawUserAgent: navigator.userAgent,
                    background_mode: 1 === (null == (i = e.embed) || null == (o = i.settings) ? void 0 : o.background) ? 1 : 0,
                    player_name: t
                };
                if (e.request.ab_tests)
                    for (const a in e.request.ab_tests) {
                        const t = e.request.ab_tests[a];
                        r[`${a}_test`] = 1, r[`${a}_group`] = t.group;
                        for (const e in t.data) r[`${a}_data_${e}`] = t.data[e]
                    }
                e.user.logged_in && (r.userId = e.user.id);
                for (let a in r) newrelic.setCustomAttribute(a, r[a])
            })(e, t), newrelic.setErrorHandler((function(t) {
                var n;
                return !!((e, t) => {
                    var n;
                    return !!(o.appleMail || !t.request || ur || _r.some(t => {
                        var n, i;
                        return (null == e || null == (n = e.message) ? void 0 : n.includes(t)) || (null == e || null == (i = e.name) ? void 0 : i.includes(t))
                    }) || (null == e || null == (n = e.message) ? void 0 : n.startsWith("ReportingObserver")) && Math.random() > .01)
                })(t, e) || ((null == t || null == (n = t.message) ? void 0 : n.startsWith("Non-Error exception captured")) && newrelic.addToTrace({
                    name: "nonErrorException",
                    start: Date.now()
                }), !1)
            })))
        })(e.config)
    },
    captureException: Rr,
    captureMessage: function(e) {},
    captureBreadcrumb: function(e) {
        (e => {
            dr && newrelic.addToTrace({
                name: e,
                start: Date.now()
            })
        })(e)
    }
};
let Dr;

function Mr({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        a = {
            video: {},
            request: {},
            embed: {}
        };

    function s() {
        return n && n - 6e4 <= Date.now()
    }

    function l(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout(() => {
            "onLine" in navigator && !navigator.onLine || o || (o = d().catch(Nr.captureException))
        }, 1e3 * e - 6e4 - 5e3), t
    }

    function c(e, i = {}) {
        var o, s;
        clearTimeout(r);
        const c = t;
        if (isNaN(e) && "string" != typeof e) {
            t = e, n = l(t.request.expires);
            let i = new URL(window.location.href);
            const o = i.searchParams.get("referrer"),
                r = i.searchParams.get("player_id");
            return o && (t.request.referrer = o, i.searchParams.delete("referrer")), r && (t.embed.player_id = r, i.searchParams.delete("player_id")), Promise.resolve({
                old: c,
                loaded: t
            })
        }
        Date.now(), a = L(a, t);
        const d = a.request.referrer;
        d && (i.referrer = d), a.video.webinar && a.video.webinar.registrant && (i.webinar_registrant_uuid = a.video.webinar.registrant), i.s = a.request.signature, i.expires = a.request.expires, i.time = a.request.timestamp, Dr || (Dr = Ct(e));
        const u = Tt(Dr || ((null == (o = t) ? void 0 : o.player_url) ? `https://${null==(s=t)?void 0:s.player_url}` : ""), e, i);
        return T(u, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then(e => (t = e, t.view !== Xt.error && (n = l(t.request.expires), a.request.session && t.video.id === a.video.id && (t.request.session = a.request.session), d && (t.request.referrer = d), a.embed.player_id && (t.embed.player_id = a.embed.player_id), a.embed.on_site && (t.embed.on_site = 1, t.embed.context = a.embed.context)), Date.now(), {
            old: c,
            loaded: t
        })).catch(e => {
            Nr.captureException(e)
        })
    }

    function d() {
        var i;
        clearTimeout(r), Date.now();
        const a = null == (i = t) ? void 0 : i.request.referrer,
            {
                signature: s,
                session: c,
                timestamp: d,
                expires: u,
                atid: p
            } = t.request,
            _ = t.request.ott_chromecast_token;
        let v = `https://${t.player_url}/video/${t.video.id}/config/request?atid=${p}&session=${c}&signature=${s}&time=${d}&expires=${u}`;
        return _ && (v = `${v}&ott_chromecast_token=${_}`), a && (v += `${-1===v.indexOf("?")?"?":"&"}referrer=${encodeURIComponent(a)}`), T(v, {
            withCredentials: !0,
            retry: 3
        }).json().then(i => (t.request = i, a && (t.request.referrer = a), n = l(t.request.expires), Date.now(), o = null, e.fire(Kt._assetUrlsRefreshed), t.request)).catch(t => {
            const n = {
                id: "network",
                title: "Network error",
                message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
                final: !0
            };
            throw e.fire(Kt._error, n.id, n), t
        })
    }
    return window.addEventListener("online", () => {
        s() && (o = d().catch(Nr.captureException))
    }), e.on(Kt._error, e => {
        o || "media-url-expired" !== e || (o = d().catch(Nr.captureException))
    }), {
        get isExpired() {
            return s()
        },
        load: (e, t) => c(e, t),
        reload() {
            var e;
            return (null == (e = t) ? void 0 : e.video.id) ? c(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => s() ? (o || (o = d()), o) : Promise.resolve(t.request),
        refreshAssetUrls: () => d(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}

function xr(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function Br({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const s = parseInt(e, 10),
        l = parseInt(t, 10);
    return 0 === s || isNaN(s) || (r ? a.w = s : a.mw = s), 0 === l || isNaN(l) || (r ? a.h = l : a.mh = l), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function Vr(e) {
    return function(e) {
        return new Promise((t, n) => {
            const i = new Image;

            function o() {
                Nr.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        })
    }(e).catch(t => (Nr.captureException(t, {
        extra: {
            imageUrl: e
        }
    }), new Promise(() => {})))
}
const Ur = {
        id: "7742C69E",
        name: "prod"
    },
    Fr = {
        id: "BA42D416",
        name: "prod"
    },
    Hr = {
        id: "78077C77",
        name: "prod"
    },
    Gr = {
        connected: Nt(),
        disconnected: Nt(),
        playing: Nt(),
        paused: Nt(),
        buffering: Nt(),
        idle: Nt(),
        ended: Nt(),
        initialized: Nt(),
        castStateChanged: Nt(),
        sessionStateChanged: Nt(),
        timeUpdated: Nt(),
        mediaLoadedSuccess: Nt(),
        mediaLoadedFailed: Nt(),
        error: Nt()
    };
let Wr = function() {
    function e({
        core: e,
        textAlert: t = null
    }) {
        this._textAlert = t, this._core = e, this._onControlSeek = this.onControlSeek.bind(this), this._onChangeVolume = this.onChangeVolume.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onCastStateChanged = this.onCastStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onVolumeLevelChanged = this.onVolumeLevelChanged.bind(this), this._onIsMutedChanged = this.onIsMutedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = P(this._endVideo, 500)
    }
    var t = e.prototype;
    return t.calculateStartTime = function(e = null) {
        let t = Number(e) || this._core.backbone.currentTime - 7;
        return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
    }, t.loadMedia = function({
        contentId: e,
        currentTime: t = null,
        duration: n = null,
        token: i = null,
        bypassToken: o = null,
        autoRequest: r = !1,
        autoCaption: a = !0,
        autoDisconnect: s = !0,
        tracks: l = []
    } = {}) {
        if (Yr.isLoadingMedia) return Promise.resolve(!1);
        const c = this._core.config;
        e = e || c.video.id;
        const d = c.request,
            p = d.drm;
        let _;
        if (null == p ? void 0 : p.fastly) {
            const t = u(d, "files.dash.default_cdn");
            e = u(d, `files.dash.cdns.${t}.url`), _ = u(p, "cdms.widevine.license_url"), l = (d.text_tracks || []).map(e => {
                const {
                    pathname: t,
                    search: n
                } = w(e.url);
                return E(E({}, e), {}, {
                    url: `https://player.vimeo.com${t}${n}`
                })
            })
        }
        const v = this.calculateStartTime(t);
        n = Number(n) || this.duration, i = i || c.user.vimeo_api_client_token, o = o || c.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
        const m = {
            contentId: e,
            duration: n,
            autoRequest: r,
            tracks: l,
            currentTime: v,
            requestCustomData: {
                token: i,
                bypassToken: o,
                tokenType: "jwt"
            }
        };
        return this._core.config.request.ott_chromecast_token && (m.requestCustomData.ottChromecastToken = this._core.config.request.ott_chromecast_token), this._core.config.ottCastOptions && (m.ottCastOptions = this._core.config.ottCastOptions), (_ ? this._getLicenseUrl(_).then(e => E(E({}, m), {}, {
            mediaCustomData: {
                widevineLicenseServerURL: e
            }
        })) : Promise.resolve(m)).then(e => Yr.loadMedia(e)).then(() => (Yr.fire(Gr.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._core.events.fire(A), this._core.events.fire(xt._hideOutro), this._isOutroRendered = !1, a && this.onCaptionsChanged(this._core.backbone.enabledTextTrack), this._core.backbone.paused || this._core.backbone.pause(), !0)).catch(e => (Yr.fire(Gr.mediaLoadedFailed, e), s && this.endCurrentSession(), Promise.reject(e)))
    }, t._getLicenseUrl = function(e) {
        return new Promise((t, n) => {
            const i = new XMLHttpRequest;
            i.open("GET", e), i.onload = () => {
                const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                if (i.status >= 200 && i.status < 300) try {
                    t(i.response)
                } catch (De) {
                    n(e(De))
                } else n(e(i.status))
            }, i.onerror = n, i.send()
        })
    }, t.init = function() {
        this.removeInitListeners(), this.addInitListeners()
    }, t.addInitListeners = function() {
        this.addSessionStateListener(), this.addCastStateListener(), this.addIsConnectedListener()
    }, t.endCurrentSession = function(e = !0) {
        Yr.castContext && Yr.castContext.endCurrentSession(e)
    }, t.syncBackbone = function() {
        !this.isOutroRendered && this._core.backbone.paused && (this._core.backbone.currentTime = this.lastCurrentTime, this.syncTime())
    }, t.stopBackbone = function() {
        this._core.events.fire(xt._reset)
    }, t.storeBackboneData = function() {
        this.lastCurrentTime = this._core.backbone.currentTime
    }, t.applyBackboneData = function() {
        this.lastCurrentTime && (this._core.backbone.currentTime = this.lastCurrentTime)
    }, t.enableUI = function() {
        if (this._textAlert) {
            var e;
            const t = null == (e = Yr.currentSessionObj) ? void 0 : e.receiver;
            t && this._textAlert.show("Casting on " + t.friendlyName)
        }
        this._core.preview.show(), this._core.element.classList.add("is-casting")
    }, t.disableUI = function() {
        this._textAlert && this._textAlert.hide(), this.isOutroRendered || (this._core.preview.hide(), this._core.backbone.element.classList.remove("invisible")), this._core.element.classList.remove("is-casting")
    }, t.syncTime = function() {
        const e = this.lastCurrentTime / this.duration;
        Yr.fire(Gr.timeUpdated, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            percent: e
        }), e > 0 && this._core.events.fire(g.TIME_UPDATE, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            timeProgress: e
        })
    }, t._endVideo = function() {
        return this._isEndOfVideo = !0, this._core.events.fire(Kt._ended), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch(() => {
            this.showOutro()
        }) : this.showOutro(), Yr.fire(Gr.ended), !0
    }, t.showOutro = function() {
        this.isOutroRendered || (this._isOutroRendered = !0, this._core.events.fire(xt._showOutro))
    }, t.dispose = function() {
        this.endCurrentSession(), this.removeAllRemoteListeners()
    }, t.onIsMediaLoadedChanged = function(e) {
        !1 === e.value ? this.isTimeEnded && this.endVideo() : this._core.backbone.paused || this._core.backbone.pause()
    }, t.onPlayerStateChanged = function(e) {
        switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
            case Yr.PlayerState.PLAYING:
                Yr.fire(Gr.playing);
                break;
            case Yr.PlayerState.PAUSED:
                Yr.fire(Gr.paused);
                break;
            case Yr.PlayerState.BUFFERING:
                Yr.fire(Gr.buffering);
                break;
            case Yr.PlayerState.IDLE:
            default:
                Yr.fire(Gr.idle)
        }
    }, t.onVolumeLevelChanged = function(e) {
        this._core.events.fire(xt._changeVolume, e.value, !0)
    }, t.onIsMutedChanged = function(e) {
        this._core.events.fire(xt._changeVolume, e.value ? 0 : Yr.remotePlayer.volumeLevel, !0)
    }, t.onCurrentTimeChanged = function(e) {
        this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
    }, t.onChangeVolume = function(e) {
        this.volumeLevel = e
    }, t.onCaptionsChanged = function(e) {
        const t = Yr.currentSession;
        t && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
            action: "setActiveByLanguage",
            value: null == e ? void 0 : e.language
        })
    }, t.onSessionStateChanged = function(e) {
        switch (e.sessionState) {
            case Yr.SessionState.SESSION_STARTING:
                this.addPreventLocalPlayerEvents();
                break;
            case Yr.SessionState.SESSION_RESUMED:
            case Yr.SessionState.SESSION_STARTED:
                this.loadMedia();
                break;
            case Yr.SessionState.SESSION_ENDING:
            case Yr.SessionState.SESSION_ENDED:
                break;
            case Yr.SessionState.SESSION_START_FAILED:
                this.removePreventLocalPlayerEvents()
        }
        Yr.fire(Gr.sessionStateChanged, e.sessionState)
    }, t.onCastStateChanged = function(e) {
        Yr.fire(Gr.castStateChanged)
    }, t.onIsConnectedChanged = function(e) {
        e.value ? this.onConnected() : this.onDisconnected()
    }, t.onConnected = function() {
        this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), Yr.fire(Gr.connected)
    }, t.onDisconnected = function() {
        this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), Yr.fire(Gr.disconnected)
    }, t.onConfigChanged = function() {
        this.loadMedia()
    }, t.onReset = function() {
        this.loadMedia()
    }, t.onPlayOrPausePressed = function() {
        this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && Yr.remotePlayerController.playOrPause(), this._core.events.halt()
    }, t.onControlSeek = function(e) {
        this.currentTime = e, this._core.events.halt()
    }, t.addSessionStateListener = function() {
        Yr.castContext && Yr.castContext.addEventListener(Yr.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
    }, t.addCastStateListener = function() {
        Yr.castContext && Yr.castContext.addEventListener(Yr.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)
    }, t.addMessageListener = function() {
        const e = Yr.currentSession;
        e && e.addMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.onMessageReceived = function(e, t) {
        "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), Yr.fire(Gr.error, new Error("Chromecast encountered an error and media finished."))))
    }, t.addIsConnectedListener = function() {
        Yr.remotePlayerController && Yr.remotePlayerController.addEventListener(Yr.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.addPreventLocalPlayerEvents = function() {
        this._core.events.prependOn([Kt._playButtonPressed, Kt._pauseButtonPressed, Kt._scrubbingStarted, Kt._scrubbingEnded, S.BUFFER_STARTED, S.BUFFER_ENDED, xt._seek, Kt._volumeChanged, Kt._captionsChanged, Kt._configChanged, xt._reset], this._preventPlayerDefaultEvent)
    }, t.addRemotePlayerListenersOnIdle = function() {
        this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
    }, t.addLocalPlayerListeners = function() {
        this._core.events.prependOn(Kt._playButtonPressed, this._onPlayOrPausePressed), this._core.events.prependOn(Kt._pauseButtonPressed, this._onPlayOrPausePressed), this._core.events.prependOn(Kt._scrubbingStarted, this._preventPlayerDefaultEvent), this._core.events.prependOn(Kt._scrubbingEnded, this._preventPlayerDefaultEvent), this._core.events.prependOn(S.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.prependOn(S.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.prependOn(xt._seek, this._onControlSeek), this._core.events.prependOn(Kt._volumeChanged, this._onChangeVolume), this._core.events.on(Kt._captionsChanged, this._onCaptionsChanged), this._core.events.on(Kt._configChanged, this._onConfigChanged), this._core.events.on(xt._reset, this._onReset)
    }, t.preventPlayerDefaultEvent = function() {
        this._core.events.halt()
    }, t.addCurrentTimeChangedListener = function() {
        Yr.remotePlayerController && Yr.remotePlayerController.addEventListener(Yr.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.addIsMediaLoadedChangedListener = function() {
        Yr.remotePlayerController && Yr.remotePlayerController.addEventListener(Yr.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.addPlayerStateChangedListener = function() {
        Yr.remotePlayerController && Yr.remotePlayerController.addEventListener(Yr.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.addVolumeLevelChangedListener = function() {
        Yr.remotePlayerController && (Yr.remotePlayerController.addEventListener(Yr.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Yr.remotePlayerController.addEventListener(Yr.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.addRemotePlayerListenersOnPlaying = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
    }, t.removeRemotePlayerListenersOnIdle = function() {
        this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
    }, t.removeInitListeners = function() {
        Yr.castContext && (Yr.castContext.removeEventListener(Yr.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), Yr.castContext.removeEventListener(Yr.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)), Yr.remotePlayerController && Yr.remotePlayerController.removeEventListener(Yr.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.removeRemotePlayerListenersOnPlaying = function() {
        this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
    }, t.removeMessageListener = function() {
        const e = Yr.currentSession;
        e && e.removeMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.removeCurrentTimeChangedListener = function() {
        Yr.remotePlayerController && Yr.remotePlayerController.removeEventListener(Yr.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.removeIsMediaLoadedChangedListener = function() {
        Yr.remotePlayerController && Yr.remotePlayerController.removeEventListener(Yr.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.removePlayerStateChangedListener = function() {
        Yr.remotePlayerController && Yr.remotePlayerController.removeEventListener(Yr.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.removeVolumeLevelChangedListener = function() {
        Yr.remotePlayerController && (Yr.remotePlayerController.removeEventListener(Yr.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Yr.remotePlayerController.removeEventListener(Yr.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.removePreventLocalPlayerEvents = function() {
        this._core.events.off([Kt._playButtonPressed, Kt._pauseButtonPressed, Kt._scrubbingStarted, Kt._scrubbingEnded, S.BUFFER_STARTED, S.BUFFER_ENDED, xt._seek, Kt._volumeChanged, Kt._captionsChanged, Kt._configChanged, xt._reset], this._preventPlayerDefaultEvent)
    }, t.removeLocalPlayerListeners = function() {
        this._core.events.off(Kt._playButtonPressed, this._onPlayOrPausePressed), this._core.events.off(Kt._pauseButtonPressed, this._onPlayOrPausePressed), this._core.events.off(Kt._scrubbingStarted, this._preventPlayerDefaultEvent), this._core.events.off(Kt._scrubbingEnded, this._preventPlayerDefaultEvent), this._core.events.off(S.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.off(S.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.off(xt._seek, this._onControlSeek), this._core.events.off(Kt._volumeChanged, this._onChangeVolume), this._core.events.off(Kt._captionsChanged, this._onCaptionsChanged), this._core.events.off(Kt._configChanged, this._onConfigChanged), this._core.events.off(xt._reset, this._onReset)
    }, t.removeRemotePlayerListeners = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
    }, t.removeAllRemoteListeners = function() {
        this.removeRemotePlayerListeners(), this.removeInitListeners()
    }, I(e, [{
        key: "currentTime",
        get: function() {
            return this.lastCurrentTime || 0
        },
        set: function(e) {
            Yr.remotePlayer && Yr.remotePlayerController && (Yr.remotePlayer.currentTime = e, Yr.remotePlayerController.seek(), this.lastCurrentTime = e)
        }
    }, {
        key: "isTimeEnded",
        get: function() {
            return this.lastCurrentTime + .5 >= this.duration
        }
    }, {
        key: "isOutroRendered",
        get: function() {
            return this._isOutroRendered || !1
        }
    }, {
        key: "isLooped",
        get: function() {
            return this._core.config.embed.loop
        }
    }, {
        key: "isEndOfVideo",
        get: function() {
            return this._isEndOfVideo || !1
        }
    }, {
        key: "volumeLevel",
        set: function(e) {
            Yr.remotePlayer && Yr.remotePlayerController && (Yr.remotePlayer.volumeLevel = e, Yr.remotePlayerController.setVolumeLevel())
        },
        get: function() {
            return Yr.remotePlayer ? Yr.remotePlayer.volumeLevel : 0
        }
    }, {
        key: "duration",
        get: function() {
            return this._core.config.video.duration
        }
    }, {
        key: "isPlayingOrPaused",
        get: function() {
            return Yr.remotePlayer ? Yr.remotePlayer.playerState === Yr.PlayerState.PLAYING || Yr.remotePlayer.playerState === Yr.PlayerState.PAUSED : null
        }
    }, {
        key: "isIdle",
        get: function() {
            return Yr.remotePlayer ? null === Yr.remotePlayer.playerState || Yr.remotePlayer.playerState === Yr.PlayerState.IDLE : null
        }
    }, {
        key: "isMediaLoaded",
        get: function() {
            return !!Yr.remotePlayer && Yr.remotePlayer.isMediaLoaded
        }
    }]), e
}();
const Yr = O(new(function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    k(t, e);
    var n = t.prototype;
    return n.init = function({
        appId: t,
        chromecastPlayer: n = null
    } = {}) {
        var i, o;
        return t || (t = (null == n || null == (i = n._core) ? void 0 : i.config.request.flags.ott) ? (null == n || null == (o = n._core) ? void 0 : o.config.ottCastOptions) ? n._core.config.ottCastOptions.appId ? n._core.config.ottCastOptions.appId : Fr.id : Hr.id : Ur.id), this.chromecastPlayer = n, this.setup().then(n => (n && (e.prototype.init.call(this, {
            receiverApplicationId: t,
            autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
        }), this.chromecastPlayer && this.chromecastPlayer.init(), this.fire(Gr.initialized)), n)).catch(e => (this.fire(Gr.error, e), Promise.reject(e)))
    }, n.dispose = function() {
        this.chromecastPlayer = null
    }, I(t, [{
        key: "chromecastPlayer",
        get: function() {
            return this._chromecastPlayer
        },
        set: function(e) {
            if (e && !(e instanceof Wr)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
            this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
        }
    }]), t
}(R)));

function qr(e) {
    return e.replace(/(_\w)/g, e => e[1].toUpperCase())
}

function $r(e) {
    return function e(t, n) {
        return Object.keys(n).reduce((i, o) => (n[o] && "object" == typeof n[o] ? i[t(o)] = e(t, n[o]) : i[t(o)] = n[o], i), {})
    }(qr, e)
}
const Kr = e => ({
        type: "CONFIG_LOAD",
        payload: E({}, $r(e))
    }),
    jr = e => ({
        type: "LIVE_SETTINGS_UPDATE",
        payload: e
    });

function zr(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.liveEvent ? E(E({}, e), n.video.liveEvent) : null;
        case "LIVE_UPDATE":
            return E(E({}, e), n);
        case "LIVE_SET_START_TIME":
            return E(E({}, e), {}, {
                ingest: E(E({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return E(E({}, e), {}, {
                settings: E(E({}, e.settings), n)
            });
        default:
            return e
    }
}
const Xr = e => {
        var t;
        return !!(null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Zr = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    Jr = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.scheduledStartTime) || null
    },
    Qr = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.startTime) || null
    },
    ea = e => {
        var t;
        return "pending" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    ta = e => {
        var t;
        return "active" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    na = e => {
        var t;
        return "started" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    ia = e => {
        var t;
        return "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    oa = e => Xr(e) && !ia(e),
    ra = e => {
        var t, n;
        return "done" === (null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status)
    },
    sa = e => {
        var t, n;
        return null == e || null == (t = e.liveEvent) || null == (n = t.settings) ? void 0 : n.eventSchedule
    };
var la = Object.freeze({
    __proto__: null,
    default: zr,
    liveExists: Xr,
    liveStatus: Zr,
    liveArchiveStatus: e => {
        var t, n;
        return null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status
    },
    dashLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.dash_noredirect
    },
    hlsLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.hls
    },
    scheduledLiveStartTime: Jr,
    liveStartTime: Qr,
    isLivePending: ea,
    isLiveActive: ta,
    isLiveStarted: na,
    isLiveEnded: ia,
    liveInProgress: oa,
    isLiveArchived: ra,
    hasEventSchedule: sa
});
const ca = (e, t, n) => {
        let i;
        try {
            i = new URL(e)
        } catch (De) {
            return null
        }
        const o = Array.isArray(t) ? t : [t],
            r = o.map((function(e) {
                return `vimeo_${e}`
            })).concat(o),
            a = new URLSearchParams(i.hash.substring(1));
        let s = null;
        return r.some(e => {
            const t = `${e}_${n}`,
                i = a.get(t) || a.get(e);
            return !!i && (s = (e => {
                var t;
                let n, i = !1,
                    o = "0",
                    r = "0",
                    a = "0",
                    s = e;
                const l = s.startsWith("-");
                if (l && (s = s.substring(1)), n = s.match(/^(\d*\.?\d+)$/), (null == (t = n) ? void 0 : t.length) && (i = !0, a = n[0]), !1 === i && (n = s.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = "0", r = "0", a = "0"] = n)), !1 === i && (n = s.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = "0", o = "0"] = s.split(":").reverse())), !i) return null;
                const c = 60 * Number(o) * 60 + 60 * Number(r) + Number(a);
                return l ? -c : c
            })(i), !0)
        }), s
    },
    da = (e, t, n) => -1 === e.indexOf("#") ? null : ca(e, t, n);

function ua(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function pa() {}

function _a(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}
const va = _a((function(e) {
        return new Promise((t, n) => {
            fa(e) ? t() : (e.events.once(g.LOADED_DATA, () => {
                fa(e) && t()
            }), e.events.once(g.PLAYING, () => {
                n("Video started playing before start time thumbnail could be shown")
            }))
        })
    })),
    ma = _a((function(e) {
        return function(t) {
            var n = function() {
                if (ha(e)) return function(e) {
                    if (e && e.then) return e.then(pa)
                }(function(t, n) {
                    try {
                        var i = ua(e.ready(), (function() {
                            return ua(e.inView(), (function() {
                                return e.backbone.preload = "auto", ua(va(e), (function() {
                                    ! function(e) {
                                        var t, n;
                                        null == (t = e.backbone.element) || null == (n = t.classList) || n.remove("invisible"), e.preview.hide()
                                    }(e)
                                }))
                            }))
                        }))
                    } catch (De) {
                        return
                    }
                    return i && i.then ? i.then(void 0, n) : i
                }(0, (function(e) {})))
            }();
            if (n && n.then) return n.then(pa)
        }()
    }));

function fa(e) {
    return e.currentTime === e.startTime && e.backbone.readyState >= fi.HAVE_CURRENT_DATA
}

function ha(e) {
    var t, n;
    const i = 1 === (null == e || null == (t = e.config) || null == (n = t.embed) ? void 0 : n.autoplay);
    return o.videoContentPreload && e.segmentedPlaybackEnabled && !i
}

function ga(e) {
    return !!ha(e) && e.backbone.readyState < fi.HAVE_CURRENT_DATA
}
const ba = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}((function(e) {
    const {
        events: t
    } = e;
    return new Promise(n => {
        t.on(Kt._parentUrlAvailable, (function(i) {
            const {
                backbone: o
            } = e, {
                startTime: r,
                endTime: a
            } = function(e, t) {
                const {
                    video: n,
                    embed: i
                } = t.config, o = n.id, r = n.duration, a = i.chapters, s = ((e, t) => da(e, "chapter", t))(e, o);
                let l, c;
                return s ? (({
                    startTime: l,
                    endTime: c
                } = ya(s, a)), Ta(t, s)) : (l = ((e, t) => da(e, tn, t))(e, o), c = ((e, t) => da(e, "end", t))(e, o)), ({
                    startTime: l,
                    endTime: c
                } = Ca(l, c, r)), {
                    startTime: l,
                    endTime: c
                }
            }(i, e);
            n({
                startTime: r,
                endTime: a
            }), null !== r && o.currentTime !== r && t.fire(xt._setTime, r, r / o.duration)
        }))
    })
}));

function Ea(e) {
    const {
        video: t,
        embed: n
    } = e.config;
    let i;
    if (!(null == t ? void 0 : t.live_event)) {
        let i = null,
            r = null;
        const a = ((e, t) => ca(e, "chapter", t))(document.location.href, t.id);
        a ? (({
            startTime: i,
            endTime: r
        } = ya(a, n.chapters)), Ta(e, a)) : ({
            startTime: i,
            endTime: r
        } = function(e, t) {
            const n = document.location.href;
            let i = ((e, t) => ca(e, tn, t))(n, e),
                o = ((e, t) => ca(e, "end", t))(n, e);
            var r, a;
            return null !== i && function(e) {
                var t; - 1 !== e.indexOf("at=") && (null == (t = history) ? void 0 : t.replaceState) && history.replaceState("", "", window.location.pathname + window.location.search)
            }(null == (r = document) || null == (a = r.location) ? void 0 : a.hash), ({
                startTime: i,
                endTime: o
            } = Ca(i, o, t)), {
                startTime: i,
                endTime: o
            }
        }(t.id, t.duration)), o(i, r), null === i && null === r && function(e, t, n) {
            e && e.then || (e = Promise.resolve(e)), t && e.then(t)
        }(ba(e), (function({
            startTime: e,
            endTime: t
        }) {
            o(e, t)
        }))
    }

    function o(o, r) {
        null !== o && (e.startTime = Et(o, 0, t.duration)), null !== r && (e.endTime = r, i = function({
            player: e,
            startTime: t,
            endTime: n,
            loop: i = !1
        }) {
            let o = !0,
                r = !1;
            const {
                events: a
            } = e;
            return function() {
                const i = n - t,
                    o = {
                        duration: i,
                        endTime: n,
                        startTime: t
                    },
                    r = {
                        get currentFragment() {
                            return o
                        },
                        firstFragmentDuration: i,
                        checkForNewFragment: li,
                        reset: li,
                        hibernate: li,
                        wake: li
                    },
                    a = function(e, t) {
                        return [1e3 * e, 1e3 * t]
                    }(t, n);
                e.overrideFragmentsHandler(r, a)
            }(), ma(e), a.on(g.TIME_UPDATE, s), a.on(Kt._playButtonPressed, c), a.on(Kt._configChanged, d), a.on(g.SEEKED, u), a.once(A, (function() {
                o && Ir(vr.PLAY_SEGMENT, e.config, {
                    start_time: t,
                    end_time: n
                })
            })), () => {
                o = !1, a.off(g.TIME_UPDATE, s), a.off(Kt._playButtonPressed, c), a.off(Kt._configChanged, d), a.off(g.SEEKED, u), e.restoreLastFragmentsHandler()
            };

            function s({
                currentTime: o
            }) {
                o >= n && (i ? l(t) : (e.backbone.pause(), a.fire(g.ENDED)))
            }

            function l(t) {
                r = !1, e.backbone.currentTime = t
            }

            function c() {
                e.backbone && (e.backbone.currentTime >= n || e.backbone.currentTime < t) && l(t)
            }

            function d(t) {
                t && (e.startTime = null, e.endTime = null)
            }

            function u() {
                o && r && Ir(vr.SEEK_INSIDE_SEGMENT, e.config, {
                    start_time: t,
                    end_time: n
                }), r = !0
            }
        }({
            player: e,
            startTime: null != o ? o : 0,
            endTime: r,
            loop: n.loop
        }), e.ready().then(() => {
            Ir(vr.EMBED_SEGMENT, e.config, {
                start_time: o,
                end_time: r
            })
        }).catch(e => {}))
    }
    return {
        clearSegmentedPlayback: () => null == i ? void 0 : i()
    }
}

function ya(e, t) {
    const n = null == t ? void 0 : t.find(t => t.id === e);
    let i = {
        startTime: null,
        endTime: null
    };
    return n && (i = {
        startTime: n.timecode,
        endTime: null
    }), i
}

function Ca(e, t, n) {
    let i = e,
        o = t;
    return i && (i = Math.max(i, 0)), o && (o < 0 && (o = Math.max(0, n + o)), o = Math.min(o, n), i ? i > o && (i = null, o = null) : i = 0), {
        startTime: i,
        endTime: o
    }
}

function Ta(e, t) {
    e.events.once(A, () => {
        Ir(vr.CHAPTER_PLAYED, e.config, {
            chapter_id: t
        })
    })
}

function La(e, t, n) {
    let i = Promise.resolve();
    const r = !ha(e) && !!e.config.video.thumbs.base;

    function a() {
        return n.getAttribute("data-thumb")
    }

    function s() {
        return xr(t.get("ui.player.width") * o.devicePixelRatio, t.get("ui.player.height") * o.devicePixelRatio)
    }

    function l() {
        return t.get(Xr) && !t.get(na) || !e.config.embed.autoplay || Yr.isCastConnected
    }

    function c() {
        if (!r) return Promise.resolve();
        const {
            width: i,
            height: o
        } = s(), c = Br({
            width: i,
            height: o,
            baseUrl: e.config.video.thumbs.base
        });
        n.setAttribute("data-thumb", c), n.setAttribute("data-thumb-width", i);
        const d = Vr(c).then(e => (t.dispatch(((e, t) => ({
            type: "PREVIEW_SET_SIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e.width, e.height)), l() && (n.style.backgroundImage = `url(${a()})`), e));
        return l() ? Promise.race([d, new Promise(e => setTimeout(e, 2e3))]) : Promise.resolve()
    }
    return i = c(), e.events.on(Kt._didEnterFullscreen, () => {
        n.classList.contains("vp-preview-invisible") && "beginning" !== e.config.embed.outro || (i = c())
    }), t.watch("ui.player.width", P(() => {
        i = i.then(() => function() {
            const {
                width: e
            } = s(), t = n.getAttribute("data-thumb-width");
            return e <= parseInt(t, 10) || 0 === e ? Promise.resolve() : c()
        }()).catch(e => {})
    }, 150)), t.watch("ui.preview.scaleFactor", e => {
        n.classList.toggle("vp-preview-cover", e > 1)
    }), {
        show: function() {
            n.style.backgroundImage = `url(${a()})`, n.classList.remove("vp-preview-invisible")
        },
        hide: function() {
            n.classList.add("vp-preview-invisible")
        },
        resetThumbnail: function() {
            n.setAttribute("data-thumb", ""), n.setAttribute("data-thumb-width", ""), n.style.backgroundImage = ""
        },
        getThumbnail: a,
        loadThumbnail: c,
        thumbnailPromise: i
    }
}

function wa(e) {
    const t = !ha(e);

    function n(e) {
        if ("opacity" === e.propertyName) {
            const e = i();
            var t;
            e && (N(e).off("transitionend", n), null == e || null == (t = e.parentNode) || t.removeChild(e))
        }
    }

    function i() {
        return document.querySelector(".vp-placeholder")
    }
    return {
        hide: function() {
            if (t) {
                const e = i();
                e && (N(e).on("transitionend", n), e.classList.add("vp-placeholder-fadeout"))
            }
        }
    }
}
const Aa = e => ({
        type: "CAPTIONS_SET_FONT_SIZE",
        payload: e
    }),
    Sa = e => ({
        type: "CAPTIONS_SET_FONT_FAMILY",
        payload: e
    }),
    Ia = e => ({
        type: "CAPTIONS_SET_FONT_OPACITY",
        payload: e
    }),
    Pa = e => ({
        type: "CAPTIONS_SET_COLOR",
        payload: e
    }),
    Oa = e => ({
        type: "CAPTIONS_SET_BACKGROUND_OPACITY",
        payload: e
    }),
    ka = e => ({
        type: "CAPTIONS_SET_BACKGROUND_COLOR",
        payload: e
    }),
    Ra = e => ({
        type: "CAPTIONS_SET_WINDOW_OPACITY",
        payload: e
    }),
    Na = e => ({
        type: "CAPTIONS_SET_WINDOW_COLOR",
        payload: e
    }),
    Da = e => ({
        type: "CAPTIONS_SET_EDGE_STYLE",
        payload: e
    }),
    Ma = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "White"
            }, {
                id: "yellow",
                label: "Yellow"
            }, {
                id: "green",
                label: "Green"
            }, {
                id: "cyan",
                label: "Cyan"
            }, {
                id: "blue",
                label: "Blue"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Red"
            }, {
                id: "black",
                label: "Black"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Color",
            dispatch: ka
        },
        color: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "color",
            cookie: "color",
            title: "Color",
            dispatch: Pa
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Size",
            dispatch: Aa
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Monospace Serif"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Proportional Serif"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Monospace Sans-Serif"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Proportional Sans-Serif"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursive"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Small Capitals"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Family",
            dispatch: Sa
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacity",
            dispatch: Ia
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "None"
            }, {
                id: "shadow",
                label: "Drop Shadow"
            }, {
                id: "raised",
                label: "Raised"
            }, {
                id: "depressed",
                label: "Depressed"
            }, {
                id: "outline",
                label: "Outline"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Edge style",
            dispatch: Da
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacity",
            dispatch: Oa
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Color",
            dispatch: Na
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacity",
            dispatch: Ra
        }
    }),
    xa = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    },
    Ba = ["quality", "volume", "captions", "transcript", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity", "audio_language", "audio_kind", "qoe_survey_vote"];
let Va = null;

function Ua(e) {
    const t = Ma(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = Do("player")
        } catch (De) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = No(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = No(n), i && function(t, n) {
            if (Va) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    Va.then(n => {
                        const i = gt(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    }).catch(t => {
                        Nr.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    })
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            Ba.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            Ba.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o(Ba);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=No(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    document.cookie = a
                } catch (De) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        switch (t) {
            case "sync_quality":
                e.events.fire(xt._changeQuality, n, !0);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(xt._changeVolume, n, !0);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(xt._turnCaptionsOff, !0);
                    break
                }
                e.events.fire(xt._turnCaptionsOn, n, !0);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(Kt._userLogIn) : !t && e.config.user.logged_in && e.events.fire(Kt._userLoggedOut))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(Kt._becameInactive)
        }
    }
    return e.events.on(Kt._qualityChanged, (function(e, t) {
            t || r("quality", e)
        })),
        function() {
            const t = (t, n) => {
                e.config.request.cookie.volume = No(t), n || r("volume", t, !1)
            };
            e.events.on(Kt._volumeChanged, t), e.events.on(Kt._mutedChanged, (e, n) => {
                e && t(0, n)
            })
        }(), e.events.on(Kt._captionsChanged, (function(t, n) {
            if (t) {
                const i = `${t.language}.${t.kind}`;
                return e.config.request.cookie.captions = No(i), void(n || r("captions", e.config.request.cookie.captions))
            }
            e.config.request.cookie.captions = null, n || r("captions", null)
        })), e.events.on(xt._changeCaptionsStyles, (function(t, n) {
            const {
                dispatch: i,
                cookie: o
            } = t;
            e.store.dispatch(i(n)), r(`captions_${o}`, No(n))
        })), e.events.on(xt._resetCaptionsStyles, (function() {
            e.store.dispatch({
                type: "CAPTIONS_RESET"
            }), Object.keys(t).forEach(e => {
                const {
                    cookie: n
                } = t[e];
                r(`captions_${n}`, null)
            })
        })), e.events.on(Kt._transcriptChanged, (function(t, n) {
            if (t) return e.config.request.cookie.transcript = No(t.language), void(n || r("transcript", e.config.request.cookie.transcript));
            e.config.request.cookie.transcript = null, n || r("transcript", null)
        })),
        function() {
            const t = ["descriptions", "main-desc"];
            e.events.on(xt._changeAudioTrack, (function(n, i) {
                e.config.request.cookie.audio_language = (null == n ? void 0 : n.language) ? No(n.language) : null, e.config.request.cookie.audio_kind = t.includes(null == n ? void 0 : n.kind) ? No(n.kind) : null, i || (r("audio_language", e.config.request.cookie.audio_language), r("audio_kind", e.config.request.cookie.audio_kind))
            }))
        }(), e.events.on(Kt._qoeSurveyPresented, (function() {
            const t = Date.now();
            e.config.request.cookie.qoe_survey_vote = t, r("qoe_survey_vote", t)
        })), e.events.on(Kt._playButtonPressed, (function() {
            e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(Kt._becameActive))
        })), e.events.on([Kt._pauseButtonPressed, Kt._ended], (function() {
            o("active") === e.config.request.session && r("active", null)
        })), e.events.on(Kt._userLoggedIn, (function() {
            r("login", !0)
        })), n && !Va && (Va = function(t) {
            return new Promise((n, i) => {
                document.createElement("a").href = e.config.request.urls.proxy;
                const o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    const n = gt(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }, o.onerror = function(e) {
                    i(e)
                };
                const r = setTimeout(() => {
                    i()
                }, 1e4);
                window.addEventListener("message", (function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
                }), !1), document.body.appendChild(o)
            })
        }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
            const n = gt(e.config.request.urls.proxy);
            t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
        }), !1) : window.addEventListener("storage", (function(e) {
            var t;
            if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
                try {
                    if (window.localStorage.getItem(e.key) !== e.newValue) return
                } catch (n) {}
                try {
                    a(e.key, JSON.parse(e.newValue))
                } catch (n) {
                    Nr.captureException(n, {
                        extra: {
                            key: e.key,
                            oldValue: e.oldValue,
                            newValue: e.newValue
                        }
                    })
                }
            }
        }), !1), {
            reset: function() {
                r("login", !!e.config.user.logged_in)
            }
        }
}

function Fa(e, t) {
    return function(e, t = null) {
        const n = {
            feature: t,
            $deeplink_path: "app.vimeo.com/" + e,
            $always_deeplink: !0,
            ref: "player",
            context: "player"
        };
        let i = "",
            o = [];
        for (let r in n) o.push(`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`);
        return i = o.join("&"), `https://bnc.lt/a/key_live_jpj6Duy53e6MhounkriNljdgsBhGbf0d?${i}`
    }(`videos/${e}`, t)
}

function Ha() {}

function Ga(e, t, i) {
    const r = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t, n;
                    if (pn.includes(null == e || null == (t = e.config) || null == (n = t.user) ? void 0 : n.id)) return function(e, t) {
                        return e && e.then ? e.then(Ha) : Promise.resolve()
                    }(te(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.refreshAssetUrls()
            }))
        })),
        a = e.events;
    let s = e.backbone;
    const l = Ma(),
        c = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad),
        d = (o.iOS >= 8 || Qt) && !o.iPad;
    let u = !1,
        p = !1,
        _ = !1,
        v = !1,
        m = null,
        f = !1,
        h = null,
        b = !1,
        E = !1,
        y = !1,
        C = !1,
        T = !1;

    function L(e) {
        s.element.classList.remove("invisible"), w()
    }

    function w() {
        let e = s.play();
        return T && (e = e.catch(I)), e.catch(O).then(k)
    }

    function I(e) {
        if (T = !1, P(e)) return a.fire(xt._changeMuted, !0, !0), s.play();
        throw e
    }

    function P(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function O(e) {
        return a.fire(Kt._playRejected, e), new Promise(() => {})
    }

    function k() {
        a.fire(Kt._playResolved)
    }

    function R(e) {
        try {
            s.currentTime = e
        } catch (t) {}
    }

    function N() {
        v || f || u && s.paused && w()
    }

    function ne() {
        let t = "none";
        ("metadata" === e.config.request.flags.preload_video || c || o.iOS >= 8 || Qt) && (t = "metadata"), "auto" === e.config.request.flags.preload_video && (t = "metadata", "MediaSourceScanner" === s.currentScannerName && (t = "auto")), o.isGoogleBot && (t = "none"), s.preload = t, a.on(Kt._mousedOver, (function() {
            e.config.request && "metadata_on_hover" === e.config.request.flags.preload_video && !_ && e.verifyConfig().then(() => (s.preload = "metadata", !0)).catch(e => {})
        })), a.on(S.LOAD_SEGMENT_FAILED, (function(e) {
            Nr.captureException(e)
        }))
    }

    function ie() {
        C = !1;
        const t = s.video;
        if (s.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (s.hasTextTrack(t)) {
                    const e = !0;
                    a.fire(xt._turnCaptionsOn, t, e)
                }
            } else a.on(S.TEXT_TRACKS_AVAILABLE, () => {
                n(), i()
            }), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (s.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                a.fire(xt._turnCaptionsOn, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(l).forEach(t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = l[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some(e => e.id === r);
                e.store.dispatch(i(a ? r : xa[t]))
            })
        }
    }

    function oe(e, t, n, i) {
        if (p) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), p = !1
        }
    }

    function re() {
        e.startTime > 0 && a.fire(xt._setTime, e.startTime, e.startTime / s.duration)
    }

    function ae() {
        if (e.config.embed.autoplay) {
            var n, i;
            if (t.get(Xr) && !t.get(na)) return;
            if (t.get(Xr) && !Ro(null == (n = e.config.video) ? void 0 : n.live_event)) return void setTimeout((function() {
                a.fire(Kt._liveEventSafeToPlay), a.fire(Kt._playButtonPressed)
            }), ko(null == (i = e.config.video) ? void 0 : i.live_event));
            a.fire(Kt._playButtonPressed)
        }
    }
    s.element.classList.add("invisible"), d && s.element.classList.add("hide-webkit-controls"), e.config.video.live_event && i.classList.add("live-background"), e.config.embed.transparent && i.classList.add("transparent"), t.watch(Zr, (function(e) {
            "started" === e && setTimeout(() => {
                ie(), s.element.classList.remove("invisible"), a.fire(Kt._liveEventSafeToPlay), a.fire(Kt._playButtonPressed)
            }, 12e3)
        })), t.watch(ra, r), t.watch("ui.video.scaleFactor", e => {
            s.element.classList.toggle("vp-telecine-cover", e > 1)
        }),
        function t() {
            a.once(Kt._swapVideo, t), s = e.backbone, Pt(s.on, a.fire, [D, M, x, B, A, V, U, F, H, G, W, Y, q, $.ACTIVATED, $.AVAILABLE, $.DEACTIVATED, $.UNAVAILABLE, K.ARCHIVE_DONE, K.EVENT_ACTIVE, K.EVENT_ENDED, K.EVENT_STARTED, K.STREAM_OFFLINE, K.STREAM_ONLINE, K.BUFFER_GAP_JUMP, K.BUFFER_GAP_JUMP_PREVENT, K.STALL_JUMP, K.SETTINGS_UPDATED, K.LOW_LATENCY_FALLBACK, K.LIVE_STATS_SUCCESS, K.LIVE_STATS_FAILURE, K.LATENCY_UPDATED, j.MEDIASESSION_PAUSE, j.MEDIASESSION_PLAY, j.MEDIASESSION_SEEK_BACKWARD, j.MEDIASESSION_SEEK_FORWARD, j.MEDIASESSION_SEEK_TO, S.AV_DURATION_MISMATCH, S.BANDWIDTH, S.BUFFER_ENDED, S.BUFFER_OCCUPANCY, S.BUFFER_STARTED, S.CHAPTER_CUES_UPDATED, S.CUE_POINT, S.CURRENT_FILE_CHANGE, S.DOWNLOAD_END, S.DOWNLOAD_TIMEOUT, S.DRM_AUTH_SUCCESS, S.DRM_KEY_SWITCH, S.DROPPED_FRAMES, S.MANIFEST_LOADED, S.MANIFEST_TIMEOUT, S.QUOTA_EXCEEDED_ERROR, S.SCANNER_CHANGE, S.STREAM_BUFFER_START, S.STREAM_CHANGE, S.STREAM_CHANGE_START, S.STREAM_TARGET_CHANGE, S.AVAILABLE_STREAMS_CHANGED, S.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, S.TEXT_TRACKS_AVAILABLE, S.DROPPED_FRAME_PERCENT_EXCEEDED, S.LOAD_SEGMENT_FAILED, S.AUDIO_TRACK_CHANGED, S.SEGMENT_CUES_LOADED, z.CAMERA_CHANGE, z.CAMERA_UPDATE, z.MOTION_END, z.MOTION_START, z.SPATIAL_UNSUPPORTED, z.WEBVR_ENTER, z.WEBVR_EXIT, z.WEBVR_HARDWARE_AVAILABLE, g.DURATION_CHANGE, g.ENDED, g.ERROR, g.LOAD_START, g.LOADED_DATA, g.LOADED_METADATA, g.PAUSE, g.PLAY, g.PLAYING, g.PROGRESS, g.RATE_CHANGE, g.RESIZE, g.SEEKED, g.SEEKING, g.STALLED, g.TIME_UPDATE, g.VOLUME_CHANGE, g.WAITING, g.ENTER_PICTURE_IN_PICTURE, g.LEAVE_PICTURE_IN_PICTURE, g.WEBKIT_BEGIN_FULLSCREEN, g.WEBKIT_END_FULLSCREEN])
        }(), Pt(Yr.on, a.fire, [Gr.connected, Gr.disconnected]), ne(), a.on(g.LOADED_METADATA, (function(t) {
            e.config.video.duration = s.duration, e.config.video.video_width = s.videoWidth, e.config.video.video_height = s.videoHeight
        })), a.on(g.DURATION_CHANGE, (function(t) {
            e.config.video.duration = s.duration
        })), a.on(S.SCANNER_CHANGE, () => {
            ne(), setTimeout(() => {
                a.fire(X.settingVolume ? xt._enableVolume : xt._disableVolume), a.fire(X.textTracks ? xt._enableCaptions : xt._disableCaptions)
            }, 0), Nr.captureBreadcrumb(`Scanner changed to ${s.currentScannerName}`, {}, "video")
        }), a.on([K.EVENT_ACTIVE, K.EVENT_STARTED, K.EVENT_ENDED, K.ARCHIVE_DONE], n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: "LIVE_UPDATE",
                payload: e
            }))(n))
        }), a.on(Kt._playButtonPressed, (function() {
            e.displayContext !== e.backbone ? e.displayContext.play() : function() {
                if ("disable" !== e.config.video.privacy && e.config.video.spatial && o.iOS && !C || s.element.classList.remove("invisible"), m) return a.fire(Kt._error, m), void e.preview.show();
                if (u = !0, f) e.preview.show();
                else {
                    if (s.off(g.PLAY, L), c && (b = !0, a.fire(xt._forceFullscreen)), t.get(na) && (T = !0), !_) return e.config.video.spatial && o.iOS && !C ? (C = !0, a.fire(xt._showOverlay, "app-redirect", {
                        redirectUrl: e.doNotTrackEnabled ? e.config.video.share_url : Fa(e.config.video.id, "player-spatial-redirect"),
                        title: null,
                        buttonText: "Watch in the Vimeo app",
                        ignoreText: null,
                        bottomText: "360 not supported in this browser",
                        newWindow: !e.config.embed.on_site
                    }), void a.once(g.PLAY, L)) : void w().catch(console.error);
                    _ && N()
                }
            }()
        })).on(Kt._pauseButtonPressed, () => {
            u = !1, e.displayContext.pause()
        }).on(Kt._becameInactive, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !s.paused && !e.config.embed.settings.background || u) && (u = !1, a.fire(Kt._pauseButtonPressed))
        })), a.on(g.ERROR, (function(t) {
            if (P(t) && !T) {
                if (e.config.embed.autoplay = 0, s.pause(), e.startTime) return R(e.startTime), void a.fire(Kt._paused, s.currentTime);
                if (0 === s.currentTime) return void a.fire(xt._reset);
                a.fire(Kt._paused, s.currentTime)
            }
        })), a.on(g.PLAY, (function(e) {
            s.element.classList.remove("invisible")
        })), a.on(g.PAUSE, (function(e, t) {
            v || a.fire(Kt._paused, e, t)
        })), a.on(g.TIME_UPDATE, (function({
            currentTime: e
        }) {})), a.on(g.ENDED, (function(t) {
            v || e.config.embed.loop || (b && a.fire(Kt._fullscreenButtonPressed), u = !1, a.fire(Kt._ended, t))
        })), a.on(S.DRM_AUTH_SUCCESS, () => {
            p = !0
        }), a.on(A, () => {
            _ = !0, a.once(g.TIME_UPDATE, () => {
                a.fire(Kt._firstTimeUpdate)
            })
        }), a.on(S.BUFFER_STARTED, () => {}),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                if (t) return;
                if (o.name.includes(Z)) return;
                if (o.name === J) return void a.fire(xt._disableCaptions);
                Nr.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let r = e.config.video.live_event ? .25 : .01;
                if (o.name === Q && !n) {
                    n = !0, r = .5;
                    const t = e.config.request,
                        i = t.files,
                        a = i.dash.cdns.fastly_skyfire.url,
                        s = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        p = t.file_codecs,
                        _ = e.config.video.file_codecs,
                        v = e.config.user.logged_in,
                        m = t.build.js;
                    Nr.captureBreadcrumb(o.name, {
                        fastly_dash_url: a,
                        fastly_hls_url: s,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: p,
                        video_file_codecs: _,
                        logged_in: v,
                        version: m
                    }, "MediaUrlBadRequest config", "error")
                }
                const s = "string" != typeof o.message ? o.name : o.message,
                    l = new Error(s);
                l.name = o.name;
                const c = "object" == typeof o.message ? o.message : null;
                Nr.captureException(l, c, r);
                const d = vn[o.name];
                if ("function" != typeof d) return;
                const u = d();
                if (u.final && a.off(g.ERROR, i), m = u.deferred ? u.id : null, o.name === ee) {
                    let t = e.config.request.dynamic_drm_translation_map,
                        n = o.message.code;
                    t && n && t[n] && (u.title = t[n].title, u.message = t[n].msg), Nr.captureBreadcrumb("DRM failure", o, "video")
                }
                a.fire(Kt._error, u.id, u, s)
            }
            window.addEventListener("pagehide", () => {
                t = !0
            }, !1), a.on(g.ERROR, i), a.on("test-error", i)
        }(), a.on(xt._changeLoop, (function(t) {
            const n = !!t && ("boolean" == typeof o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, s.loop = n
        })), a.fire(xt._changeLoop, e.config.embed.loop), a.on(Kt._chapterSeekAttempted, (t, n) => {
            e.events.fire(Kt._chapterSeek, n), e.events.fire(xt._seek, t), _ || a.fire(Kt._playButtonPressed)
        }), a.on(Kt._scrubbingStarted, (function() {
            f || (u = !s.paused, v = !0, s.pause())
        })), a.on(Kt._scrubbingEnded, (function(e) {
            v = !1, _ ? e || N() : a.fire(Kt._playButtonPressed)
        })), a.on(xt._seek, (function(e) {
            f || a.fire(xt._setTime, e)
        })), a.on(xt._setTime, (function(t) {
            _ || e.fragmentsHandler.checkForNewFragment(t, s.duration), R(t)
        })),
        function() {
            a.on(xt._changeVolume, (function(t, n, i) {
                i && (t += s.volume), t = At(t = Et(t, 0, 1)), e.displayContext !== s && (e.displayContext.volume = t), s.volume = t, e.events.fire(Kt._volumeChanged, t, n), s.muted && e.events.fire(xt._changeMuted, !1, n)
            })), a.on(xt._changeMuted, (function(t, n = !1) {
                s.muted = !!t, e.events.fire(Kt._mutedChanged, t, n)
            })), a.on(g.VOLUME_CHANGE, () => {
                a.fire(Kt._volumeChanged, s.volume, !0)
            });
            const t = e.config.request.cookie.volume;
            a.fire(xt._changeVolume, t, !0), a.fire(xt._changeMuted, e.config.embed.muted, !0)
        }(),
        function() {
            let e;
            a.on(xt._changeQuality, (function(n, i) {
                (s.video.currentFile.mime === Mt.dash || t.get(na)) && (i = !0), e = i, s.quality = n
            })), a.on(V, (function(t) {
                a.fire(Kt._qualityChanged, t, e)
            }))
        }(),
        function() {
            let e = s.playbackRate;
            a.on(g.RATE_CHANGE, (function(t) {
                s.playbackRate !== e && (a.fire(Kt._playbackRateChanged, s.playbackRate, e), e = s.playbackRate)
            })), a.on(xt._changePlaybackRate, (function(e) {
                s.playbackRate = e
            })), a.on(Kt._loadVideo, (function() {
                try {
                    s.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                f = !0, h = e, "interactive" !== e && _ && !y && (u = u || !s.paused, s.pause(), a.fire(Kt._paused, s.currentTime))
            }

            function t() {
                const e = h === Mo.LEAD_CAPTURE_FORM && !_;
                f = !1, h = null, e ? a.fire(Kt._playButtonPressed) : u && !y && (b || E || !c || a.fire(xt._forceFullscreen), N())
            }
            a.on(Kt._overlayOpened, e), a.on(Kt._accessGateOpened, e), a.on(Kt._overlayClosed, t), a.on(Kt._accessGateClosed, t), a.on(Kt._menuVisibilityChanged, (function(n, i) {
                i && "preact-menu" !== i && i.isCentered() && (i.isVisible() ? e() : t())
            }))
        }(), a.on(Kt._popupOpened, (function(e) {
            _ && !y && (u = !s.paused, s.pause())
        })), a.on(Kt._popupClosed, (function(e) {
            y || N()
        })), a.on(Kt._didEnterFullscreen, (function(t, n) {
            s.element.classList.remove("hide-webkit-controls"), t && (E = !0), t || (_ || o.browser.safari || (s.poster = e.preview.getThumbnail()), b = !0, setTimeout(() => {
                s.textTracks.forEach(e => {
                    "hidden" === e.mode && (e.mode = "showing")
                })
            }, 500)), n || !o.windowsPhone || o.browser.edge || a.fire(xt._toggleNativeControls, !0)
        })), a.on(Kt._didExitFullscreen, (function(e) {
            s.poster = "", e || s.pause(), _ || s.element.classList.add("invisible"), b = !1, E = !1, d && s.element.classList.add("hide-webkit-controls"), s.textTracks.forEach(e => {
                "showing" === e.mode && (e.mode = "hidden")
            })
        })), a.on(A, (function() {
            s.poster = ""
        })), a.on(xt._toggleNativeControls, (function(e) {
            if (e) return s.controls = !0, void i.classList.add("native-controls");
            s.controls = !1, i.classList.remove("native-controls")
        })), a.on(Kt._assetUrlsRefreshed, (function() {
            ie()
        })), a.on(Kt._configChanged, (function() {
            ie(), ae()
        })), a.on(xt._reset, (function() {
            if (e.segmentedPlaybackEnabled) re();
            else {
                const t = e.element.querySelector("[telecine-snapshot]");
                t && "none" !== t.style.display || (e.preview.show(), s.element.classList.add("invisible")), setTimeout(() => {
                    s.unload(), a.fire(Kt._paused, s.currentTime), _ = !1, u = !1, m = null
                }, 300)
            }
        })),
        function() {
            let t;
            a.on(xt._turnCaptionsOn, (function(n, i = !1) {
                t = i;
                try {
                    (e.config.request.flags.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && s.videoElement && s.videoElement.setAttribute("crossorigin", "anonymous"), s.enableTextTrack(n)
                } catch (o) {}
            })).on(xt._turnCaptionsOff, (function(n = !1) {
                t = n, e.config.request.flags.ott && s.videoElement && s.videoElement.removeAttribute("crossorigin"), s.disableTextTrack()
            })).on(xt._requestCompleteLiveSubtitles, (function() {
                s.requestCompleteLiveSubtitles()
            })).on(xt._updateLiveSubtitleRequests, (function(e) {
                s.setCaptionsShouldLoad(e)
            })), a.on(D, (function(e, n) {
                e && s.enableTextTrack(e.id), a.fire(Kt._captionsChanged, e, t || n)
            })), a.on(g.WEBKIT_BEGIN_FULLSCREEN, (function() {
                var e;
                null == (e = s.videoElement) || e.setAttribute("crossorigin", "anonymous")
            })), a.on(g.WEBKIT_END_FULLSCREEN, (function() {
                var t;
                e.config.request.flags.ott || null == (t = s.videoElement) || t.removeAttribute("crossorigin")
            }))
        }(), a.on($.AVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    a.fire(Kt._airPlayAvailable)
            }
        })), a.on($.UNAVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    a.fire(Kt._airPlayNotAvailable)
            }
        })), a.on($.ACTIVATED, (function({
            type: e
        }) {
            switch (y = !0, e) {
                case "AirPlay":
                    a.fire(Kt._airPlayActivated)
            }
        })), a.on($.DEACTIVATED, (function({
            type: e
        }) {
            switch (y = !1, e) {
                case "AirPlay":
                    a.fire(Kt._airPlayDeactivated)
            }
        })), a.on(Kt._airPlayButtonPressed, (function() {
            s.showExternalDisplayPicker("AirPlay")
        })), a.on(xt._activatePictureInPicture, () => {
            e.canPlayPictureInPicture && s.requestPictureInPicture()
        }), a.on(xt._deactivatePictureInPicture, () => {
            s.pictureInPictureEnabled && s.exitPictureInPicture()
        }), ie(), o.spatialPlayback ? (a.fire(xt._attachSpatialPlaybackEvents), a.on([g.PLAY, g.SEEKED], () => {
            a.fire(xt._revealSpatialControls)
        }), a.on(z.SPATIAL_UNSUPPORTED, () => {
            _ ? a.fire(Dt._spatialFailure, f) : a.once(Kt._firstTimeUpdate, () => {
                a.fire(Dt._spatialFailure, f)
            })
        })) : a.once(Kt._firstTimeUpdate, () => {
            e.config.video.spatial && a.fire(Dt._spatialUnsupported, f)
        }), window.addEventListener("beforeunload", () => {
            const t = e.config.request.drm;
            t && oe(t.hoover_url, t.user, t.asset, t.hoover_token)
        }, !1), a.on(Kt._loadVideo, () => {
            const t = e.config.request && e.config.request.drm;
            t && oe(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), e.events.on(xt._destroy, () => s.destroy()), "mediaSession" in navigator && (a.on(g.LOADED_METADATA, () => (navigator.mediaSession.setActionHandler("play", () => {
            w().then(() => s.fire(j.MEDIASESSION_PLAY)).catch(console.error)
        }), navigator.mediaSession.setActionHandler("pause", () => {
            s.pause(), a.fire(j.MEDIASESSION_PAUSE)
        }), navigator.mediaSession.setActionHandler("seekto", e => {
            s.currentTime = e.seekTime, a.fire(j.MEDIASESSION_SEEK_TO)
        }), navigator.mediaSession.setActionHandler("seekforward", () => {
            s.currentTime = Math.min(s.duration, s.currentTime + 10), a.fire(j.MEDIASESSION_SEEK_FORWARD)
        }), void navigator.mediaSession.setActionHandler("seekbackward", () => {
            s.currentTime = Math.max(0, s.currentTime - 10), a.fire(j.MEDIASESSION_SEEK_BACKWARD)
        }))), a.on(g.PLAY, () => (() => {
            const t = {
                title: e.config.video.title,
                artist: `from ${e.config.video.owner.name}`,
                artwork: [{
                    src: n(e.config.video.thumbs.base, {
                        w: "640"
                    })
                }]
            };
            navigator.mediaSession.metadata = new MediaMetadata(t)
        })())), e.ready().then(() => (setTimeout(() => ae(), 0), re(), null)).catch(e => {}), a.fire(Kt._videoModuleReady)
}

function Wa(e) {
    return "dev" === e.request.build.js ? "dev" : "4.37.15"
}

function Ya(e, t) {
    var n, i, r, a, s, l, c = 0,
        u = {},
        p = new d,
        _ = !1;

    function v() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function m() {
        const t = e.backbone.getEffectByName("ThreeSixtyEffect");
        return o.spatialPlayback && t ? t.isStereo() ? 2 : 1 : 0
    }

    function f() {
        n = !1, i = e.backbone ? e.backbone.currentTime : 0, r = 0, a = 0, s = 0, l = !1
    }

    function h(t, n, i, o) {
        e.verifyConfig().then(() => {
            let r = n;
            r.signature = e.config.request.signature, r.session = e.config.request.session, r.time = e.config.request.timestamp, r.expires = e.config.request.expires;
            const a = JSON.stringify(r);
            if (null === r.sessionTime && (Nr.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: r
                }), Nr.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const s = e.config.request.urls.player_telemetry_url + t;
            return p.logRequestPromiseWithUrl(s, a, !i).then(t => {
                if (200 !== t.status && o < 2) {
                    if (410 === t.status) return void e.events.once(Kt._assetUrlsRefreshed, () => {
                        h(s, n, i, o + 1)
                    });
                    setTimeout(() => {
                        h(s, n, i, o + 1)
                    }, 1e3)
                }
            }).catch(e => {
                throw e
            })
        }).catch(e => {})
    }

    function b(n, i, o) {
        const a = e.backbone.currentFile || {};
        let {
            id: s = 0,
            mime: l = Mt.h264,
            metadata: {
                profile: c = -1
            } = {}
        } = a;
        l === Mt.dash && ({
            id: s = 0,
            profile: c = -1
        } = u), e.performDelegateAction($t, (d, u = {}) => {
            let p = d => {
                var p, _;
                let v = E(E({
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    autoplay: u.continuous ? 2 : e.config.embed.autoplay,
                    loop: e.config.embed.loop ? 1 : 0,
                    id: e.config.video.id,
                    vodId: (null == (p = e.config.video.vod) ? void 0 : p.id) ? e.config.video.vod.id : null,
                    vodSaleId: (null == (_ = e.config.video.vod) ? void 0 : _.sale_id) ? e.config.video.vod.sale_id : null,
                    sessionTime: At(r),
                    videoShape: e.config.video.spatial ? "mono" !== e.config.video.spatial.stereo_mode ? 2 : 1 : 0,
                    spatialPlayback: m(),
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    userIsMod: e.config.user.mod ? 1 : 0,
                    teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                    teamId: e.config.user.team_id ? e.config.user.team_id : null,
                    ownerId: e.config.video.owner.id,
                    ownerAccountType: e.config.video.owner.account_type,
                    privacy: e.config.video.privacy,
                    rating: e.config.video.rating ? e.config.video.rating.id : null,
                    type: "html",
                    videoFileId: Number.isInteger(Number(s)) ? s : "0",
                    delivery: zt[l],
                    profileId: c,
                    quality: a.metadata ? a.metadata.quality : null,
                    duration: At(e.config.video.duration),
                    seconds: At(i)
                }, d), {}, {
                    playbackRate: e.backbone.playbackRate,
                    build: Wa(e.config)
                }, $o(e.config, t));
                h(n, v, o)
            };
            const _ = e.config.video.live_event ? 1 : 0;
            let v = t.get(Qr),
                f = {
                    isLive: _
                };
            if (_) {
                if (!v) return void T(`https://${e.config.vimeo_url}/live_event/status?clip_id=${e.config.video.id}`).json().then(e => (e && e.ingest && (t.dispatch((e => ({
                    type: "LIVE_SET_START_TIME",
                    payload: e
                }))(e.ingest.start_time)), v = t.get(Qr)), v && (f.liveStartTime = v), p(f), e)).catch(e => {});
                f.liveStartTime = v
            }
            p(f)
        })
    }

    function y() {
        !l && e.playLoggingEnabled && (l = !0, b("/log/play", e.backbone.currentTime))
    }

    function C(t = 0, i = !1, o = !0) {
        if (e.playLoggingEnabled && l && !_) {
            var r = v();
            o && a + 1e3 > r || (a = r, n || b("/log/partial", t, i))
        }
    }

    function L(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
            vodSaleId: (null == (o = e.config.video.vod) ? void 0 : o.sale_id) ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: At(e.config.video.duration),
            seconds: At(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: Wa(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        h("/log/" + t, r)
    }
    return f(),
        function() {
            e.events.on(g.TIME_UPDATE, (function({
                currentTime: e,
                duration: t,
                timeProgress: o,
                playbackRate: a
            }) {
                var l = Math.floor(e);
                if (!n && s + 1e3 < v()) {
                    const t = 0 !== e && 0 === i;
                    e > i && !t && (r += (e - i) / a), i = e
                }
                l % 30 == 0 && C(e)
            })), e.events.on(Kt._playbackRateChanged, (function(t, n) {
                L("playback_rate_change", {
                    oldPlaybackRate: n
                }), C(e.backbone.currentTime)
            })), e.events.once(A, (function() {
                t.get(Xr) && t.get(na) ? e.events.once(Kt._firstTimeUpdate, () => y()) : y()
            })), e.events.on(S.SCANNER_CHANGE, (function(t) {
                _ = !0, e.events.once(A, () => {
                    _ = !1
                })
            })), e.events.on(Kt._paused, (function(t) {
                0 === e.backbone.duration && 0 === e.backbone.currentTime || e.backbone.ended || C(t)
            })), e.events.on(g.SEEKED, (function({
                currentTime: t
            }) {
                (e.backbone.isLive() || 0 !== e.backbone.duration || 0 !== e.backbone.currentTime) && (c = t, n || C(c))
            })), e.events.on(Kt._scrubbingStarted, (function() {
                s = v(), n = !0
            })), e.events.on(Kt._scrubbingEnded, (function() {
                i = e.backbone.currentTime, n = !1, C(i)
            })), e.events.on(Kt._prefsButtonPressed, (function() {
                C(e.backbone.currentTime)
            })), e.events.on(Kt._ended, (function() {
                e.backbone.isLive() || (r += e.config.video.duration - i), C(e.backbone.isLive() ? i : e.config.video.duration, !1, !1)
            })), e.events.on(S.STREAM_CHANGE, (function(e) {
                u = e
            }));
            let o = [],
                a = !1;

            function l() {
                o.length && e.performDelegateAction($t, (t, n = {}) => {
                    var i, r;
                    h("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
                        vodSaleId: (null == (r = e.config.video.vod) ? void 0 : r.sale_id) ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: Wa(e.config),
                        motionLog: JSON.stringify(o)
                    }, !1)
                })
            }
            e.events.on(z.MOTION_START, () => {
                a = !0,
                    function t() {
                        let n = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                            i = Math.round(100 * n.lat) / 100,
                            s = Math.round(100 * n.long) / 100;
                        const l = {
                            sessionTime: r,
                            videoTime: e.backbone.currentTime,
                            coordinates: {
                                lat: i,
                                lon: s
                            }
                        };
                        o.push(l), setTimeout(() => {
                            a && t()
                        }, 1e3)
                    }()
            }), e.events.on(z.MOTION_END, () => {
                a = !1, l()
            }), e.events.on(Kt._loadVideo, () => {
                l(), o = []
            }), window.addEventListener("pagehide", (function() {
                if (e.backbone && e.backbone.currentTime > 0) {
                    const t = !0,
                        n = !1;
                    C(e.backbone.currentTime, t, n), l()
                }
            }), !1)
        }(), [{
            type: "share_press",
            event: Kt._shareButtonPressed
        }, {
            type: "facebook_press",
            event: Kt._facebookButtonPressed
        }, {
            type: "twitter_press",
            event: Kt._twitterButtonPressed
        }, {
            type: "tumblr_press",
            event: Kt._tumblrButtonPressed
        }, {
            type: "email_press",
            event: Kt._emailButtonPressed
        }, {
            type: "embed_press",
            event: Kt._embedButtonPressed
        }, {
            type: "login_success",
            event: Kt._userLoggedIn
        }, {
            type: "airplay",
            event: Kt._airPlayActivated
        }, {
            type: "vod_press",
            event: Kt._vodButtonPressed
        }, {
            type: "collection_press",
            event: Kt._collectionsButtonPressed
        }, {
            type: "email_capture_submitted",
            event: Kt._emailCaptureSubmitted
        }].forEach((function(t) {
            e.events.on(t.event, function(e) {
                return function() {
                    L(e)
                }
            }(t.type))
        })), e.events.on(Kt._outroDisplayed, (function(t) {
            var n = {
                outroType: e.config.embed.outro,
                ownerAccountType: e.config.video.owner.account_type,
                playerWidth: e.element.clientWidth,
                playerHeight: e.element.clientHeight
            };
            (null == t ? void 0 : t.length) && (n.outroVideos = t.join(",")), L("outro_displayed", n)
        })).on(Kt._outroVideoPressed, (function(t) {
            L("outro_video_press", {
                ownerAccountType: e.config.video.owner.account_type,
                videoId: t
            })
        })).on(Kt._followButtonPressed, (function() {
            L("outro_follow_press", {
                add: !e.config.user.following
            })
        })).on(Kt._outroCtaPressed, (function(t) {
            L("outro_cta_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Kt._outroLinkPressed, (function(t) {
            L("outro_link_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Kt._outroImagePressed, (function(t) {
            L("outro_image_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Kt._likeButtonPressed, (function() {
            L("like_press", {
                add: !e.config.user.liked
            })
        })).on(Kt._watchLaterButtonPressed, (function() {
            L("watch_later_press", {
                add: !e.config.user.watch_later
            })
        })).on(Kt._popupOpened, (function(e) {
            0 === e.indexOf("login-") && L("login_attempt")
        })).on(Kt._captionsChanged, (function(e, t) {
            t || (e ? L("text_track_change", {
                textTrackLanguage: e.language,
                textTrackKind: e.kind
            }) : L("text_track_change"))
        })).on(Kt._badgePressed, (function(e) {
            1 !== e && 12 !== e || L("badge_press", {
                badgeId: e
            })
        })).on(Kt._overlayOpened, (function(e) {
            "email-capture" === e && L("email_capture_displayed")
        })).on(Kt._overlayClosed, (function(e) {
            "email-capture" === e && L("email_capture_dismissed")
        })).on(Kt._cardPressed, (function(t) {
            L("card_press", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: "link"
            })
        })).on(Kt._cardDisplayed, (function(t, n) {
            e.config.embed.editor || L("card_displayed", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: n.url ? "link" : "text"
            })
        })), e.events.on(Kt._configChanged, (function(e) {
            e && f()
        })), e.events.fire(Kt._statsModuleReady), {}
}
const qa = {
    settings: {}
};

function $a(e = qa, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return E(E({}, e), n.embed);
        default:
            return e
    }
}
var Ka = Object.freeze({
    __proto__: null,
    default: $a,
    transparent: e => e.embed.transparent
});

function ja(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return E(E({}, e), n.video);
        default:
            return e
    }
}
const za = e => e.video.height / e.video.width;
var Xa = Object.freeze({
    __proto__: null,
    default: ja,
    ratio: za
});

function Za(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.webinar ? E(E({}, e), n.video.webinar) : null;
        case "WEBINAR_FORM_SUCCESS":
            return E(E({}, e), {}, {
                formSuccess: n.formSuccess,
                registrantUuid: n.registrantUuid
            });
        case "WEBINAR_REGISTRANT_UUID_AVAILABLE":
            return E(E({}, e), {}, {
                registrantUuid: n.registrantUuid
            });
        default:
            return e
    }
}
const Ja = e => {
    var t;
    return !!(null == (t = e.webinar) ? void 0 : t.formSuccess)
};
var Qa = Object.freeze({
    __proto__: null,
    default: Za,
    webinarFormSuccess: Ja,
    webinarRegistrantUuid: e => {
        var t;
        return null == (t = e.webinar) ? void 0 : t.registrantUuid
    }
});

function es(e = {}, t) {
    switch (t.type) {
        case "CONTAINER_RESIZE":
            return E(E({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var ts = Object.freeze({
    __proto__: null,
    default: es,
    width: e => e.ui.container.width,
    height: e => e.ui.container.height
});

function ns(e = {}, t) {
    switch (t.type) {
        case "PLAYER_CONTAINER_RESIZE":
            return E(E({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var is = Object.freeze({
    __proto__: null,
    default: ns,
    width: e => e.ui.playercontainer.width,
    height: e => e.ui.playercontainer.height
});

function os(e = {}, t) {
    switch (t.type) {
        case "PREVIEW_SET_SIZE":
            return E(E({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var rs = Object.freeze({
    __proto__: null,
    default: os,
    scaleFactor: e => bt({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: hs.width(e),
        elementHeight: hs.height(e)
    }).scaleFactor
});

function as(e = xa, t) {
    switch (t.type) {
        case "CAPTIONS_RESET":
            return E(E({}, e), xa);
        case "CAPTIONS_SET_FONT_SIZE":
            return E(E({}, e), {}, {
                fontSize: t.payload
            });
        case "CAPTIONS_SET_COLOR":
            return E(E({}, e), {}, {
                color: t.payload
            });
        case "CAPTIONS_SET_FONT_FAMILY":
            return E(E({}, e), {}, {
                fontFamily: t.payload
            });
        case "CAPTIONS_SET_FONT_OPACITY":
            return E(E({}, e), {}, {
                fontOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_OPACITY":
            return E(E({}, e), {}, {
                bgOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_COLOR":
            return E(E({}, e), {}, {
                bgColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_COLOR":
            return E(E({}, e), {}, {
                windowColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_OPACITY":
            return E(E({}, e), {}, {
                windowOpacity: t.payload
            });
        case "CAPTIONS_SET_EDGE_STYLE":
            return E(E({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var ss = Object.freeze({
    __proto__: null,
    default: as,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * hs.height(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const ls = e => {
        const t = t => Math.min(e.height(t) / za(t), e.width(t)),
            n = t => Math.min(e.width(t) * za(t), e.height(t)),
            i = i => bt({
                width: t(i),
                height: n(i),
                elementWidth: e.width(i),
                elementHeight: e.height(i)
            }).scaleFactor,
            o = e => i(e) > 1,
            r = n => n.embed.transparent && !o(n) ? t(n) : e.width(n),
            a = t => t.embed.transparent && !o(t) ? n(t) : e.height(t),
            s = e => e.embed.transparent && !o(e) ? "contain" : "100% 100%",
            l = ne(e => ({
                width: r(e),
                height: a(e)
            })),
            c = ne(e => ({
                ratio: za(e),
                size: s(e)
            }));
        return {
            scaleFactor: i,
            width: r,
            height: a,
            size: s,
            boundingRect: l,
            settings: c
        }
    },
    cs = {
        xxs: 0,
        xs: 390,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    ds = (e, t) => {
        const n = ne(n => ({
                width: e(n),
                height: t(n)
            })),
            i = e => {
                const {
                    height: t,
                    width: n
                } = e.video;
                return t > n
            },
            o = n => {
                const o = e(n),
                    r = t(n);
                if (i(n)) return o < 225;
                const a = l(n.embed.settings.customLogo) && o < 300 || r < 169,
                    s = !l(n.embed.settings.customLogo) && (o < 338 || r < 190);
                return a || s
            },
            r = t => {
                const n = e(t);
                if (i(t)) return n < 300;
                const o = l(t.embed.settings.customLogo) && n <= 375,
                    r = !l(t.embed.settings.customLogo) && n <= 450;
                return o || r
            },
            a = t => {
                const n = e(t);
                return n >= cs.xxs && n < cs.xs
            },
            s = t => {
                const n = e(t);
                return n >= cs.xs && n < cs.sm
            },
            c = t => {
                const n = e(t);
                return n >= cs.sm && n < cs.md
            },
            d = t => {
                const n = e(t);
                return n >= cs.md && n < cs.lg
            },
            u = t => {
                const n = e(t);
                return n >= cs.lg && n < cs.xl
            },
            p = t => {
                const n = e(t);
                return n >= cs.xl && n < cs.xxl
            },
            _ = t => e(t) >= cs.xxl;
        return {
            width: e,
            height: t,
            breakpoint: e => {
                const t = {
                    xxs: a,
                    xs: s,
                    sm: c,
                    md: d,
                    lg: u,
                    xl: p,
                    xxl: _
                };
                return Object.keys(cs).find(n => t[n](e))
            },
            xxl: _,
            xl: p,
            lg: u,
            md: d,
            sm: c,
            xs: s,
            xxs: a,
            mode: e => o(e) ? "tiny" : r(e) ? "mini" : "normal",
            isMiniMode: r,
            isTinyMode: o,
            isVerticalVideo: i,
            boundingRect: n
        }
    };
var us = Object.freeze({
        __proto__: null,
        scaleFactor: e => bt({
            width: e.video.width,
            height: e.video.height,
            elementWidth: hs.width(e),
            elementHeight: hs.height(e)
        }).scaleFactor
    }),
    ps = Object.freeze({
        __proto__: null,
        isLinkTitleVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 203 || e.container.width >= 415,
        isLinkDescriptionVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 340 || e.container.width >= 415 && e.container.height >= 234
    }),
    _s = Object.freeze({
        __proto__: null,
        isEmailCaptureVisible: ({
            ui: e
        }) => e.container.width >= 300 && e.container.height >= 169
    });
const vs = e => hs.isVerticalVideo(e) ? hs.isTinyMode(e) : hs.isMiniMode(e) || hs.isTinyMode(e) || hs.xs(e) || hs.xxs(e);
var ms = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && hs.width(e) < 415,
    isMenuFullWidth: vs,
    isMenuVerticalVideoMode: e => !vs(e) && hs.isVerticalVideo(e) && hs.xxs(e) && hs.height(e) > 300,
    doMenuItemsWrap: e => hs.width(e) < 240
});

function fs(e = {}, t, n) {
    return {
        container: es(e.container, t),
        preview: os(e.preview, t),
        captions: as(e.captions, t),
        playercontainer: ns(e.playercontainer, t)
    }
}
const hs = ds(e => Es.width(e), e => Es.height(e)),
    gs = ds(e => bs.width(e), e => bs.height(e)),
    bs = ls(ts),
    Es = ls(is);
var ys = Object.freeze({
    __proto__: null,
    default: fs,
    container: ts,
    player: hs,
    appLayout: bs,
    playerLayout: Es,
    preview: rs,
    video: us,
    outro: ps,
    overlay: _s,
    controlbar: ms,
    captions: ss,
    playercontainer: is,
    app: gs
});

function Cs(e = {}, t) {
    const n = E(E({}, function(e = {}, t) {
        switch (t.type) {
            case "CONFIG_LOAD":
                return E(E({}, e), t.payload);
            default:
                return e
        }
    }(e, t)), {}, {
        embed: $a(e.embed, t),
        video: ja(e.video, t),
        liveEvent: zr(e.liveEvent, t),
        webinar: Za(e.webinar, t)
    });
    return E(E({}, n), {}, {
        ui: fs(e.ui, t)
    })
}
var Ts = Object.freeze({
        __proto__: null,
        default: Cs,
        embed: Ka,
        video: Xa,
        liveEvent: la,
        ui: ys,
        webinar: Qa
    }),
    Ls = re((function(e) {
        ! function() {
            var t = {
                templates: {},
                render: function(e, n) {
                    return t.templates[e] ? t.templates[e].call(t, n || {}) : ""
                },
                map: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                },
                escape: function(e) {
                    return null == e ? "" : String(e).replace(/[&<>"'\\/]/g, (function(e) {
                        return t.map[e]
                    }))
                },
                helpers: {}
            };
            t.templates.adcountdown = function(e) {
                return '<div class="vp-ads-tag hidden"><span class="vp-ads-countdown"></span></div>'
            }, t.templates.buffer_pattern = function(e) {
                return '<pattern id="' + e.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>'
            }, t.templates.logo = function(e) {
                return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" focusable="false" aria-labelledby="logo-icon-title" role="img"><title id="logo-icon-title">Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>'
            }, t.templates.outer = function(e) {
                var t = '<div class="vp-content-area-background" aria-hidden="true"></div><div class="vp-video-wrapper" data-content-area-sibling-eligible aria-hidden="true"><div class="vp-video"><div class="vp-telecine"></div></div><div class="vp-preview" id="vp-preview"></div></div><div class="vp-text-alert-wrapper hidden" data-content-area-sibling-eligible><div class="vp-alert-text"></div><div class="vp-alert-time"><div class="vp-live-start-time-title"></div><div class="vp-live-start-time-body"></div><div class="vp-live-start-time-footer"></div></div></div><div class="vp-target" data-content-area-sibling-eligible></div><div class="vp-outro-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-outro" role="dialog"></div></div><div class="vp-player-ui-container" data-content-area-sibling-eligible></div><div class="vp-player-ui-overlays" data-content-area-sibling-eligible><div class="vp-vimeo-interactive-wrapper"></div></div><div class="vp-controls-wrapper" data-content-area-sibling-eligible></div><div class="vp-overlay-wrapper hidden" role="dialog" aria-modal="true" aria-labelledby="vp-overlay-labelledby" hidden data-content-area-sibling-eligible><div class="vp-overlay-bg"></div><div class="vp-overlay-cell"><div class="vp-overlay"></div><div class="vp-overlay-icon-wrapper hidden"><div class="vp-overlay-icon"></div></div><div class="vp-overlay-logo logo"></div></div><nav><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">';
                return t += this.render("icon_prev") || "", t += '</button><button type="button" class="vp-nav-closeButton js-close" aria-label="' + e.strings.close + '">', (t += this.render("icon_close") || "") + '</button></nav></div><div class="vp-notification-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-notification-cell"><div class="vp-notification" role="dialog" aria-live="assertive"></div></div></div><span id="new-window" hidden>' + e.strings.opensANewWindow + "</span>"
            }, t.templates.threesixty_reminder = function(e) {
                var t = '<div class="intro-wrap text-only"><div> ';
                return e.showArrows && (t += ' <div class="key-wrapper"><div class="key-row"><div class="key"><div class="arrow arrow-top"></div></div></div><div class="key-row"><div class="key"><div class="arrow arrow-left"></div></div><div class="key"><div class="arrow arrow-down"></div></div><div class="key"><div class="arrow arrow-right"></div></div></div></div> '), t + " <div>" + e.text + "</div></div></div>"
            }, t.templates.time_series_graph = function(e) {
                return '<svg width="' + e.width + '" height="' + e.height + '" viewBox="0 0 ' + e.width + " " + e.height + '"><g><polyline stroke="white" fill="none" points="' + e.points + '"></polyline></g><g> ' + e.markers + " </g></svg>"
            }, t.templates.icon_broken_heart = function(e) {
                return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_check = function(e) {
                return "<svg xmlns='http://www.w3.org/2000/svg' class='check-icon' viewBox='-4 -4 18 18'><path class='fill' fill='#ffffff' d='M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z'/></svg>"
            }, t.templates.icon_clock = function(e) {
                return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>'
            }, t.templates.icon_close = function(e) {
                return '<svg viewBox="0 0 20 20" class="icon-close"><path d="M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z" fill="#fff" fill-rule="evenodd"></path></svg>'
            }, t.templates.icon_embed = function(e) {
                return '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="embed-icon-title" role="img"><title id="embed-icon-title">' + e.title + '</title><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>'
            }, t.templates.icon_facebook = function(e) {
                return '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="fb-icon-title" role="img"><title id="fb-icon-title">' + e.title + '</title><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>'
            }, t.templates.icon_follow = function(e) {
                return '<svg class="icon icon-follow" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" focusable="false"><defs><clipPath id="icon-mask--check"><rect x="0" y="0" width="24" height="24" /></clipPath></defs><path class="icon-path icon-path--plus fill" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/><path class="icon-path icon-path--check fill" d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" clip-path="url(#icon-mask--check)"/><path class="icon-path icon-path--close fill" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>'
            }, t.templates.icon_heart = function(e) {
                return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_lock = function(e) {
                return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>'
            }, t.templates.icon_mail = function(e) {
                return '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="mail-icon-title" role="img"><title id="mail-icon-title">' + e.title + '</title><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>'
            }, t.templates.icon_prev = function(e) {
                return '<svg class="icon-prev" viewBox="0 0 27 48" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"/></svg>'
            }, t.templates.icon_tumblr = function(e) {
                return '<svg class="tumblr-icon" viewBox="0 0 12 20" focusable="false" aria-labelledby="tumblr-icon-title" role="img"><title id="tumblr-icon-title">' + e.title + '</title><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>'
            }, t.templates.icon_twitter = function(e) {
                return '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="twitter-icon-title" role="img"><title id="twitter-icon-title">' + e.title + '</title><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>'
            }, t.templates.icon_vod = function(e) {
                return '<svg class="vod-icon" viewBox="0 0 21 23" focusable="false"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>'
            }, t.templates.icon_vod_download = function(e) {
                return '<svg class="vod-download-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>'
            }, t.templates.icon_vod_rent = function(e) {
                return '<svg class="vod-rent-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>'
            }, t.templates.icon_vod_subscribe = function(e) {
                return '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>'
            }, t.templates.app_redirect = function(e) {
                var t = '<div class="vp-overlay-content"> ';
                return e.strings.title && (t += ' <div class="app-redirect-title">' + e.strings.title + "</div> "), e.hideRedirectButton || (t += ' <div class="' + (e.strings.title ? "" : "app-redirect--topspace") + '"><a class="app-redirect-button" href="' + e.redirectUrl + '" role="button"', e.newWindow && (t += ' data-new-window="1" target="_blank" rel="noopener"'), t += ' aria-describedby="new-window">' + e.strings.buttonText + "</a></div> "), e.strings.ignoreText && (t += ' <div class="app-redirect-ignore">' + e.strings.ignoreText + "</div> "), e.strings.bottomText && (t += ' <div class="app-redirect-bottom-text">' + e.strings.bottomText + "</div> "), t + "</div>"
            }, t.templates.email_capture = function(e) {
                var t = '<div class="vp-email-capture-wrapper ';
                return e.showWebinarForm && (t += "vp-webinar-wrapper"), t += '"><div class="vp-email-capture ', e.registrationFull && (t += "hidden"), t += '"> ', e.text || (t += ' <div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> "), t += ' <form class="vp-email-capture-form" novalidate><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += ' <div class="vp-email-capture-title" id="vp-overlay-labelledby"> ', e.showWebinarForm && e.showWebinarLogin ? t += this.render("email_capture_title", {
                    title: e.reg_login_title
                }) || "" : e.text && (t += this.render("email_capture_title", {
                    title: e.text
                }) || ""), t += ' </div></div><div class="vp-email-capture-form-fields-bubble-wrapper"><div class="vp-email-capture-form-fields-wrapper"><div class="vp-email-capture-form-fields-slider"> ', t += this.render("email_capture_fields", {
                    customFields: e.customFields
                }) || "", t += ' </div></div><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-message"></div></div></div><div class="vp-email-capture-form-buttons"><input class="vp-email-capture-form-button vp-email-capture-form-button--back" tabIndex="-1" type="button" value="' + e.strings.back + '" aria-hidden="true"><div class="vp-email-capture-form-button--next-submit-wrapper"><div class="vp-email-capture-form-button--next-submit-slider"><input class="vp-email-capture-form-button vp-email-capture-form-button--next" tabIndex="-1" type="button" value="' + e.strings.next + '" aria-hidden="true"><input class="vp-email-capture-form-button vp-email-capture-form-button--submit" tabIndex="-1" type="submit" value="' + e.strings.submit + '" aria-hidden="true"></div></div></div> ', e.showWebinarForm ? t += this.render("webinar_disclaimer", {
                    text: e.strings.webinar,
                    url: e.privacyPolicy
                }) || "" : t += this.render("email_capture_disclaimer", {
                    text: e.strings,
                    url: e.privacyPolicy
                }) || "", e.showWebinarForm && (t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "", t += " </div> "), t += ' </form><div class="vp-email-capture-form-skip"> ', e.allowSkip && (t += this.render("email_capture_skip", {
                    position: e.position,
                    skipText: e.strings.skip,
                    skipToVideoText: e.strings.skip_to_video,
                    positionIsAfter: e.positionIsAfter
                }) || ""), t += ' </div><div class="vp-email-capture-progress-wrapper"><div class="vp-email-capture-steps"> ' + e.strings.step + ' <span class="vp-email-capture-current-step"></span> ' + e.strings.of + ' <span class="vp-email-capture-total-steps">' + e.customFields.length + '</span></div><div class="vp-email-capture-progress-bar"><span class="vp-email-capture-progress-meter"></span></div></div></div><div class="vp-email-capture-thank-you hidden"><div class="vp-email-capture-thank-you-box"><h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.successful + "</p></div> ", e.positionIsAfter || (t += ' <div class="vp-email-capture-video-countdown vp-email-capture-video-countdown-meter-wrapper" aria-label="' + e.strings.video_starts + '"><div class="vp-email-capture-video-countdown-meter"></div><div class="vp-email-capture-video-countdown-meter-text"> ' + e.strings.video_starts + ' <span class="vp-email-capture-video-countdown-timer"></span></div></div> '), t += ' </div><div class="vp-email-capture-reg-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.reg_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.reg_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-login-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.login_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.login_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-reg-full ', e.registrationFull || (t += "hidden"), t += '"><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += " </div> ", t += this.render("webinar_full", {
                    text: e.strings.webinar.reg_full
                }) || "", t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', (t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "") + ' </div></div></div><div class="vp-email-capture-dropdown-overlay"></div>'
            }, t.templates.email_capture_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper"><div class="vp-email-capture-disclaimer" value="';
                return t += this.escape(e.text.disclaimer) || "", t += '">', t += this.escape(e.text.disclaimer) || "", t += "</div> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.privacy_policy + "</a> "), t + "</div>"
            }, t.templates.email_capture_field = function(e) {
                var t = "";
                if ("dropdown" === e.field.field_type && e.field.field_metadata && e.field.field_metadata.options) {
                    if (e.field.required) {
                        t += ' <div class="vp-email-capture-form-custom-field required vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly required /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option-disabled" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var n = 0; n < e.field.field_metadata.options.length; n++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[n].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[n].option_label + " </li> ";
                        t += " </ul></div></div> "
                    } else {
                        t += ' <div class="vp-email-capture-form-custom-field vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var i = 0; i < e.field.field_metadata.options.length; i++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[i].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[i].option_label + " </li> ";
                        t += " </ul></div></div> "
                    }
                    t += ""
                } else e.field.required ? (t += ' <div class="vp-email-capture-form-custom-field required" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" maxlength="180" tabIndex="-1" required /></div> ') : (t += ' <div class="vp-email-capture-form-custom-field" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="180" /></div> '), t += "";
                return t + ""
            }, t.templates.email_capture_fields = function(e) {
                for (var t = "", n = 0; n < e.customFields.length; n++) t += this.render("email_capture_field", {
                    field: e.customFields[n]
                }) || "", t += "";
                return t + ""
            }, t.templates.email_capture_logo = function(e) {
                var t = '<img src="';
                return (t += this.escape(e.url) || "") + '" alt="" class="vp-email-capture-logo">'
            }, t.templates.email_capture_skip = function(e) {
                var t = "";
                return e.positionIsAfter && (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipText + '">'), t += "", e.positionIsAfter || (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipToVideoText + '">'), t + ""
            }, t.templates.email_capture_start_time = function(e) {
                return '<div class="vp-email-capture-start-time"> ' + e.startTime + "</div>"
            }, t.templates.email_capture_title = function(e) {
                var t = "";
                return (t += this.escape(e.title) || "") + ""
            }, t.templates.error = function(e) {
                var t = '<div class="vp-overlay-content error"><div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> ";
                return e.title && (t += " <h1>" + e.title + "</h1> "), e.message && (t += " <p>" + e.message + "</p> "), t + "</div>"
            }, t.templates.outro_email = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t + '></div><div class="vp-outro-content vp-outro-content--email vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_image = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--image js-outro-content"> ';
                return e.url && (t += '<a class="vp-outro-imageLink js-imageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), e.bgimage && (t += '<div class="vp-outro-image" style="background-image: url(' + e.bgimage + ');"', e.alt_text && (t += ' aria-label="', t += this.escape(e.alt_text) || "", t += '" role="img"'), t += "></div>"), e.url && (t += "</a>"), t + "</div>"
            }, t.templates.outro_link = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--link vp-outro-shade js-outro-content"><div class="vp-outro-linkWrapper js-outro-linkWrapper"> ', e.title && (t += '<h1 class="vp-outro-textTitle js-outro-title">', t += this.escape(e.title) || "", t += "</h1>"), e.description && (t += '<p class="vp-outro-textDescription js-outro-text">', t += this.escape(e.description) || "", t += "</p>"), e.text && e.url && (t += ' <div class="vp-outro-buttonWrap"><a class="vp-outro-button js-cta" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window"><span>', t += this.escape(e.text) || "", t += "</span></a></div> "), e.text2 && e.url2 && (t += ' <div class="vp-outro-linkWrap js-outro-linkWrap"><a class="vp-outro-link js-link" href="' + e.url2 + '" target="_blank" rel="noopener" aria-describedby="new-window">', t += this.escape(e.text2) || "", t += "</a></div> "), t + " </div></div>"
            }, t.templates.outro_nothing = function(e) {
                return '<div class="vp-outro-bg"></div><div class="vp-outro-content vp-outro-content--nothing vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_share = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--share vp-outro-shade js-outro-content"></div><nav class="panel-nav"><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">', (t += this.render("icon_prev") || "") + "</button></nav>"
            }, t.templates.outro_staticimage = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--staticImage js-outro-content"><div class="vp-outro-staticImageWrapper"> ';
                return e.url && (t += '<a class="vp-outro-staticImageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), t += ' <img class="vp-outro-staticImage" src="' + e.svg_url + '"> ', e.url && (t += "</a>"), t + " </div></div>"
            }, t.templates.outro_text = function(e) {
                return '<div class="vp-outro-content vp-outro-content--text vp-outro-shade js-outro-content"><div class="vp-outro-textWrapper"><div class="vp-outro-text">' + e.text + "</div></div></div>"
            }, t.templates.outro_videos = function(e) {
                var t = '<div class="vp-outro-bg"';
                e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--videos vp-outro-shade js-outro-content"> ';
                for (var n = 0; n < e.contexts.length; n++) {
                    var i = e.contexts[n];
                    t += ' <div class="vp-outro-videosSection vp-outro-videosSection--' + i.videos.length, i.promoted && (t += " vp-outro-videosSection--promoted"), t += '"><div class="vp-outro-videosHeaderWrapper"><header class="vp-outro-videosHeader"><h1 class="vp-outro-videosTitle">' + i.context + "</h1> ", e.showFollowButton && !i.promoted && (t += ' <div class="vp-outro-followWrap js-outro-followWrap"><button type="button" class="vp-outro-follow js-outro-follow" aria-label="' + e.strings.follow + '" aria-pressed="', e.following ? t += "true" : t += "false", t += '"> ', t += this.render("icon_follow") || "", t += ' <span class="vp-outro-follow-text" data-label-follow="' + e.strings.follow + '" data-label-following="' + e.strings.following + '" data-label-unfollow="' + e.strings.unfollow + '"></span></button></div> '), t += ' </header></div><ul class="vp-outro-videos vp-outro-videos--' + i.videos.length + '"> ';
                    for (var o = 0; o < i.videos.length; o++) t += ' <li><a class="vp-outro-videoLink js-videoLink', 1 == n && (t += " hovered"), t += '" href="' + i.videos[o].url + '" ', e.target && (t += ' target="_blank" rel="noopener" '), t += ' data-video-id="' + i.videos[o].id + '" aria-describedby="new-window" ><div class="vp-outro-imgWrapper" style="background-image: url(' + i.videos[o].thumbnail + ')"></div><header class="vp-outro-videoHeader" id="vp-outro-videoHeader"><h1 class="vp-outro-videoTitle">', t += this.escape(i.videos[o].title) || "", t += "</h1> ", i.videos[o].byline && (t += ' <h2 class="vp-outro-videoByline">', t += this.escape(i.videos[o].byline) || "", t += "</h2> "), t += " </header></a> ";
                    t += " </ul></div> "
                }
                return t + "</div>"
            }, t.templates.outro_vod = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--vod vp-outro-shade js-outro-content"><div class="vp-outro-vodWrapper"><h1 class="vp-outro-vodHeader" aria-describedby="new-window"><a href="' + e.url + '" target="_blank" rel="noopener">';
                t += this.escape(e.title) || "", t += "</a></h1> ";
                var n = e.countries,
                    i = e.country;
                if (this.helpers.isAvailableInCountry(n, i))
                    if (e.purchased) t += ' <a class="vp-outro-vodButton vp-outro-vodButton--watch js-vod-watch" role="button" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.strings.watch + "</a> ";
                    else {
                        if (!e.isComingSoon) {
                            t += ' <ul class="vp-outro-vod"> ';
                            for (var o = 0; o < e.buttons.length; o++) {
                                t += ' <li class="vp-outro-vod-item"><a class="vp-outro-vodButton vp-outro-vodButton--' + e.buttons[o].type + ' js-vod-button" role="button" href="' + e.url + "#buy=" + e.buttons[o].product_id + '" target="_blank" rel="noopener" data-product-id="' + e.buttons[o].product_id + '" aria-describedby="new-window" ><div class="vp-outro-vodIcon"> ', "buy" === e.buttons[o].type ? t += this.render("icon_vod_download") || "" : "rent" === e.buttons[o].type ? t += this.render("icon_vod_rent") || "" : "subscribe" === e.buttons[o].type ? t += this.render("icon_vod_subscribe") || "" : t += this.render("icon_vod") || "", t += " </div> ";
                                var r = e.currency,
                                    a = e.buttons[o];
                                t += " <p>" + this.helpers.formatVodLabel(e.translationMap, "outro_string", r, a) + "</p></a></li> "
                            }
                            t += " </ul> "
                        }(e.isPreorder || e.isComingSoon) && (t += " <p>" + e.strings.preRelease + "</p> ")
                    }
                return t + " </div></div>"
            }, t.templates.password = function(e) {
                return '<div class="vp-overlay-content password form"><h1 class="header" id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-arrow-clipper"><div class="vp-validation-bubble-arrow"></div></div><div class="vp-validation-bubble-message"></div></div><input class="js-password" type="password" name="password" placeholder="' + e.strings.password + '" required aria-required="true" aria-label="' + e.strings.password + '"><input type="submit" value="' + e.strings.watch + '"></form></div>'
            }, t.templates.private_locked = function(e) {
                return '<div class="vp-overlay-content login"><h1 id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><a href="' + e.action + '" class="popup js-login" target="_blank" rel="noopener" role="button" aria-describedby="new-window">' + e.strings.buttonText + "</a></div>"
            }, t.templates.share = function(e) {
                var t = '<div class="vp-share-wrapper js-share"><section class="vp-share-screen vp-share-screen--share' + (e.embedOnly ? " cloaked" : "") + ' js-share-screen"><h1 class="vp-share-title vp-share-title--share" id="vp-overlay-labelledby">' + e.strings.share + '</h1><ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--facebook js-facebook" href="' + e.playerShareUrl + "/facebook" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.facebookIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--twitter js-twitter" href="' + e.playerShareUrl + "/twitter" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.twitterIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--tumblr js-tumblr" href="' + e.playerShareUrl + "/tumblr" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.tumblrIcon + " </a> ";
                return e.shareUrl && (t += ' <li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--email js-email" href="mailto:?subject=', t += encodeURIComponent(e.strings.emailSubject) || "", t += "&amp;body=", t += encodeURIComponent(e.strings.emailBody) || "", t += '" role="button" aria-describedby="new-window" > ' + e.emailIcon + " </a> "), t += " </ul> ", e.embed && (t += ' <ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--embed js-embed" href="' + e.url + '#share" target="_blank" rel="noopener" role="button" > ' + e.embedIcon + " </a></li></ul> "), e.shareUrl && (t += ' <p class="vp-share-footnote vp-share-footnote--share"><a class="clip_url" href="' + e.shareUrl + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.shareUrl + "</a></p> "), t += " </section> ", e.embed && (t += ' <section class="vp-share-screen vp-share-screen--embed' + (e.embedOnly ? "" : " cloaked") + ' js-embed-screen"><div class="vp-share-embedWrapper"><h1 class="vp-share-title vp-share-title--embed">' + e.strings.embedTitle + '</h1><p class="vp-share-subtitle vp-share-subtitle--embed">' + e.strings.embedSubtitle + '</p><div class="vp-share-embedCode form"><div><input class="vp-share-embedInput js-embed-input" type="text" name="embed_code" title="Embed code" value="' + e.embedCode + '" spellcheck="false" aria-readonly="true"', e.readOnly && (t += " readonly"), t += "></div> ", e.copyButton && (t += ' <button type="button" class="vp-share-embedCopy js-embedCopy" data-clipboard-text=\'' + e.embedCode + "' data-label=\"" + e.strings.copy + '" data-success-label="' + e.strings.copySuccess + '">' + e.strings.copy + "</button> "), t += " </div> ", e.customizeEmbed && (t += ' <p class="vp-share-footnote vp-share-footnote--embed">' + e.strings.customize + "</p> "), t += " </div></section> "), t + "</div>"
            }, t.templates.webinar_confirmation = function(e) {
                var t = '<div class="vp-email-capture-reg-thank-you"><div class="vp-email-capture-thank-you-box"> ';
                return e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t + ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.thank_you_subtitle + "</p></div></div>"
            }, t.templates.webinar_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper vp-webinar-disclaimer-wrapper"> ';
                return t += ' <div class="vp-webinar-compliance-checkbox-border"><input type="checkbox" class="vp-disclaimer-checkbox"></div><div class="vp-disclaimer-text-wrapper"><label for="vp-disclaimer-checkbox" class="vp-email-capture-disclaimer vp-webinar-disclaimer"> ' + e.text.disclaimer + " </label> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.host_privacy_policy + "</a> "), t + ' <div class="vp-opt-in-bubble hidden"><p class="vp-opt-in-bubble-message">' + e.text.opt_in_error + "</p></div></div></div>"
            }, t.templates.webinar_ended = function(e) {
                var t = '<div class="vp-text-alert-wrapper "> ';
                return e.strings.title && (t += ' <div class="vp-alert-text">' + e.strings.title + "</div> "), t + "</div>"
            }, t.templates.webinar_full = function(e) {
                return '<div class="vp-reg-full-wrapper"><h2 class="vp-reg-full-text"> ' + e.text + " </h2></div>"
            }, t.templates.webinar_registration_bypass_btn = function(e) {
                var t = "";
                return e.showWebinarLogin ? e.showWebinarLogin && !e.registrationFull && (t += ' <button class="vp-email-capture-reg-go-back vp-webinar-email-capture-reg-go-back">' + e.regGoBack + "</button>") : t += ' <button class="vp-email-capture-reg-bypass">' + e.regBypass + "</button>", t + ""
            }, e.exports ? e.exports = t : window.Aftershave = t
        }()
    }));
const ws = function(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const i in n) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            Object.defineProperty(t, i, Object.assign(o, e))
        }
    }), t)
}({
    enumerable: !0,
    configurable: !0,
    writeable: !1
});

function As(e, t, n) {
    const i = c() ? n.parentElement : n,
        o = n.querySelector(".vp-video-wrapper"),
        r = b(s, 150),
        a = b(l, 150);

    function s() {
        const {
            width: e,
            height: n
        } = ht(i);
        t.dispatch(((e, t) => ({
            type: "CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function l() {
        const {
            width: e,
            height: n
        } = ht(o);
        t.dispatch(((e, t) => ({
            type: "PLAYER_CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function c() {
        return n.parentElement === document.body
    }

    function d({
        size: e,
        ratio: t,
        bottom: o
    }) {
        c() && (i.classList.toggle("vp-center", "contain" === e), function(e, t) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map(t => e.style.removeProperty(t))
        }(n), "contain" !== e ? o > 0 && It(n, {
            height: `calc(100% - ${o}px)`,
            bottom: `${o/2}px`
        }) : It(n, o > 0 ? {
            maxWidth: `calc((100vh - ${o}px) / ${t})`,
            maxHeight: `calc(100vh - ${o}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: `${o/2}px`
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.appLayout.settings", d), d(t.get("ui.appLayout.settings")), new ae(r).observe(i), new ae(a).observe(o), window.addEventListener("orientationchange", r), window.addEventListener("orientationchange", a), e.events.on(Kt._didEnterFullscreen, r), e.events.on(Kt._didExitFullscreen, r), e.events.on(Kt._didEnterFullscreen, a), e.events.on(Kt._didExitFullscreen, a), s(), l()
}

function Ss(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function Is(e) {
    const {
        videoObject: t
    } = Os();
    null == e || !e.length || null != t && t.transcript || Ps({
        transcript: e.map(({
            text: e
        }) => e).join(" ")
    })
}

function Ps(e) {
    const {
        videoObject: t,
        element: n
    } = Os();
    if (t) try {
        Object.assign(t, e), n.textContent = JSON.stringify(t)
    } catch (i) {}
}

function Os() {
    const e = document.body.querySelector("script[type='application/ld+json']");
    if (e) try {
        return {
            videoObject: JSON.parse(e.textContent),
            element: e
        }
    } catch (t) {}
    return {}
}

function ks(e, t) {
    switch (e.view) {
        case Xt.privateLocked:
            throw new se("The video is private.", "PrivacyError", t);
        case Xt.privatePassword:
            throw new se("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case Xt.error:
            throw new se(e.message, "NotFoundError", t)
    }
}

function Rs(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}
const Ns = () => {};

function Ds(e) {
    const t = e.events;
    let n, i, o, a = O(),
        s = !1,
        c = !1,
        d = null,
        p = !1,
        _ = null,
        v = null,
        m = !1,
        f = [];

    function h(t) {
        i !== t && (i = t, e.config.embed.api = t)
    }

    function b() {
        n && n.emit("exitFullscreen"), e.events.halt()
    }

    function y() {
        var t = At(e.config.request.cookie.volume);
        return 1 === i ? Math.round(100 * t) : t
    }

    function C(n, i, o, a = []) {
        const s = ln[i];
        let l = e.config.embed[s];
        l || i !== on || (l = e.config.embed.color);
        let c = e.config.embed.settings[`force_${s}`];
        if (c || i !== on || (c = e.config.embed.settings.color), c && !e.config.embed.on_site) throw new se(`The creator of the video has chosen to always use ${new r(l).hex}.`, "EmbedSettingsError", o);
        try {
            const o = new r(n);
            t.fire(xt._changeColor, o.hex, i), a.forEach((function(t) {
                const n = ln[t],
                    i = e.config.embed[n];
                try {
                    new r(i).contrast(o).ratio
                } catch (De) {}
            }))
        } catch (De) {
            throw new se("The color should be a valid hex value.", "TypeError", o)
        }
    }
    let T = {
        ping: () => e.config.video.id,
        notifyTimingObjectConnect() {
            Ir(vr.TIMING_OBJECT_CONNECT, e.config)
        },
        notifyTimingObjectDisconnect() {
            Ir(vr.TIMING_OBJECT_DISCONNECT, e.config)
        },
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t), t ? (e.events.prependOn(Kt._fullscreenButtonPressed, b), n.listeners.exitFullscreen = !0, e.events.fire(Kt._willEnterFullscreen), e.events.fire(Kt._didEnterFullscreen, !0, !0)) : (e.events.off(Kt._fullscreenButtonPressed, b), n.listeners.exitFullscreen = !1, e.events.fire(Kt._willExitFullscreen), e.events.fire(Kt._didExitFullscreen, !0))
        },
        on(e, t) {
            e in Jt && (e = Jt[e]);
            const i = Ot(Zt);
            if (i.indexOf(e) < 0) throw new se(`“${e}” is not a valid event. Valid events are: ${i.join(", ")}.`, "TypeError", "on");
            t && a.on(e, t), n && (n.listeners[e] = !0), e === Zt.LOADED && k()
        },
        off(e, t) {
            t && a.off(e, t), n && (n.listeners[e] = !1)
        },
        play: () => new Promise((n, i) => {
            t.once(Kt._playResolved, n), t.once(Kt._playRejected, e => {
                i(new se(e.message, e.name, "play"))
            }), ks(e.config, "play"), t.fire(jt._play), t.fire(Kt._playButtonPressed)
        }),
        destroy() {
            t.fire(xt._destroy)
        },
        pause() {
            ks(e.config, "pause"), t.fire(jt._pause), t.fire(Kt._pauseButtonPressed)
        },
        loadVideo(t) {
            const {
                id: i,
                url: o,
                params: r
            } = function(e) {
                if (!e) return {};
                if (ut(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!ut(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!i && !o) throw new se("The video id must be an integer.", "TypeError", "loadVideo");
            if (o && ! function(e, t) {
                    return null !== e.match(new RegExp(`^https?://${t.player_url}/video/([0-9]+)`)) || null !== e.match(new RegExp(`^https?://${t.vimeo_url}/([0-9]+)`))
                }(o, e.config)) throw new se("The url must be a valid Vimeo url.", "TypeError", "loadVideo");
            return function(e, t, n, i) {
                var o;
                if (t === e.video.id) return !0;
                const r = `^https?://${e.player_url}/video/${e.video.id}(/(config/?)?)?(\\?.*)?$`,
                    a = `^https?://${e.player_url}/video/([0-9]+)`;
                if (null == n ? void 0 : n.match(new RegExp(r))) return !0;
                const s = qi(n || "", "s") || (null == i || null == (o = i.s) ? void 0 : o.length);
                return !(!n || null === n.match(new RegExp(a)) || !s)
            }(e.config, i, o, r) || !So(e.element) ? e.loadVideoViaConfig(o || i, r).then(() => t).catch(() => {
                throw ks(e.config, "loadVideo"), new se("An error occurred loading the video.", "Error", "loadVideo")
            }) : (e.loadVideoViaIframe(o || i, r, n.listeners), Ns)
        },
        unload() {
            e.config.view !== Xt.main && e.config.view !== Xt.privateUnlocked && e.config.view !== Xt.webinarUnlocked || t.fire(xt._reset)
        },
        addCuePoint(n, i) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new se(`Cue point time must be positive number less than the duration of the video (${At(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(n, i);
                return setTimeout(() => {
                    t.fire(Kt._cuePointAdded, o)
                }, 0), o.id
            } catch (De) {
                if ("CuePointsNotSupported" === De.name) throw new se("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new se("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(n) {
            const i = e.backbone.cuePoints.filter(e => e.id === n)[0];
            if (!i) throw new se(`Cue point “${n}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(i), setTimeout(() => {
                t.fire(Kt._cuePointRemoved, i)
            }, 0)
        },
        enableTextTrack(n, o = null) {
            let r = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map(e => (e.language = e.lang, e));
            if (!r.some(e => e.language.toLowerCase() === n.toLowerCase())) throw new se(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const a = o ? `${n}.${o}` : n,
                {
                    track: s
                } = ((e, t = []) => {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter(e => r && e.language === n || e.language === o).sort((e, t) => {
                        const r = 2 * Number(e.language === o && e.kind === i) + 2 * Number(e.language === n) + 1 * Number(e.kind === i);
                        return 2 * Number(t.language === o && t.kind === i) + 2 * Number(t.language === n) + 1 * Number(t.kind === i) - r
                    });
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                })(a, r);
            if (!s || o && s.kind !== o) throw new se(`There are no ${o} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return t.fire(xt._turnCaptionsOn, s.id), i < 3 ? null : new Promise((e, n) => {
                t.once(Kt._captionsChanged, (t, n) => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                })
            })
        },
        disableTextTrack() {
            t.fire(xt._turnCaptionsOff)
        },
        toggleFullscreen(e) {
            const n = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise((i, o) => {
                if (!de.element === e) {
                    const r = () => {
                            de.off("enter", r), i()
                        },
                        a = (t, i) => {
                            de.off("error", a);
                            const r = n[i] || n.not_supported;
                            o(new se(r.msg, r.name, `${e?"request":"exit"}Fullscreen`))
                        };
                    return de.on("enter", r), de.on("error", a), void t.fire(Kt._fullscreenButtonPressed)
                }
                i()
            })
        },
        requestFullscreen: () => T.toggleFullscreen(!0),
        exitFullscreen: () => T.toggleFullscreen(!1),
        get fullscreen() {
            return !!de.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        remotePlaybackPrompt() {
            try {
                e.backbone.showExternalDisplayPicker()
            } catch (t) {
                throw new se("Remote playback is not available.", "NotFoundError", "remotePlaybackPrompt")
            }
        },
        appendVideoMetadata: n => new Promise((i, o) => {
            try {
                const o = Array.from(e.backbone.chapters);
                e.parentUrl = n,
                    function(e, t, n) {
                        const {
                            duration: i,
                            id: o,
                            privacy: r
                        } = e.video;
                        "disable" !== r && "anybody" !== r && "unlisted" !== r || Ps({
                            hasPart: function(e, t, n, i) {
                                if (t < 30 || 0 === i.length) return [];
                                const o = [];
                                return i.forEach((r, a) => {
                                    const {
                                        startTime: s,
                                        text: l
                                    } = r;
                                    if (s < t) {
                                        var c;
                                        const t = null == i || null == (c = i[a + 1]) ? void 0 : c.startTime,
                                            r = `vimeo_t_${e}`,
                                            [d] = n.split("#"),
                                            u = `${d}#${r}=${s}`;
                                        o.push({
                                            "@type": "Clip",
                                            name: l,
                                            startOffset: s,
                                            endOffset: t,
                                            url: u
                                        })
                                    }
                                }), o.length && (o[o.length - 1].endOffset = t), o
                            }(o, i, t, n)
                        })
                    }(e.config, n, o), t.fire(Kt._parentUrlAvailable, n), i()
            } catch (r) {
                o(new se((null == r ? void 0 : r.message) || "", (null == r ? void 0 : r.name) || "", "appendVideoMetadata"))
            }
        }),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!Yr.currentSession
        },
        get color() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorOne() {
            var t;
            return null == (t = e.config.embed.color_one) ? void 0 : t.replace("#", "")
        },
        get colorTwo() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorThree() {
            var t;
            return null == (t = e.config.embed.color_three) ? void 0 : t.replace("#", "")
        },
        get colorFour() {
            var t;
            return null == (t = e.config.embed.color_four) ? void 0 : t.replace("#", "")
        },
        set color(e) {
            C(e, on, "setColor")
        },
        set colorOne(e) {
            C(e, nn, "setColorOne", [on, rn])
        },
        set colorTwo(e) {
            C(e, on, "setColorTwo", [nn])
        },
        set colorThree(e) {
            C(e, rn, "setColorThree", [nn])
        },
        set colorFour(e) {
            C(e, an, "setColorFour")
        },
        get cuePoints() {
            return e.backbone.cuePoints.map(e => ({
                time: e.time,
                data: e.data,
                id: e.id
            }))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(n) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new se(`Seconds must be a positive number less than the duration of the video (${At(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return t.fire(jt._seek), t.fire(xt._seek, n), t.fire(Kt._mousedOver), i < 3 ? null : new Promise((e, n) => {
                t.once(g.SEEKED, ({
                    currentTime: t
                }) => {
                    e(t)
                })
            })
        },
        get duration() {
            return At(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            t.fire(xt._changeLoop, e)
        },
        set muted(e) {
            t.fire(xt._changeMuted, e, !0)
        },
        get muted() {
            return e.backbone.muted || 0 === y()
        },
        get paused() {
            return !(e.backbone && "paused" in e.backbone && !e.backbone.paused)
        },
        get buffered() {
            return Rs(e.backbone.buffered)
        },
        get played() {
            return Rs(e.backbone.played)
        },
        get seekable() {
            return Rs(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(n) {
            if (!e.config.embed.settings.speed) throw new se("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(n) || n > 2) throw new se("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            t.fire(xt._changePlaybackRate, n)
        },
        get remotePlaybackAvailability() {
            return e.backbone.externalDisplayAvailable
        },
        get remotePlaybackState() {
            return e.backbone.externalDisplayActive ? "connected" : "disconnected"
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map(e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === _ ? "showing" : "disabled"
            }))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new se("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            return y()
        },
        set volume(e) {
            if (e = parseFloat(e), 1 === i && (e /= 100), isNaN(e) || e < 0 || e > 1) throw new se("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            v = e, X.settingVolume || 0 !== e ? t.fire(xt._changeVolume, e, !0) : t.fire(xt._changeMuted, !0, !0)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!Ss(e.config.video.owner)) throw new se("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map(e => e.id);
            if (!n.includes(t)) throw new se(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideoViaConfig(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(n) {
            e.config.user.liked !== n && t.fire(Kt._likeButtonPressed, n)
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(n) {
            e.config.user.watch_later !== n && t.fire(Kt._watchLaterButtonPressed, n)
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex(e => t === e.id);
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            }))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new se(`Chapter timecode must be positive number less than the duration of the video (${At(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (De) {
                if ("ChaptersNotSupported" === De.name) throw new se(De.message, "UnsupportedError", "_addChapter");
                throw new se("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (De) {
                throw new se("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new se("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (De) {
                if ("ChaptersNotSupported" === De.name) throw new se("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new se("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            t.fire(xt._addCard, e)
        },
        _removeCard(e) {
            t.fire(xt._removeCard, e)
        },
        _setOutro(n, i) {
            e.config.embed.outro !== n ? (t.fire(xt._hideOutro), setTimeout(() => {
                e.config.embed.outro = n, t.fire(xt._showOutro, n, i)
            }, 400)) : t.fire(xt._showOutro, n, i)
        },
        _hideOutro() {
            t.fire(xt._hideOutro)
        },
        _setEmailCapture(t) {
            if (!t) return void T._unsetEmailCapture();
            let n = t.customFields ? e.config.embed.email_capture_form || {} : e.config.embed.email || {};
            n.position = t.position.toLowerCase(), n.timecode = t.timecode, t.nohide = !0, t.noblur = !0, t.nofocus = u(t, "nofocus", !0), T._showOverlay("email-capture", t)
        },
        _updateEmailCapture(n) {
            var i;
            n.custom_fields ? (l(null == (i = e.config.video.webinar) ? void 0 : i.registration_form) || (e.config.video.webinar.registration_form = n), t.fire(xt._updateEmailCapture, n)) : this._setEmailCapture(n)
        },
        _updateWebinarStartTime(n) {
            e.config.video.webinar && (e.config.video.webinar.scheduled_start_time = n), t.fire(xt._updateWebinarStartTime, n)
        },
        _setActiveEmailCapturePage(e) {
            t.fire(xt._setActivePage, e)
        },
        _unsetEmailCapture() {
            e.config.embed.outro && (t.fire(xt._hideOutro), delete e.config.embed.outro), e.config.embed.email && (t.fire(xt._hideOverlay, {
                unmakeModal: !0
            }), delete e.config.embed.email)
        },
        _hideOverlay(e) {
            t.fire(xt._hideOverlay, {
                name: e,
                unmakeModal: !0
            })
        },
        _showOverlay(e, n) {
            t.fire(xt._showOverlay, e, n)
        },
        _fireEvent(...e) {
            t.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(n) {
            e.config.video.live_event && (Object.keys(n).forEach(i => {
                let o = n[i];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[i] = o, t.fire(Kt._liveEventSettingsChanged, i, o), t.fire(K.SETTINGS_UPDATED, i, o)
            }), t.fire(Kt._configChanged, !1, e.config))
        },
        _setEmbedSettings(n) {
            Object.keys(n).forEach(i => {
                let r = n[i];
                r = "object" == typeof r ? r : Number(r), "badge" === i && (r ? r = o : o = e.config.embed.settings.badge), e.config.embed.settings[i] = r, t.fire(Kt._embedSettingChanged, i, r)
            }), t.fire(Kt._configChanged, !1, e.config)
        },
        _setEmbedSetting(n, i) {
            i = "object" == typeof i ? i : Number(i), "badge" === n && (i ? i = o : o = e.config.embed.settings.badge), e.config.embed.settings[n] = i, t.fire(Kt._embedSettingChanged, n, i), t.fire(Kt._configChanged, !1, e.config)
        },
        _setCreateInteractive(n, i) {
            e.config.embed.create_interactive = n, e.config.embed.interactive = i, t.fire(Kt._createInteractiveChanged, n, e.config), t.fire(Kt._configChanged, !1, e.config)
        },
        _setOTTVideoMetadata(n) {
            e.config.request.flags.ott && (e.ottVideoMetadata = n, t.fire(Kt._ottMetadataSet, n))
        },
        _toggleDebugPanel() {
            t.fire(Kt._debugButtonPressed)
        },
        _overrideControlbarBehavior(e) {
            t.fire(xt._overrideControlbarBehavior, e)
        },
        _setControlbarVisibility(e) {
            t.fire(xt._setControlsVisibility, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new se("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new se("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (De) {
                throw new se(De.message, De.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new se("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new se("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new se("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new se("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (De) {
                throw new se(De.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = Yr.currentSession;
            t && ue(e) && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: ".vp-title",
                sidedock: ".vp-sidedock",
                controls: ".vp-controls",
                customLogo: ".custom-logo"
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = {
                    get details() {
                        const e = ht(document.querySelector(".headers > h1")),
                            t = ht(document.querySelector(".sub-title")),
                            n = ht(document.querySelector(".vp-portrait")),
                            i = Math.max(e.width, t.width) + n.width,
                            o = Math.max(n.height, e.height + t.height);
                        return {
                            top: 10,
                            left: 10,
                            width: Math.max(200, i),
                            height: Math.max(60, o)
                        }
                    },
                    get sidedock() {
                        return {
                            top: 10,
                            left: t - 10 - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = i.customLogo,
                            o = Math.max(60, e.height);
                        return {
                            height: o,
                            top: n - 10 - o,
                            left: 10,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            i = e ? ht(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - 10 - i.height,
                            left: t - 10 - i.width,
                            width: i.width,
                            height: i.height
                        }
                    }
                };
            return i
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        addEventListener(...e) {
            T.on.apply(T, e)
        },
        removeEventListener(...e) {
            T.off.apply(T, e)
        },
        seekTo(e) {
            T.currentTime = e
        },
        changeColor(e) {
            T.color = e
        }
    };
    const L = {
        addCuePoint: ({
            time: e,
            data: t
        }) => T.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            T.enableTextTrack(e, t)
        }
    };

    function w(e, t) {
        n && n.emit(e, t), a.fire(e, t)
    }
    const A = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        w(e, i)
    };

    function I({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: At(e),
            percent: At(n),
            duration: At(t)
        }
    }

    function P(e) {
        return {
            playbackRate: e
        }
    }

    function k() {
        w(Zt.LOADED, p ? null : (p = !0, {
            id: e.config.video.id
        }))
    }

    function R(e) {
        return d = e, N(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new se("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new se("There was an error loading the files for this video.", "FileError")
            }
            return new se("An error occurred during playback.", "PlaybackError")
        }(d))
    }

    function N(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            var e;
            let t = new URL(window.location.href);
            m = !!t.searchParams.get("fromLoadVideo"), f = (null == (e = t.searchParams.get("listeners")) ? void 0 : e.split(",")) || [], (m || f.length) && (t.searchParams.delete("fromLoadVideo"), t.searchParams.delete("listeners"))
        }(), e.config.embed.on_site || (h(e.config.embed.api), n = new le, n.configureClient(window.parent, "*"), n.filter((function() {
            return ce()
        })), n.listeners = Ot(Zt).reduce((e, t) => E(E({}, e), {}, {
            [t]: !1
        }), {}), f.length ? f.forEach(e => {
            n.listeners[e] = !0
        }) : (n.listeners[Zt.READY] = !0, n.listeners[Zt.ERROR] = !0), n.filter(e => n.listeners[e]), t.on(Kt._remoteComponentMounted, (e, t, i) => {
            n.addAllowedActor(e, null == t ? void 0 : t.contentWindow, i)
        })),
        function() {
            if (!n) return;
            const t = ws({}, T, L);
            n.extendMethods(t), n.hooks({
                logError(e) {
                    w(Zt.ERROR, N(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (ue(e)) return h(3), e;
                    try {
                        const t = JSON.parse(e);
                        return h(2), t
                    } catch (t) {
                        return h(null), w(Zt.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    (null == (n = e.config.embed) ? void 0 : n.player_id) && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === i && (t = function(e) {
                            if (e.event) {
                                for (const t in Jt)
                                    if (Jt[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), ue(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (De) {}
                    return t
                }
            })
        }(), t.on(S.BUFFER_STARTED, A(Zt.BUFFER_START)), t.on(S.BUFFER_ENDED, A(Zt.BUFFER_END)), t.on(S.CUE_POINT, A(Zt.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), t.on(M, A(Zt.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), t.on(Kt._chapterChanged, A(Zt.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex(e => t === e.id);
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), t.on(Kt._ended, A(Zt.ENDED, (function() {
            return c = !1, {
                seconds: At(e.config.video.duration),
                percent: 1,
                duration: At(e.config.video.duration)
            }
        }))), t.on(Kt._paused, A(Zt.PAUSE, (function(t) {
            return c = !1, {
                seconds: At(t),
                percent: At(t / e.config.video.duration),
                duration: At(e.config.video.duration)
            }
        }))), t.on(Kt._playbackRateChanged, A(Zt.PLAYBACK_RATE_CHANGE, P)), t.on(Kt._playbackRateChanged, A(Zt.RATE_CHANGE, P)), t.on(Kt._captionsChanged, A(Zt.TEXT_TRACK_CHANGE, (function(e) {
            _ = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), t.on(Kt._volumeChanged, A(Zt.VOLUME_CHANGE, (function(e) {
            return {
                volume: At(e)
            }
        }))), t.on(Kt._controlBarVisibilityChanged, A(Zt.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Kt._toastVisibilityChanged, A(Zt.TOAST_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Kt._configChanged, (function(e) {
            v && setTimeout((function() {
                X.settingVolume || 0 !== v ? t.fire(xt._changeVolume, v, !0) : t.fire(xt._changeMuted, !0, !0)
            }), 0), e && k()
        })), t.on(Kt._error, (function(e) {
            const t = R(e);
            s && w(Zt.ERROR, t)
        })), t.on(Kt._didEnterFullscreen, A(Zt.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), t.on(Kt._didExitFullscreen, A(Zt.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), t.on(Kt._qualityChanged, A(Zt.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), t.on(Kt._adStarted, A(Zt.AD_STARTED)), t.on(Kt._adComplete, A(Zt.AD_COMPLETED)), t.on(Kt._adError, A(Zt.AD_ERROR)), t.on(Kt._adSkipped, A(Zt.AD_SKIPPED)), t.on(Kt._allAdsCompleted, A(Zt.AD_ALL_COMPLETED)), t.on(Kt._adClicked, A(Zt.AD_CLICKED)), t.on(Kt._interactiveHotspotClicked, A(Zt.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), t.on(Kt._interactiveOverlayPanelClicked, A(Zt.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), t.once(Kt._ready, (function() {
            s = !0, m ? (k(), function(e, t) {
                n && n.emitMethodEvent(e, t)
            }(Zt.LOAD_VIDEO, e.config.video.id)) : w(Zt.READY), d && (w(Zt.ERROR, R(d)), d = null)
        })), t.on(K.EVENT_ENDED, A(Zt.LIVE_EVENT_ENDED)), t.on(K.EVENT_STARTED, A(Zt.LIVE_EVENT_STARTED)), t.on(K.STREAM_OFFLINE, A(Zt.LIVE_STREAM_OFFLINE)), t.on(K.STREAM_ONLINE, A(Zt.LIVE_STREAM_ONLINE)), t.on(z.CAMERA_CHANGE, A(Zt.CAMERA_CHANGE, (function(e) {
            return e
        }))), t.on(z.MOTION_END, A(Zt.MOTION_END)), t.on(z.MOTION_START, A(Zt.MOTION_START)), t.on(z.WEBVR_HARDWARE_AVAILABLE, A(Zt.WEBVR_HARDWARE_AVAILABLE)), t.on(z.WEBVR_ENTER, A(Zt.ENTER_WEBVR)), t.on(z.WEBVR_EXIT, A(Zt.EXIT_WEBVR)), t.on(z.SPATIAL_UNSUPPORTED, A(Zt.SPATIAL_UNSUPPORTED)), t.on(g.PLAY, A(Zt.PLAY, (function(t) {
            return c ? null : (c = !0, {
                seconds: At(t),
                percent: At(t / e.config.video.duration),
                duration: At(e.config.video.duration)
            })
        }))), t.on(g.PLAYING, A(Zt.PLAYING, (function() {
            return c ? {
                seconds: At(e.currentTime),
                percent: At(e.currentTime / e.config.video.duration),
                duration: At(e.config.video.duration)
            } : null
        }))), t.on(g.PROGRESS, A(Zt.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let o = {
                seconds: At(e),
                percent: At(n),
                duration: At(t)
            };
            return i < 3 && (o.bytesLoaded = -1, o.bytesTotal = -1), o
        }))), t.on(g.SEEKING, A(Zt.SEEKING, I)), t.on(g.SEEKED, A(Zt.SEEKED, I)), t.on(g.TIME_UPDATE, A(Zt.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: At(e),
                percent: At(n),
                duration: At(t)
            }
        }))), t.on(g.LOADED_METADATA, A(Zt.LOADED_METADATA)), t.on(g.DURATION_CHANGE, A(Zt.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), t.on(g.WAITING, A(Zt.WAITING)), t.on(g.LOADED_DATA, A(Zt.LOADED_DATA)), t.on(g.LOAD_START, A(Zt.LOAD_START)), t.on(g.RESIZE, A(Zt.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), t.on(g.ENTER_PICTURE_IN_PICTURE, A(Zt.ENTER_PICTURE_IN_PICTURE)), t.on(g.LEAVE_PICTURE_IN_PICTURE, A(Zt.LEAVE_PICTURE_IN_PICTURE)), t.on(Gr.connected, A(Zt.CHROMECAST_CONNECTED)), t.on(Kt._airPlayAvailable, A(Zt.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !0)), t.on(Kt._airPlayNotAvailable, A(Zt.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !1)), t.on(Kt._airPlayActivated, A(Zt.REMOTE_PLAYBACK_CONNECT)), t.on(Kt._airPlayDeactivated, A(Zt.REMOTE_PLAYBACK_DISCONNECT)), t.on(xt._reset, (function() {
            d = null, p = !1
        })), e.doNotTrackEnabled || (t.on(Kt._emailCaptureSuccess, () => {
            w(Zt.EMAIL_CAPTURE)
        }), t.on(Kt._emailCaptureFailure, () => {
            w(Zt.EMAIL_CAPTURE_FAILED)
        })), t.on(Kt._spaceChanged, (function(e = {}) {
            n && (n.listeners[Zt.SPACE_CHANGE] = !0, w(Zt.SPACE_CHANGE, e))
        })), t.fire(Kt._apiModuleReady), T
}
let Ms = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentElement = this.alertTextElement.querySelector(".vp-alert-text")
    }
    var t = e.prototype;
    return t.show = function(e) {
        this.alertContentElement.innerHTML = e, this.alertContentElement.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentElement.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
const xs = E(E({}, pe), {}, {
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr",
    WEBINAR_REGISTRANT_BLOCKED: "webinar-registrant-blocked",
    WEBINAR_REGISTRANT_UNBLOCKED: "webinar-registrant-unblocked"
});

function Bs(e) {
    return kt("av01", e) ? "AV1" : kt("dvh1", e) ? "HEVC_DVH1" : kt("hvc1", e) ? "HEVC" : kt("avc1", e) ? "AVC" : e || ""
}

function Vs(e) {
    return kt("mp4a", e) ? "AAC" : kt("opus", e) ? "OPUS" : e || ""
}

function Us(e, t) {
    var n, i;
    return (null == e || null == (n = e.request) || null == (i = n.ab_tests) ? void 0 : i[t]) ? e.request.ab_tests[t] : {}
}

function Fs(t, n, i, r) {
    const a = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const r = i.headers;
        return function(e, t, n) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(a) {
            if ("video" === e.type) {
                const r = t.backbone.representations.reverse(),
                    s = r[e.stream];
                if (!s) return;
                const l = function(e, n, i, o, r, a) {
                    const s = i.headers;
                    delete s[""];
                    let l = {};
                    Object.keys(s).forEach(e => {
                        const t = s[e],
                            n = e.replace(v, "_");
                        l[n] = t
                    });
                    let c = a.slice();
                    return c.forEach(e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    }), {
                        host: be(n.data.url),
                        product: ro(t.config),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: c,
                        clip_id: t.config.video.id,
                        headers: l,
                        buffered: At(fe(t.backbone.currentTime, t.backbone.buffered), 2),
                        request_id: n.data.uuid ? n.data.uuid : ""
                    }
                }(e, n, i, a, s, r);
                let u = l;
                o && (u = Ee({
                    extraContext: o
                }, l)), t.events.fire(Kt._logMetric, {
                    name: xs.CHUNK_DOWNLOADED,
                    data: u
                });
                const p = {
                    ak_reference_id: l.headers.akamai_grn || null,
                    akamai_edge_ip: l.headers.akamai_request_bc || null,
                    akamai_request_bc: l.headers.akamai_request_bc || null,
                    content_length: l.headers.content_length || null,
                    content_type: l.headers.content_type || null,
                    x_cache: l.headers.x_cache || null,
                    x_cache_hits: l.headers.x_cache_hits || null
                };
                l.headers = p, Us(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(e, t, n) {
                    const i = Date.now(),
                        o = [{
                            uuid: c(),
                            created_at: i,
                            event: {
                                name: "chunk_downloads",
                                version: 5,
                                ts_ms: i,
                                fields: t
                            },
                            tracker: {
                                name: "vimeo-player",
                                version: n
                            }
                        }];
                    new d(e).logRequestPromiseWithUrl(e, JSON.stringify(o), !0)
                }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", l, Wa(t.config)), J += a.byteLength, ee = l
            }
            "akamai-grn" in r && (F = r["akamai-grn"]),
                function({
                    headers: e,
                    url: t
                }) {
                    const n = go(e);
                    n === Ii.CacheMiss ? G = {
                        url: t,
                        edge: !1,
                        tier1: !1,
                        tier2: !1
                    } : n === Ii.MidCacheHit ? G = {
                        url: t,
                        edge: !1,
                        tier1: !0,
                        tier2: !1
                    } : n === Ii.EdgeCacheHit && (G = {
                        url: t,
                        edge: !0,
                        tier1: !0,
                        tier2: !1
                    })
                }(i);
            let s = {};
            F && (s.akamai_reference_id = F), s.manifest_load_durations = t.backbone.manifestLoadDurations, s.successful_segment_count = t.backbone.successfulSegments.length, s.failed_segment_count = t.backbone.failedSegments.length, Y = s
        }))
    }));
    let s, l, p;
    const _ = new WeakMap,
        v = new RegExp("-", "g");
    let m, f = null,
        b = null,
        E = !1,
        y = !1,
        C = !1,
        T = "auto",
        L = {},
        w = {},
        I = null,
        P = null,
        O = null,
        k = [],
        R = null,
        N = {},
        D = !1,
        M = !1,
        x = !1,
        B = 0,
        V = 0,
        U = 0,
        F = null,
        G = null,
        W = !1,
        Y = null,
        q = null,
        $ = null,
        X = !1,
        Z = !1,
        J = 0,
        Q = 0,
        ee = null;

    function te() {
        const e = _.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: l,
            _metricsBufferTracker: p
        } = e) : (p = new he, l = new ve(t.backbone.videoElement, ie), ne(), _.set(t.backbone.videoElement, {
            _videoMonitor: l,
            _metricsBufferTracker: p
        }))
    }

    function ne() {
        const e = p;
        l.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(S.BUFFER_STARTED, () => {
                    E && (X || W || (W = !0, e.trackBufferStart(l.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                }), t.events.on(S.BUFFER_ENDED, () => {
                    E && W && (W = !1, e.trackBufferEnd(l.logBufferEnd, {
                        cdn_data: G
                    }), e.resetLastBufferTime())
                })
            },
            addEventData(e) {
                const t = Z;
                switch (Z = !1, e) {
                    case xs.VIDEO_START_TIME:
                        return Y;
                    case xs.VIDEO_SEEK:
                        const e = q;
                        return q = null, e;
                    case xs.VIDEO_PLAYED:
                    case xs.VIDEO_PAUSED:
                        return {
                            api_call: t
                        }
                }
                return null
            },
            customMinuteTracker: {
                shouldCount: () => {
                    var e;
                    return t.backbone.isLive() && (null == (e = t.config.video.live_event) ? void 0 : e.dvr) && !t.backbone.atLiveEdge
                },
                onCount: e => {
                    Q = e
                }
            }
        }), l.initHooks()
    }

    function ie(n, r = {}) {
        (function(e) {
            var n, i, o, r;
            switch (e) {
                case xs.VIDEO_SEEK:
                case xs.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (o = i.settings) ? void 0 : o.background);
                case xs.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (r = t.config.video.live_event) ? void 0 : r.low_latency;
                case xs.VIDEO_PLAYBACK_ERROR && (null == e ? void 0 : e.error_type) === S.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED:
                    return kr(.1);
                default:
                    return !1
            }
        })(n) || ((r = Object.assign(l ? l.globalProperties() : {}, Object.assign(function() {
            var e, n, r, a, s;
            const l = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                looping: !!t.config.embed.loop,
                owner_id: null == (e = t.config.video) || null == (n = e.owner) ? void 0 : n.id,
                product: ro(t.config),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                version: Wa(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (r = t.config.user) ? void 0 : r.id,
                viewer_team_id: null == (a = t.config.user) ? void 0 : a.team_id,
                viewer_team_origin_user_id: null == (s = t.config.user) ? void 0 : s.team_origin_user_id,
                vuid: Do("vuid"),
                fps: t.config.video.fps
            };
            var c;
            return t.config.video.owner && (l.account_type = t.config.video.owner.account_type), t.config.embed.api && (l.api_version = t.config.embed.api), t.config.embed.app_id && (l.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (l.privacy = t.config.video.privacy), i.get(oa) && (l.live_session_id = null == (c = t.config.video.live_event) ? void 0 : c.id), t.config.video.webinar && (l.webinar_uuid = t.config.video.webinar.id), l
        }(), function() {
            var n, i;
            const o = t.backbone.video ? t.backbone.video.currentFile : {},
                r = function() {
                    const n = {},
                        i = h(),
                        o = ge("asc"),
                        r = "MediaSourceScanner" === t.backbone.currentScannerName,
                        a = "HTMLScanner" === t.backbone.currentScannerName,
                        s = "HLSLiveScanner" === t.backbone.currentScannerName;
                    let l = [];
                    a && (l = u(t.config, "request.files.progressive") || u(t.config, "request.files.hls") || []), r && (l = u(t.config, "request.files.dash.streams", [])), s && (l = t.backbone.video.currentFile.mime === Mt.dashMpd ? u(t.config, "request.files.dash.streams", []) : u(t.config, "request.files.hls.streams", []));
                    const c = Array.from(l).sort(o).map(e => e.profile);
                    let d = -1,
                        p = 0,
                        _ = null;
                    if (Object.keys(w).forEach(e => {
                            const t = c.indexOf(parseInt(e, 10));
                            t > d && (d = t);
                            const n = w[e].reduce((e, t) => ((t.end || i) - t.start) / 1e3 + e, 0);
                            n > p && (p = n, _ = e)
                        }), n.highest_profile = c[d], n.highest_available_profile = c[c.length - 1], n.most_used_profile = _, (r || s) && k) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(k))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(k))) / 1e3;
                        const t = k.reduce((e, t) => e + t, 0);
                        n.average_speed = Math.round(t / k.length) / 1e3
                    }
                    return n
                }();
            let {
                id: a = 0,
                mime: s = Mt.h264,
                metadata: {
                    profile: l = null
                } = {}
            } = o, c = !1, d = !1;
            switch (s) {
                case Mt.dash:
                    0 === o.restrictedStreamIndexes.length && (c = !0), u(t.config, "request.files.dash.separate_av") && (d = !0), l = L ? L.profile : null;
                    break;
                case Mt.hls:
                    c = !0
            }
            let p = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio") / 1e3,
                auto: c,
                average_speed: r.average_speed || 0,
                cdn: o.metadata ? o.metadata.cdn : "akamai",
                delivery: "live" !== zt[s] ? zt[s] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : null,
                dropped_frame_percent: U,
                event_time: f + me(b),
                fullscreen: M,
                picture_in_picture: x,
                highest_available_profile: r.highest_available_profile ? String(r.highest_available_profile) : null,
                highest_profile: r.highest_profile ? String(r.highest_profile) : null,
                max_speed: isFinite(r.max_speed) ? r.max_speed : 0,
                mime: o.mime || null,
                min_speed: isFinite(r.min_speed) ? r.min_speed : 0,
                most_used_profile: r.most_used_profile ? String(r.most_used_profile) : null,
                profile_id: l ? String(l) : null,
                codec: Bs(null == t.backbone.getCurrentStream || null == (n = t.backbone.getCurrentStream("video")) ? void 0 : n.codecs),
                audio_codec: Vs(null == t.backbone.getCurrentStream || null == (i = t.backbone.getCurrentStream("audio")) ? void 0 : i.codecs),
                quality: L ? L.quality : null,
                quality_downswitch_count: V,
                quality_upswitch_count: B,
                separate_av: d,
                target_profile_id: $,
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video") / 1e3,
                video_duration: At(t.config.video.duration)
            };
            if (t.backbone.isLive()) {
                var _;
                void 0 !== t.backbone.latency && (p.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (p.is_low_latency = t.backbone.lowLatencyMode);
                const e = !!(null == (_ = t.config.video.live_event) ? void 0 : _.dvr);
                p.dvr = e, e && (p.in_dvr_mode = e && !t.backbone.atLiveEdge, p.dvr_minutes_watched = Q)
            }
            if (t.config.video.ecdn) {
                const e = t.config.video.ecdn.ecdn_provider,
                    {
                        ecdnBytesByCdn: n,
                        ecdnBytesPeered: i,
                        ecdnPeers: o
                    } = Lo(e);
                p.ecdn = !0, p.ecdn_provider = e, p.ecdn_bytes_via_cdn = n, p.ecdn_bytes_via_peering = i, p.ecdn_peers = o
            }
            return p
        }(), function() {
            let e = {};
            if (t.config.request.ab_tests)
                for (const n in t.config.request.ab_tests) {
                    const i = t.config.request.ab_tests[n];
                    e[`${n}_test`] = 1, e[`${n}_group`] = i.group;
                    for (const t in i.data) e[`${n}_data_${t}`] = i.data[t]
                }
            return e
        }()), r)).name = n, t.events.fire(Kt._logMetric, {
            name: n,
            data: r
        }), s.log(r).catch(e => {}))
    }

    function oe(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        l.handleExternalError(i, t)
    }
    b = _e(), f = t.config.request.timestamp, t.config.request.drm, s = new d(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(Kt._error, oe), t.events.on(xt._reset, (function() {
        D = !1
    })), t.events.on(xt._seek, (function() {
        X = !0
    })), t.events.on(Kt._didEnterFullscreen, (function() {
        M = !0, ie(xs.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(Kt._didExitFullscreen, (function() {
        M = !1, ie(xs.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(g.ENTER_PICTURE_IN_PICTURE, (function() {
        x = !0, ie(xs.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(g.LEAVE_PICTURE_IN_PICTURE, (function() {
        x = !1, ie(xs.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(Kt._configChanged, (function() {
        f = t.config.request.timestamp, b = _e(), E = !1, y = !1, C = !1, T = "auto", L = {}, w = {}, I = null, P = null, O = null, k = [], R = null, N = {}, D = !1, M = !1, B = 0, V = 0, U = 0, G = null, $ = null, J = 0, t.config.request.drm, Q = 0, l && (l.reset(), ne())
    })), t.events.on(Kt._nudgeAttempted, (function() {
        q = {
            seek_type: "nudge"
        }
    })), t.events.on(Kt._scrubbingStarted, (function(e) {
        const t = null == e ? void 0 : e.seekType;
        q = {
            seek_type: t
        }
    })), t.events.on(Kt._chapterSeek, (function(e) {
        q = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(Kt._interactiveSeekCall, (function(e) {
        q = {
            seek_type: e.type
        }
    })), t.events.on(Kt._interactiveMarkerClicked, (function(e) {
        q = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(A, (function() {
        D || Yr.isCastConnected || (t.performDelegateAction($t, (e, t = {}) => {
            D = !0, m.then(() => l.logStartRequest()).catch(() => {})
        }), Us(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(e, t, n, i) {
            const o = Date.now(),
                r = [{
                    uuid: c(),
                    created_at: o,
                    event: {
                        name: "session_manifest",
                        version: 1,
                        ts_ms: o,
                        fields: {
                            sessionID: t,
                            manifest: n
                        }
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new d(e).logRequestPromiseWithUrl(e, JSON.stringify(r), !0)
        }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, Wa(t.config)))
    })), t.events.on(Kt._overlayOpened, (function(e) {
        "email-capture" === e && ie(xs.SLATE_DISPLAYED, {
            slate_type: "email"
        }), "interactive" === e && ie(xs.SLATE_DISPLAYED, {
            slate_type: "interactive"
        })
    })), t.events.on(Kt._playbackRateChanged, (function(e, t) {
        ie(xs.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(xt._changeQuality, (function(e) {
        t.backbone.video.currentFile.mime === Mt.dash && ("auto" === e || y ? "auto" === e && y && !C && (ie(xs.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: T,
            auto: 1
        }), C = !0) : (ie(xs.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), y = !0), T = e)
    })), t.events.on(xt._turnCaptionsOn, (function(e) {
        R !== e && (R = e, ie(xs.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on(xt._turnCaptionsOff, (function() {
        R && (R = null, ie(xs.CAPTIONS_DISABLED))
    })), t.events.on(Gr.connected, (function() {
        ie(xs.CHROMECAST_CONNECTED)
    })), t.events.on(Gr.disconnected, (function() {
        ie(xs.CHROMECAST_DISCONNECTED)
    })), t.events.on(S.STREAM_CHANGE, (function(e, t, n, i) {
        var o;
        L = e;
        const r = e.profile ? e.profile : e.id,
            a = h();
        if (w[r] = w[r] || [], I) {
            const e = w[I].length - 1;
            w[I][e] && (w[I][e].end = a)
        }
        P && (n[t].bitrate > P ? B += 1 : V += 1), w[r].push({
            start: a
        }), N[r] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        };
        let s = {
            previous_audio_bitrate: O / 1e3,
            previous_video_bitrate: P / 1e3,
            previous_profile_id: String(I),
            reason: null == i ? void 0 : i.reasonForSwitch
        };
        r.toString() === (null == (o = ee) ? void 0 : o.profile_id) && (ee.headers.akamai_request_bc || ee.headers.x_cache) && (s.cache_hit = go(ee.headers)), ie(xs.VIDEO_STREAM_CHANGE, s), I = r, P = n[t].bitrate, O = n[t].audioBitrate
    })), t.events.on(S.STREAM_TARGET_CHANGE, (function(e) {
        e && ($ = String(e.profile || "") || null)
    })), t.events.on(g.PLAYING, (function() {
        X = !1
    })), t.events.once(Kt._firstTimeUpdate, (function() {
        E = !0
    })), t.events.on(Kt._adBuffering, (function() {
        ie(xs.AD_BUFFERING)
    })), t.events.on(Kt._adComplete, (function() {
        ie(xs.AD_COMPLETE)
    })), t.events.on(Kt._adClicked, (function() {
        ie(xs.AD_CLICKED)
    })), t.events.on(Kt._adError, (function(e) {
        ie(xs.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(Kt._adPaused, (function() {
        ie(xs.AD_PAUSED)
    })), t.events.on(Kt._adResumed, (function() {
        ie(xs.AD_RESUMED)
    })), t.events.on(Kt._adStarted, (function(e) {
        ie(xs.AD_STARTED, {
            startup_duration: e.time ? At(e.time / 1e3, 2) : null
        })
    })), t.events.on(Kt._adSkipped, (function() {
        ie(xs.AD_SKIPPED)
    })), t.events.on(Kt._pausedForAd, (function() {
        o.iPhone && l.setDisplayContext(1)
    })), t.events.on(Kt._resumedAfterAd, (function() {
        o.iPhone && l.setDisplayContext(0)
    })), t.events.on(Kt._webinarRegistrantBlocked, (function() {
        ie(xs.WEBINAR_REGISTRANT_BLOCKED)
    })), t.events.on(Kt._webinarRegistrantUnblocked, (function() {
        ie(xs.WEBINAR_REGISTRANT_UNBLOCKED)
    })), t.events.on(S.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        U = Math.round(100 * t) / 100
    })), t.events.on(S.BANDWIDTH, (function({
        speed: e
    }) {
        k.push(e), k.length > 500 && k.shift()
    })), t.events.on(S.MANIFEST_TIMEOUT, (function() {
        ie(xs.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(S.MANIFEST_LOADED, (function() {
        ie(xs.VIDEO_MANIFEST_LOADED)
    })), t.events.on(S.DOWNLOAD_END, a), t.events.on(S.DOWNLOAD_TIMEOUT, (function() {
        ie(xs.DOWNLOAD_TIMEOUT)
    })), t.events.on(S.DRM_KEY_SWITCH, (function() {
        ie(xs.DRM_KEY_SWITCH)
    })), t.events.on(S.SCANNER_CHANGE, (function() {
        G = null
    })), t.events.on(S.AV_DURATION_MISMATCH, (function(e) {
        ie(xs.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(S.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: S.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = At(fe(0, e), 2), t.bytes_loaded = J, ie(xs.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(S.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: S.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        ie(xs.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(S.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, (function({
        incompatibleStreams: e,
        incompatibleStreamsAttributes: t
    }) {
        const n = ["codecs", "bitrate", "framerate", "quality", "width", "height", "mime_type"];
        e.forEach((e, i) => {
            const o = n.reduce((t, n) => (t.push(e[n]), t), []).concat(t[i].join(",")).join("|"),
                r = {
                    error_type: S.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
                    error_reason: o
                };
            ie(xs.VIDEO_PLAYBACK_ERROR, r)
        })
    })), t.events.on(j.MEDIASESSION_PLAY, (function() {
        ie(xs.MEDIASESSION_PLAY)
    })), t.events.on(j.MEDIASESSION_PAUSE, (function() {
        ie(xs.MEDIASESSION_PAUSE)
    })), t.events.on(j.MEDIASESSION_SEEK_FORWARD, (function() {
        ie(xs.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on(j.MEDIASESSION_SEEK_BACKWARD, (function() {
        ie(xs.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on(j.MEDIASESSION_SEEK_TO, (function() {
        ie(xs.MEDIASESSION_SEEK_TO)
    })), t.events.on(jt._seek, (function() {
        q = {
            seek_type: "api"
        }
    })), t.events.on(jt._play, (function() {
        Z = !0
    })), t.events.on(jt._pause, (function() {
        Z = !0
    })), t.events.on(z.WEBVR_ENTER, (function() {
        ie(xs.ENTER_WEBVR, !0)
    })), t.events.on(z.WEBVR_EXIT, (function() {
        ie(xs.EXIT_WEBVR, !0)
    })), t.events.on(K.STALL_JUMP, (function({
        msg: e
    }) {
        oe("livestall", {
            final: !1
        }, e)
    })), t.events.on(K.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        oe("livefallback", {
            final: !1
        }, e)
    })), m = new Promise((e, n) => {
        var i;
        (null == (i = t.backbone) ? void 0 : i.video) && e(), t.events.on(H, e)
    }), m.then(te).catch(() => {}), t.events.on(Kt._swapVideo, te)
}

function Hs(e) {
    let t, i, o = e.config.ott || {};
    const r = o.analytics_url || "https://collector.vhx.tv/events.gif",
        a = new d(r),
        s = b((function() {
            u("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        l = b((function() {
            u("seeking")
        }), 500);

    function c() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function u(i, s) {
        (s = Object.assign({}, s, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: Yr.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === s.timestamp && (s.timestamp = Math.round(.001 * Date.now()));
        const l = n(r, s);
        return a.logRequestPromiseWithUrl(l, {}, !0, "GET").catch(e => {})
    }

    function p() {
        e.events.on(g.ENDED, _), e.events.on(g.ERROR, v), e.events.on(g.PAUSE, m), e.events.on(g.PLAY, f), e.events.on(g.TIME_UPDATE, s), e.events.on(g.SEEKING, l), e.events.on(g.SEEKED, h), e.events.on(g.WAITING, E), e.events.on(Kt._didEnterFullscreen, y), e.events.on(Kt._didExitFullscreen, C), e.events.on(Kt._adComplete, T), e.events.on(Kt._adClicked, L), e.events.on(Kt._adError, w), e.events.on(Kt._adStarted, A), e.events.on(Kt._adSkipped, S)
    }

    function _() {
        s.cancel(), u("ended")
    }

    function v() {
        s.cancel(), u("error")
    }

    function m() {
        s.cancel(), u("pause")
    }

    function f() {
        if (!i) return i = !0, void u("firstplay");
        u("play")
    }

    function h() {
        l.cancel(), u("seeked")
    }

    function E() {
        u("waiting")
    }

    function y() {
        t = !0
    }

    function C() {
        t = !1
    }

    function T() {
        u(xs.AD_COMPLETE)
    }

    function L() {
        u(xs.AD_CLICKED)
    }

    function w() {
        u(xs.AD_ERROR)
    }

    function A() {
        u(xs.AD_STARTED)
    }

    function S() {
        u(xs.AD_SKIPPED)
    }
    e.events.on(Kt._configChanged, c), c(), e.config.ott ? p() : new Promise((t, n) => {
        e.ottVideoMetadata ? t() : e.events.on(Kt._ottMetadataSet, e => {
            t()
        })
    }).then(() => {
        o = e.ottVideoMetadata, p()
    }).catch(e => {})
}

function Gs(e, t) {
    let n, i, r, a, s, l, c, d, u, p, _, v, m = !1;
    const f = O();
    let h = {};

    function b() {
        i && (N(), i = null), a && (a.destroy(), a = null), r && clearInterval(r), s = null, l = !1, c = !1, u = !1, d = !1, p = !1, m = !1, v = new Promise((e, t) => {
            _ = e
        }), e.events.once(A, () => {
            p = !0
        }), e.events.on(g.ERROR, (function(e) {
            !e || "NotAllowedError" !== e.name && "AbortError" !== e.name || (p = !1)
        })), n = document.querySelector(".vp-ads-wrapper"), n || (n = document.createElement("div"), n.classList.add("vp-ads-wrapper"), document.querySelector(".player").appendChild(n), n.innerHTML = Ls.render("adcountdown")), i = n.querySelector(".vp-ads-tag"), h = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, a = new ye(n, h), a.on(Ce.ADS_MANAGER_LOADED, () => {
            a.on(Ce.AD_BUFFERING, E), a.on(Ce.AD_COMPLETE, C), a.on(Ce.AD_CLICK, y), a.on(Ce.AD_ERROR, T), a.on(Ce.AD_STARTED, L), a.on(Ce.AD_SKIPPED, w), a.on(Ce.ALL_ADS_COMPLETED, S), a.on(Ce.CONTENT_PAUSE_REQUESTED, I), a.on(Ce.CONTENT_RESUME_REQUESTED, P),
                function() {
                    if (!p) {
                        if (m) return;
                        e.events.once(A, () => {
                            _(), p = !0
                        })
                    }
                    v.then(M).catch(e => {}), e.events.on(g.ENDED, () => {
                        m || (l = !0, a.setContentComplete())
                    })
                }(), e.store.watch("ui.player.width", x), e.events.on(Kt._didEnterFullscreen, x, !0), e.events.on(Kt._didExitFullscreen, x, !1), p && _()
        })
    }

    function E() {
        c && e.events.fire(Kt._adBuffering)
    }

    function y() {
        e.events.fire(Kt._adClicked)
    }

    function C() {
        o.iPhone && e.backbone.addVideoEventListeners(), r && clearInterval(r), c = !1, e.events.fire(Kt._adComplete)
    }

    function T(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(Kt._adError, n), "adPlayError" === n.errorType && e.events.fire(Kt._resumedAfterAd)
    }

    function L(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let i = t.getAd();
        const l = i.getTraffickingParameters();
        i.isLinear() && "0" !== l.ad && (r = setInterval(() => {
            let e = "AD " + (e => {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            })(a.remainingTime);
            n.querySelector(".vp-ads-countdown").innerHTML = e
        }, 1e3), setTimeout(R, 1e3)), c = !0;
        let d = {
            type: i.isLinear() ? "linear" : "nonlinear"
        };
        s && (d.time = Date.now() - s, s = null), e.events.fire(Kt._adStarted, d)
    }

    function w(t) {
        e.events.fire(Kt._adSkipped, t)
    }

    function S(t) {
        u = !0, o.iPhone || a.destroy(), e.events.fire(Kt._allAdsCompleted, t)
    }

    function I() {
        e.events.fire(Kt._pausedForAd), s = Date.now(), l || (d = !0, e.backbone.paused ? e.events.once(g.PLAYING, () => {
            e.backbone.pause()
        }) : e.backbone.pause())
    }

    function P() {
        N(), e.events.fire(Kt._resumedAfterAd), o.iPhone && u && a.destroy(), l || k()
    }

    function k() {
        d = !1, e.backbone.play()
    }

    function R() {
        i = n.querySelector(".vp-ads-tag"), i.classList.remove("hidden"), i.removeAttribute("hidden")
    }

    function N() {
        i.classList.add("hidden"), i.setAttribute("hidden", "")
    }

    function D() {
        return {
            width: t.getBoundingClientRect().width,
            height: t.getBoundingClientRect().height
        }
    }

    function M() {
        const {
            width: t,
            height: n
        } = D();
        try {
            a.start(t, n)
        } catch (i) {
            l && e.events.fire(Kt._adComplete), d && k()
        }
    }

    function x(e) {
        const {
            width: t,
            height: n
        } = D();
        a.resize(t, n, e)
    }
    const B = {
        pause: () => (e.events.fire(Kt._adPaused), a.pause()),
        play: () => (e.events.fire(Kt._adResumed), a.play()),
        get volume() {
            return a.volume
        },
        set volume(e) {
            a.volume = e
        },
        toggleCastingState(e) {
            m = !!e, m && a.destroy()
        },
        events: f
    };
    return b(), e.events.on(Kt._configChanged, b), B
}
const Ws = ["clip_id", "profile_id", "player_size", "dropped_frames", "total_frames", "bandwidth", "markers", "streams", "files", "video_dims", "min_bandwidth", "max_badwidth", "buffer_occupancy", "live_latency", "scanner", "vr_headset"];
let Ys = function() {
        function e(e) {
            this._core = e, this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._core.events.fire(Kt._debugDataChange)
        }, t._setToSeries = function(e, t) {
            return this._seriesStore[e] = [t], this._core.events.fire(Kt._debugDataChange), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._core.events.fire(Kt._debugDataChange), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = L({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i)
        }, t._filterMetricData = function(e, t) {
            if (e === xs.CHUNK_DOWNLOADED) {
                let e = {};
                return e.host = t.host, e.duration = At(t.duration, 2), e.size = t.size, e.index = t.index, e.profile_id = t.profile_id, e.quality = t.quality, e.buffered = At(t.buffered, 2), e.ttfb = At(t.ttfb, 2), e.extraContext = t.extraContext, e.headers = Te(t.headers, ["x_cache", "akamai_request_bc", "akamai_grn", "content_type"]), e.cache_hit = go(e.headers), e
            }
            if (e === xs.VIDEO_PLAYBACK_ERROR || e === xs.VIDEO_LOAD_FAILURE || e === xs.VIDEO_START_FAILURE || e === xs.VIDEO_READY) return t;
            if (void 0 !== t.autoplay && void 0 !== t.looping) {
                let e = {};
                return e.cdn = t.cdn, e.quality = t.quality, void 0 !== t.reason && (e.reason = t.reason), e
            }
            return t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._core.backbone.currentTime,
                o = Date.now(),
                r = At(fe(i, this._core.backbone.buffered), 2);
            this._addToSeries("markers", {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._core.events.on(Kt._configChanged, () => {
                this.reset()
            }), this._core.events.on(S.BANDWIDTH, this._onBandwidthChange.bind(this)), this._core.events.on(S.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._core.events.on(S.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._core.events.on(S.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._core.events.on(S.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._core.events.on(S.STREAM_CHANGE, this._onStreamChange.bind(this)), this._core.events.on(S.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._core.events.on(g.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._core.events.on(z.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._core.events.on(Kt._logMetric, this._onLogMetric.bind(this)), this._core.events.on(K.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._core.events.on(K.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._core.events.on(K.STALL_JUMP, this._onStallJump.bind(this))
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries("vr_headset", e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval(() => {
                const e = this._core.backbone.buffered,
                    t = this._core.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._core.backbone.latency;
                    this._setToSeries("live_latency", e)
                } else this._setToSeries("live_latency", 0)
            }, 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._core.store.watch("ui.player.boundingRect", e => {
                const t = this.getCurrent("video_dims"),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries("video_dims", n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker("resize", i)
            })
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${At(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = Ws.reduce((e, t) => (e[t] = [], e), {})
        }, t._setDefaults = function() {
            const e = this._core.backbone.currentFile;
            this._addToSeries("files", e), this._addToSeries("scanner", this._core.backbone.currentScannerName), "HLSLiveScanner" === this._core.backbone.currentScannerName && this._setLatencyInterval(), this._setToSeries("min_bandwidth", 0), this._setToSeries("max_badwidth", 0);
            const t = this._core.store.get("ui.player.boundingRect"),
                n = this._getVideoDimensionsString(t);
            this._addToSeries("video_dims", n)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries("bandwidth", {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent("max_badwidth"),
                i = this.getCurrent("min_bandwidth");
            (!i || t < i) && this._setToSeries("min_bandwidth", t), (!n || t > n) && this._setToSeries("max_badwidth", t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries("total_frames", n), this._setToSeries("dropped_frames", t)
        }, t._onSeeked = function() {
            this._addMarker("seeked", `Seeked to ${this._core.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker("ended", "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker("downswitch", `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker("upswitch", `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i, o, r, a;
            const s = n[t],
                l = this._getResolutionString(s),
                c = Bs(s.codecs),
                d = null == (i = this._core.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                u = Vs(null == d ? void 0 : d.codecs),
                p = `${c}${u?` / ${u}`:""}`,
                _ = null == (o = this._core.backbone) ? void 0 : o.telecine.getEffectByName("AmbisonicEffect");
            this._addMarker("switchcomplete", `Completed switch to ${l}`), this._addToSeries("streams", {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${s.height}p`,
                bitrate: s.bitrate,
                ambisonicConnected: null == _ ? void 0 : _.connected,
                ambisonicOrder: null == d ? void 0 : d.ambisonic_order,
                audioBitrate: null == d ? void 0 : d.bitrate,
                audioChannels: null !== (r = null !== (a = null == d ? void 0 : d.channels) && void 0 !== a ? a : s.channels) && void 0 !== r ? r : void 0,
                framerate: s.framerate,
                height: s.height,
                width: s.width,
                id: s.id,
                codec: p
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent("files"),
                t = this._core.backbone.currentFile;
            this._addToSeries("files", t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? zt[e.mime] : null,
                r = zt[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker("filechange", a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries("buffer_occupancy", {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent("scanner"),
                t = this._core.backbone.currentScannerName;
            this._setToSeries("scanner", t), e && this._addMarker("scannerchange", `Scanner change to ${t}`), "HLSLiveScanner" === t ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker("buffergapjump", e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker("buffergapjumpprevent", e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker("stalljump", e.msg)
        }, t._onStalled = function() {
            this._addMarker("stalled", "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._core.events.fire(Kt._debugDataChange)
        }, e
    }(),
    qs = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._onReset = () => this.reset(), this._player.events.on(xt._reset, this._onReset)
        }, t._detachEventHandlers = function() {
            this._player.events.off(xt._reset, this._onReset)
        }, t.hibernate = function() {
            this._detachEventHandlers()
        }, t.wake = function() {
            this._attachEventHandlers()
        }, t._getFragment = function(e, t, n) {
            if (l(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                }),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                s = n[o + 1],
                c = r ? t : (s - 1) / 1e3;
            return {
                startTime: a,
                endTime: c,
                duration: c - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(Kt._fragmentChanged)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(g.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !l(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(g.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, I(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !l(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return l(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }]), e
    }();
var $s;
! function(e) {
    e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint"
}($s || ($s = {}));
const Ks = 4e-4 / Object.keys($s).length,
    js = {};
let zs, Xs, Zs;
! function(e) {
    e.PQ = "PQ", e.DV5 = "DV5", e.DV81 = "DV81", e.DV82 = "DV82", e.DV84 = "DV84", e.HDR10 = "HDR10", e.HDR10_PLUS = "HDR10_PLUS", e.HLG = "HLG"
}(zs || (zs = {})),
function(e) {
    e.FREE = "free", e.BASIC = "basic", e.STARTER = "starter", e.STANDARD = "standard", e.ADVANCED = "advanced", e.BUSINESS = "business", e.PLUS = "plus", e.PLUS_LAPSED = "plus_lapsed", e.PRO = "pro", e.PRO_LAPSED = "pro_lapsed", e.PRO_EXPIRED = "pro_expired", e.PRODUCER = "producer", e.PRODUCER_LAPSED = "producer_lapsed", e.LIVE_PRO = "live_pro", e.LIVE_BUSINESS = "live_business", e.LIVE_BUSINESS_LAPSED = "live_business_lapsed", e.LIVE_PREMIUM = "live_premium", e.LIVE_PREMIUM_LAPSED = "live_premium_lapsed", e.ENTERPRISE = "enterprise", e.ENTERPRISE_LAPSED = "enterprise_lapsed", e.CUSTOM = "custom", e.GUEST = "none"
}(Xs || (Xs = {})),
function(e) {
    e.KOLLECTIVE = "kollective", e.HIVE = "hive"
}(Zs || (Zs = {}));
const Js = {
    [Zs.KOLLECTIVE]: "Kollective",
    [Zs.HIVE]: "Hive"
};

function Qs({
    config: e,
    debugCollector: t,
    backbone: n
}) {
    var i, r, a, s, l;
    const c = e.request.session,
        d = t.getCurrent(hi.FIELD_VIDEO_DIMS),
        u = t.getCurrent(hi.FIELD_TOTAL_FRAMES) || 0,
        p = t.getCurrent(hi.FIELD_DROPPED_FRAMES) || 0,
        _ = t.getCurrent(hi.FIELD_FILES),
        v = t.getCurrent(hi.FIELD_STREAMS),
        m = t.getCurrent(hi.FIELD_SCANNERS),
        f = t.getCurrent(hi.FIELD_BANDWIDTH),
        h = m === Ei.HLS_LIVE_SCANNER,
        g = m === Ei.MEDIA_SOURCE_SCANNER,
        b = Se(n.currentTime, n.buffered),
        E = n.currentTime + b,
        y = function(e) {
            if (!e) return null;
            const t = e.length;
            let n = 0,
                i = [];
            for (; n < t; n++) {
                const t = e.start(n),
                    o = e.end(n);
                i.push({
                    i: n,
                    start: t,
                    end: o
                })
            }
            return i
        }(n.buffered),
        C = n.bufferTarget,
        T = n.presentationDelay,
        L = e.embed.dnt || e.request.flags.dnt,
        w = {
            isLive: h,
            isDash: g,
            embedSize: d,
            sessionId: c,
            testGroup: Object.keys(e.request.ab_tests).map(t => {
                var n;
                return `${t}: ${null==(n=e.request.ab_tests[t])?void 0:n.group}`
            }).join(", "),
            isDNTEnabled: L,
            totalFrames: u,
            droppedFrames: p,
            bufferTarget: C,
            presentationDelay: T,
            ua: null == (i = navigator) ? void 0 : i.userAgent,
            clipId: e.video.id,
            readyState: n.readyState,
            support: JSON.stringify(o),
            bufferEnd: At(E, 3),
            bufferAhead: At(b, 3),
            currentTime: At(n.currentTime, 3),
            clientIp: null == (r = e.request) || null == (a = r.client) ? void 0 : a.ip,
            playerVersion: Wa(e),
            bufferedRanges: JSON.stringify(y),
            brainDebug: JSON.stringify(n.brainDebug),
            codec: v ? v.codec : null,
            hideCloseButton: !!e.embed.settings.background,
            isCopyDisabled: !!L,
            vrHeadsetName: t.getCurrent(hi.FIELD_VR_HEADSET),
            droppedFramesPercent: 0 !== u ? `${(p/u*100).toFixed(2)}%` : 0,
            resolution: v ? `${v.width}×${v.height}@${Math.round(v.framerate)} ${Math.round(v.bitrate/1e3).toLocaleString()} Kbps ${v.audioBitrate?` / ${Math.round(v.audioBitrate/1e3).toLocaleString()} Kbps`:""}` : null,
            payloadId: `${e.video.owner.id}_${e.video.id}_${e.request.session}_${Math.floor(Date.now()/1e3)}`,
            bandwidthKbps: f ? `${Math.floor(f.value/1e3).toLocaleString()} Kbps` : 0,
            bandwidthMinKbps: `${Math.floor(t.getCurrent(hi.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
            bandwidthMaxKbps: `${Math.floor(t.getCurrent(hi.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
            separateAudioVideo: !(null == (s = e.request.files) || !s.dash || !e.request.files.dash.separate_av),
            bandwidthSeriesData: tl(t)
        };
    (null == v ? void 0 : v.audioChannels) && (w.resolution += v.ambisonicConnected && v.ambisonicOrder ? ` ambisonic ${v.ambisonicOrder} (${v.audioChannels}ch)` : ` ${v.audioChannels}ch`), _ && (w.delivery = _.mime), e.request.drm && Object.assign(w, {
        drmEnabled: !0,
        drmFastly: !!e.request.drm.fastly
    });
    const A = null == (l = e.video.ecdn) ? void 0 : l.ecdn_provider;
    if (A) {
        const {
            ecdnBytesByCdn: e,
            ecdnBytesPeered: t,
            ecdnPeers: n
        } = Lo(A), i = {
            p2pSources: n.toString(),
            p2pOffload: `${el(t,e)}%`,
            ecdnVendor: Js[A]
        };
        Object.assign(w, i)
    }
    return h && Object.assign(w, function(e, t) {
        var n;
        const i = (null == (n = e.video.live_event) ? void 0 : n.id) || null;
        let o = "";
        try {
            o = `${t.getCurrent(hi.FIELD_LIVE_LATENCY).toFixed(2)}`
        } catch (De) {}
        return {
            liveLatency: o,
            liveSessionID: i
        }
    }(e, t)), w
}

function el(e, t) {
    return 0 === e && 0 === t ? 0 : At(e / (t + e) * 100, 1)
}

function tl(e) {
    const t = e.getSeries(hi.FIELD_BANDWIDTH) || [],
        n = e.getCurrent(hi.FIELD_MAX_BANDWIDTH) || 1;
    return {
        debugMarkers: e.getSeries(hi.FIELD_MARKERS) || [],
        timeSeries: t,
        max: n
    }
}
let nl = function() {
    function e(e = ((e, t) => e < t)) {
        this._data = {}, this._sortedKeys = [], this._sort = e
    }
    var t = e.prototype;
    return t._insert = function(e) {
        var t = this._sortedKeys.length;
        if (0 === t) this._sortedKeys.push(e);
        else {
            for (var n = 0; n < t; n++)
                if (this._sort(e, this._sortedKeys[n])) {
                    this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e);
                    break
                }
            n === t && this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e)
        }
    }, t._binarySearch = function(e, t, n, i) {
        if (i < n) return -1;
        let o = parseInt(n + (i - n) / 2, 10);
        return e[o] > t ? this._binarySearch(e, t, n, o - 1) : e[o] < t ? this._binarySearch(e, t, o + 1, i) : o
    }, t.delete = function(e) {
        const t = this._binarySearch(this._sortedKeys, e, 0, this._sortedKeys.length);
        if (-1 === t) throw new Error("key does not exist");
        this._sortedKeys.splice(t, 1), delete this._data[e]
    }, t.set = function(e, t) {
        return this._data[e] = t, this._insert(e), this
    }, t.get = function(e) {
        return this._data[e]
    }, t.keys = function() {
        return this._sortedKeys.slice()
    }, t.values = function() {
        return this.keys().map(e => this._data[e])
    }, t.forEach = function(e) {
        const t = this._sortedKeys.length;
        for (let n = 0; n < t && !1 !== e(this._data[this._sortedKeys[n]], this._sortedKeys[n], this); n++);
    }, I(e, [{
        key: "size",
        get: function() {
            return this._sortedKeys.length
        }
    }]), e
}();
const il = {},
    ol = e => {
        var t, n;
        const i = new nl;
        return (null == (t = e.embed) || null == (n = t.cards) ? void 0 : n.length) && e.embed.cards.forEach(e => {
            const t = e.url ? E(E({}, e), {}, {
                url: Xi(e.url)
            }) : e;
            i.set(e.timecode, $r(t))
        }), i
    },
    rl = e => {
        const {
            events: t,
            set: n
        } = e, i = function(e) {
            return {
                cardsMap: ol(e.config),
                activeCard: null,
                hoveredCard: null,
                displayedCard: null,
                cardPressed: void 0
            }
        }(e), o = e => {
            const {
                hoveredCard: t,
                activeCard: n
            } = e, i = null !== t ? t : n;
            return {
                cards: E(E({}, e), {}, {
                    displayedCard: i
                })
            }
        }, r = e => {
            e && t.fire(Kt._cardDisplayed, e.id, e)
        }, a = e => e.timecode;
        return t.on(Kt._configChanged, (e, t) => {
            n(e => {
                const n = E(E({}, e.cards), {}, {
                    cardsMap: ol(t),
                    activeCard: null,
                    hoveredCard: null
                });
                return o(n)
            })
        }), t.on(xt._addCard, e => {
            n(t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.set(e.timecode, e), r(e);
                const i = E(E({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: e.timecode
                });
                return o(i)
            })
        }), t.on(xt._removeCard, e => {
            n(t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.delete(e.timecode);
                const i = E(E({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: null,
                    hoveredCard: null
                });
                return o(i)
            })
        }), t.on(g.TIME_UPDATE, ({
            currentTime: e
        }) => {
            n(t => {
                const n = ((e, t) => {
                        const {
                            cardsMap: n
                        } = e.cards;
                        let i = n.values().filter(e => ((e, t) => t >= a(e) && t < (e => a(e) + (e.displayTime || 6))(e))(e, t)).slice(-1)[0];
                        return (null == i ? void 0 : i.timecode) || null
                    })(t, e),
                    i = t.cards.cardsMap.get(n);
                if (n === t.cards.activeCard) return il;
                const s = E(E({}, t.cards), {}, {
                    activeCard: n
                });
                return r(i), o(s)
            })
        }), t.on(Kt._ended, () => {
            n(e => {
                const t = E(E({}, e.cards), {}, {
                    activeCard: null,
                    hoveredCard: null
                });
                return o(t)
            })
        }), {
            cards: i,
            setCards: (e, i) => {
                "cardPressed" !== e ? ((e, t) => {
                    n(n => {
                        const i = E(E({}, n.cards), {}, {
                            [e]: t
                        });
                        return o(i)
                    })
                })(e, i) : t.fire(Kt._cardPressed, i)
            }
        }
    };

function al(e) {
    var t, n, i, r;
    const {
        config: a
    } = e, {
        title: s
    } = a.video, {
        title: c,
        portrait: d
    } = a.embed.settings, u = 0 === a.embed.on_site, p = a.embed.settings.spatial_label, _ = !(!a.video.spatial || !p), v = a.request.file_codecs || a.video.file_codecs, m = !l(v), f = a.request.hdr_formats || [], h = m && (null == (t = v.hevc) || null == (n = t.hdr) ? void 0 : n.length) > 0, g = f.includes(zs.HDR10_PLUS), b = f.includes(zs.DV84) || m && (null == (i = v.hevc) || null == (r = i.dvh1) ? void 0 : r.length) > 0, y = !!a.video.ai, C = a.video.channel_layout || "stereo", T = a.video.owner[o.devicePixelRatio > 1 ? "img_2x" : "img"], L = a.video.owner.name, w = Ui("video-portrait", a), A = Ui("video-byline", a);
    let S = Ui("video-title", a);
    const I = function(e) {
        let t = {
            displayByline: !1,
            displayBadge: !1
        };
        if (e.embed.settings.byline) {
            const {
                type: n,
                url: i
            } = e.embed.settings.byline_badge || {};
            Object.assign(t, {
                displayByline: !0,
                displayBadge: !e.video.live_event,
                bylineBadgeType: n,
                bylineBadgeUrl: i
            })
        }
        return t
    }(a);
    return e.segmentedPlaybackEnabled && (S = ji(S, e.startTime, e.endTime)), E({
        ownerLinkUrl: w,
        titleLinkUrl: S,
        bylineLinkUrl: A,
        displayTitle: !!c,
        displayPortrait: !!d,
        ownerName: L,
        targetBlank: u,
        portraitImg: T,
        title: s,
        is360: _,
        hasAIContent: y,
        hasHDR: h,
        hasHDR10Plus: g,
        hasDolbyVision: b,
        channelLayout: C
    }, I)
}
let sl, ll;

function cl(e) {
    var t;
    const {
        config: n,
        store: i
    } = e, {
        request: o,
        video: r
    } = n, a = Ui("vimeo-logo", e.config), s = null == (t = r.vod) ? void 0 : t.button_text, l = i.get("ui.player.breakpoint"), c = i.get("ui.player.mode"), d = cr(lr.FULL_CONTROLS, c, l, n);
    return {
        overrideBehavior: !1,
        trailerButtonText: s,
        vimeoLogoUrl: a,
        thumbnailPreview: o.thumb_preview,
        showAllControls: d,
        progressBarExpanded: !1,
        shouldRestoreButtonsDisplayed: !1
    }
}! function(e) {
    e.EMPTY = "empty", e.UNMUTE = "unmute", e.WATCH_FULL_VIDEO = "watchFullVideo"
}(ll || (ll = {}));
const dl = [ll.WATCH_FULL_VIDEO, ll.UNMUTE];

function ul(e) {
    const {
        config: t
    } = e, {
        autoplay: n,
        settings: i
    } = t.embed;
    return {
        purpose: e.segmentedPlaybackEnabled && n && i.watch_full_video ? ll.WATCH_FULL_VIDEO : ll.EMPTY
    }
}

function pl({
    displayList: e,
    playback: t,
    embed: n
}) {
    const {
        outro: i,
        controlBar: o
    } = e, {
        isSegmentedPlaybackEnabled: r,
        paused: a,
        scrubbing: s
    } = t;
    return !!r && !i && o && !(a && !s) && n.watchFullVideo
}
const _l = e => !e.title && !e.portrait && !e.byline,
    vl = e => {
        var t, n;
        const {
            config: i,
            element: o
        } = e, {
            embed: r
        } = i, a = o.classList.contains("player-tiny"), s = ul(e), l = (null == s ? void 0 : s.purpose) === ll.WATCH_FULL_VIDEO;
        return !(a || Ho(o, null == (t = e.get()) || null == (n = t.displayList) ? void 0 : n.accessGate) || Kn(o) || i.view && !En(i.view) || null != r && r.autoplay || _l(null == r ? void 0 : r.settings) || !Xn(r) || l)
    },
    ml = e => {
        var t, n, i, r, a;
        const {
            view: s,
            video: l,
            embed: c,
            request: d
        } = e.config, {
            vod: u
        } = l, p = s !== Xt.main && s !== Xt.privateUnlocked && s !== Xt.webinarUnlocked, _ = !!c.settings.instant_sidedock, v = (null == (t = e.store) ? void 0 : t.get("ui.player.mode")) === vi.TINY, m = null == (n = d.ab_tests) || null == (i = n.small_player_redesign) ? void 0 : i.group, f = v && !m, h = u && "purchase_options" in u && !!u.purchase_options.length, g = u && bn(u.countries, d.country);
        return !(Kn(e.element) || Ho(e.element, null == (r = e.get()) || null == (a = r.displayList) ? void 0 : a.accessGate) || f) && !!Xn(c) && !e.segmentedPlaybackEnabled && (o.touch || p || _ || h && g)
    },
    fl = e => {
        var t, n, i;
        const {
            view: o,
            embed: r,
            request: a
        } = e.config;
        return !(Ho(e.element, null == (t = e.get()) || null == (n = t.displayList) ? void 0 : n.accessGate) || Kn(e.element) || o && !En(o) || r.autoplay && (null == (i = a.flags) ? void 0 : i.autohide_controls) || !Xn(r))
    };

function hl({
    element: e
}) {
    return {
        purpose: jn(e)
    }
}
let gl;
! function(e) {
    e.EMPTY = "empty", e.SPATIAL_UNSUPPORTED = "spatial-unsupported", e.SPATIAL_FAILURE = "spatial-failure"
}(gl || (gl = {}));
const bl = ({
    element: e,
    config: t
}) => {
    if (e.classList.contains("player-mini") || e.classList.contains("player-tiny")) return !1;
    const {
        embed: n
    } = t;
    return !(!n.settings.badge || n.autoplay && 16 !== n.settings.badge.id)
};
let El, yl, Cl, Tl;
! function(e) {
    e.IDLE = "idle", e.LOADED = "loaded", e.ERROR = "error", e.LOADING = "loading"
}(El || (El = {})),
function(e) {
    e.MAIN = "main", e.LANGUAGE = "language"
}(yl || (yl = {})),
function(e) {
    e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large"
}(Cl || (Cl = {})),
function(e) {
    e.PREV = "prev", e.NEXT = "down", e.FIRST = "first", e.LAST = "last"
}(Tl || (Tl = {}));
const Ll = "en",
    wl = e => e.replace(/<\/?[\w\s]*>|<.+[\W]>/g, ""),
    Al = {
        language: "en",
        id: "",
        label: "Transcript",
        rtl: !1
    },
    Sl = (e, t) => {
        const {
            lang: n,
            cookie: i
        } = e.request, {
            captions: o,
            transcript: r
        } = i, [a] = (r || "").split("."), [s] = (o || "").split(".");
        return r && t.find(e => e.language.includes(a)) || s && t.find(e => e.language.includes(s)) || n && t.find(e => n.includes(e.language)) || t.find(e => e.language.includes("en")) || t[0] || Al
    },
    Il = (e, t) => e.findIndex(e => e.startTime <= t && e.endTime > t),
    Pl = (e, t) => !!e.find(e => e.index === t),
    Ol = e => e ? e.endTime - e.startTime : 0;

function kl(e, t, n, i) {
    return (e => e.map((e, t, n) => {
        const i = n[t + 1];
        return i && i.startTime < e.endTime ? E(E({}, e), {}, {
            endTime: i.startTime
        }) : e
    }))(((e, t = 20, n = 20, i = 10) => {
        if (0 === e.length) return [];
        let o, r, a, s, l;
        return c(e[0]), e.reduce((function(a, s, l, u) {
            var p;
            const {
                text: _,
                endTime: v
            } = s, m = function(e, t) {
                return e + 1 === t.length
            }(l, u);
            if (r += `${_} `, m) return d(v, a);
            const f = _.split(" "),
                h = function(e) {
                    return function(e) {
                        return [".", "?", "!"].some(t => e.trim().endsWith(t))
                    }(e[e.length - 1])
                }(f);
            o += f.length;
            const g = o >= n,
                b = o >= t && h,
                E = function(e, t, n) {
                    return t - e > n
                }(s.endTime, null == (p = u[l + 1]) ? void 0 : p.startTime, i);
            return (g || b || E) && (a = d(v, a), c(e[l + 1])), a
        }), []).map((e, t) => E(E({}, e), {}, {
            originalIndex: t
        }));

        function c(e) {
            e && (o = 0, r = "", a = e.startTime, s = e.originalIndex, l = e.startTimeDisplay)
        }

        function d(e, t) {
            return t.concat({
                originalIndex: s,
                text: r.trim(),
                startTime: a,
                startTimeDisplay: l,
                endTime: e
            })
        }
    })(((e, t, n, i) => {
        let o;
        return o = t ? e.reduce((e, n) => (n.startTime >= t.startTime && n.endTime <= t.endTime && e.push(E(E({}, n), {}, {
            startTimeDisplay: ei(An(n.startTime, t))
        })), e), []) : (e => e.map(e => E(E({}, e), {}, {
            startTimeDisplay: ei(e.startTime)
        })))(n || i ? e.filter(e => {
            const t = !n || e.startTime >= n,
                o = !i || e.startTime <= i;
            return t && o
        }) : e), o
    })((e => e.map((e, t) => ({
        startTime: e.startTime,
        endTime: e.endTime,
        startTimeDisplay: "",
        text: wl(e.text),
        originalIndex: t
    })))(e), !o.isGoogleBot && t, n, i)))
}

function Rl(e) {
    var t;
    return (null == (t = e[0]) ? void 0 : t.startTime) || 0
}

function Nl(e) {
    var t;
    return (null == (t = e[e.length - 1]) ? void 0 : t.endTime) || 0
}
const Dl = (e, t) => {
        let n = {
            index: 0,
            diff: 1 / 0
        };
        for (let i = 0; i < t.length; i++) {
            if (t[i].startTime <= e && t[i].endTime >= e) return i;
            const o = Math.abs(t[i].startTime - e),
                r = Math.abs(t[i].endTime - e),
                a = Math.min(o, r);
            a < n.diff && (n = {
                index: i,
                diff: a
            })
        }
        return n.index
    },
    Ml = e => o.isGoogleBot || (null == e ? void 0 : e.config.embed.tq),
    xl = [Wn.EMPTY, Wn.HELP, Wn.SHARE, Wn.INTERACTIVE],
    Bl = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!n.settings.playbar) return !1;
        if (!Xn(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return cr(lr.PROGRESS_BAR, o, i, e)
    },
    Vl = e => {
        const t = Ml(e);
        return o.isGoogleBot && t
    };

function Ul(e) {
    e(e => ({
        displayList: E(E({}, e.displayList), {}, {
            aiWidget: !1
        })
    }))
}

function Fl(e) {
    const t = e.embed.access_gates;
    if (!t) return null;
    const n = t.find(e => e.placement === xo.BEFORE_VIDEO);
    return n ? qo(null == n ? void 0 : n.gate_type, e) ? null : ((e, t) => {
        const n = Vo[e];
        return !n || n.includes(t.view)
    })(null == n ? void 0 : n.gate_type, e) ? n : null : null
}
const Hl = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!Xn(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return cr(lr.FULL_CONTROLS, o, i, e)
    },
    Gl = e => {
        const {
            set: t,
            get: n
        } = e, i = function(e) {
            const t = ml(e),
                n = vl(e),
                i = (e => hl(e).purpose !== Wn.EMPTY)(e),
                o = (({
                    store: e,
                    config: t,
                    events: n,
                    set: i
                }) => {
                    var o, r;
                    return n.on(Kt._configChanged, (e, t) => {
                        i(e => {
                            var n, i;
                            return {
                                displayList: E(E({}, e.displayList), {}, {
                                    cards: !!(null == (n = t.embed) || null == (i = n.cards) ? void 0 : i.length) && !e.appearance.isMenuBlockingUI
                                })
                            }
                        })
                    }), !!(null == (o = t.embed) || null == (r = o.cards) ? void 0 : r.length) && !e.get("ui.controlbar.isMenuFullWidth")
                })(e),
                r = bl(e),
                a = fl(e),
                s = Bl(e),
                l = Vl(e),
                d = Ml(e),
                u = function(e) {
                    const {
                        purpose: t
                    } = ul(e);
                    return t !== ll.EMPTY
                }(e),
                p = (e => {
                    const {
                        config: t
                    } = e;
                    return null !== Fl(t)
                })(e),
                _ = Hl(e),
                v = i || p;
            return (({
                set: e,
                events: t
            }) => {
                const n = t => {
                    e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            outro: t
                        })
                    }))
                };
                t.on(Kt._outroDisplayed, () => n(!0)), t.on([Kt._outroHidden, g.PLAY, g.SEEKED, Kt._scrubbingStarted, xt._reset], () => n(!1))
            })(e), (({
                store: e,
                config: t,
                set: n
            }) => {
                e.watch("ui.controlbar.isMenuFullWidth", e => {
                    n(n => {
                        var i, o;
                        return {
                            displayList: E(E({}, n.displayList), {}, {
                                cards: !!(null == (i = t.embed) || null == (o = i.cards) ? void 0 : o.length) && !e
                            })
                        }
                    })
                })
            })(e), (({
                set: e,
                events: t,
                store: n
            }) => {
                n.watch("ui.player.mode", t => {
                    t === vi.TINY && e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            debugPanel: !1
                        })
                    }))
                }), t.on(Kt._debugButtonPressed, () => {
                    e(e => n.get("ui.player.mode") === vi.TINY ? il : {
                        displayList: E(E({}, e.displayList), {}, {
                            debugPanel: !e.displayList.debugPanel
                        })
                    })
                })
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    store: i,
                    subscribe: o,
                    events: r,
                    config: a
                } = e;

                function s(e = {}) {
                    n().displayList.sideDock && t(t => {
                        const {
                            playback: n,
                            displayList: i,
                            appearance: o,
                            embed: a,
                            cards: s
                        } = t, {
                            fullPlayerElement: l,
                            alert: c,
                            menu: d,
                            toast: u
                        } = i, {
                            playInitiated: _,
                            targetTimeReached: v
                        } = n, {
                            forceExitedFullscreen: m
                        } = o, f = gn(o, e, "mousedOverSidedock"), h = l || c || d && o.isMenuBlockingUI || !!s.displayedCard || u && p();
                        return m ? il : _ && v || h || a.autoHideControls ? f ? il : !o.externalDisplay && !o.pictureInPictureActive || h ? (r.fire(Kt._sidedockVisibilityChanged, !1), {
                            appearance: E(E({}, t.appearance), {}, {
                                mousedOverSidedock: f
                            }),
                            displayList: E(E({}, t.displayList), {}, {
                                sideDock: !1
                            })
                        }) : il : il
                    })
                }

                function l(e = {}) {
                    n().displayList.sideDock || t(t => {
                        var n, o;
                        const {
                            displayList: s,
                            appearance: l,
                            embed: c,
                            cards: d,
                            playback: u
                        } = t, {
                            menu: _,
                            fullPlayerElement: v,
                            alert: m,
                            toast: f
                        } = s, h = v || m || _ && l.isMenuBlockingUI || !!d.displayedCard || f && p(), g = i.get("ui.player.mode") === vi.TINY, b = null == (n = a.request.ab_tests) || null == (o = n.small_player_redesign) ? void 0 : o.group, y = g && !b;
                        return Xn(c) ? h || y || u.isSegmentedPlaybackEnabled ? il : (r.fire(Kt._sidedockVisibilityChanged, !0), {
                            appearance: E(E({}, t.appearance), {}, {
                                shouldRestoreSidedock: !1,
                                mousedOverSidedock: gn(t.appearance, e, "mousedOverSidedock")
                            }),
                            displayList: E(E({}, t.displayList), {}, {
                                sideDock: !0
                            })
                        }) : il
                    })
                }

                function c() {
                    return s({
                        mousedOverSidedock: !1
                    })
                }

                function d(e, t) {
                    e && t && c()
                }

                function u(e, t) {
                    !e && t && l()
                }

                function p() {
                    return [Qo.XXS, Qo.XS].includes(n().appearance.playerBreakpoint)
                }
                r.on([Kt._mousedOut, Kt._mouseTimeout, Kt._nudgeAttempted], s), r.on([Kt._mousedOver, Kt._airPlayActivated, g.ENTER_PICTURE_IN_PICTURE], l), r.on(Kt._configChanged, (function(n, i) {
                    const o = ml(E(E({}, e), {}, {
                        config: i
                    }));
                    t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            sideDock: o
                        })
                    }))
                })), o(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }, e => e && s()), o(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }, e => !e && c()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.alert
                }, e => e && s()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }, e => e ? d(e, n().appearance.isMenuBlockingUI) : u(e, n().appearance.isMenuBlockingUI)), o(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }, e => e ? d(n().displayList.menu, e) : u(n().displayList.menu, e)), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }, e => e ? c() : l()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }, e => {
                    e ? t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            sideDock: !1
                        })
                    })) : n().displayList.sideDock || l()
                }), o(e => {
                    var t;
                    return null == e || null == (t = e.cards) ? void 0 : t.displayedCard
                }, e => e && c()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }, e => e && p() && c()), o(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                }, e => {
                    e ? c() : l()
                }), i.watch("ui.player.mode", e => {
                    var i, o;
                    const r = e === vi.TINY,
                        s = null == (i = a.request.ab_tests) || null == (o = i.small_player_redesign) ? void 0 : o.group;
                    r && !s && n().displayList.sideDock ? t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            sideDock: !1
                        }),
                        appearance: E(E({}, e.appearance), {}, {
                            shouldRestoreSidedock: !0
                        })
                    })) : n().appearance.shouldRestoreSidedock && l()
                })
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o,
                    config: r
                } = e;

                function a() {
                    t(e => {
                        const {
                            appearance: t,
                            playback: n,
                            embed: i
                        } = e, {
                            externalDisplay: o
                        } = t, {
                            scrubbing: a,
                            paused: s
                        } = n, l = d(e), {
                            embed: c
                        } = r;
                        return Xn(i) ? t.playerSizeMode === vi.TINY || _l(c.settings) || l ? il : o ? {
                            displayList: E(E({}, e.displayList), {}, {
                                title: !0
                            })
                        } : !s || a ? il : {
                            displayList: E(E({}, e.displayList), {}, {
                                title: !0
                            })
                        } : il
                    })
                }

                function s() {
                    t(e => {
                        const {
                            appearance: t,
                            playback: n
                        } = e, {
                            externalDisplay: i
                        } = t, {
                            playInitiated: o
                        } = n, r = d(e);
                        return t.playerSizeMode === vi.TINY || r ? {
                            displayList: E(E({}, e.displayList), {}, {
                                title: !1
                            })
                        } : i || !o ? il : {
                            displayList: E(E({}, e.displayList), {}, {
                                title: !1
                            })
                        }
                    })
                }

                function l(e, t) {
                    e && t && s()
                }

                function c(e, t) {
                    !e && t && a()
                }

                function d(e) {
                    const {
                        fullPlayerElement: t,
                        outro: n,
                        menu: i,
                        toast: o,
                        topCenterActionItem: r
                    } = e.displayList, {
                        isMenuBlockingUI: a
                    } = e.appearance;
                    return t || n || i && a || o || r
                }
                i(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }, e => e && s()), i(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }, e => {
                    e ? a() : s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }, e => {
                    e ? s() : a()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }, e => {
                    e ? a() : s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }, e => {
                    e ? s() : a()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }, e => {
                    e ? s() : a()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }, e => e ? l(e, n().appearance.isMenuBlockingUI) : c(e, n().appearance.isMenuBlockingUI)), i(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }, e => e ? l(n().displayList.menu, e) : c(n().displayList.menu, e)), i(e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }, e => {
                    [Wn.NOT_SUPPORTED, Wn.HELP, Wn.EMPTY].includes(e) || s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }, e => {
                    e === vi.TINY ? s() : a()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }, e => e ? s() : a()), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.topCenterActionItem
                }, e => e ? s() : a()), o.on(Kt._ended, s).on(xt._reset, a).on(Kt._configChanged, (n, i) => {
                    t(t => ({
                        displayList: E(E({}, t.displayList), {}, {
                            title: vl(E(E({}, e), {}, {
                                config: i
                            }))
                        })
                    }))
                })
            })(e), (({
                set: e,
                subscribe: t
            }) => {
                t(e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }, t => (t => {
                    e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            overlay: t
                        })
                    }))
                })(t !== Wn.EMPTY))
            })(e), (({
                get: e,
                set: t,
                subscribe: n
            }) => {
                n(e => {
                    var t;
                    return null == e || null == (t = e.alert) ? void 0 : t.currentAlert
                }, n => {
                    const i = e().displayList.alert;
                    if (!i && n === gl.EMPTY) return;
                    if (i && n !== gl.EMPTY) return;
                    const o = n !== gl.EMPTY;
                    t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            alert: o
                        })
                    }))
                })
            })(e), (({
                events: e,
                subscribe: t,
                set: n,
                get: i
            }) => {
                function o() {
                    n(e => {
                        const {
                            menu: t
                        } = e.displayList;
                        return t ? {
                            displayList: E(E({}, e.displayList), {}, {
                                menu: !1
                            })
                        } : il
                    })
                }
                e.on(xt._reset, o), t(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }, t => {
                    const n = t ? "preact-menu" : "";
                    e.fire(Kt._menuVisibilityChanged, n)
                }), t(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }, e => {
                    var t, n, r, a;
                    return e && ((null == (t = i()) ? void 0 : t.appearance.appBreakpoint) === Qo.XS || (null == (n = i()) ? void 0 : n.appearance.appBreakpoint) === Qo.XXS || (null == (r = i()) ? void 0 : r.appearance.appSizeMode) === vi.MINI || (null == (a = i()) ? void 0 : a.appearance.appSizeMode) === vi.TINY) && o()
                }), t(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint
                }, e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === Qo.XS || e === Qo.XXS) && o()
                }), t(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appSizeMode
                }, e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === vi.MINI || e === vi.TINY) && o()
                })
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => e(e => ({
                    displayList: E(E({}, e.displayList), {}, {
                        ad: t
                    })
                }));
                t.on(Kt._pausedForAd, () => n(!0)), t.on([Kt._resumedAfterAd, xt._reset], () => n(!1))
            })(e), (({
                set: e,
                get: t,
                config: n,
                events: i,
                subscribe: o,
                store: r,
                element: a
            }) => {
                let s = n;
                const l = (t = {}) => {
                        var n, i, o;
                        (16 !== (null == (n = s.embed) || null == (i = n.settings) || null == (o = i.badge) ? void 0 : o.id) || t.isStockBadgeBehavior) && e(e => ({
                            displayList: E(E({}, e.displayList), {}, {
                                badge: !1
                            })
                        }))
                    },
                    c = (t = {}) => {
                        var n, i, o;
                        (16 !== (null == (n = s.embed) || null == (i = n.settings) || null == (o = i.badge) ? void 0 : o.id) || t.isStockBadgeBehavior) && e(e => {
                            const {
                                appearance: t
                            } = e;
                            return [vi.MINI, vi.TINY].includes(t.playerSizeMode) ? il : s.embed.settings.badge ? {
                                displayList: E(E({}, e.displayList), {}, {
                                    badge: !0
                                }),
                                appearance: E(E({}, e.appearance), {}, {
                                    shouldRestoreBadge: !1
                                })
                            } : il
                        })
                    };

                function d(t) {
                    e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            badge: bl({
                                config: t,
                                element: a
                            })
                        })
                    }))
                }
                i.on(Kt._controlBarVisibilityChanged, e => {
                    var t, n, i;
                    16 === (null == (t = s.embed) || null == (n = t.settings) || null == (i = n.badge) ? void 0 : i.id) && (e ? c({
                        isStockBadgeBehavior: !0
                    }) : l({
                        isStockBadgeBehavior: !0
                    }))
                }), i.on(Kt._ended, l), i.on(Kt._configChanged, (e, t) => {
                    s = t, d(t)
                }), i.on(xt._reset, () => {
                    d(s)
                }), r.watch("ui.player.mode", n => {
                    n !== vi.TINY && n !== vi.MINI || !t().displayList.badge ? t().appearance.shouldRestoreBadge && c() : e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            badge: !1
                        }),
                        appearance: E(E({}, e.appearance), {}, {
                            shouldRestoreBadge: !0
                        })
                    }))
                }), o(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }, e => {
                    e ? c() : l()
                }), o(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }, e => e && l()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }, e => {
                    (function(e) {
                        return [Wn.NOT_SUPPORTED, Wn.HELP, null].includes(e)
                    })(e) || l(), e || t().playback.playInitiated || c()
                })
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => e(e => ({
                    displayList: E(E({}, e.displayList), {}, {
                        notification: t
                    })
                }));
                t.on([Kt._liked, Kt._unliked, Kt._addedToWatchLater, Kt._removedFromWatchLater], e => {
                    e || n(!0)
                }), t.on([Kt._notificationHidden, xt._reset], () => n(!1))
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => {
                    e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            pipOverlay: t
                        })
                    }))
                };
                t.on(g.ENTER_PICTURE_IN_PICTURE, () => n(!0)), t.on(g.LEAVE_PICTURE_IN_PICTURE, () => n(!1))
            })(e), (e => {
                const {
                    set: t,
                    events: n,
                    config: i,
                    subscribe: o
                } = e;

                function r(e = {}) {
                    t(t => {
                        const {
                            controlBar: i,
                            embed: o,
                            playback: r,
                            displayList: a,
                            appearance: s
                        } = t, l = gn(s, e, "mousedOverControlBar"), c = {
                            appearance: E(E({}, t.appearance), {}, {
                                mousedOverControlBar: l
                            })
                        };
                        return i.overrideBehavior || s.forceExitedFullscreen ? c : r.playInitiated && r.targetTimeReached || a.fullPlayerElement || o.autoHideControls || a.ad ? l ? c : !s.externalDisplay && !s.pictureInPictureActive || a.fullPlayerElement ? r.buffering || r.scrubbing ? c : (n.fire(Kt._controlBarVisibilityChanged, !1), E(E({}, c), {}, {
                            displayList: E(E({}, t.displayList), {}, {
                                controlBar: !1
                            })
                        })) : c : c
                    })
                }

                function a() {
                    t(e => {
                        const {
                            displayList: t,
                            controlBar: i,
                            embed: o
                        } = e;
                        return Xn(o) ? i.overrideBehavior || t.fullPlayerElement ? il : (n.fire(Kt._controlBarVisibilityChanged, !0), {
                            displayList: E(E({}, e.displayList), {}, {
                                controlBar: !0
                            })
                        }) : il
                    })
                }

                function s() {
                    return r({
                        mousedOverControlBar: !1
                    })
                }

                function l(n) {
                    const i = fl(E(E({}, e), {}, {
                        config: n
                    }));
                    t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            controlBar: i
                        })
                    }))
                }
                n.on([Kt._mousedOver, Kt._scrubbingStarted, xt._changeVolume, xt._reset], a), n.on(Kt._mousedOut, s), n.on(Kt._mouseTimeout, r), n.on(Kt._configChanged, (function(e, t) {
                    l(t)
                })), n.on([K.STREAM_ONLINE, K.STREAM_OFFLINE, K.EVENT_ENDED], (function() {
                    l(i)
                })), n.on(xt._setControlsVisibility, (function(e) {
                    t(t => t.controlBar.overrideBehavior ? {
                        displayList: E(E({}, t.displayList), {}, {
                            controlBar: e
                        })
                    } : il)
                })), o(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }, e => e && a()), o(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }, e => e && r()), o(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }, e => {
                    e ? s() : a()
                }), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }, e => {
                    e ? r() : a()
                }), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }, e => {
                    e && a()
                })
            })(e), (e => {
                const {
                    get: t,
                    set: n,
                    events: i,
                    subscribe: o,
                    config: r
                } = e;

                function a() {
                    n(e => {
                        const {
                            transcript: t
                        } = e.displayList;
                        return t ? s(e, !1) : il
                    })
                }

                function s(e, t) {
                    return {
                        displayList: E(E({}, e.displayList), {}, {
                            transcript: t
                        })
                    }
                }
                i.on(Kt._configChanged, () => {
                    n(t => s(t, Ml(e)))
                }), i.on(Kt._transcriptKeyPressed, (function() {
                    var e, i, o, a, s, l, c, d, u;
                    const p = null == (e = t()) || null == (i = e.overlay) ? void 0 : i.purpose,
                        _ = null == (o = t().displayList) ? void 0 : o.transcript,
                        v = null == (a = t()) || null == (s = a.displayList) ? void 0 : s.outro,
                        m = null == (l = t()) || null == (c = l.displayList) ? void 0 : c.accessGate,
                        f = null == (d = t()) || null == (u = d.captions) ? void 0 : u.textTracks,
                        h = !!_ || !v && xl.includes(p) && !!f.length && !m;
                    t().embed.transcript && h && (n(e => E(E({}, e), {}, {
                        displayList: E(E({}, e.displayList), {}, {
                            transcript: !e.displayList.transcript
                        })
                    })), Ir(vr.EMBEDDED_TRANSCRIPT_CLICK, r, {
                        name: _ ? "exit_embed_transcript" : "open_embed_transcript",
                        copy: null,
                        location: "keyboard_shortcut",
                        element: "",
                        current_transcript_language: ""
                    }))
                })), i.on(Kt._rightContentAreaDisabled, a), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }, e => e && a()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }, e => e && a()), o(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.stereoscopicEnabled
                }, e => e && a()), o(e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.overlay) && !xl.includes(null == e || null == (n = e.overlay) ? void 0 : n.purpose)
                }, e => e && a()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }, e => e && a()), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }, e => {
                    var n, o;
                    (({
                        events: e
                    }, t) => {
                        e.fire(xt._updateLiveSubtitleRequests, t)
                    })({
                        events: i
                    }, e);
                    const a = null == (n = t()) || null == (o = n.captions) ? void 0 : o.textTrackEls;
                    e && (({
                        config: e,
                        events: t
                    }, n) => {
                        var i;
                        const o = n.map(e => ({
                                id: e.id,
                                label: e.label,
                                language: e.srclang
                            })),
                            r = (null == (i = Sl(e, o)) ? void 0 : i.language) || "";
                        t.fire(Kt._transcriptSessionStarted, {
                            id: c(),
                            startTime: Date.now(),
                            defaultLanguage: r
                        })
                    })({
                        config: r,
                        events: i
                    }, a)
                }), o(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.aiWidget
                }, e => e && a())
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o,
                    config: r
                } = e;

                function a() {
                    t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            progressBar: !1
                        })
                    }))
                }

                function s() {
                    t(e => {
                        const {
                            appearance: t,
                            displayList: n,
                            embed: i,
                            controlBar: o
                        } = e, {
                            playerSizeMode: a,
                            playerBreakpoint: s
                        } = t;
                        return i.playbar ? n.ad ? il : cr(lr.PROGRESS_BAR, a, s, r) ? !o.showAllControls && n.controlBarButtons ? il : {
                            displayList: E(E({}, e.displayList), {}, {
                                progressBar: !0
                            })
                        } : il : il
                    })
                }
                i(e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }, e => {
                    e === vi.TINY ? a() : s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.controlBarButtons
                }, e => {
                    e && !n().controlBar.showAllControls ? a() : s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }, e => {
                    !e && n().displayList.controlBarButtons ? a() : s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }, e => {
                    e ? a() : s()
                }), o.on(Kt._configChanged, (n, i) => {
                    t(t => ({
                        displayList: E(E({}, t.displayList), {}, {
                            progressBar: Bl(E(E({}, e), {}, {
                                config: i
                            }))
                        })
                    }))
                })
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;

                function r(e) {
                    o.fire(Kt._rightContentAreaVisibilityChange, e), n(t => ({
                        displayList: E(E({}, t.displayList), {}, {
                            rightContentArea: e
                        }),
                        appearance: E(E({}, t.appearance), {}, {
                            rightContentAreaAnimating: !0
                        })
                    })), clearTimeout(a), a = setTimeout((function() {
                        n(e => ({
                            appearance: E(E({}, e.appearance), {}, {
                                rightContentAreaAnimating: !1
                            })
                        }))
                    }), 400)
                }
                let a;
                t(e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.transcript) || (null == e || null == (n = e.displayList) ? void 0 : n.aiWidget)
                }, e => {
                    var t, n;
                    const o = null == (t = i()) || null == (n = t.displayList) ? void 0 : n.rightContentArea;
                    e && !o ? r(!0) : !e && o && r(!1)
                }), Vl(e) && o.fire(Kt._rightContentAreaVisibilityChange, !0)
            })(e), (({
                set: e,
                get: t,
                events: n,
                subscribe: i,
                config: o,
                backbone: r
            }) => {
                function a() {
                    e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            captions: !1
                        })
                    }))
                }

                function s() {
                    e(e => {
                        const {
                            appearance: t,
                            embed: n
                        } = e;
                        return n.cc ? t.pictureInPictureActive || n.background ? il : {
                            displayList: E(E({}, e.displayList), {}, {
                                captions: !0
                            })
                        } : (r.disableTextTrack(), il)
                    })
                }
                n.on(A, s), n.on(g.ENTER_PICTURE_IN_PICTURE, a), n.on(g.LEAVE_PICTURE_IN_PICTURE, s), n.on(Kt._ended, () => {
                    o.embed.outro !== en.NOTHING && a()
                }), n.on(xt._reset, a), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }, e => {
                    e ? a() : s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }, e => {
                    !e && s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.scrubbing
                }, e => {
                    e && s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }, e => {
                    e ? a() : s()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.captions) ? void 0 : t.activeCues
                }, e => {
                    var n, i;
                    e.length && (null == (n = t()) || null == (i = n.playback) ? void 0 : i.playInitiated) ? s() : a()
                })
            })(e), (e => {
                const {
                    subscribe: t,
                    events: n
                } = e;
                t(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }, e => n.fire(Kt._toastVisibilityChanged, e))
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;
                t(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }, e => e && Ul(n)), o.on(xt._closeRemoteComponent, e => {
                    e === Un.AI_WIDGET_ID && Ul(n)
                }), o.on(Kt._aiWidgetKeyPressed, () => {
                    const {
                        toggleDisplayList: e,
                        embed: t
                    } = i();
                    t.aiWidget && e("aiWidget")
                })
            })(e), (e => {
                const {
                    set: t,
                    events: n
                } = e, i = e => {
                    t(t => ({
                        displayList: E(E({}, t.displayList), {}, {
                            accessGate: e
                        })
                    }))
                };
                n.on(Kt._accessGateOpened, () => {
                    i(!0)
                }), n.on(Kt._accessGateClosed, () => {
                    i(!1)
                })
            })(e), (({
                set: e,
                get: t,
                subscribe: n
            }) => {
                function i() {
                    e(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            fullPlayerElement: t().displayList.accessGate || t().displayList.overlay
                        })
                    }))
                }
                n(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                }, () => i()), n(e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }, () => i())
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o,
                    config: r
                } = e;

                function a() {
                    var e;
                    (null == (e = r.request.ab_tests.small_player_redesign) ? void 0 : e.group) && t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            controlBarButtons: !1
                        })
                    }))
                }

                function s() {
                    Xn(n().embed) && (n().controlBar.progressBarExpanded || t(e => ({
                        displayList: E(E({}, e.displayList), {}, {
                            controlBarButtons: !0
                        })
                    })))
                }
                i(e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }, e => {
                    e || n().controlBar.shouldRestoreButtonsDisplayed ? s() : a()
                }), i(e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.progressBarExpanded
                }, e => {
                    !e && n().controlBar.showAllControls ? s() : a()
                }), o.on(Kt._configChanged, (n, i) => {
                    t(t => ({
                        displayList: E(E({}, t.displayList), {}, {
                            controlBarButtons: Hl(E(E({}, e), {}, {
                                config: i
                            }))
                        })
                    }))
                })
            })(e), {
                debugPanel: !1,
                cards: o,
                sideDock: t,
                title: n,
                controlBar: a,
                outro: !1,
                overlay: i,
                alert: !1,
                menu: !1,
                ad: !1,
                badge: r,
                notification: !1,
                nudgeNotification: !1,
                pipOverlay: !1,
                transcript: d,
                progressBar: s,
                rightContentArea: l,
                captions: !1,
                toast: !1,
                topCenterActionItem: u,
                aiWidget: !1,
                accessGate: p,
                fullPlayerElement: v,
                controlBarButtons: _
            }
        }(e), o = (e, n) => {
            t(t => ({
                displayList: E(E({}, t.displayList), {}, {
                    [e]: n
                })
            }))
        };
        return {
            displayList: i,
            setDisplayList: o,
            toggleDisplayList: e => {
                const t = n().displayList[e];
                o(e, !t)
            }
        }
    };

function Wl(e) {
    var t;
    const {
        config: i,
        store: o
    } = e, {
        video: r
    } = i, a = o.get("ui.player.width"), s = o.get("ui.player.height"), l = r.width, c = r.height, {
        videoHeight: d
    } = Yl(a, s, l, c), u = ga(e);
    return {
        playerBreakpoint: o.get("ui.player.breakpoint"),
        appBreakpoint: o.get("ui.app.breakpoint"),
        playerSizeMode: o.get("ui.player.mode"),
        appSizeMode: o.get("ui.app.mode"),
        transcriptNavActive: !1,
        fullscreen: !1,
        forceExitedFullscreen: !1,
        pictureInPictureActive: !1,
        externalDisplay: !1,
        mousedOverSidedock: !1,
        mousedOverControlBar: !1,
        isMenuBlockingUI: o.get("ui.controlbar.isMenuFullWidth"),
        isMenuVerticalVideoMode: o.get("ui.controlbar.isMenuVerticalVideoMode"),
        shouldRestoreSidedock: !1,
        shouldRestoreBadge: !1,
        isVerticalVideo: o.get("ui.player.isVerticalVideo"),
        boundingClientRect: ht(e.element),
        isDisplayContextBackbone: e.displayContext === e.backbone,
        showAirPlayPicker: !1,
        shouldMenuItemsWrap: o.get("ui.controlbar.doMenuItemsWrap"),
        stereoscopicEnabled: !1,
        videoHeight: d,
        containerHeight: o.get("ui.container.height"),
        placeholderThumbnail: n(null == r || null == (t = r.thumbs) ? void 0 : t.base, {
            mw: "80",
            q: "85"
        }),
        rightContentAreaAnimating: !1,
        isStartTimeThumbLoading: u
    }
}

function Yl(e, t, n, i) {
    const o = n / i,
        r = o > e / t;
    return {
        videoWidth: r ? e : Math.round(t * o),
        videoHeight: r ? Math.round(e / o) : t
    }
}
const ql = (e, t) => {
        Ie(() => {
            ! function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                return function(e, t, n) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(t.playbackEngineReady(), (function() {
                    e()
                }))
            }))()
        })
    },
    $l = ({
        isMenuDisplayed: e,
        defaultPanel: t,
        setPanel: n
    }) => {
        Ie(() => {
            e || setTimeout(() => {
                n(t)
            }, 250)
        }, [e])
    },
    Kl = e => ({
        onClick: t => {
            t.preventDefault(), t.stopPropagation(), e(t)
        },
        onKeyDown: t => {
            ["Enter", " "].includes(t.key) && (t.preventDefault(), t.stopPropagation(), e(t))
        }
    }),
    jl = () => {
        const e = ad(e => e.playback.paused),
            t = ad(e => e.playback.scrubbing),
            n = ad(e => e.playback.scrubbingByFrame),
            i = ad(e => e.playback.playInitiated),
            o = ad(e => e.playback.isChromecastPlaying),
            r = ad(e => e.playback.isChromecastConnected),
            a = ad(e => e.playback.buffering),
            s = ad(e => e.playback.isAdPlaying),
            l = ad(e => e.embed.isTrailer),
            c = ad(e => e.embed.autoPlay),
            d = ad(e => e.displayList.outro),
            u = ad(e => e.displayList.ad),
            p = l && !i;
        let _ = yi.PLAY;
        p ? _ = yi.TRAILER : c && (_ = yi.PAUSE);
        const [v, m] = Pe(_);
        return r && m(o ? yi.PAUSE : yi.PLAY), u && m(s ? yi.PAUSE : yi.PLAY), Ie(() => {
            d ? m(yi.REPLAY) : t && !d && m(e ? yi.PLAY : yi.PAUSE)
        }, [d]), Ie(() => {
            t && !n || a || p || r || d || u || m(e ? yi.PLAY : yi.PAUSE)
        }, [e, a, p, r, d, u]), Ie(() => {
            i && m(yi.PAUSE)
        }, [i]), {
            buttonState: v,
            setButtonState: m
        }
    };
let zl, Xl, Zl;
! function(e) {
    e.PREFS = "prefs", e.CHAPTERS = "chapters", e.CC = "cc", e.TRANSCRIPT = "transcript", e.SIDEDOCK = "sidedock"
}(zl || (zl = {})),
function(e) {
    e.EMPTY = "empty", e.PREFS = "prefs", e.QUALITY = "quality", e.SPEED = "speed", e.AUDIO = "audio", e.CHAPTERS = "chapters", e.LANGUAGES = "languages", e.CUSTOMIZE = "customize", e.FONT = "font", e.BACKGROUND = "background", e.WINDOW = "window", e.PREVIEW = "preview", e.TRANSCRIPT_SETTINGS = "transcriptSettings", e.TRANSCRIPT_LANGUAGES = "transcriptLanguages", e.SIDEDOCK = "sidedock"
}(Xl || (Xl = {})),
function(e) {
    e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large"
}(Zl || (Zl = {}));
const Jl = () => {
    const e = ad(e => e.captions.textTracks),
        t = ad(e => e.playback.supportsTextTracks),
        n = ad(e => e.appearance.isDisplayContextBackbone),
        i = ad(e => e.displayList.ad),
        o = ad(e => e.embed.speedChangeEnabled),
        r = ad(e => e.playback.qualities),
        a = ad(e => e.embed.quality),
        s = ad(e => e.playback.isChromecastConnected),
        l = ad(e => e.chapters.chapters),
        c = ad(e => e.embed.transcript),
        d = ad(e => e.embed.cc),
        u = ad(e => e.embed.chapters),
        p = ad(e => e.playback.isSegmentedPlaybackEnabled),
        _ = ad(e => e.playback.audioTracks),
        v = !!(a && (null == r ? void 0 : r.length)),
        m = _.length > 1,
        f = t && !!e.length && n && !i && d,
        h = n && !!(o || v || m) && !s && !i,
        g = !!(null == l ? void 0 : l.length) && u && !i && !p,
        b = t && !!e.length && n && !i && c;
    return {
        [zl.CC]: f,
        [zl.PREFS]: h,
        [zl.CHAPTERS]: g,
        [zl.TRANSCRIPT]: b
    }
};
let Ql;

function ec() {}! function(e) {
    e.IDLE = "idle", e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error"
}(Ql || (Ql = {}));
const tc = e => {
        const [t, n] = Pe(Ql.IDLE), i = Oe();
        return {
            readyState: t,
            load: ke(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                if (null == i || !i.current) return function(e) {
                    if (e && e.then) return e.then(ec)
                }(function(t, o) {
                    try {
                        var r = function() {
                            let t;
                            return n(Ql.LOADING),
                                function(n, i) {
                                    var o = function(e, t, n) {
                                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                                    }(ui(e), (function(e) {
                                        t = e
                                    }));
                                    return o && o.then ? o.then(i) : i()
                                }(0, (function() {
                                    i.current = t, n(Ql.LOADED)
                                }))
                        }()
                    } catch (De) {
                        return o()
                    }
                    return r && r.then ? r.then(void 0, o) : r
                }(0, (function(e) {
                    n(Ql.ERROR)
                })))
            })), [e]),
            module: (null == i ? void 0 : i.current) || null
        }
    },
    nc = (e, t, n) => {
        Ie(() => {
            function i(n) {
                n.key !== e && n.code !== e || t(n)
            }

            function o(t) {
                t.key !== e && t.code !== e || !n || n(t)
            }
            return window.addEventListener("keydown", i), n && window.addEventListener("keyup", o), () => {
                window.removeEventListener("keydown", i), n && window.removeEventListener("keyup", o)
            }
        }, [t, n, e])
    },
    ic = () => {
        const e = ad(e => e.config);
        return ke((t, n, i = {}) => {
            Ir(t, e, n, i)
        }, [e])
    };
let oc;
! function(e) {
    e[e.AUTO = 0] = "AUTO", e[e.BOTTOM = 1] = "BOTTOM", e[e.CENTER = 2] = "CENTER"
}(oc || (oc = {}));
const rc = () => {
        const e = ad(e => e.embed.playButtonPosition),
            t = ad(e => e.embed.playbar),
            n = ad(e => e.appearance.playerSizeMode),
            i = ad(e => e.appearance.isVerticalVideo),
            {
                buttonState: o
            } = jl(),
            r = n === vi.TINY,
            a = n === vi.MINI && i;
        return o === yi.REPLAY ? oc.BOTTOM : r || a || e === oc.CENTER ? oc.CENTER : e === oc.BOTTOM || e !== oc.AUTO || t ? oc.BOTTOM : oc.CENTER
    },
    ac = () => {
        const e = ad(e => e.playback.volume),
            t = ad(e => e.playback.muted),
            n = ad(e => e.setPlayback),
            i = () => {
                n("muted", !1), e <= 0 && n("volume", 100)
            },
            o = () => {
                n("muted", !0)
            };
        return {
            mute: o,
            unmute: i,
            toggleMuted: () => {
                t || e <= 0 ? i() : o()
            }
        }
    },
    sc = (e = 1e4) => {
        const [t, n] = Pe(!1), [i, o] = Pe(e), [r, a] = Pe(Date.now());
        return {
            hasError: t,
            componentTimeout: i,
            componentVersion: r,
            onError: () => {
                n(!0)
            },
            onReload: () => {
                n(!1), o(i + 1e3), a(Date.now())
            }
        }
    };
let lc;
! function(e) {
    e.VOLUME = "volume", e.CHROMECAST = "chromecast", e.AIRPLAY = "airplay", e.STEREOSCOPIC = "stereoscopic", e.PIP = "pip", e.FULLSCREEN = "fullscreen", e.VIMEO_LOGO = "vimeo_logo"
}(lc || (lc = {}));
const cc = e => {
        const t = ad(e => e.appearance.playerSizeMode),
            n = ad(e => e.appearance.playerBreakpoint),
            i = ad(e => e.config);
        return cr(e, t, n, i)
    },
    dc = e => {
        let t = [];
        return ((null == e ? void 0 : e.children) ? Array.from(e.children) : []).forEach(e => {
            var n;
            const i = window.getComputedStyle(e);
            !i.display || "none" === i.display || (e.tabIndex > -1 && t.push(e), (null == (n = e.children) ? void 0 : n.length) && (t = t.concat(dc(e))))
        }), t
    },
    uc = e => {
        document.body.classList.toggle(Mn.SHOWFOCUS, e)
    },
    pc = ({
        parentRef: e,
        isActive: t,
        toggleKey: n,
        arrowNavigation: i = !1,
        onEscape: o = li,
        onToggle: r = li
    }) => {
        const a = ad(e => e.config.view),
            s = ad(e => e.embed.controls),
            l = ad(e => e.embed.background),
            c = ad(e => e.embed.keyboard),
            d = Oe(),
            u = Oe(t);

        function p(e) {
            0 !== e.detail && uc(!1)
        }

        function _() {
            const t = dc(e.current);
            t.length > 0 && t[0].focus()
        }

        function v() {
            d.current && (d.current.focus(), d.current = null)
        }

        function m(t) {
            let n = dc(e.current),
                i = n.indexOf(document.activeElement),
                o = "prev" === t ? i - 1 : i + 1,
                r = null;
            r = o >= n.length ? n[0] : o < 0 ? n[n.length - 1] : n[o], r && r.focus()
        }

        function f() {
            var t;
            return null == e || null == (t = e.current) ? void 0 : t.contains(document.activeElement)
        }
        const h = t => {
            if (function(e) {
                    if (e.ctrlKey || e.metaKey || e.altKey) return !0;
                    if ("keydown" !== e.type) return !0;
                    if (!s || l) return !0;
                    const t = e.target || e.srcElement;
                    return !("INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable && En(a))
                }(t)) return;
            uc(!0);
            const c = () => {
                    f() && m("prev")
                },
                d = () => {
                    f() && m("next")
                },
                p = t.key,
                _ = {
                    Escape: () => {
                        (null == e ? void 0 : e.current) && (v(), null == o || o())
                    },
                    Tab: () => {
                        var n;
                        const i = t.shiftKey ? "prev" : "next",
                            o = "dialog" === (null == e || null == (n = e.current) || null == n.getAttribute ? void 0 : n.getAttribute("role"));
                        f() && o && (t.preventDefault(), m(i))
                    }
                };
            n && (_[n] = () => {
                null == r || r(!u.current)
            }), i && (_.ArrowUp = c, _.ArrowDown = d, _.ArrowLeft = c, _.ArrowRight = d), "function" == typeof _[p] && _[p]()
        };
        return Ie(() => {
            t ? _() : v(), u.current = t
        }, [t]), Ie(() => (c && (document.addEventListener("click", p, !1), document.addEventListener("keydown", h, !1)), () => {
            document.removeEventListener("click", p, !1), document.removeEventListener("keydown", h, !1)
        }), [c, h]), {
            onFocus: function(t) {
                var n, i;
                (null == (n = e.current) ? void 0 : n.contains(document.activeElement)) && !(null == (i = e.current) ? void 0 : i.contains(t.relatedTarget)) && !d.current && (d.current = t.relatedTarget)
            },
            focusFirstItem: _
        }
    },
    _c = e => {
        const t = ad(e => e.appearance.appSizeMode),
            n = ad(e => e.appearance.appBreakpoint),
            i = t === vi.MINI || t === vi.TINY || n === Qo.XXS || n === Qo.XS;
        return {
            role: i ? "dialog" : void 0,
            ariaModal: !!i || void 0,
            ariaHidden: !e || void 0
        }
    },
    vc = (e, t, n = 300) => {
        const i = P(t, n),
            o = Oe(new ae(i));
        Ie(() => {
            const t = o.current,
                n = null == e ? void 0 : e.current;
            return n && t.observe(n), () => {
                n && t.unobserve(n)
            }
        }, [])
    };
let mc;
! function(e) {
    e.DOLBY_VISION = "dolbyVision", e.CLOSE = "close", e.PIP = "pip", e.AIRPLAY = "airPlay", e.ENTER_FULLSCREEN = "enterFullscreen", e.EXIT_FULLSCREEN = "exitFullscreen", e.GEAR = "gear", e.VIMEO = "vimeo", e.VIMEO_SMALL = "vimeoSmall", e.ENTER_PICTURE_IN_PICTURE = "enterPictureInPicture", e.EXIT_PICTURE_IN_PICTURE = "exitPictureInPicture", e.PAUSE = "pause", e.PLAY = "play", e.REPLAY = "replay", e.CHAPTERS = "chapters", e.POINT = "point", e.CC = "cc", e.CC_FILLED = "ccFilled", e.CHECKMARK = "checkmark", e.STEREOSCOPIC = "stereoscopic", e.PERSON_FILLED = "personFilled", e.CHEVRON_DOWN = "chevronDown", e.CHEVRON_RIGHT = "chevronRight", e.CLOCK = "clock", e.CLOCK_FILLED = "clockFilled", e.COLLECTIONS = "collections", e.DISMISS_X = "dismissX", e.HEART = "heart", e.HEART_FILLED = "heartFilled", e.ONDEMAND = "ondemand", e.PAPER_PLANE = "paperPlane", e.POP_OUT = "popOut", e.VOLUME_OFF_FILLED = "volumeOffFilled", e.VOLUME_ON_FILLED = "volumeOnFilled", e.FAST_FORWARD = "fastForward", e.INFO_CIRCLE = "infoCircle", e.TRANSCRIPT_ON = "transcriptOn", e.TRANSCRIPT_OFF = "transcriptOff", e.SEARCH = "search", e.CHEVRON_UP = "chevronUp", e.CLOSE_CIRCLE = "closeCircle", e.SPINNER = "spinner", e.SLIDERS = "sliders", e.SWITCH_CONTAINER = "switchContainer", e.SWITCH_CIRCLE = "switchCircle", e.WARN_CIRCLE = "warnCircle", e.THUMBS_UP = "thumbsUp", e.THUMBS_DOWN = "thumbsDown", e.THUMBS_UP_FILLED = "thumbsUpFilled", e.THUMBS_DOWN_FILLED = "thumbsDownFilled", e.LINK = "link", e.SPARKLE_TWO_STARS_FILLED = "sparkleTwoStarsFilled", e.WARN_TRIANGLE = "warnTriangle", e.VERTICAL_ELLIPSIS = "verticalEllipsis"
}(mc || (mc = {}));
const fc = () => {
        const e = ad(e => e.toggleDisplayList);
        return {
            label: "Ask Vimeo AI",
            enabled: ad(e => e.embed.aiWidget),
            onSelect: () => e("aiWidget"),
            icon: mc.SPARKLE_TWO_STARS_FILLED
        }
    },
    hc = () => {
        const e = ad(e => e.setUser);
        return {
            label: "Add to collections",
            enabled: ad(e => e.embed.collections),
            onSelect: () => e("collected", !0),
            icon: mc.COLLECTIONS
        }
    },
    gc = e => {
        const t = Oe(!1),
            n = ad(e => e.setUser),
            i = ad(e => e.user.loggedIn);
        return Ie(() => {
            t.current && i && "function" == typeof e && (e(), t.current = !1)
        }, [i]), () => {
            i ? e() : (n("loggedIn", !0), t.current = !0)
        }
    },
    bc = () => {
        const e = ad(e => e.user.loggedIn),
            t = ad(e => e.setUser),
            n = ad(e => e.embed.like),
            i = ad(e => e.user.liked),
            o = i ? "Unlike" : "Like",
            r = e ? o : "Like (this opens in a new window)",
            a = i ? mc.HEART_FILLED : mc.HEART,
            s = ke(e => t("liked", !e), [t]);
        return {
            label: o,
            ariaLabel: r,
            enabled: n,
            onSelect: gc(() => s(i)),
            icon: a
        }
    },
    Ec = () => {
        const e = ad(e => e.setOverlay),
            t = ad(e => e.embed.share);
        return {
            label: ad(e => e.embed.embedOnlyShare) ? "Embed" : "Share",
            enabled: t,
            onSelect: () => e("purpose", Wn.SHARE),
            icon: mc.PAPER_PLANE
        }
    },
    yc = () => {
        const e = ad(e => e.setVod),
            t = ad(e => e.vod.vodButtonVisible);
        return {
            label: ad(e => e.vod.vodLabel),
            enabled: t,
            onSelect: () => e("purchased", !0),
            icon: mc.ONDEMAND
        }
    },
    Cc = () => {
        const e = ad(e => e.user.loggedIn),
            t = ad(e => e.setUser),
            n = ad(e => e.embed.watchLater),
            i = ad(e => e.user.watchLater),
            o = i ? "Remove from Watch Later" : "Add to Watch Later",
            r = e ? o : "Add to Watch Later (this opens in a new window)",
            a = i ? mc.CLOCK_FILLED : mc.CLOCK,
            s = ke(e => t("watchLater", !e), [t]);
        return {
            label: o,
            ariaLabel: r,
            enabled: n,
            onSelect: gc(() => s(i)),
            icon: a
        }
    };
let Tc;
! function(e) {
    e.VOD = "vod", e.LIKE = "like", e.WATCH_LATER = "watch_later", e.COLLECTIONS = "collections", e.SHARE = "share", e.AI = "ai"
}(Tc || (Tc = {}));
const Lc = () => ({
    [Tc.VOD]: yc(),
    [Tc.LIKE]: bc(),
    [Tc.WATCH_LATER]: Cc(),
    [Tc.COLLECTIONS]: hc(),
    [Tc.SHARE]: Ec(),
    [Tc.AI]: fc()
});

function wc(e) {
    var t, n, i, r, a, s, l;
    const {
        config: c,
        events: d,
        parentUrl: u,
        backbone: p
    } = e, {
        embed: _,
        request: v,
        video: m
    } = c, f = !!_.autoplay, h = !!(_.autoplay && (null == (t = v.flags) ? void 0 : t.autohide_controls)), g = !!_.settings.playbar, b = !!_.settings.like, E = !!_.settings.share, y = !!(null == (n = _.settings.share) ? void 0 : n.embed_only), C = !!_.settings.collections, T = !!_.settings.watch_later, L = !(null == (i = _.settings) || !i.watch_trailer || _.autoplay || !_.on_site), w = Jo(p, null == (r = m.live_event) ? void 0 : r.dvr), A = !!(_.settings.speed && w && X.settingPlaybackRate), S = !!_.keyboard, I = !!_.settings.logo, P = !!_.settings.volume, O = !!_.settings.fullscreen, k = !!(null == (a = m.live_event) || null == (s = a.settings) ? void 0 : s.hide_live_label), R = !!(null == (l = m.live_event) ? void 0 : l.show_viewer_count), N = !!_.settings.custom_logo, D = function(e) {
        var t;
        const {
            config: n
        } = e;
        let i = {
            customLogoUrl: null,
            customLogoImg: null,
            customLogoSticky: !1,
            customLogoWidth: null,
            customLogoHeight: null
        };
        if (!(null == (t = n.embed.settings.custom_logo) ? void 0 : t.img)) return i;
        const r = n.embed.settings.custom_logo;
        let a = r.img;
        return o.devicePixelRatio >= 2 && (a = a.replace(/(mw|mh)=(\d+)/g, (function(e, t, n) {
            return t + "=" + 2 * parseInt(n, 10)
        }))), i = {
            customLogoUrl: Xi(r.url),
            customLogoImg: a,
            customLogoSticky: r.sticky,
            customLogoWidth: r.width,
            customLogoHeight: r.height
        }, i
    }(e), M = !!_.settings.background, x = 0 !== _.settings.controls, B = !!_.on_site, V = Ac(e), U = !!_.settings.audio_tracks, F = !!_.settings.airplay, H = !!_.settings.chapters, G = !!_.settings.chromecast, W = !!_.settings.cc, Y = !!_.settings.quality, q = _.settings.play_button_position, $ = !!_.settings.watch_full_video, K = !!_.settings.ask_ai, j = !!m.spatial && !!_.settings.spatial_compass, z = m.id, Z = m.unlisted_hash, J = c.vimeo_url, Q = !!c.embed.settings.badge, ee = _.tq || "", te = !!_.persistent_logo, ne = v.ai_widget_signature, ie = 0 !== _.unmute_button, oe = !!_.settings.pip, re = !!V || !!K;
    return re && d.fire(Kt._rightContentAreaEnabled), {
        autoPlay: f,
        autoHideControls: h,
        playbar: g,
        like: b,
        share: E,
        embedOnlyShare: y,
        collections: C,
        watchLater: T,
        isTrailer: L,
        speedChangeEnabled: A,
        keyboard: S,
        showVimeoLogo: I,
        volume: P,
        fullscreen: O,
        hideLiveLabel: k,
        showViewerCount: R,
        customLogo: N,
        customLogoFields: D,
        background: M,
        controls: x,
        transcript: V,
        rightContentAreaEnabled: re,
        onsite: B,
        multipleAudioTracks: U,
        airplay: F,
        chapters: H,
        cc: W,
        chromecast: G,
        quality: Y,
        playButtonPosition: q,
        parentUrl: u,
        watchFullVideo: $,
        aiWidget: K,
        compass: j,
        videoId: z,
        videoUnlistedHash: Z,
        vimeoUrl: J,
        badge: Q,
        transcriptQuery: ee,
        persistentLogo: te,
        aiWidgetSignature: ne,
        unmuteButton: ie,
        pip: oe
    }
}

function Ac(e) {
    const {
        embed: t,
        video: n
    } = e.config, i = n.live_event, o = !i || i.archive.status === io.done || i.dvr;
    return !!t.settings.transcript && o
}
const Sc = [{
        id: .5,
        label: "0.5x"
    }, {
        id: .75,
        label: "0.75x"
    }],
    Ic = {
        id: 1,
        label: "Normal"
    },
    Pc = [{
        id: 1.25,
        label: "1.25x"
    }, {
        id: 1.5,
        label: "1.5x"
    }, {
        id: 2,
        label: "2x"
    }],
    Oc = [Ic].concat(Pc),
    kc = [].concat(Sc, [Ic], Pc),
    Rc = [].concat(Sc, [Ic]);

function Nc(e) {
    var t, n;
    const {
        config: i,
        backbone: r
    } = e, a = Dc(e), s = !!o.airPlay, l = i.embed.quality ? Tn(r.qualities, i.embed.quality) : r.qualities, c = Mc(r.qualities, i.embed.quality), d = Vc(i);
    return {
        playInitiated: !1,
        targetTimeReached: !1,
        scrubbing: !1,
        scrubbingByFrame: !1,
        paused: !i.embed.autoplay || (null == (t = i.video.live_event) || null == (n = t.archive) ? void 0 : n.status) === io.done,
        buffering: !1,
        loadedTime: 0,
        currentTime: r.currentTime,
        liveEdgeTime: r.liveEdgeTime,
        atLiveEdge: r.atLiveEdge,
        liveTailTime: r.liveTailTime,
        hasFragments: d,
        currentFragment: e.fragmentsHandler.currentFragment,
        duration: i.video.duration,
        qualities: l,
        currentQuality: c,
        playbackRates: a,
        loadedMetadata: r.readyState >= 1,
        loadedData: r.readyState > 1,
        canPlayPictureInPicture: e.canPlayPictureInPicture,
        supportsAirPlay: s,
        supportsTextTracks: X.textTracks,
        supportsStereoscopic: xc(e),
        supportsChromecast: eo(e.config),
        isChromecastConnected: !1,
        isChromecastPlaying: !1,
        isChromecastBuffering: !1,
        isChromecastSetupWithAvailableDevices: Bc(),
        isAdPlaying: !1,
        supportsSettingVolume: X.settingVolume,
        volume: r.volume,
        muted: r.muted || !!i.embed.muted,
        audioTracks: r.audioTracks,
        isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
        startTime: e.startTime,
        endTime: e.endTime
    }
}

function Dc(e) {
    var t;
    const {
        backbone: n,
        config: i
    } = e;
    let o = [];
    if (Jo(n, null == (t = i.video.live_event) ? void 0 : t.dvr) && X.settingPlaybackRate && i.embed.settings.speed) {
        const e = function(e, t) {
            return e ? Oc : t ? Rc : kc
        }(n.atLiveTail, n.atLiveEdge);
        o = Tn(e, `${n.playbackRate}`)
    }
    return o
}

function Mc(e, t) {
    var n;
    if (t) {
        var i;
        const n = "string" == typeof t ? t : t.quality || `${t.height}p`,
            o = null == e || null == (i = e.find(e => e.id === n)) ? void 0 : i.label;
        if (o) return o
    }
    return null == e || null == (n = e.find(e => e.active)) ? void 0 : n.label
}

function xc(e) {
    const {
        config: t
    } = e;
    return "disable" !== t.video.privacy && (o.webvr || o.stereoscopic) && t.video.spatial && Us(t, "webvr").group
}

function Bc() {
    return Yr.castState !== pi.NOT_SETUP && Yr.castState !== pi.NO_DEVICES_AVAILABLE
}

function Vc(e) {
    var t;
    return !l(null == (t = e.embed.interactive) ? void 0 : t.fragments)
}

function Uc(e) {
    const {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    } = e;
    return {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    }
}

function Fc({
    config: e
}) {
    const {
        user: t,
        video: n
    } = e;
    return {
        liked: t.liked,
        loggedIn: t.logged_in,
        watchLater: t.watch_later,
        ownerName: n.owner.name,
        collected: !1,
        shared: !1
    }
}
const Hc = {
    isVOD: !1,
    vodButtonVisible: !1
};

function Gc(e) {
    const {
        video: t,
        embed: n,
        user: i,
        request: o
    } = e.config;
    let r = E({}, Hc);
    if (t.vod && "purchase_options" in t.vod && t.vod.purchase_options.length) {
        const e = !0,
            a = t.vod.is_coming_soon,
            s = "ondemand.main" === n.context || "Vimeo\\Controller\\OnDemandController.main" === n.context,
            l = t.vod && i.purchased;
        let c = n.settings.vod && bn(t.vod.countries, o.country);
        c && a && s && (c = !1);
        const [d] = t.vod.purchase_options;
        let u = null;
        d && (u = function(e, t, n, i) {
            var o = i.label_string;
            return o ? (o = function(e, t, n) {
                let i = n.USD;
                return t in n && (i = n[t]), -1 !== e.indexOf("${price}") ? e.replace("${price}", i) : -1 !== e.indexOf("{PRICE}") ? e.replace("{PRICE}", i) : e
            }(o = function(e, t) {
                return void 0 !== e && void 0 !== e[t] ? e[t] : t
            }(e, o), n, i.prices), i.expires_in_duration_str && (o = o.replace("{TIME}", i.expires_in_duration_str)), i.available_on_formatted && (o = o.replace("{DATE}", i.available_on_formatted)), o) : null
        }(o.dynamic_translation_map, 0, o.currency, d)), r.isVOD = e, r.vodLabel = u, r.purchased = !!l, r.productId = d.product_id, r.isExpiring = !!d.expiring, r.vodButtonVisible = c
    }
    return r
}

function Wc({
    config: e
}) {
    const {
        badge: t
    } = e.embed.settings;
    let n = o.devicePixelRatio > 1 ? "img_2x" : "img";
    return o.svg && t.svg && (n = "svg"), {
        link: t.link,
        img: t[n],
        margin: t.margin || !1,
        width: t.width,
        height: t.height,
        name: t.name,
        shadow: !!t.shadow,
        id: t.id
    }
}

function Yc(e) {
    const t = Ui("chapter-share-base", e.config),
        n = Io() ? t : window.location.href;
    return {
        chapters: qc(e),
        chapterShareBaseUrl: n,
        activeCueId: null
    }
}

function qc(e) {
    const t = Array.from(e.backbone.chapters),
        n = e.config.embed.chapters || [];
    return t.map(e => {
        const t = n.find(t => t.timecode === e.startTime);
        return {
            cueId: e.id,
            startTime: e.startTime,
            endTime: e.endTime,
            text: e.text,
            chapterId: null == t ? void 0 : t.id,
            clipId: null == t ? void 0 : t.clip_id,
            timecode: null == t ? void 0 : t.timecode,
            title: null == t ? void 0 : t.title
        }
    })
}
let $c;
! function(e) {
    e.RTL = "rtl", e.LTR = "ltr"
}($c || ($c = {}));
const Kc = {
    black: "#000",
    red: "#f00",
    yellow: "#ff0",
    green: "#0f0",
    blue: "#00f",
    white: "#fff",
    cyan: "#0ff",
    magenta: "#f0f"
};

function jc(e) {
    var t, n, i, o, r;
    const {
        backbone: a,
        config: s
    } = e, l = a.enabledTextTrack, c = a.textTracks, d = !!s.video.live_event, {
        textTracks: u,
        activeTextTrackId: p,
        language: _,
        direction: v
    } = zc(c, d, l), m = Xc(e), f = (null == c || null == (t = c.filter(e => e.trackElement)) ? void 0 : t.map(e => e.trackElement)) || [], h = 1 === (null == s || null == (n = s.request) || null == (i = n.flags) ? void 0 : i.ott) || "dev" === (null == s || null == (o = s.request) || null == (r = o.build) ? void 0 : r.js) || "gedevplayer.vimeows.com" === (null == s ? void 0 : s.player_url), g = (c || []).reduce((e, t) => t.rtl ? e.concat(t.id) : e, []);
    return E({
        textTracks: u,
        textTrackEls: f,
        activeTextTrackId: p,
        requiresCrossOrigin: h,
        activeCues: [],
        language: _,
        direction: v,
        rtlTracks: g
    }, m)
}

function zc(e, t, n) {
    let i = [],
        o = Jc(n);
    return (null == e ? void 0 : e.length) && (o || (o = "off"), i.push({
        label: "Off",
        id: "off",
        active: "off" === o
    }), e.forEach(e => {
        let n = "CC" === e.label.substring(e.label.length - 2),
            r = "captions" !== e.kind || n ? "" : " CC",
            a = t ? "Display Captions" : e.label + r;
        const s = Jc(e),
            l = {
                label: a,
                id: s,
                active: o === s
            };
        i.push(l)
    })), {
        textTracks: i,
        activeTextTrackId: o,
        language: null == n ? void 0 : n.language,
        direction: Zc(n)
    }
}

function Xc(e) {
    const {
        store: t
    } = e, n = Ma();
    return Object.keys(n).forEach(e => {
        const i = t.get(`ui.captions.${e}`);
        n[e] = i
    }), n
}

function Zc(e) {
    return e ? e.rtl ? $c.RTL : $c.LTR : null
}

function Jc(e) {
    return e ? "" !== e.id ? `${e.id}` : `${e.language}.${e.kind}` : ""
}

function Qc(e) {
    var t;
    const {
        config: n
    } = e, i = n.video.live_event, o = null == i ? void 0 : i.status, r = !!o, a = null == i || null == (t = i.archive) ? void 0 : t.status, s = td(o), l = ed(a), c = s.isStarted && Ro(i);
    return E(E(E({
        isLiveEvent: r,
        isPlayable: c
    }, s), l), {}, {
        dvrEnabled: null == i ? void 0 : i.dvr,
        viewerCount: dt(0),
        liveStatsRequestSucceeded: null
    })
}

function ed(e) {
    return {
        isArchived: "done" === e
    }
}

function td(e) {
    return {
        isStarted: e === oo.started,
        isEnded: e === oo.ended
    }
}

function nd(e) {
    const {
        config: t
    } = e, {
        interactive: n
    } = t.embed, i = !!(null == n ? void 0 : n.markers);
    return {
        hotspots: [],
        polls: [],
        enabled: !l(n),
        ready: !1,
        showMarkers: i
    }
}
let id;
! function(e) {
    e.EMPTY = "empty", e.QOE_SURVEY = "qoe_survey", e.SKIP_TO_LIVE = "skip_to_live", e.BROADCAST_OVER = "broadcast_over"
}(id || (id = {}));
const od = [id.QOE_SURVEY, id.BROADCAST_OVER, id.SKIP_TO_LIVE],
    {
        Provider: rd,
        useStore: ad,
        useStoreApi: sd
    } = Ne(),
    ld = ({
        player: e,
        children: t
    }) => {
        const [n, i] = Pe(!1);
        return ql(() => i(!0), e), n ? De(rd, {
            createStore: () => Me(xe((t, n, {
                subscribe: i
            }) => {
                const o = E(E({
                        set: t,
                        get: n,
                        subscribe: i
                    }, e), {}, {
                        get backbone() {
                            return e.backbone
                        },
                        get displayContext() {
                            return e.displayContext
                        },
                        get config() {
                            return e.config
                        },
                        get fragmentsHandler() {
                            return e.fragmentsHandler
                        },
                        get startTime() {
                            return e.startTime
                        },
                        set startTime(t) {
                            e.startTime = t
                        },
                        get endTime() {
                            return e.endTime
                        },
                        set endTime(t) {
                            e.endTime = t
                        },
                        get segmentedPlaybackEnabled() {
                            return e.segmentedPlaybackEnabled
                        },
                        get canPlayPictureInPicture() {
                            return e.canPlayPictureInPicture
                        },
                        get parentUrl() {
                            return e.parentUrl
                        },
                        set parentUrl(t) {
                            e.parentUrl = t
                        }
                    }),
                    {
                        config: r,
                        backbone: s,
                        element: c,
                        expose: d,
                        verifyConfig: u,
                        events: p
                    } = e,
                    _ = E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E(E({}, (e => {
                        const {
                            set: t,
                            events: n
                        } = e, i = Qs(e);
                        return n.on(Kt._debugDataChange, () => {
                            t(() => ({
                                debug: Qs(e)
                            }))
                        }), {
                            debug: i
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            get: n,
                            events: i,
                            subscribe: o,
                            config: r
                        } = e, a = cl(e), s = (e, n) => {
                            t(t => ({
                                controlBar: E(E({}, t.controlBar), {}, {
                                    [e]: n
                                })
                            }))
                        };

                        function l() {
                            const e = cr(lr.FULL_CONTROLS, n().appearance.playerSizeMode, n().appearance.playerBreakpoint, r);
                            s("showAllControls", e)
                        }
                        return i.on(Kt._configChanged, () => {
                            t(() => ({
                                controlBar: cl(e)
                            }))
                        }), i.on(xt._overrideControlbarBehavior, e => {
                            s("overrideBehavior", e)
                        }), o(e => {
                            var t;
                            return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                        }, l), o(e => {
                            var t;
                            return null == e || null == (t = e.appearance) ? void 0 : t.playerBreakpoint
                        }, l), {
                            controlBar: a,
                            setControlBar: s
                        }
                    })(o)), Gl(o)), (e => {
                        const {
                            store: t,
                            set: n,
                            events: i,
                            element: o,
                            backbone: r,
                            config: a
                        } = e, s = Wl(e), l = (e, t) => n(n => ({
                            appearance: E(E({}, n.appearance), {}, {
                                [e]: t
                            })
                        }));
                        return t.watch("ui.player.breakpoint", e => l("playerBreakpoint", e)), t.watch("ui.player.mode", e => l("playerSizeMode", e)), t.watch("ui.app.breakpoint", e => l("appBreakpoint", e)), t.watch("ui.app.mode", e => l("appSizeMode", e)), t.watch("ui.controlbar.isMenuFullWidth", e => l("isMenuBlockingUI", e)), t.watch("ui.player.isVerticalVideo", e => {
                            l("isVerticalVideo", e)
                        }), t.watch("ui.controlbar.isMenuVerticalVideoMode", e => l("isMenuVerticalVideoMode", e)), t.watch("ui.player.width", () => {
                            l("boundingClientRect", ht(o))
                        }), t.watch("ui.controlbar.doMenuItemsWrap", e => {
                            l("shouldMenuItemsWrap", e)
                        }), t.watch("ui.player.width", e => {
                            const {
                                videoHeight: n
                            } = Yl(e, t.get("ui.player.height"), a.video.width, a.video.height);
                            l("videoHeight", n)
                        }), t.watch("ui.player.height", e => {
                            const {
                                videoHeight: n
                            } = Yl(t.get("ui.player.width"), e, a.video.width, a.video.height);
                            l("videoHeight", n)
                        }), t.watch("ui.container.height", e => {
                            l("containerHeight", e)
                        }), i.on(Kt._willEnterFullscreen, () => l("fullscreen", !0)), i.on(Kt._didExitFullscreen, e => {
                            n(t => {
                                const n = {
                                    fullscreen: !1,
                                    forceExitedFullscreen: t.appearance.forceExitedFullscreen
                                };
                                return e || (n.forceExitedFullscreen = !0), {
                                    appearance: E(E({}, t.appearance), n)
                                }
                            })
                        }), i.on(g.WEBKIT_END_FULLSCREEN, () => {
                            l("fullscreen", !1)
                        }), i.on(Kt._airPlayActivated, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    showAirPlayPicker: !0
                                })
                            }))
                        }), i.on(Kt._airPlayDeactivated, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    showAirPlayPicker: !1
                                })
                            }))
                        }), i.on(xt._reset, () => {
                            n(() => ({
                                appearance: Wl(e)
                            }))
                        }), i.on(Kt._airPlayActivated, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    externalDisplay: !0
                                })
                            }))
                        }), i.on(Kt._airPlayDeactivated, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    externalDisplay: !1
                                })
                            }))
                        }), i.on(g.ENTER_PICTURE_IN_PICTURE, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    pictureInPictureActive: !0
                                })
                            }))
                        }), i.on(g.LEAVE_PICTURE_IN_PICTURE, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    pictureInPictureActive: !1
                                })
                            }))
                        }), i.on(z.WEBVR_ENTER, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    stereoscopicEnabled: !0
                                })
                            }))
                        }), i.on(z.WEBVR_EXIT, () => {
                            n(e => ({
                                appearance: E(E({}, e.appearance), {}, {
                                    stereoscopicEnabled: !1
                                })
                            }))
                        }), i.on(g.LOADED_DATA, () => {
                            n(t => ({
                                appearance: E(E({}, t.appearance), {}, {
                                    isStartTimeThumbLoading: ga(e)
                                })
                            }))
                        }), {
                            appearance: s,
                            setAppearance: (e, t) => {
                                "fullscreen" !== e ? "pictureInPictureActive" !== e ? "showAirPlayPicker" !== e ? ("stereoscopicEnabled" === e && i.fire(Kt._stereoscopicButtonPressed), "transcriptNavActive" === e && i.fire(Kt._transcriptNavActive, t), l(e, t)) : i.fire(Kt._airPlayButtonPressed) : i.fire(r.pictureInPictureActive ? xt._deactivatePictureInPicture : xt._activatePictureInPicture) : i.fire(Kt._fullscreenButtonPressed)
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            events: n,
                            subscribe: i,
                            get: o
                        } = e, r = wc(e);
                        return n.on(Kt._configChanged, () => {
                            t(() => ({
                                embed: wc(e)
                            }))
                        }), n.on(Kt._parentUrlAvailable, (function(e) {
                            e && t(t => ({
                                embed: E(E({}, t.embed), {}, {
                                    parentUrl: e
                                })
                            }))
                        })), i(e => {
                            var t;
                            return null == e || null == (t = e.liveEvent) ? void 0 : t.isArchived
                        }, i => {
                            var r, a;
                            const s = Ac(e),
                                l = null == (r = o()) || null == (a = r.embed) ? void 0 : a.transcript;
                            i && s && !l && (n.fire(Kt._rightContentAreaEnabled), t(e => ({
                                embed: E(E({}, e.embed), {}, {
                                    rightContentAreaEnabled: !0,
                                    transcript: !0
                                })
                            })))
                        }), {
                            embed: r
                        }
                    })(o)), rl(o)), (e => {
                        const {
                            events: t,
                            set: n
                        } = e, i = () => {
                            clearTimeout(sl), sl = setTimeout(() => {
                                n(e => ({
                                    displayList: E(E({}, e.displayList), {}, {
                                        nudgeNotification: !1
                                    })
                                })), t.fire(Kt._nudgeEnded)
                            }, 1050)
                        }, o = e => {
                            i(), n(t => ({
                                displayList: E(E({}, t.displayList), {}, {
                                    nudgeNotification: !0
                                }),
                                nudge: e
                            }))
                        };
                        return t.on(Kt._showNudgeNotification, ({
                            direction: e,
                            time: t
                        }) => {
                            o({
                                direction: e,
                                time: t
                            })
                        }), {
                            nudge: {
                                direction: null,
                                time: null
                            },
                            setNudge: (e, t) => {
                                i(), n(n => ({
                                    nudge: E(E({}, n.nudge), {}, {
                                        [e]: t
                                    })
                                }))
                            },
                            setNudgeProperties: o
                        }
                    })(o)), (e => {
                        const {
                            events: t,
                            set: n,
                            get: i,
                            backbone: o,
                            subscribe: r,
                            config: a
                        } = e, s = (e, t) => {
                            n(n => ({
                                playback: E(E({}, n.playback), {}, {
                                    [e]: t
                                })
                            }))
                        }, l = Nc(e);
                        return t.on(xt._reset, () => {
                            n(() => ({
                                playback: Nc(e)
                            }))
                        }), t.on(Kt._configChanged, t => {
                            t && n(() => ({
                                playback: Nc(e)
                            }))
                        }), t.on(A, () => s("playInitiated", !0)), t.on(g.PLAY, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    scrubbing: !1,
                                    scrubbingByFrame: !1,
                                    paused: !1,
                                    playInitiated: !0
                                })
                            }))
                        }), t.on(Kt._playButtonPressed, () => s("paused", !1)), t.on([g.PAUSE, Kt._paused, Kt._pauseButtonPressed], () => s("paused", !0)), t.on(Kt._targetTimeReached, () => s("targetTimeReached", !0)), t.on(S.BUFFER_STARTED, () => s("buffering", !0)), t.on(S.BUFFER_ENDED, () => s("buffering", !1)), t.on(Kt._scrubbingStarted, e => {
                            s("scrubbing", !0), "keyboard" === (null == e ? void 0 : e.seekType) && (null == e ? void 0 : e.isFrameByFrame) && s("scrubbingByFrame", !0)
                        }), t.on(Kt._scrubbingEnded, () => {
                            s("scrubbing", !1), s("scrubbingByFrame", !1)
                        }), t.on(xt._setTime, e => {
                            n(t => {
                                const n = t.liveEvent.dvrEnabled ? t.playback.liveTailTime : 0,
                                    i = t.liveEvent.dvrEnabled ? t.playback.liveEdgeTime : t.playback.duration,
                                    o = Et(e, n, i);
                                return {
                                    playback: E(E({}, t.playback), {}, {
                                        currentTime: o
                                    })
                                }
                            })
                        }), t.on(g.TIME_UPDATE, ({
                            currentTime: t,
                            timeProgress: i,
                            liveEdgeTime: o,
                            atLiveEdge: r,
                            liveTailTime: a,
                            atLiveTail: s
                        }) => {
                            n(n => {
                                const l = Math.min(At(100 * i), 100);
                                t = t || n.playback.duration * l || 0;
                                const c = Dc(e);
                                return {
                                    playback: E(E({}, n.playback), {}, {
                                        currentTime: t,
                                        liveEdgeTime: o,
                                        atLiveEdge: r,
                                        liveTailTime: a,
                                        atLiveTail: s,
                                        playbackRates: c
                                    })
                                }
                            })
                        }), t.on(Kt._ended, () => {
                            const e = i().liveEvent.dvrEnabled && !i().playback.atLiveEdge,
                                t = i().liveEvent.dvrEnabled && i().playback.atLiveEdge;
                            e || n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    currentTime: t ? 0 : e.playback.currentFragment.duration
                                })
                            }))
                        }), t.on(g.PROGRESS, ({
                            loaded: e
                        }) => {
                            n(t => ({
                                playback: E(E({}, t.playback), {}, {
                                    loadedTime: e
                                })
                            }))
                        }), t.on([Kt._fragmentChanged, g.DURATION_CHANGE], () => {
                            const t = i().playback.currentFragment;
                            if (!Re(t, e.fragmentsHandler.currentFragment)) {
                                const t = Vc(e.config);
                                n(n => ({
                                    playback: E(E({}, n.playback), {}, {
                                        hasFragments: t,
                                        currentFragment: e.fragmentsHandler.currentFragment
                                    })
                                }))
                            }
                        }), t.on(g.LOADED_METADATA, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    loadedMetadata: !0
                                })
                            }))
                        }), t.on(g.LOADED_DATA, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    loadedData: !0
                                })
                            }))
                        }), t.on([S.STREAM_CHANGE, G], e => {
                            const t = {
                                currentQuality: Mc(o.qualities, e)
                            };
                            i().liveEvent.isLiveEvent && Object.assign(t, {
                                qualities: o.qualities
                            }), n(e => ({
                                playback: E(E({}, e.playback), t)
                            }))
                        }), t.on(Kt._qualityChanged, e => {
                            n(t => ({
                                playback: E(E({}, t.playback), {}, {
                                    qualities: o.qualities,
                                    currentQuality: Mc(o.qualities, e)
                                })
                            }))
                        }), t.on(S.AUDIO_TRACK_CHANGED, () => s("audioTracks", o.audioTracks)), t.once(B, () => s("canPlayPictureInPicture", e.canPlayPictureInPicture)), t.on(Kt._airPlayAvailable, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    supportsAirPlay: !0
                                })
                            }))
                        }), t.on(Kt._airPlayNotAvailable, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    supportsAirPlay: !1
                                })
                            }))
                        }), t.on(Kt._playbackRateChanged, () => {
                            n(t => ({
                                playback: E(E({}, t.playback), {}, {
                                    playbackRates: Dc(e)
                                })
                            }))
                        }), t.on(Kt._volumeChanged, e => {
                            n(t => ({
                                playback: E(E({}, t.playback), {}, {
                                    volume: e,
                                    muted: o.muted
                                })
                            }))
                        }), t.on(Kt._mutedChanged, e => {
                            n(t => ({
                                playback: E(E({}, t.playback), {}, {
                                    muted: e
                                })
                            }))
                        }), t.on(S.AVAILABLE_STREAMS_CHANGED, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    qualities: o.qualities,
                                    currentQuality: Mc(o.qualities)
                                })
                            }))
                        }), Yr.on(Gr.connected, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isChromecastConnected: !0
                                })
                            }))
                        }), Yr.on(Gr.disconnected, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isChromecastConnected: !1
                                })
                            }))
                        }), Yr.on(Gr.initialized, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isChromecastSetupWithAvailableDevices: Bc()
                                })
                            }))
                        }), Yr.on(Gr.castStateChanged, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isChromecastSetupWithAvailableDevices: Bc()
                                })
                            }))
                        }), Yr.on(Gr.playing, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isChromecastPlaying: !0,
                                    isChromecastBuffering: !1
                                })
                            }))
                        }), Yr.on(Gr.buffering, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isChromecastBuffering: !0
                                })
                            }))
                        }), Yr.on([Gr.error, Gr.idle, Gr.paused, Gr.ended, Gr.disconnected], () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isChromecastPlaying: !1,
                                    isChromecastBuffering: !1
                                })
                            }))
                        }), Yr.on(Gr.error, () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    supportsChromecast: !1
                                })
                            }))
                        }), t.on([Kt._adClicked, Kt._adPaused, Kt._adComplete, Kt._adError, Kt._adSkipped, Kt._allAdsCompleted], () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isAdPlaying: !1
                                })
                            }))
                        }), t.on([Kt._adStarted, Kt._adResumed], () => {
                            n(e => ({
                                playback: E(E({}, e.playback), {}, {
                                    isAdPlaying: !0
                                })
                            }))
                        }), t.on([Kt._startTimeUpdated, Kt._endTimeUpdated], () => {
                            n(t => ({
                                playback: E(E({}, t.playback), {}, {
                                    isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
                                    startTime: e.startTime,
                                    endTime: e.endTime
                                })
                            }))
                        }), t.on(K.LATENCY_UPDATED, (function() {
                            n(e => e.playback.paused || e.playback.buffering ? e.playback.scrubbing ? il : {
                                playback: E(E({}, e.playback), Uc(o))
                            } : il)
                        })), t.on(S.SCANNER_CHANGE, (function() {
                            n(e => ({
                                playback: E(E({}, e.playback), Uc(o))
                            }))
                        })), r(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                        }, e => !e && i().liveEvent.dvrEnabled && !i().liveEvent.isArchived && Ir(vr.DVR_MODE_ENTERED, a)), r(e => {
                            var t;
                            return null == e || null == (t = e.embed) ? void 0 : t.pip
                        }, () => {
                            n(t => ({
                                playback: E(E({}, t.playback), {}, {
                                    canPlayPictureInPicture: e.canPlayPictureInPicture
                                })
                            }))
                        }), {
                            playback: l,
                            clearSegment: () => {
                                e.startTime = null, e.endTime = null
                            },
                            setPlayback: (e, r, a) => {
                                if ("paused" !== e) {
                                    if ("qualities" === e) return t.fire(xt._changeQuality, r), void n(e => {
                                        const t = Tn(e.playback.qualities, r);
                                        return {
                                            playback: E(E({}, e.playback), {}, {
                                                qualities: t,
                                                currentQuality: Mc(t)
                                            })
                                        }
                                    });
                                    if ("playbackRates" === e) return t.fire(xt._changePlaybackRate, r), void n(e => {
                                        const t = Tn(e.playback.playbackRates, r);
                                        return {
                                            playback: E(E({}, e.playback), {}, {
                                                playbackRates: t
                                            })
                                        }
                                    });
                                    if ("scrubbing" !== e)
                                        if ("currentTime" !== e)
                                            if ("volume" !== e)
                                                if ("muted" !== e)
                                                    if ("audioTracks" !== e) s(e, r);
                                                    else {
                                                        const e = o.audioTracks.find(e => e.id === `${r}`);
                                                        e && (o.enableAudioTrack(e), t.fire(xt._changeAudioTrack, e))
                                                    }
                                    else t.fire(xt._changeMuted, r);
                                    else t.fire(xt._changeVolume, r);
                                    else switch (null == a ? void 0 : a.seekType) {
                                        case "interactive-marker":
                                            t.fire(xt._seek, r), t.fire(Kt._playButtonPressed), t.fire(Kt._interactiveMarkerClicked, {
                                                type: "interactive-marker",
                                                action: null == a ? void 0 : a.action
                                            });
                                            break;
                                        case "nudge":
                                            t.fire(Kt._nudgeAttempted), t.fire(xt._seek, r), i().playback.playInitiated || t.fire(Kt._playButtonPressed);
                                            break;
                                        default:
                                            t.fire(xt._seek, r)
                                    } else r ? t.fire(Kt._scrubbingStarted) : t.fire(Kt._scrubbingEnded)
                                } else !1 === r ? t.fire(Kt._playButtonPressed) : t.fire(Kt._pauseButtonPressed)
                            }
                        }
                    })(o)), (e => {
                        const {
                            events: t,
                            get: n,
                            set: i
                        } = e, o = (e, t) => {
                            i(n => ({
                                user: E(E({}, n.user), {}, {
                                    [e]: t
                                })
                            }))
                        };
                        return t.on(Kt._liked, () => o("liked", !0)), t.on(Kt._unliked, () => o("liked", !1)), t.on(Kt._addedToWatchLater, () => o("watchLater", !0)), t.on(Kt._removedFromWatchLater, () => o("watchLater", !1)), t.on(Kt._configChanged, (t, n) => {
                            e.set(() => ({
                                user: Fc({
                                    config: n
                                })
                            }))
                        }), t.on(Kt._userLoggedIn, () => {
                            n().user.loggedIn || o("loggedIn", !0)
                        }), {
                            user: Fc(e),
                            setUser: (i, r) => {
                                if ("liked" !== i)
                                    if ("watchLater" !== i)
                                        if ("collected" !== i)
                                            if ("shared" !== i) "loggedIn" !== i || !0 !== r || n().user.loggedIn ? o(i, r) : t.fire(xt._openPopup, "basic");
                                            else {
                                                const {
                                                    share: n
                                                } = e.config.embed.settings, i = (null == n ? void 0 : n.embed_only) ? Kt._embedButtonPressed : Kt._shareButtonPressed;
                                                t.fire(i)
                                            }
                                else t.fire(Kt._collectionsButtonPressed);
                                else t.fire(Kt._watchLaterButtonPressed);
                                else t.fire(Kt._likeButtonPressed)
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            get: n,
                            events: i,
                            config: o,
                            subscribe: r
                        } = e, a = Gc(e);

                        function s(e) {
                            e && n().vod.vodButtonVisible ? t(e => ({
                                vod: E(E({}, e.vod), {}, {
                                    vodButtonVisible: !1
                                })
                            })) : e || !n().vod.isVOD || n().vod.vodButtonVisible || t(e => ({
                                vod: E(E({}, e.vod), {}, {
                                    vodButtonVisible: !0
                                })
                            }))
                        }
                        return r(e => {
                            var t;
                            return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                        }, e => {
                            s(e)
                        }), r(e => {
                            var t;
                            return null == e || null == (t = e.displayList) ? void 0 : t.ad
                        }, e => s(e)), i.on(Kt._configChanged, (n, i) => {
                            t(() => ({
                                vod: Gc(E(E({}, e), {}, {
                                    config: i
                                }))
                            }))
                        }), {
                            vod: a,
                            setVod: (e, n) => {
                                if ("purchased" !== e || !0 !== n) t(t => ({
                                    vod: E(E({}, t.vod), {}, {
                                        [e]: n
                                    })
                                }));
                                else {
                                    const [e] = o.video.vod.purchase_options;
                                    i.fire(Kt._vodButtonPressed, e.product_id)
                                }
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            get: n,
                            events: i,
                            config: o
                        } = e, r = hl(e), a = (e, i) => {
                            if ("purpose" !== e) t(t => ({
                                overlay: E(E({}, t.overlay), {}, {
                                    [e]: i
                                })
                            }));
                            else {
                                const e = n().overlay.purpose === i ? Wn.EMPTY : i;
                                t(t => ({
                                    overlay: E(E({}, t.overlay), {}, {
                                        purpose: e
                                    })
                                }))
                            }
                        };
                        return i.on(Kt._overlayOpened, e => {
                            a("purpose", e)
                        }), i.on(Kt._overlayClosed, () => {
                            a("purpose", Wn.EMPTY)
                        }), i.on(xt._showOverlay, e => {
                            zn(e) && !n().displayList.accessGate && i.fire(Kt._overlayOpened, e)
                        }), i.on(Kt._overlayCloseButtonPressed, () => {
                            zn(n().overlay.purpose) && i.fire(Kt._overlayClosed)
                        }), {
                            overlay: r,
                            setOverlay: (t, r) => {
                                if ("purpose" !== t || r !== Wn.SHARE) {
                                    if ("purpose" === t && r === Wn.EMPTY) {
                                        if (zn(n().overlay.purpose)) return void i.fire(Kt._overlayClosed);
                                        r = jn(e.element)
                                    }
                                    a(t, r)
                                } else {
                                    var s;
                                    const {
                                        embed: e
                                    } = o, t = (null == (s = e.settings.share) ? void 0 : s.embed_only) ? Kt._embedButtonPressed : Kt._shareButtonPressed;
                                    i.fire(t)
                                }
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            events: n,
                            subscribe: i
                        } = e, o = al(e);
                        return n.on(Kt._configChanged, (n, i) => {
                            t(() => ({
                                title: al(E(E({}, e), {}, {
                                    config: i
                                }))
                            }))
                        }), i(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                        }, n => {
                            let i = Ui("video-title", e.config);
                            n && (i = ji(i, e.startTime, e.endTime)), t(e => ({
                                title: E(E({}, e.title), {}, {
                                    titleLinkUrl: i
                                })
                            }))
                        }), {
                            title: o
                        }
                    })(o)), (e => {
                        const {
                            events: t,
                            set: n
                        } = e, i = Wc(e);
                        return t.on(Kt._configChanged, (e, t) => {
                            n(() => ({
                                badge: Wc({
                                    config: t
                                })
                            }))
                        }), {
                            badge: i,
                            setBadge: (e, i) => {
                                "id" !== e ? ((e, t) => {
                                    n(n => ({
                                        badge: E(E({}, n.badge), {}, {
                                            [e]: t
                                        })
                                    }))
                                })(e, i) : t.fire(Kt._badgePressed, i)
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            events: n
                        } = e, i = (e, n) => {
                            t(t => ({
                                chapters: E(E({}, t.chapters), {}, {
                                    [e]: n
                                })
                            }))
                        }, o = Yc(e), r = ({
                            backbone: e
                        }) => {
                            if (e.chaptersTrack) {
                                const t = () => n.fire(Kt._chapterChanged, null == e ? void 0 : e.currentChapterID);
                                e.chaptersTrack.addEventListener("cuechange", t)
                            }
                        };
                        return r(e), n.on(Kt._chapterChanged, e => {
                            t(t => ({
                                chapters: E(E({}, t.chapters), {}, {
                                    activeCueId: e
                                })
                            }))
                        }), n.on(S.CHAPTER_CUES_UPDATED, () => i("chapters", qc(e))), n.on(Kt._configChanged, () => {
                            t(() => ({
                                chapters: Yc(e)
                            })), r(e)
                        }), {
                            chapters: o,
                            setChapters: i
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            get: n,
                            events: i,
                            backbone: o
                        } = e, r = Ma(), s = e => {
                            var i, r;
                            const a = zc(o.textTracks, null == (i = n()) || null == (r = i.liveEvent) ? void 0 : r.isLiveEvent, e);
                            t(e => ({
                                captions: E(E({}, e.captions), a)
                            }))
                        }, l = jc(e);
                        return i.on(Kt._captionsChanged, e => {
                            s(e)
                        }), i.on(S.TEXT_TRACKS_AVAILABLE, () => {
                            s()
                        }), i.on(Kt._configChanged, () => {
                            t(() => ({
                                captions: jc(e)
                            }))
                        }), i.on(M, (e, n = []) => {
                            o.enabledTextTrack && "disabled" !== (null == e ? void 0 : e.mode) && t(e => ({
                                captions: E(E({}, e.captions), {}, {
                                    activeCues: a(n)
                                })
                            }))
                        }), i.on(xt._turnCaptionsOff, () => {
                            t(e => ({
                                captions: E(E({}, e.captions), {}, {
                                    activeCues: []
                                })
                            }))
                        }), {
                            captions: l,
                            setCaptions: (n, o) => {
                                if ("activeTextTrackId" === n) return "off" !== o && o ? void i.fire(xt._turnCaptionsOn, o) : void i.fire(xt._turnCaptionsOff);
                                if (wi.hasOwnProperty(n)) {
                                    const a = r[n];
                                    return i.fire(xt._changeCaptionsStyles, a, o), void t(t => ({
                                        captions: E(E({}, t.captions), Xc(e))
                                    }))
                                }((e, n) => {
                                    t(t => ({
                                        captions: E(E({}, t.captions), {}, {
                                            [e]: n
                                        })
                                    }))
                                })(n, o)
                            },
                            resetCaptionsStyles: () => {
                                i.fire(xt._resetCaptionsStyles), t(t => ({
                                    captions: E(E({}, t.captions), Xc(e))
                                }))
                            }
                        }
                    })(o)), (e => {
                        const {
                            events: t,
                            set: n,
                            subscribe: i
                        } = e, o = Qc(e), r = (e, t) => {
                            n(n => ({
                                liveEvent: E(E({}, n.liveEvent), {}, {
                                    [e]: t
                                })
                            }))
                        };
                        t.on(Kt._configChanged, () => {
                            n(() => ({
                                liveEvent: Qc(e)
                            }))
                        });
                        const {
                            EVENT_ACTIVE: a,
                            EVENT_PENDING: s,
                            EVENT_STARTED: l,
                            EVENT_ENDED: c
                        } = K, d = {
                            [a]: oo.active,
                            [s]: oo.pending,
                            [l]: oo.started,
                            [c]: oo.ended
                        };
                        Object.keys(d).forEach(e => t.on(e, () => n(t => ({
                            liveEvent: E(E({}, t.liveEvent), td(d[e]))
                        }))));
                        const {
                            ARCHIVE_STARTED: u,
                            ARCHIVE_DONE: p,
                            ARCHIVE_ERROR: _
                        } = K, v = {
                            [u]: io.started,
                            [p]: io.done,
                            [_]: io.error
                        };
                        return Object.keys(v).forEach(e => t.on(e, () => n(t => ({
                            liveEvent: E(E({}, t.liveEvent), ed(v[e]))
                        })))), t.on(K.LIVE_STATS_SUCCESS, ({
                            viewerCount: e
                        }) => {
                            n(t => ({
                                liveEvent: E(E({}, t.liveEvent), {}, {
                                    viewerCount: dt(e),
                                    liveStatsRequestSucceeded: !0
                                })
                            }))
                        }), t.on(K.LIVE_STATS_FAILURE, () => {
                            n(e => ({
                                liveEvent: E(E({}, e.liveEvent), {}, {
                                    liveStatsRequestSucceeded: !1
                                })
                            }))
                        }), t.on(Kt._liveEventSafeToPlay, () => {
                            r("isPlayable", !0)
                        }), i(e => {
                            var t;
                            return null == e || null == (t = e.liveEvent) ? void 0 : t.isStarted
                        }, e => !e && r("isPlayable", !1)), {
                            liveEvent: o,
                            setLiveEvent: r
                        }
                    })(o)), (e => {
                        const {
                            events: t,
                            set: n
                        } = e;
                        return t.on(Kt._webinarRegistrantBlocked, () => {
                            n(e => ({
                                webinar: E(E({}, e.webinar), {}, {
                                    webinarRegistrantBlocked: !0
                                })
                            }))
                        }), t.on(Kt._webinarRegistrantUnblocked, () => {
                            n(e => ({
                                webinar: E(E({}, e.webinar), {}, {
                                    webinarRegistrantBlocked: !1
                                })
                            }))
                        }), {
                            webinar: {
                                webinarRegistrantBlocked: !1
                            },
                            setWebinar: (e, t) => {
                                n(n => ({
                                    webinar: E(E({}, n.webinar), {}, {
                                        [e]: t
                                    })
                                }))
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            events: n
                        } = e, i = nd(e), o = e => {
                            l(e.embed.interactive) || n.once(Kt._interactiveReady, ({
                                hotspots: e,
                                polls: n = []
                            }) => {
                                t(t => ({
                                    interactive: E(E({}, t.interactive), {}, {
                                        hotspots: e,
                                        polls: n,
                                        ready: !0
                                    })
                                }))
                            })
                        }, r = n => {
                            o(n), t(() => ({
                                interactive: nd(e)
                            }))
                        };
                        return o(e.config), n.on(Kt._configChanged, (e, t) => {
                            e && r(t)
                        }), n.on(Kt._createInteractiveChanged, (e, t) => {
                            r(t)
                        }), {
                            interactive: i,
                            setInteractive: (e, n) => {
                                t(t => ({
                                    interactive: E(E({}, t.interactive), {}, {
                                        [e]: n
                                    })
                                }))
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            events: n,
                            config: i
                        } = e;
                        return n.on(Kt._configChanged, () => {
                            t(() => ({
                                cuePoints: {
                                    cuePoints: []
                                }
                            }))
                        }), i.embed.on_site && (n.on(Kt._cuePointAdded, e => {
                            t(t => {
                                const n = t.cuePoints.cuePoints.concat(e);
                                return {
                                    cuePoints: E(E({}, t.cuePoints), {}, {
                                        cuePoints: n
                                    })
                                }
                            })
                        }), n.on(Kt._cuePointRemoved, e => {
                            t(t => {
                                const n = t.cuePoints.cuePoints.filter(t => t.id !== e.id);
                                return {
                                    cuePoints: E(E({}, t.cuePoints), {}, {
                                        cuePoints: n
                                    })
                                }
                            })
                        })), {
                            cuePoints: {
                                cuePoints: []
                            },
                            setCuePoints: (e, n) => {
                                t(t => ({
                                    cuePoints: E(E({}, t.cuePoints), {}, {
                                        [e]: n
                                    })
                                }))
                            }
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            get: n,
                            events: i,
                            subscribe: o,
                            element: r,
                            config: a
                        } = e, s = {
                            purpose: id.EMPTY
                        };
                        let l = function(e) {
                            const {
                                request: t,
                                video: n,
                                embed: i
                            } = e.config, {
                                qoe_survey_forced: o,
                                ott: r
                            } = t.flags, {
                                qoe_survey_vote: a
                            } = t.cookie, {
                                duration: s,
                                live_event: l
                            } = n;
                            return !(!o && (s < 60 && !l || !Xn(i) || r || Zn(7776e6) < a / 1e3 || !(Math.random() < .005)))
                        }(e);
                        const c = (e, i) => {
                                Xn(a.embed) && wo({
                                    newPriority: i,
                                    currentPriority: n().toast.purpose,
                                    priorityOrder: od
                                }) && t(t => ({
                                    toast: E(E({}, t.toast), {}, {
                                        [e]: i
                                    })
                                }))
                            },
                            d = () => {
                                l && wo({
                                    newPriority: id.QOE_SURVEY,
                                    currentPriority: n().toast.purpose,
                                    priorityOrder: od
                                }) && (e => {
                                    if (!e) return !1;
                                    const t = e.getBoundingClientRect(),
                                        n = t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth),
                                        i = "visible" === document.visibilityState;
                                    return n && i
                                })(r) && (c("purpose", id.QOE_SURVEY), i.fire(Kt._qoeSurveyPresented), l = !1)
                            };

                        function u() {
                            t(e => {
                                const {
                                    liveEvent: t,
                                    toast: n,
                                    playback: i,
                                    displayList: o
                                } = e;
                                return t.dvrEnabled && n.purpose !== id.SKIP_TO_LIVE ? i.atLiveEdge ? il : t.isPlayable ? i.paused && !i.scrubbing ? il : o.controlBar ? {
                                    toast: {
                                        purpose: id.SKIP_TO_LIVE
                                    }
                                } : il : il : il
                            })
                        }

                        function p() {
                            t(e => e.toast.purpose !== id.SKIP_TO_LIVE ? il : {
                                toast: {
                                    purpose: id.EMPTY
                                }
                            })
                        }
                        return o(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                        }, e => {
                            var t, i, o, r;
                            const a = function(e, t) {
                                return t ? 6e5 : Math.round(.4 * e * 1e3)
                            }(null == (t = n()) || null == (i = t.playback) ? void 0 : i.duration, null == (o = n()) || null == (r = o.liveEvent) ? void 0 : r.isLiveEvent);
                            e && a && setTimeout(d, a)
                        }), o(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                        }, e => {
                            e ? p() : u()
                        }), o(e => {
                            var t;
                            return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                        }, e => e && void t(e => e.liveEvent.dvrEnabled && e.liveEvent.isEnded ? {
                            toast: {
                                purpose: id.BROADCAST_OVER
                            }
                        } : il)), o(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.paused
                        }, e => {
                            n().liveEvent.isEnded || n().playback.scrubbing || (e ? p() : u())
                        }), o(e => {
                            var t;
                            return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                        }, e => e ? u() : p()), {
                            toast: s,
                            setToast: c,
                            closeToast: () => {
                                c("purpose", id.EMPTY)
                            }
                        }
                    })(o)), (e => {
                        const {
                            get: t,
                            set: n,
                            subscribe: i,
                            config: o,
                            backbone: r
                        } = e, a = ul(e), s = (e, i) => {
                            Xn(o.embed) && wo({
                                newPriority: i,
                                currentPriority: t().topCenterActionItem.purpose,
                                priorityOrder: dl
                            }) && n(t => ({
                                topCenterActionItem: E(E({}, t.topCenterActionItem), {}, {
                                    [e]: i
                                })
                            }))
                        }, l = e => {
                            e && t().topCenterActionItem.purpose !== e || s("purpose", ll.EMPTY)
                        }, c = () => l(ll.UNMUTE), d = () => s("purpose", ll.WATCH_FULL_VIDEO), u = () => l(ll.WATCH_FULL_VIDEO);
                        return i(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.loadedData
                        }, e => {
                            if (!e) return;
                            const n = t(),
                                i = n.embed.autoPlay || n.liveEvent.isLiveEvent,
                                o = 0 === n.playback.volume || n.playback.muted,
                                a = Xn(n.embed),
                                l = r.hasAudio || n.liveEvent.isLiveEvent;
                            o && i && a && l && n.embed.unmuteButton && s("purpose", ll.UNMUTE)
                        }), i(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.volume
                        }, e => e > 0 && c()), i(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.muted
                        }, e => !e && c()), i(e => {
                            var t;
                            return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                        }, e => e && c()), i(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                        }, () => {
                            pl(t()) ? d() : u()
                        }), i(e => {
                            var t;
                            return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                        }, () => {
                            pl(t()) ? d() : u()
                        }), i(e => {
                            var t;
                            return null == e || null == (t = e.displayList) ? void 0 : t.outro
                        }, () => {
                            pl(t()) ? d() : u()
                        }), i(e => {
                            var t;
                            return null == e || null == (t = e.playback) ? void 0 : t.paused
                        }, () => {
                            pl(t()) ? d() : u()
                        }), {
                            topCenterActionItem: a,
                            setTopCenterActionItem: s,
                            closeTopCenterActionItem: l
                        }
                    })(o)), (e => {
                        const {
                            events: t,
                            set: n
                        } = e, i = (e, t) => {
                            n(n => ({
                                spatial: E(E({}, n.spatial), {}, {
                                    [e]: t
                                })
                            }))
                        };
                        return t.on(z.WEBVR_ENTER, () => {
                            i("webVRActive", !0)
                        }), t.on(z.WEBVR_EXIT, () => {
                            i("webVRActive", !1)
                        }), t.on(z.CAMERA_UPDATE, e => {
                            n(t => ({
                                spatial: E(E({}, t.spatial), {}, {
                                    latitude: e.pitch,
                                    longitude: e.yaw
                                })
                            }))
                        }), {
                            spatial: function(e) {
                                const {
                                    spatial: t
                                } = e.config.video;
                                return {
                                    webVRActive: !1,
                                    longitude: 0,
                                    latitude: 0,
                                    fieldOfView: t ? t.fov : 0
                                }
                            }(e),
                            setSpatial: i
                        }
                    })(o)), (e => {
                        const {
                            set: t,
                            events: n,
                            subscribe: i,
                            get: o
                        } = e, r = (e, n) => {
                            t(t => ({
                                alert: E(E({}, t.alert), {}, {
                                    [e]: n
                                })
                            }))
                        }, a = e => {
                            t(t => {
                                const n = t.embed.background;
                                return t.displayList.overlay || n ? il : {
                                    alert: E(E({}, t.alert), {}, {
                                        currentAlert: e
                                    })
                                }
                            })
                        };
                        return n.on(Dt._spatialUnsupported, () => a(gl.SPATIAL_UNSUPPORTED)), n.on(Dt._spatialFailure, () => a(gl.SPATIAL_FAILURE)), i(e => {
                            var t;
                            return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                        }, e => {
                            e && o().alert.currentAlert !== gl.EMPTY && r("currentAlert", gl.EMPTY)
                        }), {
                            alert: {
                                currentAlert: gl.EMPTY
                            },
                            setAlert: r
                        }
                    })(o)), {}, {
                        config: r,
                        backbone: s,
                        element: c,
                        name: (null == d ? void 0 : d.name) || _i.VimeoPlayer,
                        verifyConfig: u,
                        events: p,
                        subscribe: i
                    });
                return p.fire(Kt._eventedStoreCreated, _), _
            })),
            children: t
        }) : null
    },
    cd = e => `opacity ${e}ms ease-out`,
    dd = ({
        children: e,
        visible: t,
        duration: n = 250,
        styleOverrides: i = {},
        onFaded: o,
        delay: r = 0
    }) => {
        const a = ad(e => e.embed.background || !e.embed.controls || e.displayList.accessGate),
            s = cd(n),
            l = {
                enter: {
                    opacity: 0
                },
                enterActive: {
                    opacity: 1,
                    transition: s,
                    transitionDelay: `${r}ms`
                },
                enterDone: {
                    opacity: 1
                },
                exit: {
                    opacity: 1
                },
                exitActive: {
                    opacity: 0,
                    transition: s,
                    transitionDelay: `${r}ms`
                },
                exitDone: a ? {
                    display: "none"
                } : {
                    overflow: "hidden",
                    opacity: 0,
                    pointerEvents: "none"
                }
            };
        return Object.keys(i).forEach(e => {
            e in l && Object.assign(l[e], i[e])
        }), De(Be, { in: t,
            duration: n,
            styles: l,
            alwaysMounted: !0,
            onExited: () => {
                o && o()
            },
            children: e
        })
    };
const ud = ({
    children: e,
    text: t
}) => {
    const n = Oe(t),
        [i, r] = Pe(!1),
        [a, s] = Pe(!1),
        l = () => {
            a || s(!0)
        },
        c = () => {
            i && (l(), r(!1))
        },
        d = () => {
            i || o.touch || (l(), r(!0))
        },
        u = ke(() => {
            a && s(!1)
        }, [a]),
        p = {
            className: "LabeledButton_module_box__5de18028",
            onMouseEnter: d,
            onMouseLeave: c,
            onFocus: d,
            onBlur: c
        },
        _ = E({
            className: "LabeledButton_module_labeledButton__5de18028"
        }, mn(t => {
            c(), e.props.onClick && e.props.onClick(t)
        })),
        v = `${cd(250)} transform 250 ease-out`,
        m = {
            visible: i,
            styleOverrides: {
                enterActive: {
                    transform: "translateX(0)",
                    transition: v
                },
                exitActive: {
                    transform: "translateX(5px)",
                    transition: v
                }
            }
        };
    return n.current !== t && (a ? m.onFaded = u : n.current = t), De("div", E(E({}, p), {}, {
        children: [De(dd, E(E({}, m), {}, {
            children: De("label", E(E({}, _), {}, {
                role: "presentation",
                "aria-hidden": "true",
                children: De("span", {
                    children: n.current
                })
            }))
        })), e]
    }))
};
const pd = e => {
        let {
            href: t,
            children: n,
            element: i = "div",
            className: o = "",
            targetBlank: r = !0
        } = e, a = m(e, ["href", "children", "element", "className", "targetBlank"]);
        const s = Ve(i, E(E({}, a), {}, {
            className: o
        }), n);
        return t ? De("a", E(E(E({
            href: t,
            className: Cn("Link_module_link__5efef3b8", o)
        }, r ? {
            target: "_blank",
            rel: "noopener"
        } : {}), a), {}, {
            "aria-describedby": "new-window",
            children: n
        })) : s
    },
    _d = {
        [mc.CLOSE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [mc.AIRPLAY]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                "data-airplay-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"
                })
            }))
        },
        [mc.DOLBY_VISION]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 844 126",
                "aria-labelledby": "dv-logo-title"
            }, t), {}, {
                children: [De("title", {
                    id: "dv-logo-title",
                    children: "Dolby Vision"
                }), De("path", {
                    d: "M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })]
            }))
        },
        [mc.PIP]: e => {
            let {
                direction: t = "enter"
            } = e, n = m(e, ["direction"]);
            return De("svg", E(E({
                className: Mn.PIP_ICON,
                viewBox: "0 0 16 12"
            }, n), {}, {
                children: [De("polygon", {
                    className: Mn.FILL,
                    points: "6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"
                }), De("rect", {
                    className: Mn.FILL,
                    x: "7",
                    y: "7",
                    width: "9",
                    height: "5"
                }), De("polyline", {
                    className: Mn.FILL,
                    transform: "enter" === t ? "translate(4, 4) rotate(180) translate(-4, -4)" : "",
                    points: "5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"
                })]
            }))
        },
        [mc.ENTER_FULLSCREEN]: () => De("svg", {
            className: xn.ENTER_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-enter-fullscreen": !0,
            children: De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"
            })
        }),
        [mc.EXIT_FULLSCREEN]: () => De("svg", {
            className: xn.EXIT_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-exit-fullscreen": !0,
            children: [De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"
            }), De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"
            }), De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"
            }), De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"
            })]
        }),
        [mc.GEAR]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"
                })
            }))
        },
        [mc.VIMEO]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "54",
                height: "18",
                viewBox: "0 0 54 18",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"
                })
            }))
        },
        [mc.VIMEO_SMALL]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"
                })
            }))
        },
        [mc.ENTER_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                "data-enter-pip": !0,
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",
                    fill: "white"
                })
            }))
        },
        [mc.EXIT_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-exit-pip": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"
                })
            }))
        },
        [mc.PAUSE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-pause-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    className: Mn.FILL,
                    d: "M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"
                })
            }))
        },
        [mc.PLAY]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-play-icon": !0
            }, t), {}, {
                children: De("path", {
                    d: "M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",
                    className: Mn.FILL
                })
            }))
        },
        [mc.REPLAY]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    className: Mn.FILL,
                    d: "M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"
                })
            }))
        },
        [mc.CHAPTERS]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"
                })
            }))
        },
        [mc.POINT]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "8",
                height: "8",
                viewBox: "0 0 8 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("circle", {
                    className: Mn.FILL,
                    cx: "4",
                    cy: "4",
                    r: "4"
                })
            }))
        },
        [mc.CC]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 24 24",
                "data-cc-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"
                })
            }))
        },
        [mc.CC_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 24 24",
                "data-cc-filled-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"
                })
            }))
        },
        [mc.CHECKMARK]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",
                    fill: "white"
                })
            }))
        },
        [mc.STEREOSCOPIC]: () => De("svg", {
            viewBox: "0 0 64 64",
            children: De("path", {
                d: "M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"
            })
        }),
        [mc.PERSON_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fill: "white",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"
                })
            }))
        },
        [mc.CHEVRON_DOWN]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    d: "M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.CHEVRON_RIGHT]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    d: "M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.CLOCK]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"
                })
            }))
        },
        [mc.CLOCK_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"
                })
            }))
        },
        [mc.COLLECTIONS]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.DISMISS_X]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#1A2E3B",
                    fillRule: "evenodd"
                })
            }))
        },
        [mc.HEART]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.HEART_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.ONDEMAND]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.PAPER_PLANE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 18.1 20.95"
            }, t), {}, {
                children: De("path", {
                    d: "M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.POP_OUT]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: [De("path", {
                    d: "M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",
                    fill: "#1a2e3b"
                }), De("path", {
                    d: "M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",
                    fill: "#1a2e3b"
                })]
            }))
        },
        [mc.VOLUME_OFF_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"
                })
            }))
        },
        [mc.VOLUME_ON_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"
                })
            }))
        },
        [mc.FAST_FORWARD]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"
                })
            }))
        },
        [mc.INFO_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 4.66667C6.36819 4.66667 6.66667 4.36819 6.66667 4C6.66667 3.63181 6.36819 3.33333 6 3.33333C5.63181 3.33333 5.33333 3.63181 5.33333 4C5.33333 4.36819 5.63181 4.66667 6 4.66667ZM6 5.33333C6.36819 5.33333 6.66667 5.54653 6.66667 5.80952V8.19048C6.66667 8.45347 6.36819 8.66667 6 8.66667C5.63181 8.66667 5.33333 8.45347 5.33333 8.19048V5.80952C5.33333 5.54653 5.63181 5.33333 6 5.33333Z",
                    fill: "white"
                })
            }))
        },
        [mc.TRANSCRIPT_ON]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 3C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C10.5711 17.3995 10.5711 13.6005 12.9142 11.2574C14.4297 9.74185 16.5543 9.20655 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5ZM18.5 11.7313C17.0907 11.2301 15.4565 11.5435 14.3284 12.6716C14.1332 12.8668 13.9623 13.0773 13.8159 13.2991C12.7907 14.8517 12.9616 16.9616 14.3284 18.3284C15.4515 19.4515 17.0762 19.7671 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313ZM7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H7.5ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.5C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16Z"
                })
            }))
        },
        [mc.TRANSCRIPT_OFF]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 5H16.5V9.53585C17.1669 9.46283 17.8436 9.50136 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C12.6802 19.5086 12.4696 19.2601 12.2823 19H4.5V5ZM15.2182 19C16.2222 19.5567 17.415 19.6485 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313C17.857 11.5026 17.1672 11.4435 16.5 11.554C15.7048 11.6857 14.9418 12.0582 14.3284 12.6716C12.7663 14.2337 12.7663 16.7663 14.3284 18.3284C14.5992 18.5992 14.8992 18.8231 15.2182 19ZM6.5 8C6.5 7.44772 6.94772 7 7.5 7H12.5C13.0523 7 13.5 7.44772 13.5 8C13.5 8.55228 13.0523 9 12.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H10.5C11.0523 11 11.5 11.4477 11.5 12C11.5 12.5523 11.0523 13 10.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12ZM7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17H8.5C9.05228 17 9.5 16.5523 9.5 16C9.5 15.4477 9.05228 15 8.5 15H7.5Z"
                })
            }))
        },
        [mc.SEARCH]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    className: Mn.FILL,
                    d: "M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5725 18 14.0238 17.4815 15.1925 16.6062L18.298 19.7076C18.6888 20.0978 19.3219 20.0974 19.7122 19.7066C20.1025 19.3159 20.1021 18.6827 19.7113 18.2924L16.6066 15.1919C17.4817 14.0233 18 12.5722 18 11C18 7.13401 14.866 4 11 4ZM6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11Z"
                })
            }))
        },
        [mc.CHEVRON_UP]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    d: "M12 11.3454L16.331 15.2433L17.6689 13.7567L12.6689 9.25671C12.2886 8.91443 11.7113 8.91443 11.331 9.25671L6.33102 13.7567L7.66895 15.2433L12 11.3454Z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [mc.CLOSE_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7071 9.26251C14.3571 8.9125 13.7896 8.9125 13.4396 9.26251L12 10.7023L10.5604 9.26252C10.2104 8.9125 9.64292 8.9125 9.29293 9.26252L9.26302 9.29244C8.91306 9.64243 8.91306 10.2099 9.26302 10.5599L10.7027 11.9997L9.26247 13.4401C8.91251 13.7901 8.91251 14.3576 9.26247 14.7076L9.29239 14.7375C9.64237 15.0875 10.2098 15.0875 10.5598 14.7375L12 13.2971L13.4402 14.7375C13.7902 15.0875 14.3576 15.0875 14.7076 14.7375L14.7375 14.7076C15.0875 14.3576 15.0875 13.7901 14.7375 13.4401L13.2973 11.9997L14.737 10.5599C15.0869 10.2099 15.0869 9.64243 14.737 9.29244L14.7071 9.26251Z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [mc.SPINNER]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-spinner": !0
            }, t), {}, {
                children: [De("circle", {
                    "data-spinner-trace": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                }), De("circle", {
                    "data-spinner-circle": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                })]
            }))
        },
        [mc.SLIDERS]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM19.8293 5C19.4175 3.83481 18.3062 3 17 3C15.6938 3 14.5825 3.83481 14.1707 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H14.1707C14.5825 8.16519 15.6938 9 17 9C18.3062 9 19.4175 8.16519 19.8293 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.8293ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.17071C4.58254 14.1652 5.69378 15 7 15C8.30622 15 9.41746 14.1652 9.82929 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H9.82929C9.41746 9.83481 8.30622 9 7 9C5.69378 9 4.58254 9.83481 4.17071 11H3ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H14.1707C14.5825 20.1652 15.6938 21 17 21C18.3062 21 19.4175 20.1652 19.8293 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19.8293C19.4175 15.8348 18.3062 15 17 15C15.6938 15 14.5825 15.8348 14.1707 17H3ZM18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z"
                })
            }))
        },
        [mc.SWITCH_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",
                    fill: "white"
                })
            }))
        },
        [mc.SWITCH_CONTAINER]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "32",
                height: "16",
                viewBox: "0 0 32 16",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: De("rect", {
                    width: "32",
                    height: "16",
                    rx: "8",
                    fill: "#2F8363"
                })
            }))
        },
        [mc.WARN_CIRCLE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
                    fill: "white"
                })
            }))
        },
        [mc.THUMBS_UP]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C8.99855 21.3765 8.87772 21.3243 8.76692 21.2737C8.25906 21.7332 7.59078 22 6.88197 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89643 2.89367 9 3.99924 9H7.90182C8.9732 8.60827 9.61763 8.20384 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM13.4759 5.05072L13.4741 5.05871C13.4693 5.07933 13.4638 5.09979 13.4577 5.12006C12.9658 6.75821 12.4366 7.99485 11.6235 8.93936C10.9182 9.75858 10.0581 10.2914 9 10.7202V19.2174C9.08899 19.2196 9.17122 19.2384 9.24448 19.2784C9.38703 19.3561 9.60104 19.4634 9.87139 19.5715C10.4167 19.7897 11.163 20 12 20H17.8014C17.8514 19.9621 17.9179 19.9067 17.9987 19.8304C18.2399 19.6027 18.5483 19.2459 18.8517 18.777C19.4594 17.8379 20 16.5239 20 15V12C20 11.6482 19.9099 11.3969 19.7942 11.2538C19.707 11.1461 19.5294 11 19.0738 11H16.0654C16.0365 11.0006 15.9909 11.0009 15.9325 10.999C15.8501 10.9964 15.7377 10.9891 15.6076 10.971C15.3617 10.9367 14.9841 10.8544 14.6237 10.6345C14.2372 10.3985 13.8666 9.99723 13.7424 9.38864C13.6261 8.81811 13.7562 8.20634 14.0421 7.57802C14.4491 6.68359 14.568 5.82532 14.5835 5.18521C14.5913 4.86647 14.5732 4.60676 14.5541 4.43084C14.55 4.39233 14.5458 4.35787 14.5418 4.32773C14.5154 4.29227 14.4815 4.25162 14.4407 4.21169C14.323 4.09673 14.1856 4.01926 14 4.01926C13.8867 4.01926 13.8489 4.04221 13.8443 4.04499C13.8371 4.04925 13.8089 4.06724 13.7659 4.13728C13.7194 4.21297 13.6697 4.32623 13.6182 4.49311C13.5668 4.65929 13.5255 4.83727 13.4759 5.05072ZM7 19.9889V11H4V20H6.88197C6.91933 20 6.95876 19.9961 7 19.9889Z",
                    fill: "white"
                })
            }))
        },
        [mc.THUMBS_DOWN]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38005 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926L12 2.01926C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C15.0015 2.64281 15.1223 2.69495 15.2331 2.74553C15.7409 2.28605 16.4092 2.01926 17.118 2.01926H20C21.1046 2.01926 22 2.91469 22 4.01926L22 13.0193C22 14.1228 21.1063 15.0193 20.0008 15.0193H16.0982C15.0268 15.411 14.3824 15.8154 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM10.5241 18.9685L10.5259 18.9606C10.5307 18.9399 10.5362 18.9195 10.5423 18.8992C11.0342 17.2611 11.5634 16.0244 12.3765 15.0799C13.0818 14.2607 13.9419 13.7279 15 13.2991L15 4.80189C14.911 4.79964 14.8288 4.78086 14.7555 4.7409C14.613 4.66315 14.399 4.55587 14.1286 4.44773C13.5833 4.2296 12.837 4.01926 12 4.01926L6.1986 4.01926C6.14859 4.05717 6.08207 4.11258 6.00131 4.18882C5.76012 4.41652 5.4517 4.77339 5.14827 5.24229C4.54059 6.18137 4 7.49534 4 9.01926V12.0193C4 12.371 4.09013 12.6224 4.20582 12.7654C4.29297 12.8732 4.47062 13.0193 4.9262 13.0193H7.93463C7.96345 13.0186 8.00911 13.0183 8.06745 13.0202C8.14991 13.0229 8.26226 13.0301 8.39236 13.0483C8.63827 13.0825 9.01586 13.1648 9.37627 13.3848C9.76282 13.6207 10.1334 14.022 10.2576 14.6306C10.3739 15.2012 10.2438 15.8129 9.95791 16.4412C9.55092 17.3357 9.43197 18.1939 9.41645 18.834C9.40873 19.1528 9.4268 19.4125 9.44585 19.5884C9.45002 19.6269 9.45424 19.6614 9.45823 19.6915C9.48457 19.727 9.5185 19.7676 9.55935 19.8076C9.67696 19.9225 9.81438 20 10 20C10.1133 20 10.1511 19.9771 10.1557 19.9743C10.1629 19.97 10.1911 19.952 10.2341 19.882C10.2806 19.8063 10.3303 19.693 10.3818 19.5262C10.4332 19.36 10.4745 19.182 10.5241 18.9685ZM17 4.03039V13.0193H20L20 4.01926H17.118C17.0807 4.01926 17.0412 4.02315 17 4.03039Z",
                    fill: "white"
                })
            }))
        },
        [mc.THUMBS_UP_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C9.08468 21.4109 9.0418 21.3933 9 21.3758V8.51408C9.46407 8.25834 9.8137 7.9761 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM7 9H3.99924C2.89367 9 2 9.89643 2 11V20C2 21.1046 2.89543 22 4 22H6.88197C6.92144 22 6.96079 21.9992 7 21.9975V9Z",
                    fill: "white"
                })
            }))
        },
        [mc.THUMBS_DOWN_FILLED]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38006 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926H12C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C14.9153 2.60835 14.9582 2.62594 15 2.64348V15.5052C14.5359 15.7609 14.1863 16.0432 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM17 15.0193H20.0008C21.1063 15.0193 22 14.1228 22 13.0193V4.01926C22 2.91469 21.1046 2.01926 20 2.01926H17.118C17.0786 2.01926 17.0392 2.02008 17 2.02173V15.0193Z",
                    fill: "white"
                })
            }))
        },
        [mc.LINK]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    className: Mn.FILL,
                    d: "M11.2929 8.46447C10.9024 8.07395 10.9024 7.44078 11.2929 7.05026L13.4142 4.92894C14.9763 3.36684 17.509 3.36684 19.0711 4.92894C20.6332 6.49103 20.6332 9.02369 19.0711 10.5858L16.9498 12.7071C16.5593 13.0976 15.9261 13.0976 15.5356 12.7071C15.145 12.3166 15.145 11.6834 15.5356 11.2929L17.6569 9.17158C18.4379 8.39053 18.4379 7.1242 17.6569 6.34315C16.8758 5.5621 15.6095 5.5621 14.8285 6.34315L12.7071 8.46447C12.3166 8.85499 11.6834 8.85499 11.2929 8.46447ZM8.46443 11.2929C8.07391 10.9024 7.44074 10.9024 7.05022 11.2929L4.9289 13.4142C3.3668 14.9763 3.3668 17.509 4.9289 19.0711C6.49099 20.6332 9.02365 20.6332 10.5858 19.0711L12.7071 16.9497C13.0976 16.5592 13.0976 15.9261 12.7071 15.5355C12.3165 15.145 11.6834 15.145 11.2929 15.5355L9.17154 17.6569C8.39049 18.4379 7.12416 18.4379 6.34311 17.6569C5.56206 16.8758 5.56206 15.6095 6.34311 14.8284L8.46443 12.7071C8.85495 12.3166 8.85495 11.6834 8.46443 11.2929ZM9.87874 12.7071C9.48821 13.0976 9.48821 13.7308 9.87874 14.1213C10.2693 14.5118 10.9024 14.5118 11.293 14.1213L14.1214 11.2929C14.5119 10.9024 14.5119 10.2692 14.1214 9.87868C13.7309 9.48816 13.0977 9.48816 12.7072 9.87868L9.87874 12.7071Z"
                })
            }))
        },
        [mc.SPARKLE_TWO_STARS_FILLED]: e => {
            let {
                fill: t
            } = e, n = m(e, ["fill"]);
            const i = {};
            return t && (i.fill = t), De("svg", E(E({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none"
            }, n), {}, {
                children: [De("path", {
                    style: i,
                    "data-shape": "smallStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 20.861 4.11 L 21.903 4.472 L 21.899 4.474 C 22.105 4.546 22.214 4.771 22.144 4.978 C 22.105 5.095 22.013 5.186 21.896 5.224 L 20.859 5.585 C 20.401 5.745 20.047 6.099 19.887 6.557 L 19.526 7.599 C 19.452 7.806 19.225 7.914 19.018 7.842 C 18.901 7.802 18.811 7.709 18.774 7.592 L 18.414 6.555 C 18.257 6.099 17.899 5.741 17.443 5.583 L 16.4 5.222 C 16.112 5.121 16.041 4.746 16.272 4.546 C 16.314 4.511 16.362 4.484 16.414 4.468 L 17.445 4.11 C 17.902 3.951 18.255 3.597 18.415 3.139 L 18.779 2.097 C 18.877 1.809 19.25 1.736 19.45 1.965 C 19.486 2.005 19.513 2.053 19.529 2.104 L 19.889 3.139 C 20.048 3.597 20.402 3.951 20.86 4.11 L 20.861 4.11 Z"
                }), De("path", {
                    style: i,
                    "data-shape": "largeStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 15.732 10.906 L 18.352 11.817 L 18.354 11.815 C 18.734 11.949 18.935 12.364 18.804 12.745 C 18.73 12.96 18.56 13.127 18.344 13.197 L 15.732 14.107 C 14.507 14.528 13.545 15.49 13.122 16.714 L 12.212 19.336 C 12.077 19.712 11.669 19.912 11.289 19.789 C 11.069 19.718 10.897 19.545 10.828 19.324 L 9.922 16.716 C 9.499 15.492 8.538 14.531 7.314 14.108 L 4.697 13.2 C 4.165 13.02 4.027 12.331 4.449 11.96 C 4.521 11.897 4.606 11.848 4.697 11.817 L 7.314 10.907 C 8.538 10.485 9.5 9.524 9.922 8.3 L 10.832 5.677 C 10.894 5.495 11.026 5.346 11.198 5.262 C 11.594 5.068 12.069 5.265 12.213 5.681 L 13.123 8.3 C 13.545 9.524 14.508 10.486 15.732 10.907 L 15.732 10.906 Z"
                })]
            }))
        },
        [mc.WARN_TRIANGLE]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "36",
                height: "32.326",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "287.915 380.297 36 32.326"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "white",
                    d: "M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"
                })
            }))
        },
        [mc.VERTICAL_ELLIPSIS]: e => {
            let t = Object.assign({}, e);
            return De("svg", E(E({
                width: "4",
                height: "19",
                viewBox: "0 0 4 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    d: "M2 4.5C2.39556 4.5 2.78224 4.3827 3.11114 4.16294C3.44004 3.94318 3.69639 3.63082 3.84776 3.26537C3.99914 2.89992 4.03874 2.49778 3.96157 2.10982C3.8844 1.72186 3.69392 1.36549 3.41421 1.08579C3.13451 0.806082 2.77814 0.615601 2.39018 0.53843C2.00222 0.46126 1.60009 0.500867 1.23463 0.652242C0.869182 0.803617 0.556825 1.05996 0.337062 1.38886C0.117299 1.71776 1.07779e-06 2.10444 1.07779e-06 2.5C1.07779e-06 3.03043 0.210715 3.53914 0.585788 3.91421C0.960861 4.28929 1.46957 4.5 2 4.5ZM2 14.5C1.60444 14.5 1.21776 14.6173 0.888861 14.8371C0.559963 15.0568 0.303617 15.3692 0.152242 15.7346C0.000866562 16.1001 -0.0387401 16.5022 0.0384303 16.8902C0.115601 17.2781 0.306083 17.6345 0.585788 17.9142C0.865493 18.1939 1.22186 18.3844 1.60982 18.4616C1.99778 18.5387 2.39992 18.4991 2.76537 18.3478C3.13082 18.1964 3.44318 17.94 3.66294 17.6111C3.8827 17.2822 4 16.8956 4 16.5C4 15.9696 3.78929 15.4609 3.41421 15.0858C3.03914 14.7107 2.53043 14.5 2 14.5ZM2 7.5C1.60444 7.5 1.21776 7.6173 0.888861 7.83706C0.559963 8.05682 0.303617 8.36918 0.152242 8.73463C0.000866562 9.10009 -0.0387401 9.50222 0.0384303 9.89018C0.115601 10.2781 0.306083 10.6345 0.585788 10.9142C0.865493 11.1939 1.22186 11.3844 1.60982 11.4616C1.99778 11.5387 2.39992 11.4991 2.76537 11.3478C3.13082 11.1964 3.44318 10.94 3.66294 10.6111C3.8827 10.2822 4 9.89556 4 9.5C4 8.96957 3.78929 8.46086 3.41421 8.08579C3.03914 7.71071 2.53043 7.5 2 7.5Z"
                })
            }))
        }
    },
    vd = e => {
        let {
            name: t,
            className: n
        } = e, i = m(e, ["name", "className"]);
        const o = _d[t];
        return o && De(o, E({
            className: n
        }, i))
    };
const md = Ue(({
        isMenuDisplayed: e,
        isMenuBlockingUI: t,
        setMenuDisplayed: n = li,
        panel: i,
        buttonRef: o,
        progressBarAndButtonsRef: r,
        panelContent: a,
        headerContent: s,
        toggleKey: l,
        className: c,
        id: d,
        type: u,
        resizeDependencies: p,
        ariaLabel: _
    }, v) => {
        const m = Oe(null);
        v = v || m;
        const f = Oe(null),
            h = Oe(null),
            g = Oe(null),
            b = Oe(null),
            [y, C] = Pe({
                height: "auto"
            }),
            [T, L] = Pe({}),
            [w, A] = Pe(!1),
            [S, I] = Pe(!1),
            O = ad(e => e.appearance.isMenuBlockingUI);
        t = void 0 === t ? O : t;
        const k = ad(e => e.appearance.isMenuVerticalVideoMode),
            R = ad(e => e.appearance.boundingClientRect),
            N = ad(e => e.appearance.playerBreakpoint),
            D = ad(e => e.displayList.controlBar),
            {
                isAccordionToggling: M
            } = Fe(fd),
            {
                onFocus: x,
                focusFirstItem: B
            } = pc({
                parentRef: v,
                isActive: e,
                toggleKey: l,
                arrowNavigation: !0,
                onEscape: () => {
                    n(!1)
                },
                onToggle: e => {
                    n(e)
                }
            });
        Ie(() => {
            e && B()
        }, [i]);
        const V = e => {
                const t = window.getComputedStyle(e);
                return parseFloat(t.fontSize)
            },
            U = () => {
                A(!1), cancelAnimationFrame(null == b ? void 0 : b.current)
            },
            F = () => {
                var n;
                if (!((null == (n = v) ? void 0 : n.current) && e)) return;
                if (t) return I(!1), void C(e => E(E({}, e), {}, {
                    height: "100%"
                }));
                let i = "auto";
                const o = ht(v.current),
                    r = V(v.current),
                    a = o.bottom - v.current.scrollHeight,
                    s = Math.max(R.top, 0) - a;
                if (s > 0) {
                    let e = v.current.scrollHeight - s - r;
                    i = `${e/r}em`
                }
                C(e => E(E({}, e), {}, {
                    height: i
                })), I(s > 0)
            },
            H = () => {
                if (!(null == h ? void 0 : h.current)) return;
                if (t) return void L({});
                if (!e) return void L({
                    height: "0"
                });
                const n = V(h.current),
                    i = `${(h.current.scrollHeight+16)/n}em`;
                L({
                    height: i
                })
            },
            G = () => {
                F(), w && (b.current = requestAnimationFrame(G))
            },
            W = () => {
                U(), H(), F()
            },
            Y = P(i => {
                var r;
                (null == (r = v) ? void 0 : r.current) && (null == o ? void 0 : o.current) && e && (o.current.contains(i.target) || v.current.contains(i.target) || !document.contains(i.target) || t || n(!1))
            }, 200),
            q = P(() => {
                t || n(!1)
            }, 200);
        Ie(() => (document.addEventListener("click", Y, !1), window.addEventListener("blur", q, !1), () => {
            document.removeEventListener("click", Y, !1), window.removeEventListener("blur", q, !1)
        }), [v, o, e]), Ie(() => ((() => {
            var n;
            const i = (null == (n = v) ? void 0 : n.current) && (null == o ? void 0 : o.current) && (null == r ? void 0 : r.current) && e,
                a = k && N === Qo.XXS && (null == R ? void 0 : R.width);
            if (!i) return;
            if (t) return void C(e => E(E({}, e), {}, {
                right: ""
            }));
            if (a) {
                const e = `${R.width-16}px`;
                return void C(t => E(E({}, t), {}, {
                    width: e,
                    right: "0"
                }))
            }
            const s = ht(o.current),
                l = ht(r.current),
                c = ht(v.current);
            let d = -8;
            const u = s.right - s.width / 2 + c.width / 2 + 8;
            u < l.right && (d = l.right - u);
            const p = V(v.current);
            C(e => E(E({}, e), {}, {
                right: `${d/p}em`
            }))
        })(), !e || t ? W() : (H(), A(!0), G()), () => {
            U()
        }), [e, i, null == R ? void 0 : R.width, t, N, p]), Ie(() => {
            D || n(!1)
        }, [D]), Ie(() => {
            (null == f ? void 0 : f.current) && (M ? t ? F() : (L(e => E(E({}, e), {}, {
                height: "auto"
            })), A(!0), G()) : t ? (A(!1), W()) : (H(), G()))
        }, [M]);
        const $ = Cn(Mn.VP_MENU, "Menu_module_menu__7b718548", c, S && "Menu_module_scroll__7b718548", t && "Menu_module_fullWidth__7b718548", k && "Menu_module_verticalVideo__7b718548");
        return De(dd, {
            visible: e,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: De("div", E(E({
                id: d,
                className: $,
                ref: v,
                style: y,
                onTransitionEnd: e => {
                    e.target === (null == f ? void 0 : f.current) && "height" === e.propertyName && (F(), U())
                },
                onFocus: x,
                "data-menu": u || !0
            }, {
                ariaLabel: _,
                role: t ? "dialog" : "menu",
                ariaModal: !!t || void 0,
                hidden: !e || void 0
            }), {}, {
                children: [s && De("div", {
                    ref: g,
                    children: s
                }), De("div", {
                    ref: f,
                    className: "Menu_module_menuBody__7b718548",
                    style: T,
                    children: De("div", {
                        className: "Menu_module_menuPanel__7b718548",
                        ref: h,
                        children: a
                    })
                })]
            }))
        })
    }),
    fd = He({
        isAccordionToggling: !1,
        activeAccordion: "",
        setAccordionToggling: () => {},
        setActiveAccordion: () => {}
    }),
    hd = ({
        children: e
    }) => {
        const [t, n] = Pe(!1), [i, o] = Pe(""), r = {
            isAccordionToggling: t,
            activeAccordion: i,
            setAccordionToggling: n,
            setActiveAccordion: o
        };
        return De(fd.Provider, {
            value: r,
            children: e
        })
    };
const gd = ({
    buffer: e = !1
}) => De("div", {
    className: `Divider_module_divider__700c72a0 ${e?"Divider_module_buffer__700c72a0":""}`
});
const bd = ({
    onBack: e = null,
    title: t,
    isMenuBlockingUI: n,
    setMenuDisplayed: i = li,
    hasCloseButton: o = !0,
    onClose: r = (() => i(!1)),
    size: a = or.MD
}) => {
    var s;
    const l = ad(e => e.appearance.isMenuBlockingUI);
    n = null !== (s = n) && void 0 !== s ? s : l;
    const c = Cn("MenuHeader_module_menuHeader__71ceb64e", n && "MenuHeader_module_fullWidth__71ceb64e", e && "MenuHeader_module_hasBack__71ceb64e", !o && "MenuHeader_module_hideCloseButton__71ceb64e");
    return De("div", {
        className: c,
        children: [De("header", {
            className: "MenuHeader_module_header__71ceb64e",
            children: [De("div", {
                className: "MenuHeader_module_backButtonWrapper__71ceb64e",
                children: De(Yd, {
                    className: "MenuHeader_module_backButton__71ceb64e",
                    onClick: e,
                    "aria-label": "Back",
                    color: tr.ALTERNATIVE,
                    icon: De(vd, {
                        name: mc.CHEVRON_RIGHT
                    }),
                    iconSize: er.MD
                })
            }), De(Vd, {
                size: a,
                className: "MenuHeader_module_title__71ceb64e",
                color: ar.WHITE,
                element: "h1",
                children: t
            }), De("div", {
                className: "MenuHeader_module_closeButtonWrapper__71ceb64e",
                children: De(Yd, {
                    className: "MenuHeader_module_closeButton__71ceb64e",
                    "aria-label": "Close menu",
                    onClick: r,
                    color: tr.ALTERNATIVE,
                    icon: De(vd, {
                        name: mc.DISMISS_X
                    }),
                    iconSize: er.MD
                })
            })]
        }), De(gd, {})]
    })
};
const Ed = e => {
    let {
        className: t,
        id: n,
        active: i,
        withActive: o = !0,
        onSelect: r,
        onMouseEnter: a,
        onMouseLeave: s,
        element: l = "div",
        styled: c = !0,
        children: d,
        role: u = "menuitemradio"
    } = e, p = m(e, ["className", "id", "active", "withActive", "onSelect", "onMouseEnter", "onMouseLeave", "element", "styled", "children", "role"]);
    const {
        onClick: _,
        onKeyDown: v
    } = Kl(r), f = Cn("MenuOption_module_option__eac51652", o && "MenuOption_module_withActive__eac51652", c && "MenuOption_module_styled__eac51652", t), h = E({
        className: f,
        role: u,
        "aria-checked": i,
        "data-id": n,
        tabIndex: 0,
        onClick: _,
        onKeyDown: v,
        onMouseDown: e => e.preventDefault(),
        onMouseEnter: a,
        onMouseLeave: s
    }, p);
    return Ve(l, h, d)
};
const yd = ({
    className: e,
    onSelect: t,
    label: n,
    value: i,
    id: o,
    isAccordion: r = !1,
    isOpened: a = !1,
    size: s = Zl.MEDIUM,
    role: l = "menuitem"
}) => {
    let c, d = or.MD;
    return s === Zl.LARGE ? (d = or.LG, c = or.MD) : r && (d = or.SM), De(Ed, E(E({
        className: Cn("MenuItem_module_optionButton__f68cfbfd", s === Zl.SMALL && "MenuItem_module_small__f68cfbfd", e),
        onSelect: t,
        id: o,
        withActive: !1,
        role: l,
        "aria-haspopup": "true"
    }, r && a ? {
        "aria-expanded": !0
    } : {}), {}, {
        children: [De(Vd, {
            size: d,
            weight: r ? rr.BOLD : rr.NORMAL,
            className: "MenuItem_module_label__f68cfbfd",
            color: ar.WHITE,
            children: n
        }), i && De(Vd, {
            weight: rr.NORMAL,
            size: c,
            className: "MenuItem_module_value__f68cfbfd",
            color: ar.WHITE,
            children: i
        }), De("div", {
            className: Cn("MenuItem_module_icon__f68cfbfd", a && "MenuItem_module_open__f68cfbfd"),
            children: De(vd, {
                name: r ? mc.CHEVRON_DOWN : mc.CHEVRON_RIGHT
            })
        })]
    }))
};
const Cd = or.MD,
    Td = or.SM,
    Ld = ({
        onSelect: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i,
        active: o,
        id: r,
        ordered: a = !1,
        index: s,
        isAccordion: l = !1,
        tabIndex: c,
        icon: d = null
    }) => {
        const u = Cn("MenuOptionListItem_module_listItem__55548cc5", a && "MenuOptionListItem_module_ordered__55548cc5", o && "MenuOptionListItem_module_active__55548cc5", l && "MenuOptionListItem_module_accordion__55548cc5");
        return De(Ed, {
            element: "li",
            className: u,
            onSelect: e,
            onMouseEnter: t,
            onMouseLeave: n,
            active: o,
            id: r,
            tabIndex: c,
            children: [d && De("div", {
                className: "MenuOptionListItem_module_icon__55548cc5",
                children: De(vd, {
                    name: d
                })
            }), a && !d && De("div", {
                className: "MenuOptionListItem_module_number__55548cc5",
                children: s
            }), !a && !d && De("div", {
                className: `MenuOptionListItem_module_check__55548cc5 ${o?"MenuOptionListItem_module_activeCheck__55548cc5":""}`,
                children: De(vd, {
                    name: mc.CHECKMARK
                })
            }), De(Vd, {
                className: "MenuOptionListItem_module_text__55548cc5",
                weight: rr.NORMAL,
                size: l ? Td : Cd,
                color: ar.WHITE,
                children: i
            }), a && o && De("div", {
                className: "MenuOptionListItem_module_point__55548cc5",
                children: De(vd, {
                    name: mc.POINT
                })
            })]
        })
    };
const wd = ({
    items: e,
    onSelect: t,
    onMenuOptionMouseEnter: n,
    onMenuOptionMouseLeave: i,
    ordered: o = !1,
    isAccordion: r = !1,
    listItemTabIndex: a = 0,
    itemComponent: s
}) => {
    const l = o ? "ol" : "ul",
        c = {
            className: "MenuOptionList_module_list__087838b4",
            role: "group"
        },
        d = e.map(e => {
            const l = {
                key: e.id,
                id: e.id,
                active: e.active,
                label: e.label,
                onSelect: t,
                onMouseEnter: n,
                onMouseLeave: i,
                ordered: o,
                isAccordion: r,
                tabIndex: a,
                icon: e.icon
            };
            return s ? s(E(E({}, l), e)) : De(Ld, E({}, l))
        });
    return Ve(l, c, d)
};
const Ad = ({
    label: e,
    items: t = [],
    onSelect: n
}) => {
    var i;
    const o = Oe(null),
        r = Oe(null),
        {
            setAccordionToggling: a,
            activeAccordion: s,
            setActiveAccordion: l
        } = Fe(fd),
        [c, d] = Pe(!1),
        [u, p] = Pe({}),
        _ = null == (i = t.find(e => e.active)) ? void 0 : i.label,
        v = t => {
            const n = void 0 !== t ? t : !c;
            d(n), a(!0), n && l(e)
        },
        m = e => {
            e.target === r.current && "height" === e.propertyName && a(!1)
        },
        f = e => {
            (null == o ? void 0 : o.current) && !o.current.contains(e.target) && o.current !== e.target && v(!1)
        };
    return Ie(() => (document.addEventListener("click", f), document.addEventListener("transitionend", m), () => {
        l(""), document.removeEventListener("click", f), document.removeEventListener("transitionend", m)
    }), []), Ie(() => {
        p((() => {
            let e = {};
            if (c && (null == r ? void 0 : r.current)) {
                const t = window.getComputedStyle(r.current),
                    n = parseFloat(t.fontSize);
                e = {
                    height: `${r.current.scrollHeight/n}em`
                }
            }
            return e
        })())
    }, [c, r]), Ie(() => {
        s && s !== e && v(!1)
    }, [s]), t.length && De("div", {
        className: "Accordion_module_accordion__6525797b",
        role: "menu",
        ref: o,
        children: [De(yd, {
            label: e,
            value: _,
            onSelect: () => v(),
            isAccordion: !0,
            isOpened: c,
            role: "button"
        }), De("div", {
            className: "Accordion_module_content__6525797b",
            "aria-hidden": !c,
            ref: r,
            style: u,
            children: De(wd, {
                items: t,
                onSelect: n,
                isAccordion: !0,
                listItemTabIndex: c ? 0 : -1
            })
        })]
    })
};
const Sd = ({
        label: e,
        className: t = ""
    }) => De("div", {
        className: `MenuFieldLabel_module_menuField__7a3a0ef4 ${t}`,
        children: De(Vd, {
            className: "MenuFieldLabel_module_label__7a3a0ef4",
            color: ar.WHITE,
            children: e
        })
    }),
    Id = ({
        items: e = [],
        label: t,
        onSelect: n
    }) => {
        const i = ad(e => e.appearance.shouldMenuItemsWrap);
        return De(Ge, {
            children: [De(Sd, {
                label: t
            }), De("ul", {
                className: `ButtonRow_module_buttonRow__488664e1 ${i?"ButtonRow_module_wrap__488664e1":""}`,
                role: "menu",
                "aria-label": t,
                children: e.map(e => De(Ed, {
                    element: "li",
                    className: `ButtonRow_module_filledButton__488664e1 ${e.active?"ButtonRow_module_active__488664e1":""}`,
                    active: e.active,
                    id: e.id,
                    onSelect: n,
                    styled: !1,
                    children: De(Vd, {
                        className: "ButtonRow_module_label__488664e1",
                        color: ar.WHITE,
                        children: e.label
                    })
                }, e.id))
            })]
        })
    };
const Pd = ({
    items: e = [],
    label: t,
    onSelect: n
}) => {
    const i = ad(e => e.appearance.shouldMenuItemsWrap);
    return De(Ge, {
        children: [De(Sd, {
            label: t
        }), De("ul", {
            className: `ColorSwabs_module_colorSwabs__63fe80c1 ${i?"ColorSwabs_module_wrap__63fe80c1":""}`,
            role: "menu",
            "aria-label": t,
            children: e.map(e => De(Ed, {
                id: e.id,
                element: "li",
                className: `ColorSwabs_module_colorSwab__63fe80c1 ${e.active?"ColorSwabs_module_active__63fe80c1":""}`,
                active: e.active,
                "aria-label": e.label,
                onSelect: n,
                styled: !1,
                children: De("div", {
                    className: "ColorSwabs_module_inner__63fe80c1",
                    style: {
                        backgroundColor: e.id
                    }
                })
            }, e.id))
        })]
    })
};
let Od;
! function(e) {
    e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right"
}(Od || (Od = {}));
const kd = {
        onPointerDown: e => e.preventDefault()
    },
    Rd = ({
        children: t,
        tooltipContent: n,
        className: i = "",
        containerEl: r,
        position: a,
        margin: s,
        visible: l = null,
        preventFocusOnClick: c = !1,
        id: d = null
    }) => {
        var u, p, _;
        const [v, m] = Pe(!1), f = () => m(!0), h = () => m(!1), g = null !== l, b = l || v, y = Nd("onPointerEnter", t, e => {
            "mouse" === e.pointerType && f()
        }), C = Nd("onPointerLeave", t, h), T = Nd("onFocus", t, f), L = Nd("onBlur", t, h);
        nc("Escape", h);
        let w = null == t ? void 0 : t.ref;
        const A = Oe(null);
        w = w || A;
        const S = Oe(null),
            I = Cn("Tooltip_module_tooltipContainer__56441453", null == t || null == (u = t.props) ? void 0 : u.className, g && l && "Tooltip_module_forceVisible__56441453"),
            P = E(E({}, null == t ? void 0 : t.props), {}, {
                className: I,
                ref: w,
                onPointerEnter: y,
                onPointerLeave: C,
                onFocus: T,
                onBlur: L,
                "aria-labelledby": null != d ? d : null,
                "data-touch-device": o.touch.toString()
            });
        c && Object.assign(P, kd);
        const O = (({
                tooltipEl: e,
                wrappedEl: t,
                visible: n,
                containerEl: i,
                position: o = Od.TOP,
                margin: r = 0
            }) => {
                const [a, s] = Pe({
                    top: null,
                    bottom: null,
                    left: o === Od.LEFT ? "auto" : "50%",
                    right: o === Od.LEFT ? `calc(100% + ${r}px)` : "auto"
                }), l = ad(e => e.element);
                return s(a => {
                    const s = E(E(E({}, a), function() {
                        const i = {};
                        if (e && t && n) {
                            const {
                                left: n,
                                right: a
                            } = l.getBoundingClientRect(), {
                                left: s,
                                right: c,
                                width: d
                            } = t.getBoundingClientRect(), {
                                width: u
                            } = e.getBoundingClientRect();
                            if (o === Od.TOP || o === Od.BOTTOM) {
                                const e = (u - d) / 2,
                                    t = s - e,
                                    o = c + e,
                                    l = Math.max(n + r - t, 0),
                                    p = Math.max(o + r - a, 0);
                                Object.assign(i, {
                                    left: `calc(50% + ${l-p}px)`
                                })
                            }
                        }
                        return i
                    }()), function() {
                        const t = {};
                        if (e && i && n) {
                            const {
                                bottom: e
                            } = i.getBoundingClientRect(), {
                                top: n
                            } = l.getBoundingClientRect();
                            switch (o) {
                                case Od.BOTTOM:
                                    const i = e - n - r;
                                    isNaN(i) || Object.assign(t, {
                                        top: `${i}px`
                                    })
                            }
                        }
                        return t
                    }());
                    return Re(s, a) ? a : s
                }), a
            })({
                tooltipEl: null == S ? void 0 : S.current,
                wrappedEl: null == (p = w) ? void 0 : p.current,
                containerEl: null == r ? void 0 : r.current,
                position: a,
                margin: s,
                visible: g && l || v
            }),
            k = Cn("Tooltip_module_tooltip__56441453", Mn.VP_TOOLTIP, i, a === Od.LEFT && "Tooltip_module_tooltipLeft__56441453"),
            R = De(dd, {
                visible: b,
                children: De("span", {
                    id: d,
                    ref: S,
                    style: O,
                    className: k,
                    "aria-hidden": "true",
                    children: n
                })
            }),
            N = We(null == t || null == (_ = t.props) ? void 0 : _.children),
            D = [R].concat(e(N));
        return Ye(t, P, D)
    };

function Nd(e, t, n) {
    return i => {
        var o;
        (null == t || null == (o = t.props) ? void 0 : o[e]) && t.props[e](i), n(i)
    }
}
var Dd = {
    text: "Text_module_text__cf0dfff1",
    sm: "Text_module_sm__cf0dfff1",
    md: "Text_module_md__cf0dfff1",
    lg: "Text_module_lg__cf0dfff1",
    xl: "Text_module_xl__cf0dfff1",
    bpxxs_fontsm: "Text_module_bpxxs_fontsm__cf0dfff1",
    bpxxs_fontmd: "Text_module_bpxxs_fontmd__cf0dfff1",
    bpxxs_fontlg: "Text_module_bpxxs_fontlg__cf0dfff1",
    bpxxs_fontxl: "Text_module_bpxxs_fontxl__cf0dfff1",
    bpxs_fontsm: "Text_module_bpxs_fontsm__cf0dfff1",
    bpxs_fontmd: "Text_module_bpxs_fontmd__cf0dfff1",
    bpxs_fontlg: "Text_module_bpxs_fontlg__cf0dfff1",
    bpxs_fontxl: "Text_module_bpxs_fontxl__cf0dfff1",
    bpsm_fontsm: "Text_module_bpsm_fontsm__cf0dfff1",
    bpsm_fontmd: "Text_module_bpsm_fontmd__cf0dfff1",
    bpsm_fontlg: "Text_module_bpsm_fontlg__cf0dfff1",
    bpsm_fontxl: "Text_module_bpsm_fontxl__cf0dfff1",
    bpmd_fontsm: "Text_module_bpmd_fontsm__cf0dfff1",
    bpmd_fontmd: "Text_module_bpmd_fontmd__cf0dfff1",
    bpmd_fontlg: "Text_module_bpmd_fontlg__cf0dfff1",
    bpmd_fontxl: "Text_module_bpmd_fontxl__cf0dfff1",
    bplg_fontsm: "Text_module_bplg_fontsm__cf0dfff1",
    bplg_fontmd: "Text_module_bplg_fontmd__cf0dfff1",
    bplg_fontlg: "Text_module_bplg_fontlg__cf0dfff1",
    bplg_fontxl: "Text_module_bplg_fontxl__cf0dfff1",
    bpxl_fontsm: "Text_module_bpxl_fontsm__cf0dfff1",
    bpxl_fontmd: "Text_module_bpxl_fontmd__cf0dfff1",
    bpxl_fontlg: "Text_module_bpxl_fontlg__cf0dfff1",
    bpxl_fontxl: "Text_module_bpxl_fontxl__cf0dfff1",
    bpxxl_fontsm: "Text_module_bpxxl_fontsm__cf0dfff1",
    bpxxl_fontmd: "Text_module_bpxxl_fontmd__cf0dfff1",
    bpxxl_fontlg: "Text_module_bpxxl_fontlg__cf0dfff1",
    bpxxl_fontxl: "Text_module_bpxxl_fontxl__cf0dfff1",
    bold: "Text_module_bold__cf0dfff1",
    normal: "Text_module_normal__cf0dfff1",
    medium: "Text_module_medium__cf0dfff1",
    white: "Text_module_white__cf0dfff1"
};
const Md = {
        [or.SM]: "sm",
        [or.MD]: "md",
        [or.LG]: "lg",
        [or.XL]: "xl"
    },
    xd = {
        [rr.BOLD]: Dd.bold,
        [rr.NORMAL]: Dd.normal,
        [rr.NUM_500]: Dd.medium
    },
    Bd = {
        [ar.WHITE]: Dd.white
    },
    Vd = ({
        element: e = "span",
        children: t,
        size: n = or.SM,
        sizeMap: i,
        weight: o = rr.BOLD,
        color: r = ar.CUSTOM,
        className: a = "",
        id: s = "",
        ariaHidden: l = !1,
        role: c
    }) => {
        let d = [];
        i ? Object.keys(i).forEach(e => {
            const t = Md[i[e]];
            d.push(Dd[`bp${e}_font${t}`])
        }) : d.push(Dd[Md[n]]);
        const u = Cn.apply(void 0, [Dd.text].concat(d, [xd[o], Bd[r], a]));
        return Ve(e, {
            className: u,
            id: s,
            ariaHidden: l,
            role: c
        }, t)
    },
    Ud = e => De(pd, {
        className: e.classNames,
        href: e.url,
        tabIndex: e.url ? "0" : "-1",
        style: e.style,
        children: De("img", {
            className: e.imgClassNames,
            src: e.img,
            alt: e.imgAlt
        })
    });
var Fd = {
    roundedBox: "shared_module_roundedBox__ef1f97e9",
    hidden: "shared_module_hidden__ef1f97e9",
    focusable: "shared_module_focusable__ef1f97e9",
    focusableMarker: "shared_module_focusableMarker__ef1f97e9",
    focusableCircle: "shared_module_focusableCircle__ef1f97e9",
    focusableButton: "shared_module_focusableButton__ef1f97e9",
    visuallyHidden: "shared_module_visuallyHidden__ef1f97e9"
};
const Hd = {
        [tr.PRIMARY]: "Button_module_primary__a2d215de",
        [tr.ALTERNATIVE]: "Button_module_alternative__a2d215de"
    },
    Gd = {
        [er.MD]: "Button_module_md__a2d215de",
        [er.SM]: "Button_module_sm__a2d215de",
        [er.XS]: "Button_module_xs__a2d215de"
    },
    Wd = {
        [er.MD]: "Button_module_iconMd__a2d215de",
        [er.SM]: "Button_module_iconSm__a2d215de"
    },
    Yd = Ue((e, t) => {
        let {
            children: n,
            className: i,
            color: o = tr.CUSTOM,
            size: r = er.CUSTOM,
            focusable: a = !0,
            icon: s,
            iconPosition: l = nr.LEFT,
            iconSize: c = er.CUSTOM,
            type: d,
            style: u = {}
        } = e, p = m(e, ["children", "className", "color", "size", "focusable", "icon", "iconPosition", "iconSize", "type", "style"]);
        const _ = Cn("Button_module_button__a2d215de", a && Fd.focusable, Hd[o], Gd[r], s && "Button_module_icon__a2d215de", s && Wd[c], xn.EXCLUDE_GLOBAL_BUTTON_STYLES, i);
        return De("button", E(E({
            className: _,
            ref: t,
            type: d || ir.BUTTON,
            style: u
        }, p), {}, {
            children: [l === nr.LEFT && s, n && De("span", {
                className: "Button_module_buttonChildren__a2d215de",
                children: n
            }), l === nr.RIGHT && s]
        }))
    });
const qd = ["Shift", "Tab"],
    $d = !!o.iOS && "SearchInput_module_mobileSafari__300ae4ab",
    Kd = Ue(({
        onChange: e,
        onEnter: t,
        onSearchIterate: n,
        value: i,
        numSearchResults: o,
        ariaControls: r,
        disabled: a,
        placeholder: s,
        searchItemIterator: l
    }, c) => {
        var d;
        const u = {
                defaultPlaceholder: "Search",
                clearResults: "Clear Search Results",
                previousResult: "Previous search result",
                nextResult: "Next search result",
                noResults: "No results",
                numberResults: 1 === o ? o + " result" : o + " results"
            },
            [p, _] = Pe(!1),
            [v, m] = Pe(!1),
            f = Oe(null),
            h = i.length > 0,
            g = (e => {
                const [t, n] = Pe(!1);
                return nc("Shift", () => {
                    n(!0)
                }, () => {
                    n(!1)
                }), t
            })();
        let b = s;
        o && p && (b = u.numberResults), !o && i && p && (b = u.noResults);
        const [y, C] = Pe(u.nextResult), [T, L] = Pe(u.previousResult);
        s = null !== (d = s) && void 0 !== d ? d : u.defaultPlaceholder, Ie((function() {
            return clearTimeout(f.current), f.current = setTimeout(() => {
                _(!0)
            }, 1e3), () => clearTimeout(f.current)
        }), [i]);
        const w = () => {
                (null == c ? void 0 : c.current) && (null == c.current.focus || c.current.focus())
            },
            A = () => {
                e && e(""), t && t(""), w()
            },
            S = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = l < o - 1 ? l + 1 : 0, o && C("Result " + (t + 1) + " of " + o), n && n(t)
            },
            I = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = l > 0 ? l - 1 : o - 1, o && L("Result " + (t + 1) + " of " + o), n && n(t)
            },
            P = Cn("SearchInput_module_inputForm__300ae4ab", h && "SearchInput_module_active__300ae4ab"),
            O = Cn("SearchInput_module_searchButton__300ae4ab", Fd.focusableButton),
            k = 0 !== o && Number.isInteger(l) ? `${l+1}/${o}` : "0/0";
        return (De("form", {
            className: P,
            role: "search",
            "data-component-type": "SearchInput",
            "data-focused": `${v}`,
            "data-disabled": `${a}`,
            onReset: () => A(),
            onSubmit: e => {
                e.preventDefault(), t && t(i), g ? I() : S()
            },
            onClick: w,
            children: [!h && De("div", E(E({
                "data-icon": "search",
                className: "SearchInput_module_searchIcon__300ae4ab"
            }, mn(w)), {}, {
                children: De(vd, {
                    name: mc.SEARCH,
                    "aria-hidden": "true"
                })
            })), De("input", {
                "aria-live": "polite",
                type: "text",
                ref: c,
                className: $d,
                onFocus: () => m(!0),
                onBlur: () => m(!1),
                onKeyDown: e => {
                    qd.includes(e.key) || e.stopPropagation()
                },
                "aria-controls": r,
                onInput: t => {
                    t.preventDefault(), e && e(t.target.value), _(!1)
                },
                value: i,
                placeholder: s,
                "aria-describedby": "searchResultsStatus",
                disabled: a
            }), i && De("span", {
                id: "searchResultsStatus",
                "aria-live": "polite",
                className: Fd.visuallyHidden,
                children: b
            }), h && De(Ge, {
                children: [Number.isInteger(l) && De("div", {
                    "data-purpose": "search-item",
                    className: "SearchInput_module_searchItem__300ae4ab",
                    "aria-hidden": "true",
                    children: k
                }), De(Yd, E(E({
                    "aria-live": "polite"
                }, mn(I)), {}, {
                    "data-purpose": "decrement-search",
                    "aria-label": T,
                    icon: De(vd, {
                        name: mc.CHEVRON_UP
                    }),
                    iconSize: er.SM,
                    className: O,
                    disabled: a || !o,
                    onBlur: () => {
                        L(u.previousResult)
                    }
                })), De(Yd, E(E({
                    "aria-live": "polite"
                }, mn(S)), {}, {
                    "aria-label": y,
                    "data-purpose": "increment-search",
                    icon: De(vd, {
                        name: mc.CHEVRON_DOWN
                    }),
                    iconSize: er.SM,
                    className: O,
                    disabled: a || !o,
                    onBlur: () => {
                        C(u.nextResult)
                    }
                })), De(Yd, E(E({}, mn(A)), {}, {
                    "data-icon": "close",
                    "data-purpose": "close",
                    "aria-label": u.clearResults,
                    icon: De(vd, {
                        name: mc.CLOSE_CIRCLE,
                        "data-icon": "close"
                    }),
                    iconSize: er.SM,
                    type: ir.RESET,
                    className: O,
                    disabled: a
                }))]
            })]
        }))
    });
const jd = e => {
    let {
        className: t = "",
        size: n = sr.SM
    } = e, i = m(e, ["className", "size"]);
    const o = Cn(Mn.VP_SPIN, n === sr.LG && "Spinner_module_lg__372cc398", n === sr.SM && "Spinner_module_sm__372cc398", t);
    return De(vd, E({
        "data-component-type": "spinner",
        name: mc.SPINNER,
        className: `Spinner_module_spinner__372cc398 ${o}`
    }, i))
};
const zd = ({
    cues: e,
    language: t,
    direction: n,
    className: i,
    fontSize: o,
    fontFamily: a,
    fontOpacity: s,
    color: l,
    windowOpacity: c,
    windowColor: d,
    bgOpacity: u,
    bgColor: p,
    edgeStyle: _,
    height: v,
    style: m = {}
}) => {
    const f = Ma(),
        h = (e, t) => {
            const n = new r(Kc[e] || e);
            return n.alpha = t / 100, n.rgba
        },
        g = E(E(E(E(E({}, {
            fontSize: `${(e=>Math.max(10,Math.round(.045*v*e)))(o)}px`
        }), (() => {
            const e = ((e, t) => f.fontFamily.items.find(e => e.id === t))(0, a);
            return {
                fontVariant: "small_capitals" === e.id ? "small-caps" : "initial",
                fontFamily: e.value
            }
        })()), {
            color: h(l, s)
        }), (() => {
            const e = `0, 0, 0, ${Number(s)/100}`;
            let t = "none";
            switch (_) {
                case "shadow":
                    t = `2px 2px 2px rgba(${e})`;
                    break;
                case "outline":
                    t = `1px 1px 0 rgba(${e}), -1px 1px 0 rgba(${e}), 1px -1px 0 rgba(${e}), -1px -1px 0 rgba(${e})`;
                    break;
                case "raised":
                    t = `rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;
                    break;
                case "depressed":
                    t = `rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;
                    break;
                default:
                    t = "none"
            }
            return {
                textShadow: t
            }
        })()), m),
        b = E({}, {
            backgroundColor: h(d, c)
        }),
        y = E({}, {
            background: h(p, u)
        }),
        C = Cn(Mn.VP_CAPTIONS, "CaptionsRenderer_module_captions__53c1e235", i),
        T = (() => {
            let t = [];
            return e.forEach(e => {
                const n = e.html.split("<br>");
                t = t.concat(n)
            }), t
        })();
    return De("div", {
        className: C,
        "aria-live": "assertive",
        lang: t,
        dir: n,
        style: g,
        children: De("span", {
            className: "CaptionsRenderer_module_captionsWindow__53c1e235",
            style: b,
            children: T.map(e => De("span", {
                className: `CaptionsRenderer_module_captionsLine__53c1e235 ${Mn.VP_CAPTIONS_LINE}`,
                style: y,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }, e))
        })
    })
};
const Xd = Ue(({
    children: e,
    className: t,
    style: n,
    role: i = "dialog",
    ariaLabelledby: o
}, r) => De("div", {
    role: i,
    "aria-labelledby": o,
    className: `ToastBase_module_toast__a4511d95 ${t||""}`,
    ref: r,
    style: n,
    children: e
}));
const Zd = () => De("div", {
    className: "ToastDivider_module_divider__63cf057e"
});
const Jd = e => {
        let {
            tooltipLabel: t,
            icon: n,
            onClick: i,
            containerRef: o,
            fullToast: r,
            className: a,
            onMouseEnter: s,
            onMouseLeave: l
        } = e, c = m(e, ["tooltipLabel", "icon", "onClick", "containerRef", "fullToast", "className", "onMouseEnter", "onMouseLeave"]);
        const d = ad(e => e.appearance.playerBreakpoint),
            u = ["xl", "xxl"].includes(d) ? 16 : 8,
            p = Cn("ToastButton_module_toastButton__0e5d5661", r && "ToastButton_module_fullToast__0e5d5661", a);
        return t ? De(Rd, {
            tooltipContent: t,
            position: Od.BOTTOM,
            containerEl: o,
            margin: u,
            children: De(Yd, E({
                color: r ? tr.PRIMARY : tr.ALTERNATIVE,
                icon: n,
                onClick: i,
                onMouseEnter: s,
                onMouseLeave: l,
                className: p
            }, c))
        }) : De(Yd, E({
            color: r ? tr.PRIMARY : tr.ALTERNATIVE,
            icon: n,
            onClick: i,
            onMouseEnter: s,
            onMouseLeave: l,
            className: p
        }, c))
    },
    Qd = {
        [Qo.XXS]: or.MD,
        [Qo.LG]: or.LG,
        [Qo.XXL]: or.XL
    },
    eu = ({
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i
    }) => De(Jd, {
        fullToast: !0,
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        children: De(Vd, {
            sizeMap: Qd,
            children: i
        })
    });
const tu = ({
    transitionTime: e,
    delay: t = 400,
    ariaLabelledby: n
}) => {
    const i = `width ${e-t}ms linear`,
        [o, r] = Pe({});
    return Ie(() => {
        const e = setTimeout(() => {
            r({
                transition: i,
                width: "100%"
            })
        }, t);
        return () => {
            clearTimeout(e)
        }
    }, [r, i, t]), De("div", {
        className: "ToastProgress_module_progressWrapper__71004122",
        role: "progressbar",
        "aria-labelledby": n,
        children: De("div", {
            className: "ToastProgress_module_progress__71004122",
            style: o
        })
    })
};
const nu = ({
    id: e,
    children: t,
    className: n
}) => {
    const i = Cn("ToastMessage_module_label__88d8df97", n);
    return De(Vd, {
        id: e,
        weight: rr.NORMAL,
        className: i,
        color: ar.WHITE,
        sizeMap: {
            [Qo.XXS]: or.SM,
            [Qo.SM]: or.MD,
            [Qo.XL]: or.LG,
            [Qo.XXL]: or.XL
        },
        children: t
    })
};
const iu = ({
        onClick: e,
        describedBy: t,
        selected: n
    }) => De(Jd, {
        className: `CloseToastButton_module_close__e44e3d03 ${n?"CloseToastButton_module_selected__e44e3d03":""}`,
        icon: De(vd, {
            name: mc.DISMISS_X
        }),
        onClick: e,
        "aria-label": "Close",
        "aria-describedby": t
    }),
    ou = ({
        children: e,
        targetContent: t,
        onContentChange: n = li,
        delay: i = 250,
        styleOverrides: o
    }) => {
        const r = Oe(null),
            [a, s] = Pe(t),
            l = t !== a,
            c = l && !a,
            d = !l && !!t;
        return clearTimeout(r.current), c ? (s(t), n(t)) : l && (r.current = setTimeout((function() {
            s(t), n(t)
        }), i)), De(dd, {
            visible: d,
            duration: i,
            styleOverrides: o,
            children: null == e ? void 0 : e(a)
        })
    };
let ru;
! function(e) {
    e.LOAD_TIMEOUT = "Load timeout"
}(ru || (ru = {}));
const au = 1e3,
    su = 100 * Math.random() <= 100,
    lu = [Zt.PLAYER_LOGIN_SUCCESSFUL, Zt.PLAYER_LOGIN_FAILED, Zt.COMPONENT_VISIBILITY_CHANGE, Zt.APP_BREAKPOINT_CHANGE],
    cu = e => {
        const {
            id: t,
            url: n,
            title: i,
            visible: o,
            userLoggedIn: r,
            appBreakpoint: a,
            config: s,
            onIframeLoad: l = li,
            onError: c = li,
            onRemoteComponentReady: d = li,
            waitForReady: u = !1,
            isAnimating: p = !1,
            timeout: _ = au,
            className: v
        } = e, [m, f] = Pe(!1), [h, g] = Pe(!1), [b, y] = Pe(!1), C = Oe(le()), T = Oe(null), L = Oe(null), w = Cn("RemoteComponent_module_remoteComponent__cd5a3006", b && "RemoteComponent_module_loaded__cd5a3006", v), A = Oe(Date.now()), S = () => {
            u && y(!0), d()
        };
        Ie((function() {
            T.current && function(e, t, n) {
                const {
                    url: i,
                    onPlay: o = li,
                    onPause: r = li,
                    onSeek: a = li,
                    onClose: s = li,
                    onLoginRequest: l = li,
                    onRemoteComponentReady: c = li,
                    onError: d = li
                } = e, u = gt(i);
                t.configureClient(n.contentWindow, u), t.extendMethods({
                    play: o,
                    pause: r,
                    set currentTime(e) {
                        a(e)
                    },
                    closeRemoteComponent: s,
                    remoteComponentRequestLogin: l,
                    remoteComponentReady: c,
                    reportRemoteComponentError: d
                }), lu.forEach((function(e) {
                    t.listeners[e] = !0
                }))
            }(E(E({}, e), {}, {
                onRemoteComponentReady: S
            }), C.current, T.current), clearTimeout(L.current), L.current = setTimeout(() => {
                m || ((e => {
                    f(!1), g(!0), c(e)
                })({
                    message: ru.LOAD_TIMEOUT,
                    code: 408
                }), Ir(vr.REMOTE_COMPONENT_TIMEOUT, s, {
                    component_url: n,
                    component_timeout: _
                }))
            }, _)
        }), []), Ie((function() {
            r && C.current.emit(Zt.PLAYER_LOGIN_SUCCESSFUL)
        }), [r]), Ie((function() {
            o || document.activeElement !== T.current || T.current.blur(), p || C.current.emit(Zt.COMPONENT_VISIBILITY_CHANGE, o)
        }), [o, p]), Ie((function() {
            C.current.emit(Zt.APP_BREAKPOINT_CHANGE, a)
        }), [a]), Ie((function() {
            A.current = Date.now()
        }), [n]);
        const I = Cn("RemoteComponent_module_spinner__cd5a3006", !b && !h && "RemoteComponent_module_visible__cd5a3006");
        return De(Ge, {
            children: [De(jd, {
                className: I
            }), De("iframe", {
                id: t,
                ref: T,
                onLoad: () => {
                    h || (clearTimeout(L.current), f(!0), l(), su && Ir(vr.REMOTE_COMPONENT_LOADED, s, {
                        component_url: n,
                        component_load_time: Date.now() - A.current
                    }), u || y(!0))
                },
                title: i,
                src: n,
                className: w
            })]
        })
    },
    {
        Provider: du,
        useStore: uu
    } = Ne(),
    pu = ({
        player: e,
        children: t
    }) => (qe(e => {}), De(du, {
        createStore: () => Me((t, n) => {
            const {
                config: i,
                events: o,
                uuid: r
            } = e, a = {
                set: t,
                get: n,
                events: o,
                get config() {
                    return e.config
                }
            };
            return E(E(E({
                config: i,
                uuid: r,
                view: i.view
            }, (e => {
                const t = E(E({}, function() {
                    const t = Fl(e.config),
                        n = (null == t ? void 0 : t.gate_type) || Mo.EMPTY;
                    return Wo(n, e.config, null == t ? void 0 : t.gate_id)
                }()), {}, {
                    accessGateLoaded: !1,
                    accessGateReady: !1,
                    setAccessGateLoaded: function() {
                        e.set(e => ({
                            accessGate: E(E({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateLoaded: !0
                            })
                        }))
                    },
                    setAccessGateReady: function() {
                        e.set(e => ({
                            accessGate: E(E({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateReady: !0
                            })
                        })), n(Bo.OPENED)
                    },
                    closeAccessGate: o,
                    sendGateBPEvent: n
                });

                function n(t, n) {
                    var i;
                    (null == (i = e.config.embed.access_gates) ? void 0 : i.length) && Ir(vr.PROCESS_STEP, e.config, {
                        process_name: "access_gate",
                        step_name: t,
                        status: t === Bo.ERROR ? "fail" : "success",
                        error: (null == n ? void 0 : n.message) || null,
                        error_code: "number" == typeof(null == n ? void 0 : n.code) ? `${n.code}` : null
                    })
                }

                function i(t, n = null) {
                    const i = Wo(t, e.config, n);
                    e.set(e => ({
                        accessGate: E(E({}, null == e ? void 0 : e.accessGate), i)
                    })), e.events.fire(Kt._accessGateOpened, i.purpose)
                }

                function o(t) {
                    e.set(t => ({
                        accessGate: E(E({}, null == t ? void 0 : t.accessGate), {}, {
                            accessGateLoaded: !1,
                            accessGateReady: !1
                        }, Wo(Mo.EMPTY, e.config))
                    })), e.events.fire(Kt._accessGateClosed, t), n(Bo.CLOSED)
                }

                function r() {
                    var t, n, r, a;
                    const s = e.config.embed.access_gates;
                    (null == s ? void 0 : s.length) && s.forEach(t => {
                        ! function(t) {
                            const {
                                gate_type: n,
                                placement: o,
                                timecode: r,
                                gate_id: a
                            } = t;

                            function s({
                                currentTime: t
                            }) {
                                t >= r && (i(n, a), e.events.off(g.TIME_UPDATE, s))
                            }

                            function l() {
                                i(n, a), e.events.off(Kt._ended, l)
                            }
                            qo(n, e.config) || (o === xo.DURING_VIDEO && e.events.on(g.TIME_UPDATE, s), o === xo.AFTER_VIDEO && e.events.on(Kt._ended, l), e.events.on(Kt._configChanged, (function() {
                                e.events.off(g.TIME_UPDATE, s), e.events.off(Kt._ended, l)
                            })))
                        }(t)
                    });
                    const l = Fl(e.config),
                        c = null == (t = e.get()) || null == (n = t.accessGate) ? void 0 : n.gateId,
                        d = (null == (r = e.get()) || null == (a = r.accessGate) ? void 0 : a.purpose) || Mo.EMPTY,
                        u = null == l ? void 0 : l.gate_id,
                        p = (null == l ? void 0 : l.gate_type) || Mo.EMPTY,
                        _ = c !== u || d !== p;
                    d !== Mo.EMPTY && _ && o(), p !== Mo.EMPTY && u && _ && (i(p, u), e.events.once(Kt._ready, () => {
                        e.events.fire(Kt._accessGateOpened, p)
                    }))
                }
                return r(), e.events.on(Kt._configChanged, (function() {
                    r()
                })), {
                    accessGate: t
                }
            })(a)), _u(a)), mu(a))
        }),
        children: t
    })),
    _u = e => {
        const t = vu(e),
            {
                set: n,
                events: i
            } = e;
        return i.on(xt._reset, () => {
            n(() => ({
                colors: vu(e)
            }))
        }), i.on(xt._changeColor, (e, t) => {
            const i = ai(e);
            if (!i) return;
            const o = cn[t];
            n(e => ({
                colors: E(E({}, e.colors), {}, {
                    [o]: i
                })
            }))
        }), {
            colors: t
        }
    };

function vu(e) {
    const {
        embed: t
    } = e.config;
    return {
        colorOne: ai(t.color_one) || ai(sn[nn]),
        colorTwo: ai(t.color_two) || ai(t.color) || ai(sn[on]),
        colorThree: ai(t.color_three) || ai(sn[rn]),
        colorFour: ai(t.color_four) || ai(sn[an])
    }
}
const mu = e => {
    const t = fu(e),
        {
            set: n,
            events: i
        } = e;
    return i.on(Kt._configChanged, () => {
        n(() => ({
            embed: fu(e)
        }))
    }), {
        embed: t
    }
};

function fu(e) {
    return {
        transparent: !!e.config.embed.transparent
    }
}
const hu = e => {
    const {
        onPlay: t,
        onPause: n,
        onSeek: i,
        onLoginRequest: o,
        url: r,
        visible: a
    } = e, s = m(e, ["onPlay", "onPause", "onSeek", "onLoginRequest", "url", "visible"]), l = ad(e => e.setPlayback), c = ad(e => e.setUser), d = ad(e => e.user.loggedIn), u = ad(e => e.appearance.appBreakpoint), p = uu(e => e.colors.colorOne), _ = uu(e => e.colors.colorTwo), v = uu(e => e.colors.colorThree), f = uu(e => e.colors.colorFour), h = ad(e => e.config), [g, b] = Pe(gu(r, y()));

    function y() {
        return {
            loggedIn: d,
            appBreakpoint: u,
            visible: a,
            colorOne: p,
            colorTwo: _,
            colorThree: v,
            colorFour: f
        }
    }
    return Ie((function() {
        b(gu(r, y()))
    }), [r]), De(cu, E({
        userLoggedIn: d,
        onPlay: () => {
            l("paused", !1), null == t || t()
        },
        onPause: () => {
            l("paused", !0), null == n || n()
        },
        onSeek: e => {
            l("currentTime", e), null == i || i(e)
        },
        onLoginRequest: () => {
            c("loggedIn", !0), null == o || o()
        },
        appBreakpoint: u,
        url: g,
        visible: a,
        config: h
    }, s))
};

function gu(e, t) {
    const i = Object.keys(t).filter(e => void 0 !== t[e]),
        o = Te(t, i);
    return n(e, o)
}
const bu = ({
        playerBreakpoint: e
    }) => {
        const t = [Qo.XS, Qo.XXS].includes(e),
            n = t ? mc.VIMEO_SMALL : mc.VIMEO;
        return De(vd, {
            name: n,
            "aria-hidden": !0,
            [t ? "data-vimeo-small-icon" : "data-vimeo-icon"]: !0
        })
    },
    Eu = Ue((e, t) => {
        let {
            on: n,
            label: i,
            icon: o,
            onClick: r,
            className: a = "",
            children: s
        } = e, l = m(e, ["on", "label", "icon", "onClick", "className", "children"]);
        const c = ad(e => e.displayList.sideDock);
        return De(Yd, E(E({
            tabIndex: c ? 0 : -1,
            ref: t,
            size: er.SM,
            color: tr.PRIMARY,
            icon: o,
            iconSize: er.SM,
            "aria-label": i,
            onClick: r,
            className: Cn(n && Mn.ON, a)
        }, l), {}, {
            children: s
        }))
    }),
    yu = () => {
        const {
            enabled: e,
            icon: t,
            label: n,
            onSelect: i
        } = hc();
        return e && De(ud, {
            text: n,
            children: De(Eu, {
                label: n,
                className: Mn.COLLECTIONS_BUTTON,
                onClick: i,
                icon: De(vd, {
                    name: t,
                    className: Mn.COLLECTIONS_ICON,
                    focusable: "false"
                })
            })
        })
    },
    Cu = () => {
        const e = ad(e => e.user.liked),
            {
                label: t,
                ariaLabel: n,
                enabled: i,
                icon: o,
                onSelect: r
            } = bc();
        return i && De(ud, {
            text: t,
            children: De(Eu, {
                label: n,
                className: Mn.LIKE_BUTTON,
                on: e,
                icon: De(vd, {
                    name: o,
                    className: Mn.LIKE_ICON,
                    focusable: "false"
                }),
                "data-like-button": !0,
                onClick: r
            })
        })
    };
const Tu = () => {
    const {
        label: e,
        icon: t,
        onSelect: n,
        enabled: i
    } = Ec();
    return i && De(ud, {
        text: e,
        children: De(Eu, {
            label: e,
            "data-share-button": !0,
            onClick: n,
            icon: De(vd, {
                name: t,
                className: "share-icon ShareButton_module_shareIcon__da819942",
                focusable: "false"
            })
        })
    })
};
const Lu = () => {
        const e = ad(e => e.vod.purchased),
            t = ad(e => e.vod.isExpiring),
            {
                onSelect: n,
                enabled: i,
                icon: o,
                label: r
            } = yc(),
            a = mn(n);
        return i && De("div", E(E({}, a), {}, {
            className: `VODButton_module_vodButtonContainer__9ec51f3d ${t?"VODButton_module_expiring__9ec51f3d":""}`,
            "data-vod-expiring": t,
            "data-vod-purchased": e,
            "data-vod-button": !0,
            children: De(Yd, {
                size: er.SM,
                color: tr.PRIMARY,
                iconPosition: nr.RIGHT,
                className: Cn(Mn.VOD_BUTTON, "VODButton_module_vodButton__9ec51f3d", e && Mn.ON),
                "data-vod-button": !0,
                icon: De(vd, {
                    name: o,
                    className: Cn(Mn.VOD_ICON, "VODButton_module_icon__9ec51f3d"),
                    "data-vod-icon": !0
                }),
                iconSize: er.SM,
                children: De("span", {
                    "data-vod-button-label": !0,
                    children: r
                })
            })
        }))
    },
    wu = () => {
        const e = ad(e => e.user.watchLater),
            {
                enabled: t,
                label: n,
                ariaLabel: i,
                onSelect: o,
                icon: r
            } = Cc();
        return t && De(ud, {
            text: n,
            children: De(Eu, {
                label: i,
                className: Mn.WATCH_LATER_BUTTON,
                on: e,
                onClick: o,
                icon: De(vd, {
                    name: r,
                    className: Mn.WATCH_LATER_ICON,
                    focusable: "false"
                }),
                "data-watch-later-button": !0
            })
        })
    };
const Au = () => {
        const [e, t] = Pe(!1), [n, i] = Pe(!1), o = Oe(null), r = ad(e => e.displayList.aiWidget), a = Oe(null), s = Oe(!1), {
            label: l,
            onSelect: c,
            enabled: d,
            icon: u
        } = fc(), p = r ? [Un.AI_WIDGET_ID, Bn.RIGHT_CONTENT_AREA].join(" ") : Bn.RIGHT_CONTENT_AREA;
        Ie(() => {
            function e() {
                document.activeElement.id === Un.AI_WIDGET_ID && (s.current = !0)
            }
            return window.addEventListener("blur", e), () => {
                window.removeEventListener("blur", e)
            }
        }, []), nc("Tab", e => {
            const t = document.activeElement === document.body;
            var n;
            s.current && t && (e.preventDefault(), s.current = !1, null == (n = a.current) || n.focus())
        });
        const _ = () => {
                clearTimeout(o.current), t(!1), i(!0)
            },
            v = () => {
                clearTimeout(o.current), i(!1), t(!0), o.current = setTimeout((function() {
                    t(!1)
                }), 420)
            },
            m = Cn("AIButton_module_button__64e74fc4", n && "AIButton_module_transitionIn__64e74fc4", e && "AIButton_module_transitionOut__64e74fc4"),
            f = {
                backgroundColor: "rgb(0,0,0,0.9)",
                transitionProperty: n || e ? "background-position" : "none"
            };
        return d && De(Ge, {
            children: [De("style", {
                children: "\n                    .AIButton_module_button__64e74fc4 {\n                        --shimmer-speed-in: 450ms;\n                        --shimmer-speed-out: 420ms;\n                    }\n                "
            }), De(ud, {
                text: l,
                children: De(Eu, E({
                    label: l,
                    "data-ai-button": !0,
                    onClick: c,
                    ref: a,
                    className: m,
                    "aria-expanded": r,
                    "aria-controls": p,
                    "aria-haspopup": "true",
                    onFocus: _,
                    onBlur: v,
                    onPointerEnter: e => {
                        "mouse" === e.pointerType && _()
                    },
                    onPointerLeave: e => {
                        "mouse" === e.pointerType && v()
                    },
                    style: f,
                    icon: De(vd, {
                        fill: "#fff",
                        name: u,
                        focusable: "false",
                        className: "AIButton_module_icon__64e74fc4"
                    })
                }, kd))
            })]
        })
    },
    Su = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t
    }) => {
        const n = Lc(),
            i = Object.keys(n).filter(e => n[e].enabled).map(e => {
                const t = n[e];
                return {
                    id: e,
                    label: t.label,
                    icon: t.icon
                }
            });
        return De(md, {
            type: zl.SIDEDOCK,
            ariaLabel: "More options",
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: Xl.SIDEDOCK,
            panelContent: De(wd, {
                items: i,
                onSelect: e => {
                    const t = e.currentTarget.dataset.id;
                    (0, n[t].onSelect)(e)
                }
            }),
            headerContent: De(bd, {
                title: "More options",
                onClose: () => t(!1)
            }),
            isMenuBlockingUI: !0
        })
    },
    Iu = ({
        onClick: e
    }) => {
        const t = Lc();
        return Object.values(t).filter(e => e.enabled).length ? De(ud, {
            text: "More options",
            children: De(Eu, {
                label: "More options",
                onClick: e,
                icon: De(vd, {
                    name: mc.VERTICAL_ELLIPSIS,
                    focusable: "false"
                })
            })
        }) : null
    },
    Pu = () => {
        var e, t;
        const n = ad(e => e.config),
            i = ad(e => e.displayList.sideDock),
            o = ad(e => e.appearance.fullscreen),
            r = ad(e => e.displayList.outro),
            a = ad(e => e.appearance.playerSizeMode),
            s = ad(e => e.appearance.playerBreakpoint),
            l = ad(e => e.vod.purchased),
            c = ad(e => e.displayList.menu),
            d = ad(e => e.setAppearance),
            u = ad(e => e.setDisplayList),
            p = yc(),
            _ = (null == (e = n.request.ab_tests) || null == (t = e.small_player_redesign) ? void 0 : t.group) && (a === vi.MINI || a === vi.TINY || s === Qo.XXS || s === Qo.XS),
            [v, m] = Pe(!1),
            f = e => {
                u("menu", e), m(e)
            };
        c || m(!1);
        const h = {
            className: Cn(Mn.VP_SIDEDOCK, "SideDock_module_root__406dab7b", i && "SideDock_module_visible__406dab7b", r && "SideDock_module_outroVisible__406dab7b", o && "SideDock_module_fullscreen__406dab7b"),
            onPointerEnter: () => d("mousedOverSidedock", !0),
            onMouseEnter: () => d("mousedOverSidedock", !0),
            onPointerLeave: () => d("mousedOverSidedock", !1),
            onMouseLeave: () => d("mousedOverSidedock", !1)
        };
        return De(hd, {
            children: [De("div", E(E({}, h), {}, {
                "data-sidedock": !0,
                children: [p.enabled && !l && De(Lu, {}), De(dd, {
                    visible: i,
                    children: De("div", {
                        className: "SideDock_module_sidedockInner__406dab7b",
                        "data-sidedock-inner": !0,
                        children: _ ? De(Iu, {
                            onClick: () => f(!0)
                        }) : De(Ge, {
                            children: [p.enabled && l && De(Lu, {}), De(Cu, {}), De(wu, {}), De(yu, {}), De(Tu, {}), De(Au, {})]
                        })
                    })
                })]
            })), De(Su, {
                isMenuDisplayed: v,
                setMenuDisplayed: f
            })]
        })
    };
let Ou, ku;
! function(e) {
    e.MARKER_SEEKED = "seeked", e.MARKER_ENDED = "ended", e.MARKER_UPSWITCH = "upswitch", e.MARKER_DOWNSWITCH = "downswitch", e.MARKER_SWITCH_COMPLETE = "switchcomplete", e.MARKER_RESIZE = "resize", e.MARKER_SCANNER_CHANGE = "scannerchange", e.MARKER_FILE_CHANGE = "filechange", e.MARKER_STALLED = "stalled", e.MARKER_BUFFER_GAP_JUMP = "buffergapjump", e.MARKER_BUFFER_GAP_JUMP_PREVENT = "buffergapjumpprevent", e.MARKER_STALL_JUMP = "stalljump"
}(Ou || (Ou = {})),
function(e) {
    e.MARKER_SEEKED = "#0088cc", e.MARKER_ENDED = "#503873", e.MARKER_UPSWITCH = "#5a9e02", e.MARKER_DOWNSWITCH = "#d93636", e.MARKER_RESIZE = "#FF8A00", e.MARKER_SCANNER_CHANGE = "#e9ff00", e.MARKER_FILE_CHANGE = "#b5d3e2", e.MARKER_STALLED = "#f44283"
}(ku || (ku = {}));
const Ru = Object.entries(Ou).reduce((e, [t, n]) => (e[n] = ku[t], e), {}),
    Nu = ({
        max: e = 1,
        timeSeries: t = [],
        debugMarkers: n = []
    }) => {
        const i = t.length,
            o = i < 100 ? 0 : i - 100,
            r = t[o],
            a = t[i - 1],
            s = r ? r.time : 0,
            l = a ? a.time : 0,
            c = t.slice(o).map(t => {
                let n = (t.time - s) / (l - s) * 250,
                    i = 14 - 14 * t.value / e;
                return isNaN(i) && (i = 0), isNaN(n) && (n = 0), `${n},${function(e,t,n){return Math.min(Math.max(e,0),14)}(i)}`
            }).join(" ");
        return De("svg", {
            width: 250,
            height: 14,
            viewBox: "0 0 250 14",
            children: [De("g", {
                children: De("polyline", {
                    stroke: "white",
                    fill: "none",
                    points: c
                })
            }), De("g", {
                children: !!n.length && n.filter(e => e.t >= s && e.t <= l).map((e, t) => {
                    let n = (e.t - s) / (l - s) * 250;
                    return isNaN(n) && (n = 0), De("g", {
                        children: De("line", {
                            className: "BandwidthSeriesDisplay_module_marker__718ed0d2",
                            x1: n,
                            y1: "0",
                            x2: n,
                            y2: 14,
                            strokeWidth: "1",
                            stroke: Ru[e.type]
                        })
                    }, `${e.t}-${t}`)
                })
            })]
        })
    };
const Du = ({
        title: e = "",
        value: t
    }) => De("li", {
        children: De("dl", {
            children: [De("dt", {
                children: e
            }), De("dd", {
                children: t
            })]
        })
    }),
    Mu = ({
        payloadId: e,
        showSessionId: t
    }) => {
        const n = ad(e => e.debug.codec),
            i = ad(e => e.debug.isLive),
            o = ad(e => e.debug.isDash),
            r = ad(e => e.debug.delivery),
            a = ad(e => e.debug.resolution),
            s = ad(e => e.debug.embedSize),
            l = ad(e => e.debug.drmEnabled),
            c = ad(e => e.debug.drmFastly),
            d = ad(e => e.debug.sessionId),
            u = ad(e => e.debug.ecdnVendor),
            p = ad(e => e.debug.p2pSources),
            _ = ad(e => e.debug.p2pOffload),
            v = ad(e => e.debug.totalFrames),
            m = ad(e => e.debug.liveLatency),
            f = ad(e => e.debug.currentTime),
            h = ad(e => e.debug.bufferEnd),
            g = ad(e => e.debug.bufferAhead),
            b = ad(e => e.debug.bufferTarget),
            y = ad(e => e.debug.presentationDelay),
            C = ad(e => e.debug.droppedFrames),
            T = ad(e => e.debug.vrHeadsetName),
            L = ad(e => e.debug.liveSessionID),
            w = ad(e => e.debug.bandwidthKbps),
            A = ad(e => e.debug.bandwidthMinKbps),
            S = ad(e => e.debug.bandwidthMaxKbps),
            I = ad(e => e.debug.separateAudioVideo),
            P = ad(e => e.debug.bandwidthSeriesData),
            O = ad(e => e.debug.droppedFramesPercent),
            k = ad(e => e.debug.clipId),
            {
                max: R,
                debugMarkers: N,
                timeSeries: D
            } = P;
        return De("ul", {
            className: "DebugValues_module_values__29a8da67",
            children: [k && De("li", E(E({}, mn(() => {
                fn(`${k}`)
            })), {}, {
                children: De("dl", {
                    children: [De("dt", {
                        children: "Clip ID:"
                    }), De("br", {}), De("dd", {
                        className: "DebugValues_module_clipId__29a8da67",
                        children: k
                    })]
                })
            })), !!r && De(Du, {
                title: "Delivery:",
                value: r
            }), !!n && De(Du, {
                title: "Codec:",
                value: n
            }), !!a && De(Du, {
                title: "Playing:",
                value: a
            }), !!s && De(Du, {
                title: "Embed Size:",
                value: s
            }), o && De(Du, {
                title: "Separate AV:",
                value: `${I}`
            }), (o || i) && De(Du, {
                title: "Dropped Frames:",
                value: `${C} / ${v} - ${O}`
            }), !!T && De(Du, {
                title: "VR Hardware:",
                value: T
            }), !!u && De(Ge, {
                children: [De(Du, {
                    title: "eCDN Vendor:",
                    value: u
                }), De(Du, {
                    title: "Peers - P2P Delivery:",
                    value: `${p} - ${_}`
                })]
            }), l && De(Du, {
                title: "DRM:",
                value: `Enabled; Fastly DRM: ${c}`
            }), i && De(Ge, {
                children: [!!L && De(Du, {
                    title: "Live Session ID:",
                    value: L
                }), De(Du, {
                    title: "Live Latency / Target:",
                    value: `${m} / ${y}`
                })]
            }), De(Du, {
                title: "Playhead / Buffer End:",
                value: `${f} / ${h}`
            }), !!b && De(Du, {
                title: "Buffer Ahead / Target:",
                value: `${g} / ${b}`
            }), (o || i) && De(Ge, {
                children: [De(Du, {
                    title: "Bandwidth:",
                    value: w
                }), De("div", {
                    className: "DebugValues_module_bandwidthMinMax__29a8da67",
                    children: ["(", De("b", {
                        className: "DebugValues_module_bandwidthMin__29a8da67",
                        children: A
                    }), De("b", {
                        className: "DebugValues_module_bandwidthMax__29a8da67",
                        children: S
                    }), ")"]
                }), De("div", {
                    className: "DebugValues_module_timeSeries__29a8da67",
                    children: De(Nu, {
                        max: R,
                        debugMarkers: N,
                        timeSeries: D
                    })
                })]
            }), d && t && De("li", {
                children: De("dl", {
                    children: [De("dt", {
                        children: "Key:"
                    }), De("br", {}), De("dd", {
                        className: "DebugValues_module_sessionId__29a8da67",
                        children: d
                    })]
                })
            }), e && De("li", {
                children: De("dl", {
                    children: [De("dt", {
                        children: "Debug Key:"
                    }), De("br", {}), De("dd", {
                        className: "DebugValues_module_payloadId__29a8da67",
                        children: e
                    })]
                })
            })]
        })
    };
let xu;

function Bu() {}
const Vu = Ue(({
    onCopyFailed: e,
    labelResetDelay: t,
    className: n
}, i) => {
    const [o, r] = Pe(!1), a = ad(e => e.debug), {
        bandwidthSeriesData: s
    } = a, l = m(a, ["bandwidthSeriesData"]), c = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function() {
        const n = {
            version: 2,
            tpl: l,
            mark: s.debugMarkers
        };
        return clearTimeout(xu),
            function(e) {
                if (e && e.then) return e.then(Bu)
            }(function(o, a) {
                try {
                    var s = function() {
                        const o = btoa(JSON.stringify(n));
                        return function(e, t, n) {
                            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                        }(fn(o), (function(n) {
                            n ? (r(!0), xu = setTimeout(() => {
                                clearTimeout(xu), r(!1)
                            }, t)) : e(), i.current.focus()
                        }))
                    }()
                } catch (De) {
                    return a()
                }
                return s && s.then ? s.then(void 0, a) : s
            }(0, (function(t) {
                e()
            })))
    }));
    return De(Yd, {
        ref: i,
        className: n,
        onClick: c,
        children: o ? "Copied" : "Copy Debug Payload"
    })
});
let Uu;

function Fu() {}
const Hu = ({
        onSendSuccess: e,
        labelResetDelay: t,
        className: n
    }) => {
        const {
            player_url: i,
            request: o
        } = ad(e => e.config), [r, a] = Pe(!1), [s, l] = Pe(!1), c = ad(e => e.debug), {
            bandwidthSeriesData: d
        } = c, u = m(c, ["bandwidthSeriesData"]), {
            signature: p,
            expires: _,
            timestamp: v
        } = o, f = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            const {
                clipId: n,
                payloadId: o
            } = u, r = `https://${i}${`/debug_payload/${n}/${o}?s=${p}&expires=${_}&time=${v}`}`, s = {
                version: 2,
                tpl: u,
                mark: d.debugMarkers
            };
            return clearTimeout(Uu),
                function(e) {
                    if (e && e.then) return e.then(Fu)
                }(function(t, n) {
                    try {
                        var i = function(t, n) {
                            try {
                                var i = function(e, t, n) {
                                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                                }($e({
                                    url: r,
                                    method: "post",
                                    json: s,
                                    timeout: 1e4
                                }).json(), (function({
                                    ID: t
                                }) {
                                    e(t), a(!0)
                                }))
                            } catch (De) {
                                return n()
                            }
                            return i && i.then ? i.then(void 0, n) : i
                        }(0, (function() {
                            l(!0)
                        }))
                    } catch (De) {
                        return n(!0, De)
                    }
                    return i && i.then ? i.then(n.bind(null, !1), n.bind(null, !0)) : n(!1, i)
                }(0, (function(e, n) {
                    return Uu = setTimeout(() => {
                            clearTimeout(Uu), a(!1), l(!1)
                        }, t),
                        function(e, t) {
                            if (e) throw t;
                            return t
                        }(e, n)
                })))
        }));
        let h = "Send Debug Payload";
        return r ? h = "Sent" : s && (h = "Something Went Wrong"), De(Yd, {
            className: n,
            onClick: f,
            children: h
        })
    },
    Gu = () => {
        const e = ad(e => e.name),
            t = ad(e => e.appearance.playerBreakpoint),
            n = ad(e => e.displayList.debugPanel),
            i = ad(e => e.setDisplayList),
            o = ad(e => e.debug.isDNTEnabled),
            r = ad(e => e.debug.hideCloseButton),
            a = ad(e => e.debug.isCopyDisabled),
            [s, l] = Pe(void 0),
            [c, d] = Pe(!1),
            u = Oe(null),
            p = Oe(null),
            _ = Oe(null),
            v = e => i("debugPanel", e),
            m = !r && e !== _i.ChromelessPlayer,
            f = !a && e !== _i.ChromelessPlayer,
            h = Cn("DebugPanel_module_root__dd0bd779", Fd.roundedBox, (t === Qo.XS || t === Qo.XXS) && "DebugPanel_module_smallPlayer__dd0bd779"),
            {
                onFocus: g
            } = pc({
                parentRef: u,
                isActive: n,
                onEscape: () => {
                    v(!1)
                }
            });
        return n && De("div", {
            ref: u,
            className: h,
            role: "dialog",
            "aria-label": "Debug log",
            onFocus: g,
            children: [De(Mu, {
                payloadId: s,
                showSessionId: c
            }), f && De(Ge, {
                children: [De(Vu, {
                    labelResetDelay: 1500,
                    onCopyFailed: () => d(!0),
                    className: "DebugPanel_module_button__dd0bd779",
                    ref: _
                }), De(Hu, {
                    labelResetDelay: 1500,
                    onSendSuccess: e => l(e),
                    className: "DebugPanel_module_button__dd0bd779"
                })]
            }), m && De("button", E(E({}, mn(() => v(!1))), {}, {
                className: "DebugPanel_module_closeButton__dd0bd779",
                "aria-label": "Close stats debug panel",
                ref: p,
                children: De(vd, {
                    name: mc.DISMISS_X
                })
            })), !!o && "No Debug Key available as Do Not Track is enabled."]
        })
    };
const Wu = () => {
    const {
        link: e,
        img: t,
        margin: n,
        width: i,
        height: o,
        name: r,
        id: a
    } = ad(e => e.badge), s = ad(e => e.setBadge), l = ad(e => e.displayList.badge), c = r + " Badge", d = {};
    return n && Object.assign(d, {
        margin: n
    }), De(dd, {
        visible: l,
        children: De("div", {
            className: `${Mn.VP_BADGE} Badge_module_badge__d9322d84`,
            style: d,
            "data-badge": !0,
            children: De(pd, {
                href: e,
                onClick: () => s("id", a),
                targetBlank: !0,
                className: `Badge_module_badgeLink__d9322d84 ${Fd.focusable}`,
                children: De("img", {
                    src: t,
                    width: i,
                    height: o,
                    alt: c
                })
            })
        })
    })
};
const Yu = ({
    clip: e,
    is360: t,
    hasHDRNot10Plus: n,
    hasHDR10Plus: i,
    hasDolbyVision: o,
    hasAIContent: r,
    hasSurroundSound: a,
    hasAmbosonic: s,
    channelLayout: l,
    className: c
}) => {
    const d = Cn("TitleTags_module_tag__ca9f6868", c);
    return De("div", {
        className: "TitleTags_module_tagWrapper__ca9f6868",
        children: [e && De("span", {
            className: d,
            children: "Clip"
        }), t && De("span", {
            className: d,
            children: s ? "360 ambisonic" : "360"
        }), n && De("span", {
            className: d,
            children: "HDR"
        }), i && De("span", {
            className: d,
            children: "HDR10+"
        }), o && De("span", {
            className: `${d} TitleTags_module_dolbyVisionTag__ca9f6868`,
            children: De(vd, {
                name: mc.DOLBY_VISION
            })
        }), r && De(pd, {
            href: "https://help.vimeo.com/hc/en-us/articles/25551485186833/",
            className: `${d} TitleTags_module_aiTag__ca9f6868`,
            "data-ai-content-tag": "true",
            children: "Includes AI"
        }), a && De("span", {
            className: d,
            children: l
        })]
    })
};
const qu = () => {
    const e = ad(e => e.title.displayTitle),
        t = ad(e => e.title.displayPortrait),
        n = ad(e => e.title.ownerLinkUrl),
        i = ad(e => e.title.targetBlank),
        o = ad(e => e.title.portraitImg),
        r = ad(e => e.title.titleLinkUrl),
        a = ad(e => e.title.title),
        s = ad(e => e.title.ownerName),
        l = ad(e => e.title.is360),
        c = ad(e => e.title.hasHDR),
        d = ad(e => e.title.hasHDR10Plus),
        u = ad(e => e.title.hasDolbyVision),
        p = ad(e => e.title.channelLayout),
        _ = ad(e => e.title.bylineLinkUrl),
        v = ad(e => e.title.displayByline),
        m = ad(e => e.title.hasAIContent),
        f = "5.1" === p || "7.1" === p,
        h = p.startsWith("ambisonic"),
        g = ad(e => e.displayList.title),
        b = ad(e => e.embed.badge),
        y = ad(e => e.displayList.badge),
        [C, T] = Pe(t && !y),
        L = {
            is360: l,
            hasHDRNot10Plus: c && !d,
            hasHDR10Plus: d,
            hasDolbyVision: u,
            hasAIContent: m,
            hasSurroundSound: f,
            clip: ad(e => e.playback.isSegmentedPlaybackEnabled)
        },
        w = Object.values(L).some(Boolean);
    return Ie(() => {
        let e;
        return !y && t ? e = setTimeout(() => T(!0), 250) : T(!1), () => clearTimeout(e)
    }, [y, t]), De(Ge, {
        children: [b && De(Wu, {}), De(dd, {
            visible: g,
            children: De("div", {
                className: `${Mn.VP_TITLE} Title_module_title__1d89a229`,
                role: "presentation",
                children: De("header", {
                    className: "Title_module_header__1d89a229",
                    role: "presentation",
                    children: [C && De("div", {
                        className: "Title_module_portrait__1d89a229",
                        children: De(pd, {
                            href: n,
                            targetBlank: i,
                            variant: "minimal",
                            className: Cn("Title_module_portraitLink__1d89a229", Fd.focusableCircle),
                            tabIndex: g ? 0 : -1,
                            children: De("img", {
                                src: o,
                                alt: "Link to video owner's profile",
                                width: "60",
                                height: "60",
                                "data-trackClick": "video-portrait"
                            })
                        })
                    }), De("div", {
                        className: "Title_module_headers__1d89a229",
                        children: [e && De("div", {
                            className: "Title_module_titleWrapper__1d89a229",
                            children: [De(pd, {
                                href: r,
                                targetBlank: i,
                                "data-track-click": "video-title",
                                variant: "minimal",
                                className: Cn("Title_module_titleLink__1d89a229", Fd.focusable),
                                tabIndex: g ? 0 : -1,
                                "aria-labelledby": Hn.TITLE_TEXT
                            }), De("div", {
                                className: "Title_module_textAndTagsWrapper__1d89a229",
                                "data-title-tags": !!w || void 0,
                                children: [De(Vd, {
                                    id: Hn.TITLE_TEXT,
                                    className: Cn("Title_module_titleText__1d89a229"),
                                    children: a
                                }), De(Yu, E(E({}, L), {}, {
                                    hasAmbosonic: h,
                                    channelLayout: p,
                                    className: "Title_module_titleTag__1d89a229"
                                }))]
                            })]
                        }), v && De(pd, {
                            href: _,
                            targetBlank: i,
                            variant: "minimal",
                            className: Cn("Title_module_subtitle__1d89a229", Fd.focusable),
                            tabIndex: g ? 0 : -1,
                            children: De(Vd, {
                                children: s
                            })
                        })]
                    })]
                })
            })
        })]
    })
};
const $u = ({
    id: e,
    timecode: t,
    className: n,
    teaser: i,
    url: o,
    imageUrl: r,
    headline: a,
    inView: s
}) => {
    const l = ad(e => e.appearance.isVerticalVideo),
        c = ad(e => e.setCards),
        d = ad(e => e.setPlayback),
        u = () => {
            c("hoveredCard", null), c("cardPressed", e), o && d("paused", !0)
        },
        p = Cn("Card_module_card__6a2b6800", n, s && "Card_module_active__6a2b6800", r && "Card_module_hasThumbnail__6a2b6800", l && "Card_module_vertical__6a2b6800");
    return De("div", {
        className: p,
        onMouseEnter: () => c("hoveredCard", t),
        onMouseLeave: () => c("hoveredCard", null),
        onClick: u,
        onKeyUp: e => {
            "Enter" === e.key && u()
        },
        role: "link",
        tabIndex: -1,
        "aria-hidden": !s,
        children: De(pd, {
            href: o,
            className: "Card_module_inner__6a2b6800",
            tabIndex: s ? 0 : -1,
            children: [!!r && De("div", {
                className: "Card_module_imageWrap__6a2b6800",
                children: De("img", {
                    className: "Card_module_image__6a2b6800",
                    src: r,
                    alt: ""
                })
            }), De("div", {
                className: "Card_module_body__6a2b6800",
                children: [De(Vd, {
                    size: or.MD,
                    className: Cn("Card_module_text__6a2b6800", "Card_module_title__6a2b6800"),
                    color: ar.WHITE,
                    children: a
                }), !!i && De(Vd, {
                    weight: rr.NORMAL,
                    element: "p",
                    className: "Card_module_text__6a2b6800 Card_module_detail__6a2b6800",
                    color: ar.WHITE,
                    children: i
                })]
            }), !!o && De("div", {
                className: "Card_module_popOutWrapper__6a2b6800",
                children: De(vd, {
                    name: mc.POP_OUT,
                    className: "Card_module_popOut__6a2b6800"
                })
            })]
        })
    })
};
const Ku = () => {
    const e = ad(e => e.cards.cardsMap),
        t = ad(e => e.cards.displayedCard),
        n = ad(e => e.displayList.cards),
        i = ad(e => e.displayList.fullPlayerElement),
        o = e => t === e && !i;
    return n && De("div", {
        className: "Cards_module_cardsWrapper__e224f7b9",
        children: e.values().map(e => De($u, {
            id: e.id,
            timecode: e.timecode,
            className: e.className,
            teaser: e.teaser,
            url: e.url,
            imageUrl: e.imageUrl,
            headline: e.headline,
            inView: o(e.timecode)
        }, e.id))
    })
};
const ju = ({
    show: e
}) => {
    const {
        buffering: t,
        currentTime: n,
        loadedTime: i,
        currentFragment: o
    } = ad(e => e.playback), r = Sn(n, o), a = Sn(i, o);
    return e && De("div", {
        className: "TinyProgressBar_module_tinyBar__576238a4",
        children: De("svg", {
            className: "TinyProgressBar_module_tinyBarSVG__576238a4",
            width: "100%",
            height: "100%",
            viewBox: "0 0 70 40",
            focusable: "false",
            children: [De("defs", {
                children: [De("clipPath", {
                    id: "rounded-border",
                    children: De("rect", {
                        height: "100%",
                        width: "100%",
                        x: "0",
                        y: "0",
                        rx: "5"
                    })
                }), De("pattern", {
                    id: "tiny-buffer",
                    "data-tiny-buffer-pattern": !0,
                    className: "TinyProgressBar_module_bufferPattern__576238a4",
                    patternUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    children: [De("line", {
                        x1: "5",
                        y1: "-1",
                        x2: "-5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), De("line", {
                        x1: "10",
                        y1: "-1",
                        x2: "0",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), De("line", {
                        x1: "15",
                        y1: "-1",
                        x2: "5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    })]
                })]
            }), De("g", {
                clipPath: "url(#rounded-border)",
                children: t ? De("rect", {
                    className: "TinyProgressBar_module_buffer__576238a4",
                    height: "3",
                    width: "110%",
                    x: "0",
                    y: "37",
                    fill: "url(#tiny-buffer)"
                }) : De(Ge, {
                    children: [De("rect", {
                        className: "TinyProgressBar_module_loaded__576238a4",
                        "data-tiny-loaded": !0,
                        height: "3",
                        width: Pn(a),
                        x: "0",
                        y: "37"
                    }), De("rect", {
                        className: "TinyProgressBar_module_played__576238a4",
                        "data-tiny-played": !0,
                        height: "3",
                        width: Pn(r),
                        x: "0",
                        y: "37"
                    })]
                })
            })]
        })
    })
};
const zu = ({
    className: e,
    controlBarVisibilityHandlers: t
}) => {
    const n = ad(e => e.displayList.controlBar),
        i = ad(e => e.liveEvent.isLiveEvent),
        o = ad(e => e.liveEvent.isPlayable),
        r = ad(e => e.liveEvent.isArchived),
        a = ad(e => e.liveEvent.isEnded),
        s = ad(e => e.liveEvent.dvrEnabled),
        l = ad(e => e.setPlayback),
        c = ad(e => e.controlBar.trailerButtonText),
        d = ad(e => e.embed.playbar),
        u = ad(e => e.appearance.playerSizeMode),
        p = ad(e => e.controlBar.progressBarExpanded),
        {
            buttonState: _,
            setButtonState: v
        } = jl(),
        m = rc(),
        f = !i || o || r || s && a,
        h = u === vi.TINY || !d,
        g = _ === yi.TRAILER,
        b = {
            [yi.PLAY]: {
                icon: mc.PLAY,
                onClick: () => {
                    l("paused", !1), v(yi.PAUSE)
                },
                label: "Play",
                className: "PlayButton_module_playIcon__d0bc3b70"
            },
            [yi.PAUSE]: {
                icon: mc.PAUSE,
                onClick: () => {
                    l("paused", !0), v(yi.PLAY)
                },
                label: "Pause",
                className: "PlayButton_module_pauseIcon__d0bc3b70"
            },
            [yi.REPLAY]: {
                icon: mc.REPLAY,
                onClick: () => {
                    l("paused", !1), v(yi.PAUSE)
                },
                label: "Play",
                className: "PlayButton_module_replayIcon__d0bc3b70"
            },
            [yi.TRAILER]: {
                icon: mc.PLAY,
                onClick: () => {
                    l("paused", !1)
                },
                label: "Play",
                className: "PlayButton_module_trailerIcon__d0bc3b70"
            }
        }[_],
        E = m === oc.CENTER,
        y = Cn("PlayButton_module_playButtonWrapper__d0bc3b70", E && "PlayButton_module_center__d0bc3b70", g && "PlayButton_module_trailer__d0bc3b70", p && !E && "PlayButton_module_progressExpanded__d0bc3b70"),
        C = Cn("PlayButton_module_playButton__d0bc3b70", g && "PlayButton_module_trailer__d0bc3b70", Fd.focusable, p && !E && "PlayButton_module_progressExpanded__d0bc3b70", e);
    return f && De(dd, {
        visible: n,
        children: De("div", {
            className: y,
            children: De(Rd, {
                id: "play-button-tooltip",
                tooltipContent: b.label,
                className: `Tooltip_module_playTooltip__56441453 ${g?"Tooltip_module_trailerPlayTooltip__56441453":""}`,
                children: De(Yd, {
                    className: C,
                    onClick: b.onClick,
                    icon: De(vd, {
                        className: b.className,
                        name: b.icon
                    }),
                    onTouchStart: t.onTouchStart,
                    onTouchEnd: t.onTouchEnd,
                    onMouseEnter: t.onMouseEnter,
                    onMouseLeave: t.onMouseLeave,
                    "data-play-button": !0,
                    children: [De(ju, {
                        show: h
                    }), g && De("span", {
                        className: "PlayButton_module_text__d0bc3b70",
                        children: c || "Watch Trailer"
                    })]
                })
            })
        })
    })
};
const Xu = e => {
        const t = ad(e => e.displayList.menu);
        return (o.touch || t) && Object.assign(e, {
            visible: !1
        }), De(Rd, E({}, e))
    },
    Zu = Ue((e, t) => {
        let {
            className: n = "",
            icon: i,
            children: o,
            tooltipLabel: r,
            hasTooltip: a = !0,
            id: s
        } = e, l = m(e, ["className", "icon", "children", "tooltipLabel", "hasTooltip", "id"]);
        const c = ad(e => e.appearance.playerBreakpoint),
            d = ad(e => e.displayList.controlBarButtons),
            u = Cn("ControlBarButton_module_controlBarButton__576b5a13", Fd.focusable, n),
            p = ["xl", "xxl"].includes(c) ? 16 : 8,
            _ = d ? 0 : -1;
        return a ? De(Xu, {
            id: s ? `${s}-tooltip` : null,
            tooltipContent: r,
            margin: p,
            children: De(Yd, E(E({
                id: s,
                ref: t,
                className: u,
                icon: i,
                tabIndex: _
            }, l), {}, {
                children: o
            }))
        }) : De(Yd, E({
            ref: t,
            className: u,
            icon: i,
            tabIndex: _
        }, l))
    });
const Ju = ({
    onFocus: e
}) => {
    const t = ad(e => e.appearance.fullscreen),
        n = ad(e => e.setAppearance),
        i = Cn(Mn.FULLSCREEN, "FullscreenButton_module_fullscreen__e0e92a4f"),
        o = t ? "Exit full screen" : "Fullscreen",
        r = t ? mc.EXIT_FULLSCREEN : mc.ENTER_FULLSCREEN;
    return De(Zu, {
        id: "fullscreen-control-bar-button",
        onClick: () => n("fullscreen", !t),
        onFocus: e,
        className: i,
        icon: De(vd, {
            name: r
        }),
        tooltipLabel: o,
        "data-fullscreen-button": !0
    })
};
const Qu = Ue(({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n
    }, i) => {
        const {
            onClick: o,
            onKeyDown: r
        } = Kl(() => t(!e));
        return De(Zu, {
            id: "prefs-control-bar-button",
            ref: i,
            className: `${Mn.VP_PREFS} PrefsButton_module_prefsButton__39297261`,
            "aria-expanded": e,
            "aria-haspopup": "true",
            icon: De(vd, {
                name: mc.GEAR,
                className: "PrefsButton_module_gearIcon__39297261"
            }),
            onClick: o,
            onKeyDown: r,
            onFocus: n,
            tooltipLabel: "Settings",
            "data-prefs-button": !0
        })
    }),
    ep = ({
        onFocus: e
    }) => {
        const t = ad(e => e.appearance.pictureInPictureActive),
            n = ad(e => e.setAppearance),
            i = t ? "Exit Picture-in-Picture" : "Picture-in-Picture",
            o = t ? mc.EXIT_PICTURE_IN_PICTURE : mc.ENTER_PICTURE_IN_PICTURE;
        return De(Zu, {
            id: "pip-control-bar-button",
            className: Mn.PIP,
            icon: De(vd, {
                name: o,
                className: t ? Mn.ON : ""
            }),
            onClick: () => n("pictureInPictureActive", !t),
            onFocus: e,
            tooltipLabel: i,
            "data-pip-button": !0
        })
    },
    tp = Ue(({
        onFocus: e
    }, t) => {
        const n = ad(e => e.playback.volume),
            i = ad(e => e.playback.muted),
            o = i ? "Unmute" : "Mute",
            {
                toggleMuted: r
            } = ac();
        return De(Zu, {
            ref: t,
            onClick: r,
            onFocus: e,
            icon: De(vd, !i && n > 0 ? {
                name: mc.VOLUME_ON_FILLED,
                "data-volume-icon": !0
            } : {
                name: mc.VOLUME_OFF_FILLED,
                "data-volume-muted-icon": !0
            }),
            "aria-label": o,
            "aria-keyshortcuts": "m",
            "data-volume-button": !0,
            hasTooltip: !1
        })
    });
const np = () => {
        const e = ad(e => e.controlBar.vimeoLogoUrl),
            t = ad(e => e.appearance.playerBreakpoint);
        return De(pd, {
            className: Cn("VimeoLogoLink_module_vimeoLogo__2cced5b3", Fd.focusable),
            href: e,
            "data-vimeo-logo": !0,
            "aria-label": "Watch on Vimeo",
            children: De(bu, {
                playerBreakpoint: t
            })
        })
    },
    ip = ({
        onFocus: e
    }) => {
        const t = ad(e => e.appearance.showAirPlayPicker),
            n = ad(e => e.setAppearance),
            i = t ? "Turn off AirPlay" : "Choose an AirPlay device";
        return De(Zu, {
            onClick: () => n("showAirPlayPicker", !t),
            onFocus: e,
            className: Mn.AIRPLAY,
            "aria-label": i,
            tooltipLabel: "AirPlay",
            "data-airplay-button": !0,
            icon: De(vd, {
                name: mc.AIRPLAY,
                className: t ? Mn.ON : ""
            })
        })
    },
    op = Ue(({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n
    }, i) => {
        const {
            onClick: o,
            onKeyDown: r
        } = Kl(() => t(!e));
        return De(Zu, {
            ref: i,
            className: Mn.VP_CHAPTER_BUTTON,
            onClick: o,
            onKeyDown: r,
            onFocus: n,
            "aria-expanded": e,
            "aria-haspopup": "true",
            icon: De(vd, {
                name: mc.CHAPTERS
            }),
            tooltipLabel: "Chapters",
            "data-chapter-button": !0,
            id: "chapters-control-bar-button"
        })
    }),
    rp = Ue(({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n
    }, i) => {
        const o = ad(e => e.captions.activeTextTrackId),
            {
                onClick: r,
                onKeyDown: a
            } = Kl(() => t(!e)),
            s = o && "off" !== o ? mc.CC_FILLED : mc.CC;
        return De(Zu, {
            id: "cc-control-bar-button",
            ref: i,
            className: Mn.CC,
            "aria-haspopup": "true",
            "aria-expanded": e,
            icon: De(vd, {
                name: s
            }),
            onClick: r,
            onKeyDown: a,
            onFocus: n,
            tooltipLabel: "CC/Subtitles",
            "data-cc-button": !0
        })
    }),
    ap = ({
        onFocus: e
    }) => {
        const t = ad(e => e.setAppearance),
            n = ad(e => e.appearance.stereoscopicEnabled),
            i = n ? "Disable stereoscopic playback" : "Enable stereoscopic playback";
        return De(Zu, {
            className: Mn.STEREOSCOPIC,
            onClick: () => t("stereoscopicEnabled", !n),
            onFocus: e,
            "aria-label": i,
            icon: De(vd, {
                name: mc.STEREOSCOPIC
            }),
            tooltipLabel: "Stereoscopic",
            "data-stereoscopic-button": !0
        })
    };
const sp = ({
        onFocus: e
    }) => {
        const t = Cn(xn.EXCLUDE_GLOBAL_BUTTON_STYLES, "ChromecastButton_module_chromecastButton__81800f73", "ControlBarButton_module_controlBarButton__576b5a13", Fd.focusable, Mn.VP_CAST_BUTTON);
        return (() => {
            const [e, t] = Pe(!1);
            Ie(() => {
                setTimeout(() => t(!0), 500)
            }, [])
        })(), De(Rd, {
            id: "chromecast-control-bar-button-tooltip",
            tooltipContent: "GoogleCast",
            children: De("button", {
                className: t,
                is: "google-cast-button",
                "data-chromecast-button": !0,
                onFocus: e
            })
        })
    },
    lp = ({
        onFocus: e
    }) => {
        const t = ic(),
            n = ad(e => e.displayList.transcript),
            i = ad(e => e.toggleDisplayList),
            {
                onClick: o,
                onKeyDown: r
            } = Kl(() => {
                i("transcript"), t(vr.EMBEDDED_TRANSCRIPT_CLICK, {
                    name: n ? "exit_embed_transcript" : "open_embed_transcript",
                    copy: "Transcript",
                    location: "control_bar",
                    element: "transcript_button",
                    current_transcript_language: ""
                })
            }),
            a = De(vd, {
                name: n ? mc.TRANSCRIPT_ON : mc.TRANSCRIPT_OFF
            }),
            s = n ? [Vn.TRANSCRIPT_VIEWER, Bn.RIGHT_CONTENT_AREA].join(" ") : Bn.RIGHT_CONTENT_AREA;
        return De(Zu, {
            id: Vn.TRANSCRIPT_CONTROL_BAR_BUTTON,
            onClick: o,
            onKeyDown: r,
            onFocus: e,
            icon: a,
            tooltipLabel: "Transcript",
            "aria-controls": s,
            "aria-expanded": n,
            "aria-haspopup": "true"
        })
    };
const cp = () => {
    const e = ad(e => e.displayList.controlBarButtons),
        t = ad(e => e.setDisplayList),
        n = ad(e => e.setControlBar),
        i = e ? "Hide controls" : "Show controls",
        o = Cn("CollapseButton_module_collapseButton__16e921a7", e && "CollapseButton_module_expanded__16e921a7");
    return De(Zu, {
        onClick: () => {
            const i = !e;
            n("shouldRestoreButtonsDisplayed", i), t("controlBarButtons", i)
        },
        tooltipLabel: i,
        tabIndex: 0,
        icon: De(vd, {
            "data-collapse-icon": !0,
            name: mc.CHEVRON_RIGHT,
            className: o
        })
    })
};
const dp = ({
        className: e
    }) => {
        const t = ad(e => e.displayList.controlBar),
            n = ad(e => e.displayList.accessGate),
            i = ad(e => e.appearance.playerSizeMode) === vi.TINY,
            o = ad(e => e.embed.customLogo),
            r = ad(e => e.displayList.ad),
            {
                customLogoUrl: a,
                customLogoImg: s,
                customLogoSticky: l
            } = ad(e => e.embed.customLogoFields),
            c = ad(e => e.user.ownerName),
            d = ad(e => e.controlBar.progressBarExpanded),
            u = o && !i && !r,
            p = !n && (l || t),
            _ = Cn(Mn.CUSTOM_LOGO, "CustomLogo_module_customLogo__76e31d5e", a ? "CustomLogo_module_link__76e31d5e" : "", Fd.focusable, e, d && "CustomLogo_module_progressExpanded__76e31d5e"),
            v = Cn("CustomLogo_module_customLogoImg__76e31d5e", d && "CustomLogo_module_progressExpanded__76e31d5e");
        return u && De(dd, {
            visible: !!p,
            children: De(Ud, {
                classNames: _,
                imgClassNames: v,
                url: a,
                img: s,
                imgAlt: c
            })
        })
    },
    up = ({
        className: e,
        marker: t
    }) => {
        const n = ad(e => e.setPlayback),
            i = ad(e => e.playback.currentFragment),
            o = (t.startTime - i.startTime) / i.duration * 100,
            r = e => n("currentTime", e.path[0].dataset.time),
            a = "Seek to " + Math.round(100 * t.startTime) / 100 + " seconds.";
        return De("div", {
            id: `cuepoint-${t.id}`,
            className: e,
            style: {
                left: `${o}%`
            },
            "data-time": t.startTime,
            role: "button",
            "aria-label": a,
            tabIndex: 0,
            onClick: r,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && r(e)
            },
            "data-cue-point-marker": !0
        })
    };
const pp = () => {
    const e = ad(e => e.playback.currentFragment),
        t = ad(e => e.cuePoints.cuePoints),
        n = ad(e => e.displayList.progressBar),
        i = Cn("CuePointMarkers_module_cuePoints__335917cf", Fd.focusableMarker, Mn.CUEPOINT),
        o = t.filter(t => e.startTime <= t.time && t.time <= e.endTime).map(e => ({
            id: e.id,
            startTime: e.time
        })),
        r = !!o.length && n;
    return De(Ge, {
        children: r && o.map(e => De(up, {
            className: i,
            marker: e
        }, e.startTime))
    })
};
const _p = () => {
    const e = ad(e => e.playback.currentTime),
        t = ad(e => e.playback.currentFragment),
        n = ad(e => e.liveEvent.isLiveEvent),
        i = ad(e => e.liveEvent.isArchived),
        o = ad(e => e.playback.liveEdgeTime),
        r = ad(e => e.playback.liveTailTime),
        a = ad(e => e.playback.atLiveEdge),
        s = ad(e => e.displayList.progressBar),
        l = An(e, t),
        c = {
            progressBar: "Progress Bar",
            ariaTextVOD: ei(l) + " of " + ei(t.duration),
            ariaTextLiveEdge: "Live time at " + ei(o),
            ariaTextLiveDVR: ei(Math.abs(o - l)) + " behind Live"
        };
    let d = c.ariaTextVOD,
        u = 0,
        p = t.duration;
    return n && !i && (d = a ? c.ariaTextLiveEdge : c.ariaTextLiveDVR, u = Math.round(r), p = Math.round(o)), De("div", {
        className: `FocusTarget_module_focusTarget__02e194b8 ${Fd.focusable}`,
        role: "slider",
        "aria-label": c.progressBar,
        "aria-valuemin": u,
        "aria-valuemax": p,
        "aria-valuenow": Math.round(l),
        "aria-valuetext": d,
        tabIndex: s ? 0 : -1,
        "data-progress-bar-focus-target": !0
    })
};
const vp = ({
        marker: e,
        setTabFocused: t,
        setHoverFocused: n
    }) => {
        const i = ad(e => e.setPlayback),
            o = ad(e => e.playback.currentFragment),
            r = (e.start - o.startTime) / o.duration,
            a = {
                visibleLabel: e.visibleLabel,
                ariaLabel: e.ariaLabel,
                id: e.id,
                start: e.start,
                left: r
            },
            s = Cn("InteractiveMarker_module_interactiveMarker__85b33dd7", Mn.VP_INTERACTIVE_MARKER, Fd.focusableMarker);

        function l(e) {
            i("currentTime", e.path[0].dataset.time, {
                action: e.type,
                seekType: "interactive-marker"
            })
        }
        return De("div", {
            className: s,
            role: "button",
            style: {
                left: Pn(r, !1)
            },
            "aria-label": e.ariaLabel,
            "data-time": e.start,
            tabIndex: 0,
            onClick: l,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && l(e)
            },
            onMouseEnter: () => n(a),
            onMouseLeave: () => n(null),
            onFocus: () => t(a),
            onBlur: () => t(null),
            "data-hotspot-marker": !0
        })
    },
    mp = ({
        markers: e,
        setHoverFocused: t,
        setTabFocused: n
    }) => {
        const i = ad(e => e.displayList.progressBar);
        return De(Ge, {
            children: i && e.map(e => De(vp, {
                marker: e,
                setTabFocused: n,
                setHoverFocused: t
            }, e.start))
        })
    };
const fp = ({
        time: e,
        left: t,
        visible: n = !0,
        disabled: i = !1
    }) => De(dd, {
        visible: n,
        children: De("div", {
            className: "Timecode_module_timecodeContainer__6a968513",
            role: "presentation",
            style: {
                left: t
            },
            "aria-hidden": "true",
            "data-progress-bar-timecode-container": !0,
            children: De("div", {
                className: `Timecode_module_timecode__6a968513 ${i?"Timecode_module_disabled__6a968513":""}`,
                "data-progress-bar-timecode": !0,
                children: ei(e)
            })
        })
    }),
    hp = () => {
        const e = ad(e => e.playback.currentTime),
            t = ad(e => e.playback.liveEdgeTime),
            n = ad(e => e.playback.liveTailTime),
            i = ad(e => e.playback.atLiveEdge),
            o = ad(e => e.playback.currentFragment),
            r = ad(e => e.playback.playInitiated),
            a = ad(e => e.playback.paused),
            s = ad(e => e.playback.buffering),
            l = ad(e => e.displayList.progressBar),
            c = ad(e => e.liveEvent.isLiveEvent),
            d = ad(e => e.liveEvent.dvrEnabled),
            u = ad(e => e.liveEvent.isEnded),
            p = ad(e => e.liveEvent.isArchived),
            [_, v] = Pe(c ? t : o.duration),
            m = c && !p ? 1 : 0,
            [f, h] = Pe(m);
        Ie(() => {
            const a = An(e, o);
            if (c)
                if (d) {
                    if (d) {
                        const a = u && !r && 0 === e,
                            s = p && 0 !== o.duration;
                        a ? (v(o.duration), h(0)) : s ? (v(e), h(e / o.duration)) : i ? (h(1), v(e)) : (h(Nn(e, n, t)), v(e - t))
                    }
                } else p && (r || 0 !== e) ? (h(Sn(e, o)), v(a)) : p ? (v(o.duration), h(m)) : (h(1), v(e));
            else r || 0 !== a ? (h(Sn(e, o)), v(a)) : (v(o.duration), h(m))
        }, [e, r, o, c, u, p, t, i]);
        const g = (!c || p || d && 0 !== t || !a && !s && 0 !== t) && !isNaN(_) && l;
        return De(fp, {
            time: _,
            left: Pn(f, !1),
            disabled: c && !d,
            visible: g
        })
    };
const gp = {
        xs: 120,
        md: 160,
        xl: 200
    },
    bp = ({
        visible: e = !1,
        mousePercent: t = 0,
        progressBarWidth: n,
        isMousedOverProgress: i = !1,
        tabOrHoverFocusedMarker: o = null
    }) => {
        const r = ad(e => e.displayList.menu),
            a = ad(e => e.playback.currentFragment),
            s = ad(e => e.playback.duration),
            l = ad(e => e.playback.liveEdgeTime),
            c = ad(e => e.playback.liveTailTime),
            d = ad(e => e.liveEvent.isLiveEvent),
            u = ad(e => e.liveEvent.dvrEnabled),
            p = ad(e => e.liveEvent.isArchived),
            _ = ad(e => e.appearance.boundingClientRect),
            v = ad(e => e.appearance.isVerticalVideo),
            m = ad(e => e.appearance.playerBreakpoint),
            f = ad(e => e.verifyConfig),
            h = ad(e => e.chapters.chapters),
            g = ad(e => e.embed.chapters),
            b = ad(e => e.controlBar.thumbnailPreview),
            y = ad(e => e.playback.isSegmentedPlaybackEnabled),
            [C, T] = Pe({
                width: 0,
                height: 0,
                backgroundImage: "",
                backgroundSize: "",
                backgroundPosition: ""
            }),
            [L, w] = Pe(!1),
            A = _.height > 300 && n >= 185,
            S = 0 !== l && !isNaN(l);
        let I = A && !r && (!d || u && S) && e;
        const [P, O] = Pe(0);
        i ? O(t) : o ? O(o.left) : I = !1;
        const k = On(P, a);
        let R;
        R = u ? p && 0 !== a.duration ? kn(P, a) : ((e, t, n) => Rn(e, t, n) - n)(P, c, l) : kn(P, a), isNaN(R) && (I = !1);
        let N = "";
        if (h.length && g && !y) {
            const e = h.find(e => e.startTime <= k && e.endTime >= k);
            N = (null == e ? void 0 : e.text) || ""
        }
        const D = (null == o ? void 0 : o.visibleLabel) || "",
            M = ((e, t) => gp[e] * (t ? 9 / 16 : 1))((e => {
                switch (e) {
                    case Qo.XL:
                    case Qo.XXL:
                        return "xl";
                    case Qo.SM:
                    case Qo.MD:
                    case Qo.LG:
                        return "md";
                    default:
                        return "xs"
                }
            })(m), v),
            x = M / (null == b ? void 0 : b.frame_width);
        return Ie(() => {
            !L && A && e && b && f().then(() => Vr(b.url).then(() => {
                w(!0), T({
                    width: b.frame_width * x,
                    height: b.frame_height * x,
                    backgroundImage: `url(${b.url})`,
                    backgroundSize: `${b.width*x}px ${b.height*x}px`,
                    backgroundPosition: ""
                })
            })).catch(() => {})
        }, [e, L, A, b, x, f]), Ie(() => {
            w(!1)
        }, [b]), Ie(() => {
            b && T(e => E(E({}, e), {}, {
                width: b.frame_width * x,
                height: b.frame_height * x,
                backgroundSize: `${b.width*x}px ${b.height*x}px`
            }))
        }, [m]), Ie(() => {
            if (b && A) {
                let e = 0,
                    t = 0;
                if (b) {
                    const n = s / b.frames,
                        i = Math.min(b.frames - 1, Math.ceil(k / n)),
                        o = i % b.columns,
                        r = Math.floor(i / b.columns);
                    e = -o * b.frame_width * x, t = -r * b.frame_height * x
                }
                T(n => E(E({}, n), {}, {
                    backgroundPosition: `${e}px ${t}px`
                }))
            }
        }, [P, _, b, A, s, x, k]), De(dd, {
            visible: I,
            children: De("div", {
                className: `${Mn.THUMB_PREVIEW} ThumbnailPreview_module_thumbnailPreview__c559a995`,
                role: "presentation",
                "aria-hidden": "true",
                style: {
                    left: Pn(P, !1),
                    maxWidth: M
                },
                children: [!!C.backgroundImage && L && De("div", {
                    className: `${Mn.THUMB} ThumbnailPreview_module_thumbnailPreviewImage__c559a995`,
                    style: {
                        width: `${C.width}px`,
                        height: `${C.height}px`,
                        backgroundImage: C.backgroundImage,
                        backgroundSize: C.backgroundSize,
                        backgroundPosition: C.backgroundPosition
                    }
                }), De("div", {
                    className: "ThumbnailPreview_module_thumbnailPreviewText__c559a995",
                    children: [D && De("span", {
                        className: "ThumbnailPreview_module_text__c559a995",
                        children: D
                    }), D && N && De("span", {
                        className: "ThumbnailPreview_module_separator__c559a995"
                    }), N && De("span", {
                        className: "ThumbnailPreview_module_text__c559a995",
                        children: N
                    }), De("span", {
                        className: "ThumbnailPreview_module_time__c559a995",
                        children: ei(R)
                    })]
                })]
            })
        })
    };
const Ep = ({
    segment: e,
    isExpanded: t
}) => {
    const n = ad(e => e.playback.currentFragment),
        i = ad(e => e.playback.loadedTime),
        o = ad(e => e.playback.currentTime),
        r = ad(e => e.playback.liveEdgeTime),
        a = ad(e => e.playback.liveTailTime),
        s = ad(e => e.playback.atLiveEdge),
        l = ad(e => e.liveEvent.isLiveEvent),
        c = ad(e => e.liveEvent.dvrEnabled),
        d = ad(e => e.liveEvent.isPlayable),
        u = ad(e => e.liveEvent.isArchived),
        p = ad(e => e.liveEvent.isEnded),
        _ = ad(e => e.playback.playInitiated),
        v = l && !u,
        m = 0 !== r && !isNaN(r);
    let f, h;
    const g = l ? 1 : ((e, t) => (e.endTime - e.startTime) / t.duration)(e, n);
    if (l)
        if (c) {
            if (c) {
                const t = p && !_ && 0 === o,
                    l = u && 0 !== n.duration;
                t ? (f = 0, h = 0) : l ? (f = In(i, e), h = In(o, e)) : s ? (f = 1, h = 1) : (f = Nn(i, a, r), h = Nn(o, a, r))
            }
        } else u ? (f = In(i, e), h = In(o, e)) : (f = d ? 1 : 0, h = 0);
    else f = In(i, e), h = In(o, e);
    const b = Pn(g, !1),
        E = Pn(h, !1),
        y = Pn(f),
        C = Cn("ChapterSegment_module_chapterWrapper__d4d891b5", v && (!c || !m) && "ChapterSegment_module_disabled__d4d891b5", t && "ChapterSegment_module_expanded__d4d891b5"),
        T = e.startTime === n.startTime ? 0 : 2;
    return De("div", {
        className: C,
        style: {
            width: `calc(${b} - ${T}px)`
        },
        children: De("div", {
            className: "ChapterSegment_module_chapter__d4d891b5",
            children: [De("div", {
                className: `ChapterSegment_module_loaded__d4d891b5 ${n.duration<60?"ChapterSegment_module_shortVideo__d4d891b5":""}`,
                style: {
                    width: y
                },
                "data-progress-bar-loaded": !0
            }), De("div", {
                className: "ChapterSegment_module_played__d4d891b5",
                style: {
                    width: E
                },
                "data-progress-bar-played": !0
            })]
        })
    })
};
const yp = ({
    hoveredChapterId: e
}) => {
    const t = ad(e => e.playback.currentFragment),
        n = ad(e => e.chapters.chapters),
        i = ad(e => e.embed.chapters),
        o = ad(e => e.appearance.playerBreakpoint),
        r = ad(e => e.playback.isSegmentedPlaybackEnabled),
        a = ad(e => e.controlBar.progressBarExpanded);
    let s;
    return s = o === Qo.XXS || !i || r ? [{
        startTime: t.startTime,
        endTime: t.endTime
    }] : ((e, t) => {
        const n = Dn(e, t);
        let i = [];
        return 0 === n.length ? i.push({
            startTime: t.startTime,
            endTime: t.endTime
        }) : n.forEach((e, o) => {
            let r = e.startTime,
                a = e.endTime;
            0 === o && e.startTime > t.startTime && i.push({
                startTime: t.startTime,
                endTime: e.startTime
            }), 0 === o && e.startTime < t.startTime && (r = t.startTime), o === n.length - 1 && e.endTime > t.endTime && (a = t.endTime), i.push({
                startTime: r,
                endTime: a,
                chapterId: e.startTime
            })
        }), i
    })(n, t), De("div", {
        className: "ChapterSegments_module_chapterSegmentsWrapper__6e982b76",
        children: s.map(t => De(Ep, {
            segment: t,
            isExpanded: a || t.chapterId === e
        }, t.startTime))
    })
};
const Cp = ({
    hoveredChapterId: t
}) => {
    var n, i;
    const r = ad(e => e.config),
        a = ad(e => e.chapters.chapters),
        s = ad(e => e.embed.chapters),
        l = ad(e => e.playback.currentFragment),
        c = ad(e => e.playback.liveEdgeTime),
        d = ad(e => e.playback.liveTailTime),
        u = ad(e => e.liveEvent.isLiveEvent),
        p = ad(e => e.liveEvent.isArchived),
        _ = ad(e => e.liveEvent.dvrEnabled),
        v = ad(e => e.playback.atLiveEdge),
        f = ad(e => e.controlBar.progressBarExpanded),
        h = ad(e => e.displayList.progressBar),
        g = ad(e => e.setControlBar),
        b = ad(e => e.setPlayback),
        y = ad(e => e.element),
        C = ad(e => e.interactive.hotspots),
        T = ad(e => e.interactive.polls),
        L = ad(e => e.interactive.showMarkers),
        w = ic(),
        [A, S] = Pe(!1),
        [I, P] = Pe(!1),
        [O, k] = Pe(0),
        [R, N] = Pe(null),
        [D, M] = Pe(null),
        [x, B] = Pe(null),
        V = null == (n = r.request.ab_tests) || null == (i = n.small_player_redesign) ? void 0 : i.group,
        U = Oe(null),
        F = Oe(!1),
        H = Oe(!1),
        G = Oe(!1),
        W = Oe(null),
        Y = Oe(null),
        [q, $] = Pe(Ln(null == W ? void 0 : W.current)),
        K = Oe(q);

    function j() {
        const e = Ln(null == W ? void 0 : W.current);
        $(e), K.current = e
    }
    const z = q.rightOffsetValue - q.leftOffsetValue;
    vc(W, () => {
        j()
    });
    const X = Oe(v),
        Z = Oe(p);
    Ie(() => {
        X.current = v, Z.current = p
    }, [v, p]);
    const J = (e, t = 3) => At(Et((e - K.current.leftOffsetValue) / (K.current.rightOffsetValue - K.current.leftOffsetValue), 0, 1), t),
        Q = e => {
            e ? y.classList.add("scrubbing") : y.classList.remove("scrubbing")
        };

    function ee(e) {
        const {
            clientX: t
        } = e, n = J(t);
        k(n)
    }

    function te(e) {
        if (2 === (null == e ? void 0 : e.button) || (null == e ? void 0 : e.ctrlKey)) return;
        if (b("scrubbing", !0), Q(!0), "pointerdown" === e.type || "MSPointerDown" === e.type) {
            N(e.pointerId);
            try {
                e.target.msSetPointerCapture ? e.target.msSetPointerCapture(R) : e.target.setPointerCapture(R)
            } catch (De) {}
            document.addEventListener("pointermove", ne), document.addEventListener("pointerup", ie)
        } else "touchstart" === e.type ? (document.addEventListener("touchmove", ne), document.addEventListener("touchend", ie), V && (clearTimeout(U.current), g("progressBarExpanded", !0), G.current || (F.current = !0))) : (document.addEventListener("mousemove", ne), document.addEventListener("mouseup", ie));
        const t = wn(e),
            n = J(t),
            i = !_ || p && 0 !== l.duration ? On(n, l) : Rn(n, d, c);
        b("currentTime", i), (e => {
            if (!a.length || !s) return;
            const t = ((e, t) => t.reduce((t, n) => {
                if (null === t) return n;
                const i = n.startTime - e,
                    o = t.startTime - e;
                return Math.abs(i) > Math.abs(o) ? t : n
            }, null))(e, a);
            if (!t) return;
            const n = t.startTime,
                i = e - n,
                o = Math.abs(i) <= 5,
                r = Dn(a, l);
            w(vr.CHAPTER_SEGMENT_CLICK, {
                seek_event_start_time: e,
                is_chapter_seek: o,
                nearest_chapter_start_time: n,
                chapter_seek_event_delta: i,
                total_no_chapters_at_seek: a.length,
                fragment_no_chapters_at_seek: r.length
            })
        })(i)
    }

    function ne(e) {
        if (R && R !== e.pointerId || !1 === e.isPrimary) return;
        if (F.current) return;
        const t = wn(e),
            n = J(t),
            i = !_ || p && 0 !== l.duration ? On(n, l) : Rn(n, d, c);
        b("currentTime", i), k(n)
    }

    function ie(e) {
        const t = e.type;
        "pointerup" === t || "MSPointerUp" === t ? (document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", ie), N(null)) : "touchend" === t ? (document.removeEventListener("touchmove", ne), document.removeEventListener("touchend", ie), V && (F.current = !1, clearTimeout(U.current), G.current ? U.current = setTimeout(() => {
            H.current = !0, g("progressBarExpanded", !1)
        }, 250) : (H.current = !0, g("progressBarExpanded", !1)))) : (document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", ie)), b("scrubbing", !1), Q(!1), _ && !Z.current && w(X.current ? vr.SEEK_TO_LIVE_EDGE : vr.SEEK_BEHIND_LIVE_EDGE)
    }
    Ie(() => () => {
        document.removeEventListener("touchmove", ne), document.removeEventListener("touchend", ie), document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", ie), document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", ie)
    }, []);
    let oe = {};
    (!u || _ && c || p) && (oe = o.pointerEvents ? {
        onPointerDown: te
    } : {
        onTouchStart: te,
        onMouseDown: te
    });
    const re = function({
            hotspots: t = [],
            polls: n = [],
            fragment: i,
            progressBarWidth: o
        }) {
            const r = function(t, n) {
                return [].concat(e(t.map(e => ({
                    id: e.hotspotId,
                    label: "Hotspot",
                    start: e.start,
                    visibleLabel: e.name,
                    ariaLabel: e.name,
                    name: e.name
                }))), e(n.map(e => ({
                    id: e.pollId,
                    label: "Poll",
                    name: e.questionText,
                    visibleLabel: e.questionText,
                    ariaLabel: e.questionText,
                    start: e.start
                }))))
            }(t, n);
            let a, s = 1,
                l = [],
                c = [];
            return r.sort((e, t) => e.start - t.start).reduce((e, t) => {
                let {
                    label: n
                } = t, r = m(t, ["label"]);
                if (!(i.startTime <= r.start && r.start <= i.endTime)) return e;
                if ("Hotspot" === n ? r.visibleLabel = "Hotspot: " + r.name : "Poll" === n && (r.visibleLabel = "Poll: " + r.name), r.ariaLabel = r.visibleLabel, r.leftPositionInProgressBar = function(e) {
                        return (e - i.startTime) / i.duration * 100
                    }(r.start), "Poll" === n ? l.push(r.name) : "Hotspot" === n && c.push(r.name), !e.length) return function(e, t, n) {
                    return e.push(t), a = n, e
                }(e, r, n);
                const d = e.length - 1,
                    u = function(e, t, n, i) {
                        const o = Xo(e, n, i),
                            r = Xo(t, n, i);
                        return Math.floor(r - o)
                    }(e[d].start - i.startTime, r.start - i.startTime, i.duration, o);
                return !isNaN(u) && u <= 5 ? (s += 1, n !== a ? function(e, t) {
                    a = "Hotspots & Polls", e[t].visibleLabel = "Hotspots & Polls", e[t].name = "Hotspots & Polls", e[t].ariaLabel = c.length + " hotspots: " + c.join(", ") + "; " + l.length + " polls: " + l.join(", ")
                }(e, d) : "Hotspot" === n ? function(e, t, n) {
                    e[t].visibleLabel = s + " hotspots", e[t].name += `, ${n.name}`, e[t].ariaLabel = s + " hotspots: " + e[t].name
                }(e, d, r) : "Poll" === n && function(e, t, n) {
                    e[t].visibleLabel = s + " polls", e[t].name += `, ${n.name}`, e[t].ariaLabel = s + " polls: " + e[t].name
                }(e, d, r)) : isNaN(u) || function(e, t, n) {
                    s = 1, e.push(t), a = n, l = [], c = []
                }(e, r, n), e
            }, [])
        }({
            hotspots: C,
            polls: T,
            fragment: l,
            progressBarWidth: z
        }),
        ae = !!re.length && L,
        se = Cn("ProgressBar_module_progressBarContainer__9eba6da5", !h && "ProgressBar_module_progressHidden__9eba6da5", V && f && "ProgressBar_module_progressExpanded__9eba6da5"),
        le = Cn(Mn.VP_PROGRESS, "ProgressBar_module_progressBar__9eba6da5");
    return De("div", {
        className: se,
        ref: Y,
        onTransitionEnd: function(e) {
            V && e.target === (null == Y ? void 0 : Y.current) && "flex-shrink" === e.propertyName && (F.current ? G.current = !0 : H.current && (G.current = !1), F.current = !1, H.current = !1)
        },
        children: De("div", E(E({
            className: le,
            "data-progress-bar": !0,
            ref: W,
            onMouseEnter: e => {
                j(), ee(e), P(!0)
            },
            onMouseMove: e => {
                ee(e), S(!1), M(null)
            },
            onMouseLeave: () => P(!1),
            onFocus: () => S(!0),
            onBlur: () => S(!1),
            role: "presentation"
        }, oe), {}, {
            children: [De(_p, {}), De(yp, {
                hoveredChapterId: t
            }), De(pp, {}), ae && De(mp, {
                markers: re,
                setTabFocused: M,
                setHoverFocused: B
            }), De(bp, {
                visible: I || A,
                mousePercent: O,
                isMousedOverProgress: I,
                progressBarWidth: z,
                tabOrHoverFocusedMarker: D || x
            }), De(hp, {})]
        }))
    })
};
const Tp = ({
        setMenuDisplayed: e
    }) => {
        const t = ad(e => e.setDisplayList);
        return De(Yd, {
            className: `${Mn.VP_MENU_INFO} DebugPanelButton_module_debugPanelButton__9fb56da2`,
            onClick: () => {
                e(!1), t("debugPanel", !0)
            },
            icon: De(vd, {
                className: "DebugPanelButton_module_debugPanelButtonIcon__9fb56da2",
                name: mc.INFO_CIRCLE
            }),
            color: tr.ALTERNATIVE,
            iconSize: er.XS,
            "aria-haspopup": "dialog",
            children: De(Vd, {
                className: "DebugPanelButton_module_debugPanelButtonText__9fb56da2",
                children: "Debug log"
            })
        })
    },
    Lp = {
        [Xl.EMPTY]: () => De(Ge, {}),
        [Xl.PREFS]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => {
            const n = ad(e => e.embed.speedChangeEnabled),
                i = ad(e => e.embed.multipleAudioTracks),
                r = ad(e => e.embed.quality),
                a = ad(e => e.playback.qualities),
                s = ad(e => e.playback.currentQuality),
                l = ad(e => e.playback.playbackRates),
                c = ad(e => e.playback.audioTracks),
                d = r && (null == a ? void 0 : a.length) > 0,
                u = i && (null == c ? void 0 : c.length) > 1,
                p = (e = []) => {
                    var t;
                    return null == (t = e.find(e => e.active)) ? void 0 : t.label
                },
                _ = p(l),
                v = {
                    quality: {
                        label: "Quality",
                        value: "Auto" === s ? "Auto" : s,
                        onSelect: () => e(Xl.QUALITY)
                    },
                    speed: {
                        label: "Speed",
                        value: "Normal" === _ ? "Normal" : _,
                        onSelect: () => e(Xl.SPEED)
                    },
                    audio: {
                        label: "Audio",
                        value: p(c),
                        onSelect: () => e(Xl.AUDIO)
                    }
                };
            return De(Ge, {
                children: [d && De(yd, E({}, v.quality)), n && De(yd, E({}, v.speed)), u && De(yd, E({}, v.audio)), o.touch && De(Ge, {
                    children: [De(gd, {
                        buffer: !0
                    }), De(Tp, {
                        setMenuDisplayed: t
                    })]
                })]
            })
        },
        [Xl.QUALITY]: () => {
            const {
                qualities: e
            } = ad(e => e.playback), t = ad(e => e.setPlayback), n = e.map(e => E(E({}, e), {}, {
                label: "Auto" === e.label ? "Auto" : e.label
            }));
            return De(wd, {
                items: n,
                onSelect: e => t("qualities", e.currentTarget.dataset.id)
            })
        },
        [Xl.SPEED]: () => {
            const {
                playbackRates: e
            } = ad(e => e.playback), t = ad(e => e.setPlayback), n = e.map(e => E(E({}, e), {}, {
                label: "Normal" === e.label ? "Normal" : e.label
            }));
            return De(wd, {
                items: n,
                onSelect: e => t("playbackRates", e.currentTarget.dataset.id)
            })
        },
        [Xl.AUDIO]: () => {
            var e;
            const t = ad(e => e.playback.audioTracks),
                n = ad(e => e.setPlayback),
                i = ic(),
                o = Oe(!1),
                r = Oe(null == (e = t.find(e => e.enabled)) ? void 0 : e.label);
            return Ie(() => (i(vr.MULTI_AUDIO_TRACK_CLICK, {
                event_name: "audio_menu_opened",
                has_selected_track: o.current,
                initial_track: r.current
            }), () => {
                i(vr.MULTI_AUDIO_TRACK_CLICK, {
                    event_name: "audio_menu_closed",
                    has_selected_track: o.current,
                    initial_track: r.current
                })
            }), [i]), De(wd, {
                items: t,
                onSelect: e => {
                    n("audioTracks", e.currentTarget.dataset.id), o.current = !0, i(vr.MULTI_AUDIO_TRACK_CLICK, {
                        event_name: "select_audio_track",
                        track_selected: e.currentTarget.innerText,
                        has_selected_track: o.current,
                        initial_track: r.current
                    })
                }
            })
        }
    },
    wp = {
        [Xl.EMPTY]: () => De(Ge, {}),
        [Xl.QUALITY]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => De(bd, {
            title: "Quality",
            onBack: () => e(Xl.PREFS),
            setMenuDisplayed: t
        }),
        [Xl.SPEED]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => De(bd, {
            title: "Speed",
            onBack: () => e(Xl.PREFS),
            setMenuDisplayed: t
        }),
        [Xl.PREFS]: ({
            setMenuDisplayed: e
        }) => ad(e => e.appearance.isMenuBlockingUI) && De(bd, {
            title: "Settings",
            setMenuDisplayed: e
        }),
        [Xl.AUDIO]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => De(bd, {
            title: "Audio",
            onBack: () => e(Xl.PREFS),
            setMenuDisplayed: t
        })
    },
    Ap = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i
    }) => {
        const o = Xl.PREFS,
            [r, a] = Pe(o),
            s = ad(e => e.playback.playbackRates);
        $l({
            isMenuDisplayed: e,
            defaultPanel: o,
            setPanel: a
        });
        const l = (e => Lp[e] || Lp[Xl.EMPTY])(r),
            c = (e => wp[e] || wp[Xl.EMPTY])(r),
            d = r === Xl.SPEED ? s.length : null;
        return De(md, {
            ariaLabel: "Settings",
            type: zl.PREFS,
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: r,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: Ai.PrefsMenu,
            panelContent: De(l, {
                setPanel: a,
                setMenuDisplayed: t
            }),
            headerContent: De(c, {
                setPanel: a,
                setMenuDisplayed: t
            }),
            resizeDependencies: d
        })
    },
    Sp = ({
        setMenuDisplayed: e
    }) => ad(e => e.appearance.isMenuBlockingUI) && De(bd, {
        title: "Chapters",
        setMenuDisplayed: e
    });
const Ip = ({
    linkUrl: e,
    hoverStyles: t,
    chapterId: n
}) => {
    const i = Oe(null),
        r = Oe(null),
        [a, s] = Pe(!1),
        l = Cn(o.touch && "CopyLinkButton_module_touchDevice__383c503d", "CopyLinkButton_module_copyLinkButton__383c503d", t),
        c = () => {
            clearTimeout(i.current), clearTimeout(r.current)
        },
        d = ic(),
        u = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function(t) {
            return t.preventDefault(), t.stopPropagation(),
                function(e, t, n) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(fn(e), (function() {
                    d(vr.SHARE_CHAPTER, {
                        chapter_id: n
                    }), s(!0), c(), i.current = setTimeout(() => s(!1), 2e3)
                }))
        }));
    return De(Rd, {
        id: "copy-link-button-tooltip",
        tooltipContent: a || o.touch ? De("span", {
            className: "CopyLinkButton_module_linkCopied__383c503d",
            children: [De(vd, {
                name: mc.CHECKMARK,
                className: "CopyLinkButton_module_linkCopiedIcon__383c503d"
            }), "Link copied"]
        }) : "Copy link",
        visible: a,
        position: Od.LEFT,
        margin: 4,
        preventFocusOnClick: !0,
        children: De(Yd, {
            icon: De("div", {
                className: "CopyLinkButton_module_shareIconContainer__383c503d",
                children: De(vd, {
                    name: mc.LINK
                })
            }),
            iconSize: er.MD,
            className: l,
            onMouseLeave: () => {
                c(), r.current = setTimeout(() => s(!1), 150)
            },
            onClick: u
        })
    })
};
const Pp = ({
        startTime: e,
        id: t,
        chapterId: n,
        active: i,
        label: o,
        onMouseEnter: r,
        onMouseLeave: a,
        onSelect: s
    }) => {
        const {
            onClick: l,
            onKeyDown: c
        } = Kl(s), d = Cn("ChaptersPanelMenuOption_module_chapterListItem__1f9eae05", i && "ChaptersPanelMenuOption_module_active__1f9eae05"), u = Cn(i && "ChaptersPanelMenuOption_module_active__1f9eae05", "ChaptersPanelMenuOption_module_chapterListButton__1f9eae05", xn.EXCLUDE_GLOBAL_BUTTON_STYLES), p = ad(e => e.embed.parentUrl), _ = ad(e => e.chapters.chapterShareBaseUrl), v = ad(e => e.debug.clipId), m = p ? function(e, t, n) {
            const [i] = n.split("#");
            return `${i}#vimeo_chapter_${e}=${t}`
        }(v, n, p) : function(e, t) {
            if (!t) return "";
            const [n] = t.split("#");
            return `${n}#chapter=${e}`
        }(n, _);
        return De("li", {
            className: d,
            children: [De("button", E(E({
                "data-id": t,
                "data-testid": "chapter-list-item-button",
                tabIndex: 0,
                className: u,
                onClick: l,
                onKeyDown: c,
                onMouseEnter: r,
                onMouseLeave: a
            }, kd), {}, {
                children: De("div", {
                    className: "ChaptersPanelMenuOption_module_chapterInfoContainer__1f9eae05",
                    children: [De("div", {
                        className: "ChaptersPanelMenuOption_module_chapterTitleText__1f9eae05",
                        children: o
                    }), De("div", {
                        className: "ChaptersPanelMenuOption_module_chapterStartTime__1f9eae05",
                        children: ei(e)
                    })]
                })
            })), m && De(Ip, {
                linkUrl: m,
                chapterId: n,
                hoverStyles: "ChaptersPanelMenuOption_module_copyLinkButton__1f9eae05"
            })]
        }, t)
    },
    Op = ({
        setMenuDisplayed: e,
        onMenuOptionMouseEnter: t,
        onMenuOptionMouseLeave: n
    }) => {
        const i = ad(e => e.events),
            o = ad(e => e.chapters.chapters),
            r = ad(e => e.chapters.activeCueId),
            a = o.map(e => ({
                label: e.text,
                id: e.cueId,
                active: e.cueId === r,
                startTime: e.startTime,
                chapterId: e.chapterId
            }));
        return De(wd, {
            items: a,
            onSelect: t => {
                const n = t.currentTarget.dataset.id;
                "string" == typeof n && i.fire(Kt._chapterSeekAttempted, parseFloat(n) + .001, "menu"), e(!1)
            },
            onMenuOptionMouseEnter: t,
            onMenuOptionMouseLeave: n,
            itemComponent: Pp
        })
    },
    kp = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        onMenuOptionMouseEnter: o,
        onMenuOptionMouseLeave: r
    }) => De(md, {
        type: zl.CHAPTERS,
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        panel: Xl.CHAPTERS,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        panelContent: De(Op, {
            setMenuDisplayed: t,
            onMenuOptionMouseEnter: o,
            onMenuOptionMouseLeave: r
        }),
        headerContent: De(Sp, {
            setMenuDisplayed: t
        })
    });
const Rp = () => {
    const e = ad(e => e.captions.fontSize),
        t = ad(e => e.captions.fontFamily),
        n = ad(e => e.captions.fontOpacity),
        i = ad(e => e.captions.color),
        o = ad(e => e.captions.bgColor),
        r = ad(e => e.captions.bgOpacity),
        a = ad(e => e.captions.windowOpacity),
        s = ad(e => e.captions.windowColor),
        l = ad(e => e.captions.edgeStyle),
        c = ad(e => e.appearance.videoHeight);
    return De("div", {
        className: "PreviewWindow_module_previewWindow__c1bd3893",
        children: De("div", {
            className: "PreviewWindow_module_checkeredBackground__c1bd3893",
            children: De(zd, {
                cues: [{
                    html: "This is a preview\n of a caption"
                }],
                fontSize: e,
                fontFamily: t,
                fontOpacity: n,
                color: i,
                bgColor: o,
                bgOpacity: r,
                windowOpacity: a,
                windowColor: s,
                edgeStyle: l,
                height: c
            })
        })
    })
};
const Np = ({
        updateMetricsPayload: e
    }) => {
        const t = ad(e => e.resetCaptionsStyles);
        return De(Yd, E(E({
            className: `${xn.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__bc4bf57a ${Fd.focusable}`,
            withActive: !1,
            styled: !1
        }, mn(() => {
            t(), e({
                has_reset_all: !0,
                final_action_reset_all: !0
            })
        })), {}, {
            children: De("span", {
                children: "Reset all"
            })
        }))
    },
    Dp = {
        [Xl.EMPTY]: () => De(Ge, {}),
        [Xl.LANGUAGES]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = ad(e => e.captions.textTracks),
                i = ad(e => e.setCaptions),
                {
                    isMenuBlockingUI: o,
                    isMenuVerticalVideoMode: r
                } = ad(e => e.appearance),
                a = o || r,
                s = {
                    customize: {
                        label: "Customize",
                        onSelect: () => {
                            e(Xl.CUSTOMIZE), t({
                                has_clicked_customize: !0
                            })
                        }
                    },
                    preview: {
                        label: "Preview",
                        onSelect: () => e(Xl.PREVIEW)
                    }
                };
            return De(Ge, {
                children: [De(wd, {
                    items: n,
                    onSelect: e => {
                        i("activeTextTrackId", e.currentTarget.dataset.id)
                    }
                }), De(gd, {
                    buffer: !0
                }), De(yd, E({}, s.customize)), a && De(Ge, {
                    children: [De(gd, {
                        buffer: !0
                    }), De(yd, E({}, s.preview))]
                })]
            })
        },
        [Xl.CUSTOMIZE]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = ad(e => e.appearance.isMenuBlockingUI),
                i = ad(e => e.appearance.isMenuVerticalVideoMode),
                o = n || i,
                r = {
                    font: {
                        label: "Font",
                        onSelect: () => {
                            e(Xl.FONT), t({
                                has_clicked_font: !0
                            })
                        },
                        size: Zl.SMALL
                    },
                    background: {
                        label: "Background",
                        onSelect: () => {
                            e(Xl.BACKGROUND), t({
                                has_clicked_background: !0
                            })
                        },
                        size: Zl.SMALL
                    },
                    window: {
                        label: "Window",
                        onSelect: () => {
                            e(Xl.WINDOW), t({
                                has_clicked_window: !0
                            })
                        },
                        size: Zl.SMALL
                    },
                    preview: {
                        label: "Preview",
                        onSelect: () => e(Xl.PREVIEW)
                    }
                };
            return De(Ge, {
                children: [De(yd, E({}, r.font)), De(yd, E({}, r.background)), De(yd, E({}, r.window)), De(Np, {
                    updateMetricsPayload: t
                }), o && De(Ge, {
                    children: [De(gd, {
                        buffer: !0
                    }), De(yd, E({}, r.preview))]
                })]
            })
        },
        [Xl.FONT]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = ad(e => e.setCaptions),
                i = ad(e => e.captions.fontSize),
                o = ad(e => e.captions.fontFamily),
                r = ad(e => e.captions.fontOpacity),
                a = ad(e => e.captions.color),
                s = ad(e => e.captions.edgeStyle),
                l = ad(e => e.appearance.isMenuBlockingUI),
                c = ad(e => e.appearance.isMenuVerticalVideoMode),
                d = l || c,
                u = Ma(),
                p = () => t({
                    has_changed_font: !0,
                    has_customized: !0,
                    final_action_reset_all: !1
                }),
                _ = {
                    fontFamily: {
                        label: u.fontFamily.title,
                        items: Tn(u.fontFamily.items, o),
                        onSelect: e => {
                            n("fontFamily", e.currentTarget.dataset.id), p()
                        }
                    },
                    color: {
                        label: u.color.title,
                        items: Tn(u.color.items, a),
                        onSelect: e => {
                            n("color", e.currentTarget.dataset.id), p()
                        }
                    },
                    fontSize: {
                        label: u.fontSize.title,
                        items: Tn(u.fontSize.items, `${i}`),
                        onSelect: e => {
                            n("fontSize", e.currentTarget.dataset.id), p()
                        }
                    },
                    fontOpacity: {
                        label: u.fontOpacity.title,
                        items: Tn(u.fontOpacity.items, r),
                        onSelect: e => {
                            n("fontOpacity", e.currentTarget.dataset.id), p()
                        }
                    },
                    edgeStyle: {
                        label: u.edgeStyle.title,
                        items: Tn(u.edgeStyle.items, s),
                        onSelect: e => {
                            n("edgeStyle", e.currentTarget.dataset.id), p()
                        }
                    },
                    preview: {
                        label: "Preview",
                        onSelect: () => e(Xl.PREVIEW)
                    }
                };
            return De(Ge, {
                children: [De(Ad, E({}, _.fontFamily)), De(Pd, E({}, _.color)), De(Id, E({}, _.fontSize)), De(Id, E({}, _.fontOpacity)), De(Ad, E({}, _.edgeStyle)), De(Np, {
                    updateMetricsPayload: t
                }), d && De(Ge, {
                    children: [De(gd, {}), De(yd, E({}, _.preview))]
                })]
            })
        },
        [Xl.BACKGROUND]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = ad(e => e.setCaptions),
                i = ad(e => e.captions.bgColor),
                o = ad(e => e.captions.bgOpacity),
                r = ad(e => e.appearance.isMenuBlockingUI),
                a = ad(e => e.appearance.isMenuVerticalVideoMode),
                s = r || a,
                l = Ma(),
                c = () => t({
                    has_changed_background: !0,
                    final_action_reset_all: !1,
                    has_customized: !0
                }),
                d = {
                    bgColor: {
                        label: l.bgColor.title,
                        items: Tn(l.bgColor.items, i),
                        onSelect: e => {
                            n("bgColor", e.currentTarget.dataset.id), c()
                        }
                    },
                    bgOpacity: {
                        label: l.bgOpacity.title,
                        items: Tn(l.bgOpacity.items, o),
                        onSelect: e => {
                            n("bgOpacity", e.currentTarget.dataset.id), c()
                        }
                    },
                    preview: {
                        label: "Preview",
                        onSelect: () => e(Xl.PREVIEW)
                    }
                };
            return De(Ge, {
                children: [De(Pd, E({}, d.bgColor)), De(Id, E({}, d.bgOpacity)), De(Np, {
                    updateMetricsPayload: t
                }), s && De(Ge, {
                    children: [De(gd, {}), De(yd, E({}, d.preview))]
                })]
            })
        },
        [Xl.WINDOW]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = ad(e => e.setCaptions),
                i = ad(e => e.captions.windowOpacity),
                o = ad(e => e.captions.windowColor),
                r = ad(e => e.appearance.isMenuBlockingUI),
                a = ad(e => e.appearance.isMenuVerticalVideoMode),
                s = r || a,
                l = Ma(),
                c = () => t({
                    has_changed_window: !0,
                    final_action_reset_all: !1,
                    has_customized: !0
                }),
                d = {
                    windowColor: {
                        label: l.windowColor.title,
                        items: Tn(l.windowColor.items, o),
                        onSelect: e => {
                            n("windowColor", e.currentTarget.dataset.id), c()
                        }
                    },
                    windowOpacity: {
                        label: l.windowOpacity.title,
                        items: Tn(l.windowOpacity.items, i),
                        onSelect: e => {
                            n("windowOpacity", e.currentTarget.dataset.id), c()
                        }
                    },
                    preview: {
                        label: "Preview",
                        onSelect: () => e(Xl.PREVIEW)
                    }
                };
            return De(Ge, {
                children: [De(Pd, E({}, d.windowColor)), De(Id, E({}, d.windowOpacity)), De(Np, {
                    updateMetricsPayload: t
                }), s && De(Ge, {
                    children: [De(gd, {}), De(yd, E({}, d.preview))]
                })]
            })
        },
        [Xl.PREVIEW]: ({
            updateMetricsPayload: e
        }) => De(Ge, {
            children: [De(Rp, {}), De(Np, {
                updateMetricsPayload: e
            })]
        })
    },
    Mp = {
        [Xl.EMPTY]: () => De(Ge, {}),
        [Xl.LANGUAGES]: ({
            setMenuDisplayed: e
        }) => ad(e => e.appearance.isMenuBlockingUI) && De(bd, {
            title: "CC/Subtitles",
            setMenuDisplayed: e
        }),
        [Xl.CUSTOMIZE]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => De(bd, {
            title: "Customize",
            onBack: () => e(Xl.LANGUAGES),
            setMenuDisplayed: t
        }),
        [Xl.FONT]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => De(bd, {
            title: "Font",
            onBack: () => e(Xl.CUSTOMIZE),
            setMenuDisplayed: t
        }),
        [Xl.BACKGROUND]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => De(bd, {
            title: "Background",
            onBack: () => e(Xl.CUSTOMIZE),
            setMenuDisplayed: t
        }),
        [Xl.WINDOW]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => De(bd, {
            title: "Window",
            onBack: () => e(Xl.CUSTOMIZE),
            setMenuDisplayed: t
        }),
        [Xl.PREVIEW]: ({
            previousPanel: e,
            setPanel: t,
            setMenuDisplayed: n
        }) => De(bd, {
            title: "Preview",
            onBack: () => t(e),
            setMenuDisplayed: n
        })
    },
    xp = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        updateMetricsPayload: o
    }) => {
        const r = Xl.LANGUAGES,
            [a, s] = Pe(r),
            [l, c] = Pe(r),
            d = (e => Dp[e] || Dp[Xl.EMPTY])(a),
            u = (e => Mp[e] || Mp[Xl.EMPTY])(a),
            p = e => {
                c(a), s(e)
            };
        return $l({
            isMenuDisplayed: e,
            defaultPanel: r,
            setPanel: s
        }), De(md, {
            type: zl.CC,
            ariaLabel: "CC/Subtitles",
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: a,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: Ai.CCMenu,
            panelContent: De(d, {
                setPanel: p,
                setMenuDisplayed: t,
                previousPanel: l,
                updateMetricsPayload: o
            }),
            headerContent: De(u, {
                setPanel: p,
                setMenuDisplayed: t,
                previousPanel: l
            })
        })
    };
const Bp = ({
    onButtonFocus: e
}) => {
    const t = Oe(null),
        n = Oe(null),
        i = ad(e => e.setPlayback),
        r = ad(e => e.setDisplayList),
        a = ad(e => e.playback.volume),
        s = ad(e => e.playback.muted) ? 0 : a,
        l = ad(e => e.playback.supportsSettingVolume),
        c = ad(e => e.displayList.controlBar),
        [d, u] = Pe(!1),
        p = 100 * s,
        [_, v] = Pe(!1),
        [m, f] = Pe(!1),
        h = cc(lr.VOLUME_SLIDER) && l,
        g = d && h,
        b = Math.round(100 * s) + "% volume";
    Ie(() => {
        c || u(!1)
    }, [c]);
    const y = e => {
            I(e)
        },
        C = () => {
            u(!0), r("menu", !1)
        },
        T = e => {
            yn(t.current, e) || yn(null == n ? void 0 : n.current, e) || u(!1), v(!1), document.removeEventListener("mouseup", T), document.removeEventListener("mousemove", y), document.removeEventListener("pointerup", T), document.removeEventListener("pointermove", y)
        },
        L = e => {
            v(!0), I(e), o.pointerEvents ? (document.addEventListener("pointerup", T), document.addEventListener("pointermove", y)) : (document.addEventListener("mouseup", T), document.addEventListener("mousemove", y))
        },
        w = () => {
            _ || u(!1)
        },
        A = () => f(!0),
        S = () => f(!1);

    function I(e) {
        let n = e.clientY;
        e.targetTouches && e.targetTouches.length && (n = e.targetTouches[0].clientY, e.preventDefault());
        const o = function(e) {
            const n = ht(t.current).top,
                i = ht(t.current).bottom;
            return Et((i - e) / (i - n), 0, 100)
        }(n);
        i("volume", o)
    }
    const P = Cn("VolumeControl_module_volumeControl__2c236c07", Mn.VOLUME, Fd.focusable),
        O = Cn("VolumeControl_module_volumeBar__2c236c07", m || _ ? "VolumeControl_module_mouseEnteredSlider__2c236c07" : ""),
        k = o.pointerEvents ? {
            onPointerEnter: C,
            onPointerLeave: w
        } : {
            onMouseEnter: C,
            onMouseLeave: w
        },
        R = o.pointerEvents ? {
            onPointerDown: L,
            onPointerEnter: A,
            onPointerLeave: S
        } : {
            onMouseDown: L,
            onMouseEnter: A,
            onMouseLeave: S
        };
    return De("div", E(E({
        className: "VolumeControl_module_volumeControlContainer__2c236c07"
    }, k), {}, {
        "data-volume-control-container": !0,
        children: [De(tp, {
            ref: n,
            onFocus: e
        }), De(dd, {
            visible: g,
            children: De("div", E(E({
                role: "slider",
                className: P,
                ref: t,
                tabIndex: h ? 0 : -1,
                "aria-label": "Volume (use up/down arrow keys to change)",
                "aria-valuenow": 100 * s,
                "aria-valuetext": b,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                onBlur: () => {
                    _ || u(!1)
                },
                onFocus: () => {
                    u(!0), r("menu", !1)
                },
                onTouchMove: I
            }, R), {}, {
                "data-volume-control": !0,
                children: De("div", {
                    className: O,
                    children: [De("div", {
                        className: "VolumeControl_module_volumeBarFill__2c236c07",
                        style: {
                            height: `${p}%`
                        }
                    }), De("div", {
                        className: "VolumeControl_module_sliderHandle__2c236c07",
                        style: {
                            bottom: `${p}%`
                        }
                    })]
                })
            }))
        })]
    }))
};
const Vp = [lc.VIMEO_LOGO],
    Up = ({
        menuProps: e
    }) => {
        const t = ad(e => e.appearance.isMenuBlockingUI),
            n = ad(e => e.controlBar.showAllControls),
            i = ad(e => e.displayList.controlBarButtons),
            r = ad(e => e.displayList.progressBar),
            a = ad(e => e.controlBar.progressBarExpanded),
            s = Jl(),
            l = (() => {
                const e = ad(e => e.playback.canPlayPictureInPicture),
                    t = ad(e => e.embed.fullscreen),
                    n = ad(e => e.embed.showVimeoLogo),
                    i = ad(e => e.embed.volume),
                    r = ad(e => e.appearance.fullscreen),
                    a = ad(e => e.embed.airplay),
                    s = ad(e => e.playback.supportsAirPlay),
                    l = ad(e => e.embed.chromecast),
                    c = ad(e => e.playback.supportsChromecast),
                    d = ad(e => e.playback.isChromecastSetupWithAvailableDevices),
                    u = ad(e => e.appearance.stereoscopicEnabled),
                    p = ad(e => e.playback.supportsStereoscopic),
                    _ = ad(e => e.displayList.ad),
                    v = ad(e => e.playback.loadedMetadata),
                    m = ad(e => e.playback.loadedData),
                    f = ad(e => {
                        var t;
                        return null == (t = e.interactive.hotspots) ? void 0 : t.length
                    }),
                    h = ad(e => e.interactive.enabled),
                    g = ad(e => e.interactive.ready),
                    b = ad(e => e.liveEvent.isLiveEvent),
                    E = ad(e => e.liveEvent.isArchived),
                    y = !!h && (!g || f),
                    C = s && v && !_ && !y && a,
                    T = l && c && d && !_ && !y && (!b || E),
                    L = u && p && !_,
                    w = e && !_,
                    A = (t || r) && !(o.iOS && f) && !(o.fullscreenRequiresDataLoaded && !m),
                    S = n && !_;
                return {
                    [lc.AIRPLAY]: C,
                    [lc.CHROMECAST]: T,
                    [lc.FULLSCREEN]: A,
                    [lc.PIP]: w,
                    [lc.STEREOSCOPIC]: L,
                    [lc.VIMEO_LOGO]: S,
                    [lc.VOLUME]: i
                }
            })(),
            c = Oe(),
            d = Oe(),
            u = Oe(i),
            p = Oe(n),
            _ = Object.keys(l).filter(e => l[e]),
            v = Object.keys(s).filter(e => s[e]),
            m = !!_.length || !!v.length,
            f = _.concat(v).filter(e => !Vp.includes(e)),
            h = f.length > 0,
            g = f.length > 1,
            [b, y] = Pe(!1),
            C = () => {
                if (p.current) return void y(!1);
                const e = c.current,
                    t = d.current,
                    n = null == e ? void 0 : e.children;
                if (!t || !(null == n ? void 0 : n.length) || !u.current) return;
                const i = t.clientWidth,
                    o = Array.from(n).reduce((e, t) => e + t.clientWidth + 4, 4);
                y(i < o)
            };
        vc(c, C, 100), Ie(() => {
            u.current = i, p.current = n
        }, [i, n]), Ie(() => {
            C()
        }, [_.length, v.length]);
        const T = e => {
                const t = null == e ? void 0 : e.target;
                if (!t || !i || n || !c.current || !d.current || !b) return;
                const o = ht(t),
                    r = ht(d.current);
                if (o.left > r.left && o.right < r.right) return;
                const a = o.right - r.width;
                c.current.scrollTo({
                    top: 0,
                    left: a,
                    behavior: "smooth"
                })
            },
            L = !n && g && b,
            w = !n && g,
            A = !i && g,
            S = !r && !A && h,
            I = l[lc.VIMEO_LOGO],
            P = Cn("ControlBarButtonsAndMenus_module_wrapper__698267d0", A && "ControlBarButtonsAndMenus_module_buttonsHidden__698267d0", !r && "ControlBarButtonsAndMenus_module_progressHidden__698267d0", a && "ControlBarButtonsAndMenus_module_progressExpanded__698267d0"),
            O = Cn("ControlBarButtonsAndMenus_module_collapsibleWrapper__698267d0", A && "ControlBarButtonsAndMenus_module_buttonsHidden__698267d0", !r && "ControlBarButtonsAndMenus_module_progressHidden__698267d0", w && "ControlBarButtonsAndMenus_module_collapsingEnabled__698267d0", L && "ControlBarButtonsAndMenus_module_canScroll__698267d0", S && "ControlBarButtonsAndMenus_module_buttonsOnly__698267d0", I && "ControlBarButtonsAndMenus_module_vimeoLogoEnabled__698267d0"),
            k = Cn("ControlBarButtonsAndMenus_module_collapsibleContent__698267d0", A && "ControlBarButtonsAndMenus_module_buttonsHidden__698267d0", w && "ControlBarButtonsAndMenus_module_collapsingEnabled__698267d0", L && "ControlBarButtonsAndMenus_module_canScroll__698267d0");
        return m ? De("div", {
            className: P,
            children: [w && De(cp, {}), De("div", {
                className: O,
                ref: d,
                children: De("div", {
                    className: k,
                    ref: c,
                    children: [l[lc.VOLUME] && De(Bp, {
                        onButtonFocus: T
                    }), s[zl.CC] && De(rp, E(E({}, e[zl.CC]), {}, {
                        ref: e[zl.CC].buttonRef,
                        onFocus: T
                    })), !t && s[zl.CC] && De(xp, E({}, e[zl.CC])), s[zl.TRANSCRIPT] && De(lp, {
                        onFocus: T
                    }), s[zl.PREFS] && De(Qu, E(E({}, e[zl.PREFS]), {}, {
                        ref: e[zl.PREFS].buttonRef,
                        onFocus: T
                    })), !t && s[zl.PREFS] && De(Ap, E({}, e[zl.PREFS])), s[zl.CHAPTERS] && De(op, E(E({}, e[zl.CHAPTERS]), {}, {
                        ref: e[zl.CHAPTERS].buttonRef,
                        onFocus: T
                    })), !t && s[zl.CHAPTERS] && De(kp, E({}, e[zl.CHAPTERS])), l[lc.CHROMECAST] && De(sp, {
                        onFocus: T
                    }), l[lc.AIRPLAY] && De(ip, {
                        onFocus: T
                    }), l[lc.STEREOSCOPIC] && De(ap, {
                        onFocus: T
                    }), l[lc.PIP] && De(ep, {
                        onFocus: T
                    }), l[lc.FULLSCREEN] && De(Ju, {
                        onFocus: T
                    })]
                })
            }), I && De(np, {})]
        }) : null
    },
    Fp = ({
        menuProps: e
    }) => {
        const t = Jl();
        return ad(e => e.appearance.isMenuBlockingUI) && De(Ge, {
            children: [t[zl.CC] && De(xp, E({}, e[zl.CC])), t[zl.PREFS] && De(Ap, E({}, e[zl.PREFS])), t[zl.CHAPTERS] && De(kp, E({}, e[zl.CHAPTERS]))]
        })
    },
    Hp = () => {
        var e, t;
        const n = Oe(null),
            i = ad(e => e.config),
            o = ad(e => e.displayList.controlBar),
            r = ad(e => e.displayList.outro),
            a = ad(e => e.playback.playInitiated),
            s = ad(e => e.embed.isTrailer),
            l = ad(e => e.displayList.controlBarButtons),
            c = ad(e => e.controlBar.showAllControls),
            d = ad(e => e.embed.playbar),
            u = (() => {
                const e = ad(e => e.setAppearance),
                    [t, n] = Pe(!1);
                return {
                    onMouseEnter: () => {
                        t || e("mousedOverControlBar", !0), n(!1)
                    },
                    onMouseLeave: () => {
                        t || e("mousedOverControlBar", !1), n(!1)
                    },
                    onTouchStart: () => {
                        e("mousedOverControlBar", !0), n(!0)
                    },
                    onTouchEnd: () => {
                        e("mousedOverControlBar", !1), n(!0)
                    }
                }
            })(),
            p = rc() === oc.CENTER,
            _ = s && !a,
            v = cc(lr.PROGRESS_BAR) && d,
            m = null == (e = i.request.ab_tests) || null == (t = e.small_player_redesign) ? void 0 : t.group,
            [f, h] = Pe(null),
            g = (({
                setHoveredChapterId: e,
                progressBarAndButtonsRef: t
            }) => {
                const n = ad(e => e.displayList.menu),
                    i = ad(e => e.setDisplayList),
                    o = Oe(null),
                    r = Oe(null),
                    a = Oe(null),
                    {
                        sendBPClosedCaptionsClickEvent: s,
                        updateCCMetricsPayload: l,
                        resetCCMetricsPayload: c
                    } = (() => {
                        const e = ad(e => e.captions.language),
                            t = ad(e => e.captions.fontSize),
                            n = ad(e => e.captions.fontOpacity),
                            i = ad(e => e.captions.fontFamily),
                            o = ad(e => e.captions.color),
                            r = ad(e => e.captions.edgeStyle),
                            a = ad(e => e.captions.bgColor),
                            s = ad(e => e.captions.bgOpacity),
                            l = ad(e => e.captions.windowColor),
                            c = ad(e => e.captions.windowOpacity),
                            d = Oe({
                                fontSize: t,
                                fontOpacity: n,
                                fontColor: o,
                                fontFamily: i,
                                edgeStyle: r,
                                bgColor: a,
                                bgOpacity: s,
                                windowColor: l,
                                windowOpacity: c
                            }),
                            u = Oe({
                                language_selected: e || "off",
                                has_clicked_customize: !1,
                                has_customized: !1,
                                has_clicked_font: !1,
                                has_changed_font: !1,
                                has_clicked_background: !1,
                                has_changed_background: !1,
                                has_clicked_window: !1,
                                has_changed_window: !1,
                                has_reset_all: !1,
                                final_action_reset_all: !1
                            }),
                            p = ke(e => {
                                u.current = E(E({}, u.current), e)
                            }, []),
                            _ = ic();
                        return Ie((function() {
                            p({
                                language_selected: e || "off"
                            })
                        }), [e, p]), Ie((function() {
                            const e = t !== d.current.fontSize || o !== d.current.fontColor || i !== d.current.fontFamily || n !== d.current.fontOpacity || r !== d.current.edgeStyle || a !== d.current.bgColor || s !== d.current.bgOpacity || l !== d.current.windowColor || c !== d.current.windowOpacity;
                            p({
                                has_customized: e
                            })
                        }), [t, n, o, i, r, a, s, l, c, p]), {
                            sendBPClosedCaptionsClickEvent: () => _(vr.CLOSED_CAPTIONS_CLICK, u.current),
                            updateCCMetricsPayload: p,
                            resetCCMetricsPayload: () => {
                                u.current = {
                                    language_selected: e || "off",
                                    has_clicked_customize: !1,
                                    has_customized: !1,
                                    has_clicked_font: !1,
                                    has_changed_font: !1,
                                    has_clicked_background: !1,
                                    has_changed_background: !1,
                                    has_clicked_window: !1,
                                    has_changed_window: !1,
                                    has_reset_all: !1,
                                    final_action_reset_all: !1
                                }, d.current = {
                                    fontSize: t,
                                    fontOpacity: n,
                                    fontColor: o,
                                    fontFamily: i,
                                    edgeStyle: r,
                                    bgColor: a,
                                    bgOpacity: s,
                                    windowColor: l,
                                    windowOpacity: c
                                }
                            }
                        }
                    })(),
                    [d, u] = Pe(!1),
                    [p, _] = Pe(!1),
                    [v, m] = Pe(!1),
                    f = e => t => {
                        e === _ && p && !t && (s(), c()), e(t), i("menu", t), e !== u && u(!1), e !== _ && _(!1), e !== m && m(!1)
                    };
                n || (u(!1), _(!1), m(!1));
                const h = f(u),
                    g = f(m),
                    b = f(_);
                return {
                    [zl.CC]: {
                        isMenuDisplayed: p,
                        setMenuDisplayed: b,
                        buttonRef: a,
                        progressBarAndButtonsRef: t,
                        updateMetricsPayload: l
                    },
                    [zl.PREFS]: {
                        isMenuDisplayed: d,
                        setMenuDisplayed: h,
                        buttonRef: o,
                        progressBarAndButtonsRef: t
                    },
                    [zl.CHAPTERS]: {
                        isMenuDisplayed: v,
                        setMenuDisplayed: g,
                        buttonRef: r,
                        progressBarAndButtonsRef: t,
                        onMenuOptionMouseEnter: t => {
                            var n, i;
                            return e(parseInt(null == t || null == (n = t.currentTarget) || null == (i = n.dataset) ? void 0 : i.id, 10))
                        },
                        onMenuOptionMouseLeave: () => e(null)
                    }
                }
            })({
                setHoveredChapterId: h,
                progressBarAndButtonsRef: n
            }),
            b = Cn("ControlBar_module_controlBarWrapper__4c16a5a0", p && "ControlBar_module_centerPlayButton__4c16a5a0"),
            y = Cn(Mn.VP_CONTROLS, "ControlBar_module_controls__4c16a5a0", _ && "ControlBar_module_trailer__4c16a5a0"),
            C = Cn("ControlBar_module_progressBarAndButtons__4c16a5a0", !v && "ControlBar_module_progressBarDisabled__4c16a5a0", c && "ControlBar_module_showAllControls__4c16a5a0", l && !c && m && "ControlBar_module_buttonsExpanded__4c16a5a0");
        return De(hd, {
            children: [De("div", {
                className: b,
                children: [De(zu, {
                    controlBarVisibilityHandlers: u
                }), De(dd, {
                    visible: o,
                    children: De("div", E(E({
                        className: y
                    }, u), {}, {
                        "data-control-bar": !0,
                        children: !r && !_ && De("div", {
                            className: C,
                            ref: n,
                            children: [v && De(Cp, {
                                hoveredChapterId: f
                            }), De(Up, {
                                menuProps: g
                            })]
                        })
                    }))
                }), De(dp, {})]
            }), De(Fp, {
                menuProps: g
            })]
        })
    };
const Gp = () => {
    const e = ad(e => e.displayList.notification);
    return De("div", {
        className: `Notification_module_root__fe183fa7 ${e?"Notification_module_active__fe183fa7":""}`
    })
};
let Wp;
! function(e) {
    e.Backward = "backward", e.Forward = "forward"
}(Wp || (Wp = {}));
const Yp = () => {
    const e = ad(e => e.displayList.nudgeNotification),
        t = ad(e => e.nudge.direction),
        n = ad(e => e.nudge.time);
    return De(dd, {
        visible: e,
        children: De("div", {
            "aria-hidden": "true",
            className: `NudgeNotification_module_nudge__d98d80a9 ${t===Wp.Backward&&"NudgeNotification_module_nudgeBackward__d98d80a9"}`,
            children: De("div", {
                className: "NudgeNotification_module_nudgeInfo__d98d80a9",
                children: [De("div", {
                    className: "NudgeNotification_module_nudgeIcon__d98d80a9",
                    children: De(vd, {
                        name: mc.FAST_FORWARD
                    })
                }), De("div", {
                    className: "NudgeNotification_module_nudgeTime__d98d80a9",
                    children: n ? n + " seconds" : ""
                })]
            })
        })
    })
};
let qp;
const $p = () => {
        const e = Oe(sd().getState().playback.currentFragment),
            t = Oe(sd().getState().playback.currentTime),
            n = Oe(sd().getState().playback.liveEdgeTime),
            i = Oe(sd().getState().playback.liveTailTime);
        sd().subscribe(t => e.current = t.playback.currentFragment), sd().subscribe(e => t.current = e.playback.currentTime), sd().subscribe(e => n.current = e.playback.liveEdgeTime), sd().subscribe(e => i.current = e.playback.liveTailTime);
        const r = ad(e => e.displayList.fullPlayerElement),
            a = ad(e => e.displayList.ad),
            s = ad(e => e.liveEvent.isLiveEvent),
            l = ad(e => e.liveEvent.dvrEnabled),
            c = ad(e => e.liveEvent.isArchived),
            d = s && !c && !l,
            u = ad(e => e.embed.background),
            p = ad(e => e.embed.controls),
            _ = ad(e => e.displayList.outro),
            v = ad(e => e.config.video.spatial),
            m = !(!o.spatialPlayback || !v),
            f = o.touch && !r && !a && !d && !u && p && !_ && !m,
            h = ad(e => e.setPlayback),
            g = ad(e => e.setNudgeProperties),
            [b, E] = Pe({
                left: 0,
                right: 0
            }),
            y = o => r => {
                let a;
                r.preventDefault(), o === Wp.Forward ? (a = b.left + 1, E({
                    left: a,
                    right: 0
                })) : (a = b.right + 1, E({
                    left: 0,
                    right: a
                })), clearTimeout(qp), qp = setTimeout(C, 250), a >= 2 && function(o, r) {
                    let a, l;
                    s ? (a = i.current, l = n.current) : ({
                        startTime: a,
                        endTime: l
                    } = e.current);
                    let c = 0;
                    c = o === Wp.Forward ? t.current + 10 : t.current - 10, c < a ? c = a : c >= l ? c = l - .001 : g({
                        direction: o,
                        time: 10 + 10 * (r - 2)
                    }), h("currentTime", c, {
                        seekType: "nudge"
                    })
                }(o, a)
            };

        function C() {
            E({
                left: 0,
                right: 0
            })
        }
        return f && De(Ge, {
            children: [De("div", {
                className: "NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeBackwardArea__1e671f9b",
                onTouchEnd: y(Wp.Backward)
            }), De("div", {
                className: "NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeForwardArea__1e671f9b",
                onTouchEnd: y(Wp.Forward)
            })]
        })
    },
    Kp = ({
        element: e,
        children: t
    }) => Ke(De(Ge, {
        children: t
    }), e);
const jp = () => {
    const e = ad(e => e.embed.like),
        t = ad(e => e.embed.watchLater),
        n = ad(e => e.embed.share),
        i = ad(e => e.embed.transcript),
        o = ad(e => e.embed.onsite),
        r = [{
            key: "↑",
            text: "Volume up",
            className: "HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"
        }, {
            key: "↓",
            text: "Volume down",
            className: "HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"
        }, {
            key: "→",
            text: "Scrub forward",
            className: "HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"
        }, {
            key: "←",
            text: "Scrub backwards",
            className: "HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"
        }, {
            key: "X",
            text: "Like",
            ignore: !e
        }, {
            key: "S",
            text: "Share",
            ignore: !n
        }, {
            key: "W",
            text: "Watch Later",
            ignore: !t
        }, {
            key: "C",
            text: "Toggle Captions"
        }, {
            key: "H",
            text: "Toggle Preferences Menu"
        }, {
            key: "F",
            text: "Toggle fullscreen"
        }, {
            key: "⇧T",
            text: "Toggle Transcript",
            ignore: !i
        }, {
            key: "⇧A",
            text: "Toggle Vimeo AI",
            ignore: !ad(e => e.embed.aiWidget)
        }, {
            key: "V",
            text: "View on Vimeo",
            ignore: o
        }, {
            key: "J",
            text: "Scrub backwards"
        }, {
            key: "K",
            text: "Play/Pause"
        }, {
            key: "L",
            text: "Scrub forward"
        }, {
            key: "M",
            text: "Toggle Mute"
        }];
    return De(Ge, {
        children: [De("h1", {
            id: Mn.VP_OVERLAY_LABELLEDBY,
            children: "Keyboard Shortcuts"
        }), De("div", {
            className: "HelpOverlay_module_keysWrapper__584c584b",
            "data-help-keys": !0,
            children: r.map(e => !e.ignore && De("div", {
                className: `HelpOverlay_module_keyWrapper__584c584b ${e.className||""}`,
                children: [De("div", {
                    className: "HelpOverlay_module_keySymbol__584c584b",
                    children: e.key
                }), De("div", {
                    className: "HelpOverlay_module_keyText__584c584b",
                    children: e.text
                })]
            }))
        })]
    })
};
const zp = Ue((e, t) => {
    const n = ad(e => e.setOverlay),
        i = mn(() => n("purpose", Wn.EMPTY));
    return De("button", E(E({
        ref: t,
        className: `CloseOverlayButton_module_closeOverlayButton__64883c67 ${Fd.focusableButton}`
    }, i), {}, {
        children: De(vd, {
            name: mc.CLOSE
        })
    }))
});
const Xp = ({
        children: e,
        visible: t,
        style: n
    }) => {
        const i = ad(e => e.element),
            o = Oe(null),
            r = Oe(null);
        return Ie((function() {
            t && r.current && i.contains(document.activeElement) ? (o.current = document.activeElement, ft(r.current)) : !t && o.current && (ft(o.current), o.current = null)
        }), [t, r, i]), De("div", {
            className: `OverlayBase_module_overlayWrapper__7e8e9f3f ${t?"":"OverlayBase_module_hidden__7e8e9f3f"}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": Mn.VP_OVERLAY_LABELLEDBY,
            "data-content-area-sibling-eligible": !0,
            style: n,
            "data-overlay": !0,
            children: [De("div", {
                className: "OverlayBase_module_overlayCell__7e8e9f3f",
                children: De("div", {
                    className: `OverlayBase_module_overlay__7e8e9f3f ${t?"OverlayBase_module_visible__7e8e9f3f":""}`,
                    children: e
                })
            }), De("nav", {
                className: "OverlayBase_module_overlayNav__7e8e9f3f",
                children: De(zp, {
                    ref: r
                })
            })]
        })
    },
    Zp = () => {
        const e = ad(e => e.overlay.purpose),
            t = ad(e => e.displayList.overlay),
            [n, i] = Pe(e),
            o = t && zn(e);
        return o && i(e), De(dd, {
            visible: o,
            duration: o ? 200 : 105,
            styleOverrides: {
                exitDone: {
                    display: "block",
                    visibility: "hidden"
                }
            },
            onFaded: () => {
                i(e)
            },
            children: De(Xp, {
                visible: o,
                children: n === Wn.HELP && De(jp, {})
            })
        })
    };
const Jp = () => {
    const {
        pipOverlay: e
    } = ad(e => e.displayList);
    return De(dd, {
        visible: e,
        children: De("div", {
            className: `${Mn.VP_PIP_OVERLAY} PipOverlay_module_overlay__4ebce77e`,
            "aria-hidden": "true",
            children: [De(vd, {
                name: mc.PIP
            }), De("div", {
                className: "PipOverlay_module_title__4ebce77e",
                children: "Playing in picture-in-picture"
            })]
        })
    })
};
let Qp;
! function(e) {
    e.PLAYER_UI = "player_ui", e.TITLE = "title"
}(Qp || (Qp = {}));
const e_ = () => {
    const e = ad(e => e.liveEvent.isLiveEvent),
        t = ad(e => e.liveEvent.isPlayable),
        n = ad(e => e.playback.paused),
        i = ad(e => e.liveEvent.isEnded),
        o = e && !i,
        r = ad(e => e.webinar.webinarRegistrantBlocked),
        a = o && !r,
        s = ad(e => e.displayList.controlBar),
        l = ad(e => e.displayList.topCenterActionItem),
        c = ad(e => e.displayList.title),
        d = ad(e => e.displayList.toast),
        u = ad(e => e.playback.atLiveEdge);
    return a && De(dd, {
        visible: (s || l) && !(c || d) && t && !n && u,
        children: De("div", {
            className: "LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__df50a84b",
            "aria-hidden": "true",
            children: [De(n_, {
                context: Qp.PLAYER_UI
            }), De(o_, {
                context: Qp.PLAYER_UI
            })]
        })
    })
};
const t_ = {
        [Qp.PLAYER_UI]: "LiveStatusLabel_module_playerUI__80b34526",
        [Qp.TITLE]: "LiveStatusLabel_module_title__80b34526"
    },
    n_ = ({
        className: e,
        context: t
    }) => {
        const n = ad(e => e.embed.hideLiveLabel),
            i = ad(e => e.webinar.webinarRegistrantBlocked),
            o = ad(e => e.liveEvent.isLiveEvent),
            r = ad(e => e.liveEvent.isPlayable),
            a = ad(e => e.liveEvent.isArchived),
            s = t_[t],
            l = Cn(Mn.VP_LIVE_STATUS, "LiveStatusLabel_module_liveStatusLabel__80b34526", s, e),
            c = Cn(Mn.VP_LIVE_STATUS_CIRCLE, "LiveStatusLabel_module_liveStatusCircle__80b34526", r ? "LiveStatusLabel_module_live__80b34526" : "LiveStatusLabel_module_offline__80b34526"),
            d = Cn("LiveStatusLabel_module_liveStatusText__80b34526", r ? "LiveStatusLabel_module_live__80b34526" : "LiveStatusLabel_module_offline__80b34526");
        return o && !a && !n && !i && De("div", {
            className: l,
            "data-live-status-label": !0,
            children: [De("div", {
                className: c
            }), De("span", {
                className: d,
                children: "LIVE"
            })]
        })
    };
const i_ = {
        [Qp.PLAYER_UI]: "LiveViewerCounter_module_playerUI__49e5fa3a",
        [Qp.TITLE]: "LiveViewerCounter_module_title__49e5fa3a"
    },
    o_ = ({
        className: e = "",
        context: t
    }) => {
        const n = ad(e => e.liveEvent.isPlayable),
            i = ad(e => e.embed.showViewerCount),
            o = ad(e => e.liveEvent.viewerCount),
            r = ad(e => e.webinar.webinarRegistrantBlocked),
            a = ad(e => e.liveEvent.liveStatsRequestSucceeded),
            s = i_[t],
            l = Cn(Mn.VP_LIVE_VIEWER_COUNT, "LiveViewerCounter_module_liveViewerCounter__49e5fa3a", s, e);
        return n && i && !r && a && De("div", {
            className: l,
            "data-live-viewer-counter": !0,
            children: [De(vd, {
                className: "LiveViewerCounter_module_liveViewerCounterIcon__49e5fa3a",
                name: mc.PERSON_FILLED
            }), De("span", {
                className: "LiveViewerCounter_module_liveViewerCountValue__49e5fa3a",
                children: o
            })]
        })
    },
    r_ = {
        [oi.LIGHT]: ii.EIGHTY,
        [oi.DARK]: ii.TWENTY
    },
    a_ = () => {
        const e = uu(e => e.uuid),
            t = uu(e => e.view),
            n = uu(e => e.embed.transparent),
            i = uu(e => e.colors.colorOne),
            o = uu(e => e.colors.colorTwo),
            r = uu(e => e.colors.colorThree),
            a = uu(e => e.colors.colorFour),
            s = [
                [ni.ONE, ai(i, ii.ONE_HUNDRED)],
                [ni.TWO, ai(o, ii.ONE_HUNDRED)],
                [ni.THREE, ai(r, ii.ONE_HUNDRED)],
                [ni.FOUR, ai(a, ii.ONE_HUNDRED, !1, !0)],
                [ni.ONE_MONOCHROME, ai(i, ii.ONE_HUNDRED, !0)],
                [ni.TWO_MONOCHROME, ai(o, ii.ONE_HUNDRED, !0)],
                [ni.ONE_OPACITY_NINETY, ai(i, ii.NINETY, !1, !0)],
                [ni.THREE_OPACITY_TWENTY, ai(r, ii.TWENTY)],
                [ni.ONE_MONOCHROME_OPACITY_TWENTY, ai(i, ii.TWENTY, !0)],
                [ni.TWO_MONOCHROME_OPACITY_TWENTY, ai(o, ii.TWENTY, !0)],
                [ni.ONE_MONOCHROME_OPACITY_SIXTY, ai(i, ii.SIXTY, !0)],
                [ni.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY, ai(i, r_, !0)],
                [ni.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY, ai(o, r_, !0)]
            ];
        let l, c;
        return [Xt.privateLocked, Xt.privatePassword].includes(t) ? (l = "#000 !important", c = "transparent !important") : n ? (l = "transparent !important", c = "transparent !important") : (l = `var(${ni.FOUR})`, c = `var(${ni.FOUR})`), De("style", {
            type: "text/css",
            "data-player-colors": e,
            children: [`.player-${e} {\n                ${si(s)}\n            }`, `.player-${e} {\n                background-color: ${l};\n            }`, `.player-${e} .${Mn.VP_VIDEO_WRAPPER} {\n                background-color: ${c};\n            }`]
        })
    };
const s_ = () => {
    const e = ad(e => e.embed.rightContentAreaEnabled),
        t = ad(e => e.displayList.rightContentArea),
        n = ad(e => e.appearance.rightContentAreaAnimating);
    let i = ad(e => e.element);
    const r = {
            transcript: {
                component: h_,
                displayed: ad(e => e.displayList.transcript)
            },
            aiWidget: {
                component: k_,
                displayed: ad(e => e.displayList.aiWidget)
            }
        },
        a = o.isGoogleBot && r.transcript.displayed;
    var s;
    a && (i = null == (s = i) ? void 0 : s.parentElement);
    const l = Cn("RightContentArea_module_rightContentArea__cd5866ba", t && "RightContentArea_module_visible__cd5866ba", Io && "RightContentArea_module_iframeEmbed__cd5866ba", a && "RightContentArea_module_googleBot__cd5866ba"),
        c = Object.keys(r).some(e => {
            var t;
            return null == (t = r[e]) ? void 0 : t.displayed
        }),
        d = !t && n,
        u = d ? 400 : void 0,
        p = d || c && t && !n ? void 0 : 0,
        _ = {
            exitDone: {
                visibility: "hidden",
                display: "block"
            }
        };
    return e && Ke(De("div", {
        id: Bn.RIGHT_CONTENT_AREA,
        className: l,
        "aria-hidden": !t,
        children: Object.keys(r).map((function(e) {
            var t, n;
            const i = null == (t = r[e]) ? void 0 : t.component,
                o = null == (n = r[e]) ? void 0 : n.displayed;
            return i ? De(dd, {
                duration: p,
                visible: o,
                delay: u,
                styleOverrides: _,
                children: De(i, {})
            }, e) : null
        }))
    }), i)
};
const l_ = () => {
    const [e, t] = Pe(!1), n = ad(e => e.appearance.placeholderThumbnail), i = ad(e => e.appearance.appSizeMode), r = ad(e => e.appearance.appBreakpoint), a = ad(e => e.embed.rightContentAreaEnabled), s = ad(e => e.displayList.rightContentArea), l = ad(e => e.appearance.rightContentAreaAnimating), c = ad(e => e.element), d = a && (s || l), u = r === Qo.XS || r === Qo.XXS || i === vi.MINI || i === vi.TINY, p = Cn("ContentAreaBackground_module_img__80d2328b", e && "ContentAreaBackground_module_loaded__80d2328b"), _ = u ? {
        visible: s,
        duration: 400
    } : {
        visible: d,
        duration: 0
    };
    return o.isGoogleBot ? null : Ke(De(dd, E(E({}, _), {}, {
        children: De("div", {
            className: "ContentAreaBackground_module_imgContainer__80d2328b",
            children: De("img", {
                onLoad: () => t(!0),
                alt: "video thumbnail",
                className: p,
                src: n
            })
        })
    })), null == c ? void 0 : c.querySelector(`.${xn.CONTENT_AREA_BACKGROUND_CONTAINER}`))
};
je(".TranscriptError_lazy_module_refresh__5b067110{border:none;padding:4px 12px;gap:4px;height:32px;background:hsla(0,0%,100%,.1);border-radius:4px}.TranscriptError_lazy_module_icon__5b067110{width:40px;height:40px}", {});
const {
    Provider: c_,
    useStore: d_
} = Ne(), u_ = {
    timecodeDisplayed: !0,
    selectedSettingsMenu: yl.MAIN,
    settingsDisplayed: !1,
    currentSearchResultIndex: 0,
    searchTerms: {
        terms: "",
        timestamp: null
    },
    searchResults: [],
    transcriptDisabled: !1,
    autofollowEnabled: !0
}, p_ = ({
    children: e
}) => {
    const t = ad(e => e.subscribe),
        n = ad(e => e.captions.textTrackEls),
        i = ad(e => e.captions.rtlTracks),
        o = ad(e => e.config),
        r = ad(e => e.events),
        a = ad(e => e.displayList.transcript),
        s = ad(e => e.displayList.fullPlayerElement),
        l = ad(e => e.appearance.appBreakpoint),
        c = ad(e => e.appearance.appSizeMode),
        d = ic(),
        u = ((e, t) => e.map(e => {
            const n = e.id.replace(Gn.TEXT_TRACK_ID_PREFIX, ""),
                i = t.includes(n);
            return {
                id: e.id,
                label: e.label,
                language: e.srclang,
                rtl: i
            }
        }))(n, i),
        p = Sl(o, u),
        _ = Oe(null == p ? void 0 : p.language);
    return De(c_, {
        createStore: () => Me((e, n) => {
            const i = (t, n) => e(e => E(E({}, e), {}, {
                    [t]: n
                })),
                o = u_.selectedSettingsMenu,
                v = e => i("selectedSettingsMenu", e),
                m = u_.settingsDisplayed,
                f = t => {
                    var i, o;
                    const a = {};
                    if (t !== (null == (i = n()) ? void 0 : i.settingsDisplayed)) {
                        var s, l;
                        a.settingsDisplayed = t;
                        const e = null == (s = n()) || null == (l = s.selectedTrack) ? void 0 : l.language;
                        t ? d(vr.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "open_embed_transcript_setting",
                            copy: "settings",
                            location: "player_embedded_transcript",
                            element: "embedded_transcript_settings_menu",
                            current_transcript_language: e
                        }) : t || e === _.current || (d(vr.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "change_language_settings",
                            copy: e,
                            location: "player_embedded_transcript_settings",
                            element: "language_select_panel",
                            current_transcript_language: e
                        }), _.current = e)
                    }(null == (o = n()) ? void 0 : o.settingsDisplayed) && !t && (a.selectedSettingsMenu = u_.selectedSettingsMenu), Object.keys(a).length && e(e => E(E({}, e), a));
                    const c = t ? "preact-menu" : "";
                    r.fire(Kt._menuVisibilityChanged, c)
                },
                h = u_.timecodeDisplayed,
                g = u_.currentSearchResultIndex,
                b = e => i("currentSearchResultIndex", e),
                y = u_.searchResults,
                C = e => {
                    0 === e.length && i("currentSearchResultIndex", 0), i("searchResults", e)
                },
                T = u_.searchTerms,
                L = e => i("searchTerms", e),
                w = !a || s,
                A = __(l, c),
                S = u_.autofollowEnabled;

            function I() {
                L(u_.searchTerms), C(u_.searchResults), b(u_.currentSearchResultIndex)
            }
            return t(e => {
                var t;
                return null == e || null == (t = e.displayList) ? void 0 : t.transcript
            }, e => {
                e || (f(u_.settingsDisplayed), v(u_.selectedSettingsMenu))
            }), t(e => {
                var t, n;
                return {
                    transcriptVisible: null == e || null == (t = e.displayList) ? void 0 : t.transcript,
                    overlayVisible: null == e || null == (n = e.displayList) ? void 0 : n.fullPlayerElement
                }
            }, ({
                transcriptVisible: e,
                fullPlayerElement: t
            }) => {
                i("transcriptDisabled", !(e && !t))
            }), t(e => {
                var t, n;
                return {
                    breakpoint: null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint,
                    sizeMode: null == e || null == (n = e.appearance) ? void 0 : n.appSizeMode
                }
            }, ({
                breakpoint: t,
                sizeMode: i
            }) => {
                const o = __(t, i);
                o !== n().transcriptSizeMode && e(e => E(E({}, e), {}, {
                    transcriptSizeMode: o
                }))
            }), t(e => {
                var t, n;
                return {
                    outroDisplayed: null == e || null == (t = e.displayList) ? void 0 : t.outro,
                    animationActive: null == e || null == (n = e.appearance) ? void 0 : n.rightContentAreaAnimating
                }
            }, ({
                outroDisplayed: e,
                animationActive: t
            }) => {
                e && !t && I()
            }), {
                timecodeDisplayed: h,
                searchTerms: T,
                setSearchTerms: L,
                resetSearchTerms: () => L(u_.searchTerms),
                currentSearchResultIndex: g,
                setCurrentSearchResultIndex: b,
                settingsDisplayed: m,
                setSettingsDisplayed: f,
                selectedTrack: p,
                availableTracks: u,
                setSelectedTrack: e => {
                    const t = u.find(t => t.id === e);
                    i("selectedTrack", t), I(), r.fire(Kt._transcriptChanged, t)
                },
                selectedSettingsMenu: o,
                setSelectedSettingsMenu: v,
                searchResults: y,
                setSearchResults: C,
                toggleTimecodeDisplayed: () => {
                    var e;
                    return i("timecodeDisplayed", !(null == (e = n()) ? void 0 : e.timecodeDisplayed))
                },
                toggleSettingsDisplayed: () => {
                    var e;
                    return f(!(null == (e = n()) ? void 0 : e.settingsDisplayed))
                },
                transcriptDisabled: w,
                transcriptSizeMode: A,
                autoFollowEnabled: S,
                setAutoFollowEnabled: e => i("autoFollowEnabled", e)
            }
        }),
        children: e
    })
};

function __(e, t) {
    const n = e === Qo.XS || e === Qo.XXS,
        i = t === vi.MINI || t === vi.TINY;
    return n || i ? Cl.SMALL : e === Qo.XL || e === Qo.XXL ? Cl.LARGE : Cl.MEDIUM
}
const v_ = ({
    onClose: e
}) => {
    const t = Cn(xn.EXCLUDE_GLOBAL_BUTTON_STYLES, "ContentAreaCloseButton_module_closeContentAreaButton__3a37ef65", Fd.focusableButton);
    let n = er.MD;
    const i = ad(e => e.appearance.appBreakpoint),
        r = ad(e => e.displayList.rightContentArea);
    i !== Qo.XL && i !== Qo.XXL || (n = er.CUSTOM);
    const {
        onClick: a,
        onKeyDown: s
    } = mn(e), l = De(Yd, {
        onClick: a,
        onKeyDown: s,
        size: n,
        icon: De(vd, {
            name: mc.CLOSE,
            focusable: "false"
        }),
        "aria-label": "Close",
        disabled: !r,
        color: tr.CUSTOM,
        className: t
    });
    return o.touch ? l : De(Rd, {
        tooltipContent: "Close",
        className: "ContentAreaCloseButton_module_tooltip__3a37ef65",
        children: l
    })
};
const m_ = ({
        message: e,
        icon: t,
        componentType: n,
        children: i,
        onClose: o
    }) => De("div", {
        className: "ContentAreaMessage_module_container__1e72004a",
        "data-component-type": n,
        children: [De(v_, {
            onClose: o
        }), t || De(vd, {
            name: mc.INFO_CIRCLE,
            className: "ContentAreaMessage_module_icon__1e72004a"
        }), De(Vd, {
            size: or.MD,
            weight: rr.NORMAL,
            className: "ContentAreaMessage_module_messageText__1e72004a",
            children: e
        }), i]
    }),
    f_ = ({
        onRetry: e
    }) => {
        const t = ic(),
            n = d_(e => e.selectedTrack),
            i = ad(e => e.setDisplayList),
            o = De(vd, {
                name: mc.WARN_CIRCLE,
                className: "TranscriptError_lazy_module_icon__5b067110"
            });
        return De(m_, {
            message: "There was a problem loading the transcript.",
            onClose: () => i("transcript", !1),
            componentType: "transcript-error",
            icon: o,
            children: De(Yd, {
                className: "TranscriptError_lazy_module_refresh__5b067110",
                color: tr.PRIMARY,
                onClick: () => {
                    e(), t(vr.EMBEDDED_TRANSCRIPT_CLICK, {
                        name: "click_refresh_error",
                        copy: "Refresh",
                        location: "player_embedded_transcript_error",
                        element: "refresh_transcript_button",
                        current_transcript_language: null == n ? void 0 : n.language
                    })
                },
                "data-component-type": "retry-request",
                children: De(Vd, {
                    size: or.MD,
                    weight: rr.BOLD,
                    color: ar.WHITE,
                    children: "Refresh"
                })
            })
        })
    };
const h_ = ({
    style: e = {}
}) => {
    const t = Oe(!0),
        n = ad(e => e.displayList.transcript),
        {
            module: i,
            load: o,
            readyState: r
        } = tc(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            return import ("./Transcript.lazy.module.js")
        }))),
        a = null == i ? void 0 : i.Transcript,
        s = ad(e => e.embed.transcript);
    if (n && t.current && (o(), t.current = !1), !s || r !== Ql.LOADED && !n) return null;
    const l = Cn(!n && "TranscriptLoader_module_hidden__67242adb");
    return (De("div", {
        style: e,
        className: l,
        children: [r === Ql.LOADING && De(jd, {}), r === Ql.ERROR && De(f_, {
            onRetry: o
        }), r === Ql.LOADED && De(a, {})]
    }))
};
let g_;
const b_ = () => {
    const e = ad(e => e.playback.buffering),
        t = ad(e => e.playback.isChromecastBuffering),
        n = ad(e => e.playback.isChromecastConnected),
        i = ad(e => e.displayList.progressBar),
        o = ad(e => e.appearance.isStartTimeThumbLoading),
        [r, a] = Pe(o);
    return e || t || o ? g_ = setTimeout(() => {
        a(!0)
    }, 600) : (clearTimeout(g_), a(!1)), i && De(Ge, {
        children: [De(dd, {
            visible: n || r,
            styleOverrides: {
                enterActive: {
                    opacity: .4
                },
                exit: {
                    opacity: .4
                },
                exitDone: {
                    display: "none"
                }
            },
            children: De("div", {
                className: "BufferHandler_module_shade__cb05e8a3",
                "data-shade": !0
            })
        }), De(dd, {
            visible: r,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: De(jd, {
                size: sr.LG
            })
        })]
    })
};
const E_ = () => {
    const e = ad(e => e.captions.activeCues),
        t = ad(e => e.captions.language),
        n = ad(e => e.captions.direction),
        i = ad(e => e.displayList.captions),
        o = ad(e => e.displayList.controlBar),
        r = ad(e => e.displayList.progressBar),
        a = ad(e => e.appearance.fullscreen),
        s = ad(e => e.embed.rightContentAreaEnabled),
        l = ad(e => e.captions.fontSize),
        c = ad(e => e.captions.fontFamily),
        d = ad(e => e.captions.fontOpacity),
        u = ad(e => e.captions.color),
        p = ad(e => e.captions.bgColor),
        _ = ad(e => e.captions.bgOpacity),
        v = ad(e => e.captions.windowOpacity),
        m = ad(e => e.captions.windowColor),
        f = ad(e => e.captions.edgeStyle),
        h = ad(e => e.appearance.videoHeight),
        g = ad(e => e.appearance.containerHeight),
        b = uu(e => e.embed.transparent);
    let E = null,
        y = {};
    !a && b || h < g - 58 && (E = `translateY(-${(g-h)/2}px)`, y.transform = E);
    const C = Cn("Captions_module_captions__192836f7", !i && "Captions_module_hide__192836f7", o && !E && "Captions_module_withControls__192836f7", !r && "Captions_module_noPlaybar__192836f7", a && "Captions_module_fullscreen__192836f7", s && "Captions_module_contentAreaSibling__192836f7");
    return De(zd, {
        cues: e,
        language: t,
        direction: n,
        className: C,
        fontSize: l,
        fontFamily: c,
        fontOpacity: d,
        color: u,
        bgColor: p,
        bgOpacity: _,
        windowOpacity: v,
        windowColor: m,
        edgeStyle: f,
        height: h,
        style: y
    })
};
let y_;
const C_ = ({
        containerRef: e
    }) => {
        const t = ad(e => e.closeToast),
            [n, i] = Pe(!1),
            [o, r] = Pe(!1),
            [a, s] = Pe(!1),
            l = ic();
        Ie(() => {
            l(vr.VIEW_PLAYER_CSAT_V1), y_ = setTimeout(t, 1e4)
        }, [l, t]);
        return De(Ge, {
            children: [De(tu, {
                transitionTime: 1e4,
                ariaLabelledby: Fn.QOE_SURVEY_TEXT
            }), De(nu, {
                id: Fn.QOE_SURVEY_TEXT,
                children: "How's the viewing experience?"
            }), De(Jd, {
                className: `QoESurvey_module_thumbsUp__1993fb34 ${n?"QoESurvey_module_selected__1993fb34":""}`,
                tooltipLabel: "Good",
                "aria-label": "Good",
                "aria-describedby": Fn.QOE_SURVEY_TEXT,
                icon: De(vd, {
                    name: n ? mc.THUMBS_UP_FILLED : mc.THUMBS_UP
                }),
                onClick: () => {
                    n || o || a || (l(vr.SELECT_THUMBS_UP_PLAYER_CSAT_V1), i(!0), clearTimeout(y_), setTimeout(t, 200))
                },
                containerRef: e
            }), De(Jd, {
                className: `QoESurvey_module_thumbsDown__1993fb34 ${o?"QoESurvey_module_selected__1993fb34":""}`,
                tooltipLabel: "Poor",
                "aria-label": "Poor",
                "aria-describedby": Fn.QOE_SURVEY_TEXT,
                icon: De(vd, {
                    name: o ? mc.THUMBS_DOWN_FILLED : mc.THUMBS_DOWN
                }),
                onClick: () => {
                    n || o || a || (l(vr.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1), r(!0), clearTimeout(y_), setTimeout(t, 200))
                },
                containerRef: e
            }), De(Zd, {}), De(iu, {
                onClick: () => {
                    n || o || a || (l(vr.DISMISS_PLAYER_CSAT_V1), s(!0), clearTimeout(y_), t())
                },
                describedBy: Fn.QOE_SURVEY_TEXT,
                selected: a
            })]
        })
    },
    T_ = () => {
        const e = ad(e => e.playback.liveEdgeTime),
            t = ad(e => e.setPlayback),
            n = ic();
        return De(eu, {
            onClick: () => {
                t("atLiveEdge", !0), t("currentTime", e), n(vr.SKIP_TO_LIVE_CLICK)
            },
            label: "Skip to live"
        })
    },
    L_ = () => {
        const e = ad(e => e.closeToast);
        return De(Ge, {
            children: [De(nu, {
                id: Fn.BROADCAST_OVER,
                children: "The live broadcast is over"
            }), De(Zd, {}), De(iu, {
                onClick: e,
                describedBy: Fn.BROADCAST_OVER
            })]
        })
    };
const w_ = {
        [id.QOE_SURVEY]: Fn.QOE_SURVEY_TEXT,
        [id.BROADCAST_OVER]: Fn.BROADCAST_OVER
    },
    A_ = () => {
        const e = Oe(null),
            t = ad(e => e.toast.purpose),
            n = ad(e => e.appearance.fullscreen),
            i = ad(e => e.setDisplayList),
            r = w_[t],
            a = "translateY(" + (n && o.iPadOS ? "calc(36px + 16px)" : "0") + ")",
            s = {
                enter: {
                    transform: "translateY(calc(-100% - 16px))",
                    opacity: 1
                },
                enterActive: {
                    transition: "transform 400 ease-in-out",
                    transform: a
                },
                enterDone: {
                    transform: a
                },
                exit: {
                    transform: a
                },
                exitActive: {
                    transition: "transform 400 ease-in-out",
                    transform: "translateY(calc(-100% - 16px))",
                    opacity: 1
                },
                exitDone: {
                    transform: "translateY(calc(-100% - 16px))",
                    display: "none"
                }
            };
        return De(ou, {
            targetContent: t !== id.EMPTY ? t : null,
            onContentChange: e => {
                i("toast", !!e)
            },
            delay: 400,
            styleOverrides: s,
            children: t => De(Xd, {
                className: "Toasts_module_toasts__100db7ca",
                ref: e,
                ariaLabelledby: r,
                children: [t === id.QOE_SURVEY && De(C_, {
                    containerRef: e
                }), t === id.SKIP_TO_LIVE && De(T_, {}), t === id.BROADCAST_OVER && De(L_, {})]
            })
        })
    },
    S_ = () => {
        const e = ad(e => e.liveEvent.isLiveEvent) ? "Unmute broadcast" : "Unmute",
            {
                unmute: t
            } = ac();
        return De(eu, {
            onClick: t,
            label: e
        })
    },
    I_ = () => {
        const e = ad(e => e.setAppearance),
            t = ad(e => e.clearSegment),
            n = ad(e => e.playback.startTime),
            i = ad(e => e.playback.endTime),
            o = ic();
        return De(eu, {
            onMouseEnter: () => e("mousedOverControlBar", !0),
            onMouseLeave: () => e("mousedOverControlBar", !1),
            onClick: () => {
                o(vr.WATCH_FULL_VIDEO, {
                    start_time: n,
                    end_time: i
                }), t()
            },
            label: "Watch full video"
        })
    };
const P_ = () => {
    const e = ad(e => e.topCenterActionItem.purpose),
        t = ad(e => e.setDisplayList);
    return De(ou, {
        targetContent: e !== ll.EMPTY ? e : null,
        onContentChange: e => {
            t("topCenterActionItem", !!e)
        },
        styleOverrides: {
            exitDone: {
                display: "none"
            }
        },
        children: e => De(Xd, {
            className: "TopCenterActionItems_module_topCenterActionItems__cde6f652",
            children: [e === ll.UNMUTE && De(S_, {}), e === ll.WATCH_FULL_VIDEO && De(I_, {})]
        })
    })
};
const O_ = ({
    onReload: e
}) => {
    const t = ad(e => e.setDisplayList),
        n = Cn(xn.EXCLUDE_GLOBAL_BUTTON_STYLES, "AIWidgetError_module_reload__36594e38");
    return De(m_, {
        message: "Unable to load Vimeo AI",
        componentType: "ai-error",
        onClose: () => t("aiWidget", !1),
        children: De(Yd, {
            className: n,
            size: er.CUSTOM,
            onClick: e,
            "data-component-type": "reload-ai",
            children: De(Vd, {
                size: or.MD,
                weight: rr.BOLD,
                children: "Try again"
            })
        })
    })
};
const k_ = ({
        style: e = {}
    }) => {
        const t = ad(e => e.displayList.aiWidget),
            i = ad(e => e.embed.vimeoUrl),
            o = ad(e => e.embed.videoId),
            r = ad(e => e.embed.videoUnlistedHash),
            a = ad(e => e.setDisplayList),
            s = ad(e => e.appearance.rightContentAreaAnimating),
            l = ad(e => e.embed.onsite),
            c = ad(e => e.embed.aiWidgetSignature),
            d = ic(),
            u = _c(t),
            [p, _] = Pe(!1),
            v = Cn("AIWidget_module_aiWidget__d1e4045c", !t && "AIWidget_module_hidden__d1e4045c"),
            m = {
                transparentBackground: !l
            };
        c && (m.guestSignature = c);
        const f = n(`https://${i}/ai-player/${o}${r?`/${r}`:""}`, m),
            {
                componentVersion: h,
                hasError: g,
                componentTimeout: b,
                onError: y,
                onReload: C
            } = sc(),
            T = ke(() => {
                const e = {
                    [mr.WEB]: {
                        page_name: "player"
                    },
                    [mr.PRODUCT_ANALYTICS]: {
                        copy: "Ask Vimeo AI",
                        feature: "ai",
                        product: "ai",
                        element: "icon"
                    }
                };
                d(vr.OPEN_AI_OPTIONS, {}, e)
            }, [d]);
        return Ie(() => {
            t && (T(), p || _(!0))
        }, [t]), De("div", E(E({
            className: v,
            style: e,
            "aria-label": "Ask Vimeo AI"
        }, u), {}, {
            children: [g && De(O_, {
                onReload: C
            }), !g && p && De(hu, {
                id: Un.AI_WIDGET_ID,
                url: f,
                title: "Ask Vimeo AI",
                onError: y,
                timeout: b,
                visible: t,
                onClose: () => {
                    a("aiWidget", !1)
                },
                isAnimating: s,
                waitForReady: !0
            }, h)]
        }))
    },
    R_ = () => {
        const e = Oe(!0),
            {
                module: t,
                load: n,
                readyState: i
            } = tc(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                return import ("./Compass.lazy.module.js")
            }))),
            o = null == t ? void 0 : t.Compass,
            r = ad(e => e.playback.playInitiated),
            a = ad(e => e.embed.compass);
        return a && r && e.current && (n(), e.current = !1), !a || i !== Ql.LOADED && !r ? null : De(o, {})
    };
const N_ = () => {
    const e = ad(e => e.embed.persistentLogo),
        t = ad(e => e.appearance.playerBreakpoint);
    return e && De("div", {
        className: "PersistentLogo_module_persistentLogo__d8a88508",
        tabIndex: -1,
        "aria-hidden": "true",
        "data-persistent-logo": !0,
        children: De(bu, {
            playerBreakpoint: t
        })
    })
};
const D_ = ({
    text: e
}) => De("h3", {
    children: [De(vd, {
        name: mc.WARN_TRIANGLE,
        className: "Warning_module_warningIcon__9ae80507"
    }), De("span", {
        dangerouslySetInnerHTML: {
            __html: e
        }
    })]
});

function M_() {
    return De(D_, {
        text: 'See a <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="new-window">list of browsers</a> that support 360 viewing.'
    })
}

function x_() {
    return De(D_, {
        text: 'Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="new-window">supported browsers and settings</a>.'
    })
}
const B_ = ({
        visible: e,
        children: t,
        duration: n,
        onComplete: i
    }) => De(Be, { in: e,
        duration: n,
        styles: {
            enter: {
                transform: "translateY(-100%)",
                transition: `transform ${n}ms linear, opacity ${n}ms`,
                opacity: 0
            },
            enterActive: {
                opacity: 1,
                transition: `transform ${n}ms cubic-bezier(0, 1.14, 0.57, 1.21), opacity ${n}ms`,
                transform: "translateY(0)",
                animationName: "bounce",
                animationDelay: n,
                animationDuration: "0.5s",
                animationFillMode: "forwards"
            },
            enterDone: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exit: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exitActive: {
                animationFillMode: "none",
                opacity: 0,
                transform: "translateY(-100%)",
                transition: `transform ${2*n}ms linear, opacity ${2*n}ms linear`
            },
            exitDone: {
                display: "none"
            }
        },
        onExited: i,
        children: t
    }),
    V_ = () => {
        const e = ad(e => e.displayList.alert),
            t = Oe(null),
            n = ad(e => e.setAlert),
            i = ad(e => e.setDisplayList),
            o = ad(e => e.alert.currentAlert),
            r = ke(() => i("alert", !1), [i]),
            a = ke(() => n("currentAlert", gl.EMPTY), [n]);
        return Ie((function() {
            e && (clearTimeout(t.current), t.current = setTimeout(r, 1e3))
        }), [e, o]), De(B_, {
            visible: e,
            duration: 100,
            onComplete: a,
            children: De("div", {
                className: "Alert_module_alert__1c2071d3",
                role: "alert",
                hidden: !e,
                children: [De(Yd, {
                    onClick: r,
                    icon: De(vd, {
                        name: mc.CLOSE,
                        className: "Alert_module_closeIcon__1c2071d3"
                    }),
                    "aria-label": "Close alert",
                    className: "Alert_module_close__1c2071d3"
                }), o === gl.SPATIAL_UNSUPPORTED && De(M_, {}), o === gl.SPATIAL_FAILURE && De(x_, {})]
            })
        })
    };
const U_ = {
        enter: {
            opacity: 0
        },
        enterActive: {
            opacity: 1,
            transition: "opacity 250ms ease-out"
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: "opacity 250ms ease-out"
        },
        exitDone: {
            display: "none"
        }
    },
    F_ = Object.values(ru),
    H_ = () => {
        const e = uu(e => e.accessGate.purpose),
            t = uu(e => e.accessGate.url),
            n = uu(e => e.accessGate.title),
            i = uu(e => e.accessGate.accessGateReady),
            o = uu(e => e.accessGate.accessGateLoaded),
            r = uu(e => e.accessGate.closeAccessGate),
            a = uu(e => e.accessGate.setAccessGateReady),
            s = uu(e => e.accessGate.setAccessGateLoaded),
            l = uu(e => e.accessGate.sendGateBPEvent),
            c = uu(e => e.config),
            [d, u] = Pe(!1),
            p = d && e !== Mo.EMPTY,
            _ = p && !o,
            v = p && i,
            m = Cn(xn.REMOTE_ACCESS_GATE, "RemoteAccessGate_module_accessGate__2f8b92c5", _ && "RemoteAccessGate_module_iframeLoading__2f8b92c5", v && "RemoteAccessGate_module_visible__2f8b92c5"),
            {
                componentVersion: f,
                hasError: h,
                componentTimeout: g,
                onError: b,
                onReload: E
            } = sc();
        return Ie(() => {
            u(!0)
        }, []), De(Be, { in: p,
            styles: U_,
            duration: 250,
            children: De("div", {
                className: "RemoteAccessGate_module_accessGateWrapper__2f8b92c5",
                children: [h && De(G_, {
                    onReload: E
                }), !h && p && De(cu, {
                    visible: v,
                    id: e,
                    url: t,
                    title: n,
                    className: m,
                    timeout: g,
                    waitForReady: !0,
                    onClose: r,
                    onError: e => {
                        F_.includes(null == e ? void 0 : e.message) && b(), l(Bo.ERROR, e)
                    },
                    config: c,
                    onRemoteComponentReady: a,
                    onIframeLoad: s
                }, f)]
            })
        })
    };
const G_ = ({
    onReload: e
}) => {
    const t = Cn(xn.EXCLUDE_GLOBAL_BUTTON_STYLES, "RemoteAccessGateError_module_reload__605098dd");
    return De("div", {
        className: "RemoteAccessGateError_module_container__605098dd",
        "data-component-type": "access-gate",
        children: [De(vd, {
            name: mc.INFO_CIRCLE,
            className: "RemoteAccessGateError_module_icon__605098dd",
            "aria-hidden": "true"
        }), De(Vd, {
            size: or.LG,
            weight: rr.NORMAL,
            className: "RemoteAccessGateError_module_messageText__605098dd",
            role: "alert",
            children: "Unable to load registration form"
        }), De(Yd, {
            className: t,
            size: er.CUSTOM,
            onClick: e,
            "data-component-type": "reload-access-gate",
            children: De(Vd, {
                size: or.MD,
                weight: rr.BOLD,
                children: "Try again"
            })
        })]
    })
};

function W_(e, t) {
    const n = t.querySelector(`.${Mn.VP_PLAYER_UI_CONTAINER}`),
        i = t.querySelector(`.${Mn.VP_PLAYER_UI_OVERLAYS}`);
    ze(De(pu, {
        player: e,
        children: [De(H_, {}), De(a_, {}), De(ld, {
            player: e,
            children: [De(Yp, {}), De(Jp, {}), De(Kp, {
                element: i,
                children: [De(P_, {}), De(A_, {}), De(e_, {}), De(qu, {}), De(Pu, {}), De(Gu, {}), De(Ku, {}), De(Gp, {}), De(Zp, {}), De(Hp, {}), De($p, {}), De(b_, {}), De(E_, {}), De(R_, {}), De(V_, {})]
            }), De(N_, {}), De(l_, {}), De(s_, {})]
        })]
    }), n)
}

function Y_(e, t) {
    const n = t.querySelector(`.${Mn.VP_PLAYER_UI_OVERLAYS}`);
    ze(De(pu, {
        player: e,
        children: [De(a_, {}), De(ld, {
            player: e,
            children: De(Gu, {})
        })]
    }), n)
}
let q_ = 0;

function $_(e = "b") {
    return `${e}${++q_}`
}
$_(), $_(), $_(), $_(), $_(), $_(), $_(), $_();
const K_ = $_(),
    j_ = $_(),
    z_ = $_(),
    X_ = $_(),
    Z_ = $_(),
    J_ = $_(),
    Q_ = $_(),
    ev = $_(),
    tv = $_(),
    nv = $_(),
    iv = $_(),
    ov = $_(),
    rv = $_(),
    av = $_();
var sv = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: K_,
        TELECINE_READY: j_,
        TELECINE_VIDEO_INIT: z_,
        PLAY_INITIATED: X_,
        QUALITY_CHANGED: Z_,
        FORCED_QUALITY: J_,
        CUE_CHANGED: Q_,
        CAPTIONS_CHANGED: ev,
        SPATIAL_PLAYBACK_TOGGLED: tv,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: nv,
        HLS_QUALITY_CHANGED: iv,
        REQUEST_COMPLETE_LIVE_SUBTITLES: ov,
        COMPLETE_LIVE_SUBTITLES_LOADED: rv,
        COMPLETE_LIVE_SUBTITLES_ERROR: av
    }),
    lv = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
E(E(E(E(E(E(E(E({}, g), S), Xe), lv), z), $), j), sv), E(E({}, Xe), lv);
let cv = function() {
        function e() {}
        return e.init = function(e) {
            this.configurePictureInPicture(e.config, e.backbone), e.backbone.on(K_, (t, n) => {
                this.getPipSetting(n) !== this.getPipSetting(t) && this.configurePictureInPicture(t, e.backbone)
            })
        }, e.getPipSetting = function(e) {
            var t, n;
            return null == (t = e.embed) || null == (n = t.settings) ? void 0 : n.pip
        }, e.configurePictureInPicture = function(e, t) {
            var n, i, o, r, a, s;
            t.disablePictureInPicture = !(null === (n = null == (i = e.embed) || null == (o = i.settings) ? void 0 : o.pip) || void 0 === n || n), t.autoPictureInPicture = !(null !== (r = null == (a = e.embed) || null == (s = a.settings) ? void 0 : s.auto_pip) && void 0 !== r && !r)
        }, e
    }(),
    dv = function(e) {
        cv.init(e)
    };

function uv({
    element: n,
    delegate: i = {},
    cssLoadedPromise: r = Promise.resolve(null),
    name: a = null
}) {
    Ze.set(Nr);
    let s = !1;
    const l = Je(Cs, et(e => (...t) => {
            const n = e.apply(void 0, t),
                i = _t();

            function o(e, t) {
                return (e = [].concat(e)).map(e => t(n.createGetter(e)))
            }
            return E(E({}, n), {}, {
                watch: function(e, t) {
                    return o(e, e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    })
                },
                unwatch: function(e, t) {
                    return o(e, e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    })
                }
            })
        }, function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const r = ne(e => {
                    if (ie(e)) return e;
                    const t = u(o(), e);
                    return ie(t) ? t : t => u(t, e)
                });
                return E(E({}, i), {}, {
                    getSelectors: o,
                    createGetter: r,
                    get: function(e, t) {
                        let n = (e = r(e))(i.getState());
                        return void 0 !== t && (n = oe(n, t)), n
                    }
                })
            }
        }(Ts), Qe.apply(void 0, []))),
        p = new Map,
        _ = O(),
        v = new Mr({
            events: _
        }),
        m = c();
    n.classList.add(`player-${m}`), n.classList.add("loading"), n.id || (n.id = `player${m}`), n.innerHTML = Ls.render("outer", {
        strings: {
            back: "Back",
            close: "Close overlay",
            opensANewWindow: "(opens a new window)"
        }
    });
    const f = n.querySelector(".vp-telecine");
    if (o.iOS) {
        const e = document.createElement("video");
        f.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (De) {
            Nr.captureException(De)
        }
    }
    let h, b, y, C, L, w, A, I = null,
        P = null,
        k = null,
        R = null,
        N = null,
        D = null,
        M = null,
        x = null,
        V = null,
        U = null,
        F = null,
        H = null,
        G = !1,
        W = null,
        Y = null,
        q = {};
    const $ = new Promise((e, t) => {
        w = e, A = t, G = !0
    }).then(() => (G = !1, _.fire(Kt._ready), null));
    let K;
    const j = new Promise(e => {
        K = e
    });
    let z = {
        get config() {
            return v.config
        },
        set config(e) {
            v.config = e
        },
        get delegate() {
            return i
        },
        set delegate(e) {
            i = e
        },
        ready(e) {
            if (!e) return $;
            $.then(() => e()).catch(e => {
                Nr.captureException(e)
            })
        },
        playbackEngineReady(e) {
            if (!e) return j;
            j.then(() => e()).catch(e => {
                Nr.captureException(e)
            })
        },
        get sessionId() {
            return v.config.request.session
        },
        get name() {
            return a
        },
        get parentUrl() {
            return F
        },
        set parentUrl(e) {
            F = e
        },
        destroy() {
            G && A("Cancelling player initialization."), _.fire(xt._destroy)
        }
    };

    function X(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), (null == (t = i.request) ? void 0 : t.urls.js) && it(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== Xt.main && i.view !== Xt.privateUnlocked && i.view !== Xt.webinarUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, (null == (o = history) ? void 0 : o.replaceState) && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== Xt.main && i.view !== Xt.privateUnlocked && i.view !== Xt.webinarUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        ! function(e, t) {
            (null == e ? void 0 : e.embed) && (null == t ? void 0 : t.embed) && [
                ["color", on],
                ["color_one", nn],
                ["color_two", on],
                ["color_three", rn],
                ["color_four", an]
            ].forEach(([n, i]) => {
                t.embed[n] && e.embed[n] !== t.embed[n] && _.fire(xt._changeColor, t.embed[n], i)
            })
        }(n, i), N && N.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return b = null, C = I, _.fire(xt._reset), l.dispatch(Kr(i)), _.fire(Kt._configChanged, r, i), e
    }

    function Z() {
        var e;
        null == (e = k) || e.hide(), n.classList.remove("loading"), w()
    }

    function J(e) {
        return r.then(() => {
            if (te(e), P && P.resetThumbnail(), "function" != typeof q.authorizationHandler) throw new Error("Config was not authorized.");
            return q.authorizationHandler(Z)
        }).then(e => (v.config = e, b = null, l.dispatch(Kr(v.config)), _.fire(xt._reset), _.fire(Kt._configChanged, !0, v.config), e))
    }

    function Q() {
        s || (_.on(Kt._userLogIn, (function(e) {
            v.reload().then(t => {
                if (!v.config.user.logged_in) return _.fire(Kt._loginFailure), t;
                switch (_.fire(Kt._userLoggedIn, e), e) {
                    case "like":
                        v.config.user.liked && _.fire(Kt._liked);
                        break;
                    case "watch-later":
                        v.config.user.watch_later && _.fire(Kt._addedToWatchLater);
                        break;
                    case "private":
                        _.fire(Kt._privateUnlocked, t.loaded)
                }
                return t
            }).catch(e => {
                Nr.captureException(e)
            })
        })), _.on(Kt._userLoggedOut, () => {
            v.reload().catch(e => {
                Nr.captureException(e)
            })
        }), s = !0)
    }

    function ee(e) {
        H = Ea(e), Q(),
            function(e) {
                P = new La(e, l, n.querySelector(".vp-preview")), k = new wa(e), _.on([S.BUFFER_ENDED, g.PLAYING], () => {
                        P.hide()
                    }), I = new nt(f, v.config), C = I, x = new Ys(e), new Ga(e, l, n.querySelector(".vp-video-wrapper")), re(e), e.doNotTrackEnabled || (v.config.request.urls.test_imp && function(e, t) {
                        if (!e.config.request.ab_tests) return;
                        const n = new d(t);
                        for (const i in e.config.request.ab_tests) {
                            const t = e.config.request.ab_tests[i];
                            if (!t.track) continue;
                            const o = {
                                session_id: e.config.request.session,
                                test_id: i,
                                test_group: String(t.group)
                            };
                            n.log(o, !0, !1).catch(e => {})
                        }
                    }(e, `${v.config.request.urls.test_imp}?beacon=1`), new Fs(e, n, l, v.config.request.urls.fresnel), new Lr(e), new Ya(e, l), new Hs(e), new Cr(e, Ir), function(e) {
                        function t(t) {
                            return function({
                                value: n
                            }) {
                                js[t] || (js[t] = !0, function(t, n) {
                                    Ir(vr.PLAYER_PERFORMANCE_MEASUREMENT, e.config, {
                                        measurement_type: t,
                                        measurement_value: n
                                    })
                                }(t, n))
                            }
                        }
                        Math.random() <= Ks && (Le(t($s.FIRST_INPUT_DELAY)), we(t($s.CUMULATIVE_LAYOUT_SHIFT)), Ae(t($s.LARGEST_CONTENTFUL_PAINT)))
                    }(e)), N = new Ua(e),
                    function(e) {
                        if (!eo(e.config)) return;
                        const t = new Wr({
                            core: e,
                            textAlert: new Ms(n)
                        });
                        Yr.init({
                            chromecastPlayer: t
                        }), Yr.on([Gr.error, Gr.mediaLoadedFailed], e => {
                            Nr.captureException(e)
                        })
                    }(e), te(e)
            }(e), new dv(e)
    }

    function te(e) {
        R || (R = new Ds(e), ws(z, R), ot.set(Nr))
    }

    function re(e) {
        const t = v.config.request.ads;
        t && (t.adcode && t.adunit || t.adurl) && (D = new Gs(e, n.querySelector(".vp-video-wrapper")), _.on(Kt._pausedForAd, () => {
            C = D, _.fire(Kt._displayContextChanged)
        }), _.on(Kt._resumedAfterAd, () => {
            C = I, _.fire(Kt._displayContextChanged)
        }), Yr && (Yr.on(Gr.connected, () => {
            D.toggleCastingState(!0)
        }), Yr.on(Gr.disconnected, () => {
            D.toggleCastingState(!1)
        })))
    }

    function ae(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = Tt(Ct(e), e, t)), n
    }
    const se = {
        get store() {
            return l
        },
        get config() {
            return v.config
        },
        get element() {
            return n
        },
        get events() {
            return _
        },
        get uuid() {
            return m
        },
        get expose() {
            return z
        },
        get backbone() {
            return I
        },
        get adHandler() {
            return D
        },
        get displayContext() {
            return C
        },
        get preview() {
            return P
        },
        get doNotTrackEnabled() {
            return v.config.embed.dnt || v.config.request.flags.dnt
        },
        get playLoggingEnabled() {
            return v.config.embed.log_plays && v.config.request.flags.plays
        },
        get canPlayPictureInPicture() {
            var e;
            const t = !1 !== o.pictureInPictureSupportType,
                n = o.spatialPlayback && (null == (e = v.video) ? void 0 : e.spatial),
                i = (o.iOS >= 17 || o.browser.safari) && I.readyState < 2;
            i && I.once(g.LOADED_DATA, () => _.fire(B));
            const r = 1 === v.config.embed.settings.pip;
            return t && !i && !n && r
        },
        get currentTime() {
            return Yr.isCastConnected ? Yr.chromecastPlayer.currentTime : I.currentTime
        },
        get debugCollector() {
            return x
        },
        overrideFragmentsHandler(e, t) {
            var n;
            null == (n = V) || n.hibernate(), h = v.config.embed.interactive, U = V, V = e, v.config.embed.interactive = v.config.embed.interactive || {
                markers: 0
            }, v.config.embed.interactive.fragments = t, _.fire(Kt._fragmentChanged)
        },
        restoreLastFragmentsHandler() {
            var e;
            V = U, null == (e = V) || e.wake(), v.config.embed.interactive && (v.config.embed.interactive = h), _.fire(Kt._fragmentChanged)
        },
        get fragmentsHandler() {
            return V
        },
        get ottVideoMetadata() {
            return M
        },
        set ottVideoMetadata(e) {
            M = e
        },
        get startTime() {
            return W
        },
        set startTime(e) {
            var t;
            null !== W && null === e && null === Y && (null == (t = H) || t.clearSegmentedPlayback()), W = e, _.fire(Kt._startTimeUpdated, W)
        },
        get endTime() {
            return Y
        },
        set endTime(e) {
            var t;
            null !== Y && null === e && null === W && (null == (t = H) || t.clearSegmentedPlayback()), Y = e, _.fire(Kt._endTimeUpdated, Y)
        },
        get segmentedPlaybackEnabled() {
            return null !== W && null !== Y
        },
        inView: () => Ao(n),
        init: (e, t) => y || (V = new qs(se), new As(se, l, n), q = t, y = v.load(e).then(e => a === _i.ChromelessPlayer ? (new Y_(se, n), e) : (new W_(se, n), e)).then(X).catch(e => (Q(), J(se))).then(() => "function" == typeof q.initializationHandler ? Promise.resolve(t.initializationHandler()) : null).then(() => (ee(se), K(), "function" == typeof q.postInitializationHandler ? Promise.resolve(t.postInitializationHandler()) : null)).then(() => Promise.all([P.thumbnailPromise, r])).then(Z).then(() => (Nr.setUp(se), null)).catch(e => {
            Nr.captureException(e)
        }), y),
        loadVideoViaIframe(e, n = {}, i = {}) {
            let o = [],
                r = n;
            for (const t in i) !0 === i[t] && o.push(t);
            o.length && (r.listeners = o.join(",")), r.fromLoadVideo = 1, r.referrer = v.config.request.referrer;
            const a = t(window.location.search),
                s = t(`${e}`.split("?")[1]);
            r = Object.assign(a, s, r);
            const l = tt(r),
                c = Lt(e);
            window.location.replace(`https://${v.config.player_url}/video/${c}?${l}`)
        },
        loadVideoViaConfig(e, t) {
            if (L === e && b) return b;
            if (P && P.resetThumbnail(), null == t ? void 0 : t.video_version) {
                let e = v.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map(e => e.id), -1 === e.indexOf(t.video_version)) return Promise.reject("Invalid version id specified")
            }
            _.fire(Kt._loadVideo), L = e, n.classList.add("loading");
            const i = ae(e, t),
                o = p.get(i);
            return e = o ? o._config.loaded : e, b = v.load(e, t).then(e => {
                if (o) {
                    const e = I.element;
                    I = o._backbone, I.element.style.visibility = "visible", e.parentNode.replaceChild(I.element, e), _.fire(Kt._swapVideo)
                }
                return e = X(e), D || re(se), e
            }).catch(e => J(se)).then(e => {
                let t = P.loadThumbnail();
                return Promise.resolve(t)
            }).then(Z), b
        },
        preloadVideo(e, t, n) {
            const i = ae(t, n),
                o = p.get(i);
            return o ? Promise.resolve(o) : new Mr({
                events: _
            }).load(t, n).then(t => {
                t.loaded.preload = !0;
                const n = I.element.cloneNode(!1);
                n.style.visibility = "hidden", I.element.parentNode.insertBefore(n, I.element);
                const o = new nt(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return p.set(i, r), r
            })
        },
        performDelegateAction(t, n = (() => {}), o = []) {
            var r, a;
            let s;
            var l;
            null != (r = i) && r[t.will] && (s = (l = i)[t.will].apply(l, [v.config.video.id].concat(e(o))), !1 === s) || (n.apply(void 0, [v.config.video.id].concat(e(o), [s])), (null == (a = i) ? void 0 : a[t.did]) && i[t.did]())
        },
        ready: () => $,
        playbackEngineReady: () => j,
        verifyConfig: () => v.verify(),
        refreshAssetUrls: () => v.refreshAssetUrls().then(e => {
            const t = E(E({}, v.config), {}, {
                request: e
            });
            return X({
                old: v.config,
                loaded: t
            })
        }).catch(e => J(se)),
        updatePhpTokens: () => new Promise((e, t) => {
            if (function(e) {
                    const {
                        vimeo_api_client_token: t,
                        vimeo_api_interaction_tokens: {
                            likes: n,
                            watch_later: i,
                            following: o
                        } = {},
                        vimeo_live_client_token: r,
                        vimeo_bucketed_live_client_token: a
                    } = e;
                    return t && Zo(t) || n && Zo(n) || i && Zo(i) || o && Zo(o) || r && Zo(r) || a && Zo(a)
                }(v.config.user)) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = v.config.request, a = `https://${v.config.player_url}/video/${v.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                T(a, {
                    withCredentials: !0
                }).json().then(t => (v.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, v.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, v.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, v.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e())).catch(e => {
                    Nr.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                })
            } else e()
        })
    };
    return se
}

function pv(e, t, n) {
    var i = null,
        r = o.touch ? 4500 : 2e3,
        a = !0,
        s = !0,
        l = !1,
        c = null,
        d = [],
        u = !1,
        p = null,
        _ = null,
        v = null,
        m = !0,
        f = !1,
        h = !1,
        b = !1,
        E = !1,
        y = !1;
    let C, T;
    var L = n.querySelector(".vp-target"),
        w = n.querySelector(".vp-controls");
    let I = n.querySelector('button[class*="_playButton_"]');
    var P = n.querySelector(".vp-title"),
        O = n.querySelector(".vp-video");
    let k = n.querySelector(".vp-sidedock"),
        R = n.querySelectorAll(".vp-menu"),
        D = n.querySelector(".vp-ads-wrapper"),
        M = n.querySelector(".compass-wrapper");
    const x = e.config.embed.autoplay && e.config.request.flags.autohide_controls,
        B = o.touch ? 300 : 0;
    let V = null;
    const F = Us(e.config, "webvr").group || !1;

    function H() {
        clearTimeout(i), i = null
    }

    function G() {
        "preact-menu" !== v && (v && v.isNewMenu && v.isFullwidth() || y && (clearTimeout(i), i = setTimeout(() => Y(!1, !0), r)))
    }

    function W() {
        de.element && de.element.classList.contains("js-player-fullscreen") && (l || (n.classList.add("player-cursor-hide"), s = !0, l = !0))
    }

    function Y(t, i) {
        var r, l, c;
        if ("preact-menu" === v && i) return;
        if (v && v.isNewMenu && v.isFullwidth()) return;
        if (!f && !m && !n.classList.contains("player-ad")) return;
        if (b) return;
        H(), w = te(), I = ne(), k = ee(), R = n.querySelectorAll(".vp-menu");
        const d = document.activeElement && document.body.classList.contains("showfocus") && ((null == (r = k) ? void 0 : r.contains(document.activeElement)) || (null == (l = w) ? void 0 : l.contains(document.activeElement)) || (null == (c = I) ? void 0 : c.contains(document.activeElement))),
            u = document.activeElement && "preact-menu" === v && Array.from(R).find(e => null == e ? void 0 : e.contains(document.activeElement));
        d || u || (e.events.fire(t ? Kt._mousedOut : Kt._mouseTimeout), s = !0, o.spatialPlayback && e.config.video.spatial || (L.classList.add("hidden"), L.setAttribute("hidden", "")), a = !0, W())
    }

    function q() {
        G(), E || f && m && !n.classList.contains("player-ad") || (e.events.fire(Kt._mousedOver), L.classList.remove("hidden"), L.removeAttribute("hidden"))
    }

    function $() {
        f || m ? n.removeAttribute("tabindex") : f || m || h || n.setAttribute("tabindex", "0")
    }

    function K() {
        e.events.on([g.TIME_UPDATE, g.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === i && (e.events.fire(Kt._targetTimeReached), e.events.off([g.TIME_UPDATE, g.SEEKED], t))
        }))
    }

    function j() {
        O.classList.remove("threesixty-video"), e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing")
    }

    function X() {
        d.forEach(e => clearTimeout(e)), d = []
    }

    function Z(e) {
        e && (e.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            e.classList.add("in")
        }))
    }

    function J(e) {
        e && (e.classList.add("leaving"), window.requestAnimationFrame(() => {
            N(e).on("transitionend", (function t(n) {
                "opacity" === n.propertyName && (e.classList.remove("in"), e.classList.remove("leaving"), e.classList.add("cloaked"), N(e).off("transitionend", t))
            }))
        }))
    }

    function Q(e) {
        k = ee(), ht(k).width > 60 ? e.classList.add("vp-alert-bumpdown") : e.classList.remove("vp-alert-bumpdown")
    }

    function ee() {
        return k || (k = n.querySelector(".vp-sidedock"), k)
    }

    function te() {
        return w || (w = n.querySelector(".vp-controls"))
    }

    function ne() {
        return I || (I = n.querySelector('button[class*="_playButton_"]'), I)
    }
    return function() {
            var t = !0;

            function i() {
                q()
            }

            function c(i) {
                var c;
                if (r = 2e3, s) s = !1;
                else if (void 0 === C || void 0 === T || i.screenX !== C || i.screenY !== T)
                    if (C = i.screenX, T = i.screenY, l && (n.classList.remove("player-cursor-hide"), l = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                        if (t = !0, o.spatialPlayback && (null == (c = e.config.video) ? void 0 : c.spatial)) {
                            const t = ht(e.element),
                                n = i.clientX - t.left,
                                o = i.clientY - t.top,
                                r = 180,
                                a = o > e.element.clientHeight - 55,
                                s = n > e.element.clientWidth - 45 && o < r;
                            if (u || !a && !s) return
                        }
                        a && q(), G()
                    } else H(), W(), t && (Y(!0), t = !1)
            }

            function d(e) {
                var t;
                D = D || (D = n.querySelector(".vp-ads-wrapper"), D), null != (t = D) && t.contains(e.target) || Y(!0)
            }

            function p(e) {
                var t, i, o, r;
                w = te(), k = ee(), I = ne(), M = M || (M = n.querySelector(".compass-wrapper"), M);
                var a = (null == (t = w) ? void 0 : t.contains(e.target)) || (null == (i = k) ? void 0 : i.contains(e.target)) || (null == (o = I) ? void 0 : o.contains(e.target));
                let s = null == (r = M) ? void 0 : r.contains(e.target);
                f && m || s ? a || !f && !m || Y(!0) : (clearTimeout(V), V = setTimeout(q, B))
            }

            function _(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return c(e)
            }
            o.pointerEvents ? N(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return r = 2e3, i();
                r = 4500, p(e)
            })).on("pointermove", _).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return d(e)
            })) : N(n).on("touchmove", (function() {
                r = 4500, G()
            })).on("touchend", p).on("mouseenter", i).on("mousemove", c).on("mouseleave", d), e.events.on(Kt._didEnterFullscreen, (function() {
                o.pointerEvents ? N(de.element).on("pointermove", _) : N(de.element).on("mousemove", c)
            })), e.events.on(Kt._didExitFullscreen, (function() {
                o.pointerEvents ? N(de.element).off("pointermove", _) : N(de.element).off("mousemove", c)
            }))
        }(), e.events.on(g.PLAY, (function(e) {
            x || 0 === e || q()
        })).on(Kt._paused, q).on([S.BUFFER_ENDED, g.SEEKED, Kt._scrubbingEnded, Kt._volumeChanged, Kt._menuPanelOpened], G).on(A, (function() {
            y = !0
        })), e.events.on(Kt._menuVisibilityChanged, (function(e) {
            e && G()
        })), e.events.on(Kt._overlayOpened, $).on(Kt._accessGateOpened, $).on(Kt._controlBarVisibilityChanged, (function(e) {
            m = e, $()
        })).on(Kt._sidedockVisibilityChanged, (function(e) {
            f = e, $()
        })), e.events.on(Kt._outroDisplayed, (function() {
            b = !0, q()
        })).on(Kt._outroHidden, (function() {
            b = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(Kt._menuVisibilityChanged, (function(e, t) {
                v = "preact-menu" === e ? e : e ? t : null
            })), N(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (v) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return k = ee(), P = P || (P = n.querySelector(".vp-title")), (e.classList.contains("vp-title") || e.classList.contains("vp-target") || (null == (t = P) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || O.contains(e)) && !(null == (i = k) ? void 0 : i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const s = y && o.spatialPlayback && e.config.video.spatial && c;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!s) {
                        if (y && t) return;
                        return void e.events.fire(Kt._playButtonPressed)
                    }
                }
                1 == ++r && setTimeout((function() {
                    if (s) {
                        let t = _ && _.x === i.clientX && _.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? Kt._playButtonPressed : Kt._pauseButtonPressed), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(Xr) && !t.get(na) && !t.get(ra)) return;
                        e.events.fire(e.backbone.paused ? Kt._playButtonPressed : Kt._pauseButtonPressed)
                    } else e.events.fire(Kt._fullscreenButtonPressed);
                    r = 0
                }), 200)
            })), N(n).on("mousedown", ".vp-video-wrapper", (function(e) {
                var t;
                if (!i) return L.classList.remove("hidden"), L.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), L.dispatchEvent(t)), !1
            })).on("contextmenu", ".vp-video", (function(e) {
                return L.classList.remove("hidden"), L.removeAttribute("hidden"), !1
            })), e.events.on(xt._toggleNativeControls, (function(e) {
                if (e) return i = !0, void L.classList.add("hidden");
                i = !1, L.classList.remove("hidden")
            }))
        }(),
        function() {
            function t() {
                h = !0, n.removeAttribute("tabindex")
            }

            function i() {
                h = !1, $()
            }
            var r, a;
            o.touch || (N(n).on("focus", "a, button, input, [tabindex]", (function() {
                a = this, clearTimeout(r), r = null, document.activeElement === this && q()
            })), N(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (r = setTimeout(Y, 50))
            })), n.addEventListener("focus", (function(e) {
                q(), a && a.focus()
            }), !1), e.events.on(Kt._overlayOpened, t), e.events.on(Kt._overlayClosed, i), e.events.on(Kt._accessGateOpened, t), e.events.on(Kt._accessGateClosed, i))
        }(), e.events.on(Kt._didEnterFullscreen, (function(e) {
            W(), c && c.adjustRenderSize(), b && q()
        })).on(Kt._didExitFullscreen, (function(e) {
            a = !0, c && c.adjustRenderSize(), e ? Y() : (q(), H())
        })), K(), e.events.on(xt._reset, (function() {
            a = !0, s = !0, m = !0, f = !1, E = !1, y = !1, K(), H()
        })), e.events.on(xt._attachSpatialPlaybackEvents, (function() {
            const t = e => (...t) => {
                    c && e.apply(void 0, t)
                },
                i = t(t => {
                    const n = e.element.classList.contains("webvr");
                    c && n && c.toggleVR()
                }),
                r = t(t => {
                    c.isVRPresenting ? setTimeout(() => {
                        e.events.fire(z.WEBVR_ENTER)
                    }, 100) : setTimeout(() => {
                        e.events.fire(z.WEBVR_EXIT)
                    }, 100)
                });
            e.events.on(xt._revealSpatialControls, t(() => {
                e.element.classList.contains("webvr") || e.element.classList.add("grabbable")
            })), e.events.on(Kt._ended, t(() => {
                j(), o.webvr && c.isVRPresenting && F && c.toggleVR()
            })), e.events.on(A, t(() => {
                e.config.video.spatial ? function() {
                    function t(e) {
                        p && (p.innerHTML = Ls.render("threesixty_reminder", e))
                    }
                    e.backbone.getEffectByName("ThreeSixtyEffect"), e.events.once(Kt._firstTimeUpdate, () => {
                            const n = e.config.embed.cards;
                            (null == n ? void 0 : n.length) && n[0].timecode < 15 || (d.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Click and drag to look around"
                                }), Q(p), Z(p), setTimeout(() => J(p), 3e3)
                            }, 7e3)), o.android || d.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Use arrow keys to see more"
                                }), Q(p), Z(p), setTimeout(() => J(p), 3e3)
                            }, 14e3)))
                        }),
                        function() {
                            const e = n;
                            if (p) return;
                            let t = p = document.createElement("div");
                            t.classList.add("cloaked"), t.classList.add("vp-alert-round"), t.classList.add("vp-alert-round--top"), t.classList.add("vp-alert-round--threesixty"), e.appendChild(t)
                        }()
                }() : e.config.video.spatial || (j(), X())
            })), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(Kt._stereoscopicButtonPressed, t(() => {
                X(), o.webvr && c.hasVRHeadset && F ? c.toggleVR() : e.events.fire(Kt._showAndroidVRDeepLink)
            })), e.events.on(z.WEBVR_HARDWARE_AVAILABLE, t(e => {
                const t = n.querySelector(".stereoscopic");
                t && t.classList.contains("off") && F && t.classList.remove("off")
            })), e.events.on(z.WEBVR_ENTER, t(t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), c.isUserInteracting = !1
            })), e.events.on(z.WEBVR_EXIT, t(t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), c.isUserInteracting = !0
            })));
            let a = null;
            const s = t(t => {
                    const n = e.element.classList.contains("webvr");
                    u || n || (u = !0, t.preventDefault(), e.element.classList.add("grabbing"), _ = {
                        x: t.clientX,
                        y: t.clientY
                    }, c.makeContact(_))
                }),
                l = t(t => {
                    const n = e.element.classList.contains("webvr");
                    u && !n && (X(), c.move({
                        x: t.clientX,
                        y: t.clientY
                    }))
                }),
                v = t(t => {
                    const n = e.element.classList.contains("webvr");
                    u && !n && (e.element.classList.remove("grabbing"), c.releaseContact(!1), u = !1)
                }),
                m = t(t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (c.isUserInteracting || (c.isUserInteracting = !0), null !== a && clearTimeout(a), X(), a = setTimeout(() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), c.isUserInteracting = !1
                    }, 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), c.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                }),
                f = t(e => {
                    u || (u = !0, c.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                h = t(e => {
                    u && (e.preventDefault(), X(), c.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                g = t(e => {
                    c.releaseContact(!0), u = !1
                }),
                b = t(e => {
                    u || X(), c.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                }),
                E = t(t => {
                    u = !1, e.element.classList.remove("grabbing"), c.abandonMotion()
                });
            e.events.on(A, () => {
                o.android && c && window.addEventListener("deviceorientation", b, !1)
            }), e.events.once(A, () => {
                e.store.watch("ui.player.boundingRect", () => {
                    c && c.adjustRenderSize(), u = !1
                }), o.pointerEvents ? (N(L).on("pointerdown", s), window.addEventListener("pointermove", l), window.addEventListener("pointerup", v), window.addEventListener("pointerleave", E)) : (N(L).on("mousedown", s).on("wheel", m), L.addEventListener("touchstart", f, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", h, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", g, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", l), window.addEventListener("mouseup", v), window.addEventListener("mouseleave", E))
            })
        })), e.events.on(U, e => {
            j(), c = e, X()
        }), e.events.on(Kt._nudgeAttempted, () => {
            E = !0, clearTimeout(V), V = null
        }), e.events.on(Kt._nudgeEnded, () => {
            E = !1
        }), {}
}
let _v = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentTitle = this.alertTextElement.querySelector(".vp-live-start-time-title"), this.alertContentTime = this.alertTextElement.querySelector(".vp-live-start-time-body"), this.alertContentFooter = this.alertTextElement.querySelector(".vp-live-start-time-footer")
    }
    var t = e.prototype;
    return t.show = function(e = "", t = "", n = "") {
        this.alertContentTitle.innerHTML = e, this.alertContentTime.innerHTML = t, this.alertContentFooter.innerHTML = n, this.alertContentTitle.classList.remove("hidden"), this.alertContentTime.classList.remove("hidden"), this.alertContentFooter.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentTitle.classList.add("hidden"), this.alertContentTime.classList.add("hidden"), this.alertContentFooter.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
let vv = function() {
    function e(e, t, n) {
        this.textAlert = new Ms(e), this.timeAlert = new _v(e), this.player = t, this.store = n, this.startTime = new Date(this.store.get(Jr, null)), this._disabled = !1, this._setUpLiveEvents(), this._checkStatus()
    }
    var t = e.prototype;
    return t.disable = function() {
        this.hide(), this._disabled = !0
    }, t.hide = function() {
        this.textAlert.hide(), this.timeAlert.hide()
    }, t._checkStatus = function() {
        (this.store.get(ea) || this.store.get(ta)) && this._onLiveEventActive(), this.store.get(ia) && this._onLiveStreamEnded()
    }, t._setUpLiveEvents = function() {
        this.player.events.on(K.EVENT_ACTIVE, this._onLiveEventActive.bind(this)), this.player.events.on(K.STREAM_ONLINE, this._onLiveStreamOnline.bind(this)), this.player.events.on(K.STREAM_OFFLINE, this._onLiveStreamOffline.bind(this)), this.player.events.on(K.SETTINGS_UPDATED, this._onLiveSettingsUpdate.bind(this)), this.player.events.once(K.EVENT_ENDED, this._onLiveStreamEnded.bind(this)), this.player.events.on(Kt._webinarRegistrantBlocked, this._onLiveStreamEnded.bind(this)), this.player.events.on(Kt._webinarRegistrantUnblocked, this._onLiveStreamOnline.bind(this))
    }, t._onLiveSettingsUpdate = function(e, t) {
        "event_schedule" === e && this.store.dispatch(jr({
            eventSchedule: t
        })), "hide_live_label" === e && this.store.dispatch(jr({
            hideLiveLabel: t
        }))
    }, t._onLiveEventActive = function() {
        this._setLiveEventSchedule(this.store.get(sa))
    }, t._displayTimeAlert = function() {
        const e = this._timeToDisplayText(this.player.config.request.lang);
        this.timeAlert.show(e[0], e[1], e[2]), !this.store.get(ea) && !this.store.get(ta) || this._disabled || setTimeout(this._checkStatus.bind(this), 1e3)
    }, t._timeToEventStart = function() {
        return this.startTime - new Date
    }, t._timeToDisplayText = function(e) {
        const t = this._timeToEventStart(),
            n = Math.ceil(t / 1e3).toFixed(0),
            i = Math.ceil(t / 6e4).toFixed(0),
            o = Math.ceil(t / 36e5).toFixed(0),
            r = Math.ceil(t / 864e5).toFixed(0),
            a = (new Date).toDateString() === this.startTime.toDateString();
        if (r > 1 || !a) return ("This event is scheduled for\n" + new Intl.DateTimeFormat(e, {
            month: "long",
            day: "numeric"
        }).format(this.startTime) + "\nat " + new Intl.DateTimeFormat(e, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(this.startTime)).split("\n");
        if (o > 1 && a) return ("This event is scheduled for\nToday\nat " + new Intl.DateTimeFormat(e, {
            hour: "numeric",
            minute: "numeric"
        }).format(this.startTime)).split("\n");
        let s;
        const l = i > 1;
        return s = l ? "minutes" : n > 1 ? "seconds" : "second", ("This event will start in\n" + (l ? i : n) + " " + s).split("\n")
    }, t._onLiveStreamOnline = function() {
        this.hide()
    }, t._onLiveStreamOffline = function() {
        var e;
        null != (e = this.player.config.video.live_event) && e.dvr && !this.player.backbone.atLiveEdge || (this.textAlert.show("Live stream offline"), o.iOS && de.element && (this.player.events.fire(Kt._willExitFullscreen), de.exit()))
    }, t._onLiveStreamEnded = function() {
        var e;
        null != (e = this.player.config.video.live_event) && e.dvr && 0 !== this.player.backbone.currentTime || this.textAlert.show("Live event ended")
    }, t._setLiveEventSchedule = function(e) {
        e ? this._timeToEventStart() > 0 ? (this.textAlert.hide(), this._displayTimeAlert()) : (this.timeAlert.hide(), this.textAlert.show("This event hasn't started yet")) : (this.timeAlert.hide(), this.textAlert.hide())
    }, e
}();

function mv(e, t) {
    var n, i = t.querySelector(".vp-notification");

    function r(e, r) {
        if (null !== t.parentElement.offsetParent) {
            t.classList.remove("hidden"), t.removeAttribute("hidden"), t.setAttribute("data-name", e);
            var s = function(e) {
                    var n = "watchlater" === e || "unwatchlater" === e ? .5 : .4,
                        i = t.clientHeight;
                    return t.clientHeight > t.clientWidth && (i = t.clientWidth), {
                        height: Math.round(i * n),
                        width: Math.round(i * n * 1.6)
                    }
                }(e),
                l = "width:" + s.width + "px;height:" + s.height + "px";
            i.style.cssText = l, i.innerHTML = r, "watchlater" !== e && "unwatchlater" !== e || function(e, t) {
                var n = e.querySelector(".hour-hand"),
                    i = e.querySelector(".minute-hand");
                if (n && i) {
                    var r = t ? 1 : -1,
                        a = new Date,
                        s = Math.abs(a.getHours() - 12),
                        l = a.getMinutes(),
                        c = l / 60 * 360 - 135,
                        d = s / 12 * 360 + l / 60 * 5,
                        u = d + 45 * r,
                        p = c + 540 * r;
                    n.style[o.transformProperty] = "rotate(" + d + "deg)", i.style[o.transformProperty] = "rotate(" + c + "deg)", window.requestAnimationFrame((function() {
                        e.classList.add("animate"), o.browser.firefox || o.browser.opera || window.requestAnimationFrame((function() {
                            n.style[o.transformProperty] = "rotate(" + u + "deg)", i.style[o.transformProperty] = "rotate(" + p + "deg)"
                        }))
                    }))
                }
            }(i, "watchlater" === e), clearTimeout(n), t.classList.remove("animate"), window.requestAnimationFrame((function() {
                t.classList.remove("invisible"), n = setTimeout(a, 750)
            }))
        }
    }

    function a() {
        t.classList.add("animate"), t.classList.add("invisible")
    }

    function s() {
        t.classList.remove("animate"), t.classList.remove("invisible"), t.classList.add("hidden"), t.setAttribute("hidden", ""), t.removeAttribute("data-name"), i.innerHTML = "", i.classList.remove("filled"), i.classList.remove("animate"), e.events.fire(Kt._notificationHidden)
    }
    return N(t).on("transitionend", (function(e) {
        i.contains(e.target) && "height" === e.propertyName ? setTimeout(a, 100) : e.target === t && "opacity" === e.propertyName && window.requestAnimationFrame(s)
    })), e.events.on(Kt._liked, (function(e) {
        e || r("like", Ls.render("icon_heart"))
    })), e.events.on(Kt._unliked, (function(e) {
        e || r("unlike", Ls.render("icon_broken_heart"))
    })), e.events.on(Kt._addedToWatchLater, (function(e) {
        e || r("watchlater", Ls.render("icon_clock"))
    })), e.events.on(Kt._removedFromWatchLater, (function(e) {
        e || r("unwatchlater", Ls.render("icon_clock"))
    })), e.events.fire(Kt._notificationModuleReady), {}
}

function fv(e, t, n, i) {
    var o = !1;
    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
    var r = function(e) {
            var t = !0;
            if (e.changedTouches) {
                var r = e.changedTouches[0].pageX - window.pageXOffset,
                    a = e.changedTouches[0].pageY - window.pageYOffset,
                    s = document.elementFromPoint(r, a);
                null !== s && this.contains(s) && (t = n.call(this, e))
            }
            return "function" == typeof i && i.call(this, e), o = !0, t
        },
        a = function(e) {
            if (!o) return n.call(this, e);
            o = !1
        };
    (t = "function" == typeof t ? null : t) ? N(e).on("click", t, a).on("touchend", t, r): N(e).on("click", a).on("touchend", r)
}

function hv(t, n) {
    const i = O();
    let r = !1,
        a = !1;

    function s(e) {
        yt(e, "facebook", {
            width: 580,
            height: 400
        })
    }

    function l(e) {
        yt(e, "twitter", {
            width: 550,
            height: 420
        })
    }

    function c(e) {
        yt(e, "tumblr", {
            width: 540,
            height: 600
        })
    }

    function d(e) {
        const n = t.element.querySelector(".vp-outro-wrapper");
        return "player_embed" + (n && n.classList.contains("in") ? "_end_screen" : "_share_overlay") + (e ? "_button" : "_keyboard")
    }
    let u = {
        get events() {
            return i
        },
        setup() {
            var i;
            n.classList.remove("vp-share-embed-active", "vp-share-embed-only"), (null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only) && n.classList.add("vp-share-embed-only");
            const o = n.querySelector(".js-embedCopy");
            o && (o.style.width = function(t, n, i = 2) {
                n = Object.keys(n).map(e => n[e]);
                const o = t.cloneNode();
                o.style.visibility = "hidden", o.style.padding = 0, t.parentElement.appendChild(o);
                let r = n.map(e => (o.innerText = e, o.clientWidth));
                const a = Math.max.apply(Math, e(r)),
                    s = window.getComputedStyle(t),
                    l = parseFloat(s.fontSize);
                return t.parentElement.removeChild(o), `${(a+i)/l}em`
            }(o, ["Copy", "Copied!"])), t.events.on(Kt._facebookButtonPressed, s).on(Kt._twitterButtonPressed, l).on(Kt._tumblrButtonPressed, c)
        },
        destroy() {
            t.events.off(Kt._facebookButtonPressed, s).off(Kt._twitterButtonPressed, l).off(Kt._tumblrButtonPressed, c)
        },
        getShareData(e = {}, n) {
            var i, a;
            const s = t.config.video.title,
                l = t.config.video.owner.name,
                c = t.config.video.share_url;
            r = document.queryCommandSupported && document.queryCommandSupported("copy");
            const d = t.config.video.unlisted_hash ? `?h=${t.config.video.unlisted_hash}` : "";
            return e.template = Ls.render("share", {
                url: t.config.video.url,
                shareUrl: c,
                playerShareUrl: `https://${t.config.player_url}/video/${t.config.video.id}/share`,
                unlistedHashParam: d,
                title: s,
                owner: l,
                embed: "public" === t.config.video.embed_permission && t.config.embed.settings.embed,
                embedOnly: null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only,
                embedCode: rt(t.config.video.embed_code),
                copyButton: r,
                customizeEmbed: !!t.config.video.url,
                readOnly: !o.touch,
                facebookIcon: Ls.render("icon_facebook", {
                    title: "Share on Facebook"
                }),
                twitterIcon: Ls.render("icon_twitter", {
                    title: "Share on Twitter"
                }),
                tumblrIcon: Ls.render("icon_tumblr", {
                    title: "Share on Tumblr"
                }),
                emailIcon: Ls.render("icon_mail", {
                    title: "Share via Email"
                }),
                embedIcon: Ls.render("icon_embed", {
                    title: "Get embed code"
                }),
                strings: {
                    share: "Share",
                    emailSubject: "Check out “" + s + "” from " + l + " on Vimeo",
                    emailBody: "Check out “" + s + "” from " + l + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + c + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.",
                    embedTitle: "Embed",
                    embedSubtitle: "Add this video to your site with the embed code below.",
                    copy: "Copy",
                    copySuccess: "Copied!",
                    customize: `<a href="${t.config.video.url}#embed" target="_blank" rel="noopener" aria-describedby="new-window">` + "Customize this embed</a> on Vimeo"
                }
            }), e._firstFocusElement = ".js-facebook", (null == (a = t.config.embed.settings.share) ? void 0 : a.embed_only) && (e.wrapperClass = "embed-only", e._firstFocusElement = ".js-embed-input"), e
        },
        showShareView() {
            n.querySelector(".js-share-screen").classList.remove("cloaked"), n.classList.remove("vp-share-embed-active"), i.fire(Kt._shareViewShown)
        },
        showEmbedView() {
            t.config.embed.settings.share.embed_only || (n.querySelector(".js-embed-screen").classList.remove("cloaked"), n.classList.add("vp-share-embed-active")), i.fire(Kt._embedViewShown)
        },
        buildBPLocationString: d
    };
    return function() {
        var e;
        N(n).on("transitionend", ".js-share-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Kt._embedViewEnd), this.classList.add("cloaked"))
        })).on("transitionend", ".js-embed-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Kt._shareViewEnd), this.classList.add("cloaked"), wt(n))
        })).on(["copy", "cut"], "input[name=embed_code]", (function() {
            Ir(vr.COPY_VIDEO_EMBED_CODE, t.config, {
                location: d(a),
                path: window.location.pathname
            }), a = !1, t.events.fire(Kt._embedCodeCopied)
        })), fv(n, ".js-facebook", (function() {
            return t.events.fire(Kt._facebookButtonPressed, this.href), mt(), !1
        })), fv(n, ".js-twitter", (function() {
            return t.events.fire(Kt._twitterButtonPressed, this.href), mt(), !1
        })), fv(n, ".js-tumblr", (function() {
            return t.events.fire(Kt._tumblrButtonPressed, this.href), mt(), !1
        })), fv(n, ".js-email", (function() {
            return t.events.fire(Kt._emailButtonPressed), window.top.location = this.href, mt(), !1
        })), fv(n, ".js-embed", (function() {
            return t.events.fire(Kt._embedButtonPressed), u.showEmbedView(), mt(), !1
        })), fv(n, ".js-embedCopy", (function() {
            if (r) {
                n.querySelector("input[name=embed_code]").select(), a = !0;
                try {
                    document.execCommand("copy") && function() {
                        t.events.fire(Kt._embedCodeCopied);
                        var i = n.querySelector(".js-embedCopy");
                        i.innerHTML = i.getAttribute("data-success-label"), clearTimeout(e), e = setTimeout((function() {
                            i.innerHTML = i.getAttribute("data-label")
                        }), 2e3)
                    }()
                } catch (De) {
                    a = !1
                }
                return document.activeElement.blur(), !1
            }
        })), o.touch ? N(n).on("focus", "input[name=embed_code]", (function() {
            var e = this;
            setTimeout((function() {
                e.setSelectionRange(0, 9999), e.setAttribute("readonly", "readonly")
            }), 0)
        })).on("blur", "input", (function() {
            this.removeAttribute("readonly")
        })) : N(n).on("click", "input[name=embed_code]", (function() {
            this.setSelectionRange(0, 9999)
        }))
    }(), u
}

function gv(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var i = Promise.resolve(e());
        return t ? i.then(t) : i
    } catch (De) {
        return Promise.reject(De)
    }
}

function bv() {}

function Ev(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}

function yv(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Cv(e, t, n) {
    const i = Ev((function() {
            return u = !0, s === en.BEGINNING ? (c.innerHTML = "", void e.events.fire(xt._reset)) : function(e, t) {
                var n = function() {
                    if (C()) return gv(r, (function() {
                        i()
                    }))
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                let i = function() {
                    if ([en.VIDEOS, en.THREEVIDEOS, en.PROMOTED].includes(s)) {
                        var t;
                        if (0 === ((null == (t = d) ? void 0 : t.contexts) || []).reduce((function(e, t) {
                                return e + t.videos.length
                            }), 0)) return null;
                        d.showFollowButton = !e.config.user.owner && e.config.user.logged_in, d.strings = {
                            follow: "Follow",
                            following: "Following",
                            unfollow: "Unfollow"
                        }
                    }
                    return d && (d.target = !e.config.embed.on_site), b = s, [en.THREEVIDEOS, en.PROMOTED].includes(s) && (b = en.VIDEOS), Ls.render("outro_" + b, d)
                }();
                i && (c.innerHTML = i, c.setAttribute("data-type", b), n.classList.remove("hidden"), n.removeAttribute("hidden"), p = !0, [en.VIDEOS, en.THREEVIDEOS].includes(s) ? function() {
                    const e = document.querySelector(".js-outro-followWrap");
                    if (e) {
                        const t = window.getComputedStyle(e),
                            n = parseFloat(t.fontSize);
                        e.style.width = `${e.clientWidth/n}em`
                    }
                }() : s === en.LINK ? (t.watch("ui.outro.isLinkTitleVisible", w), t.watch("ui.outro.isLinkDescriptionVisible", S), w(t.get("ui.outro.isLinkTitleVisible")), S(t.get("ui.outro.isLinkDescriptionVisible"))) : s === en.SHARE && function() {
                    const e = n.querySelector(".js-outro-content"),
                        t = a.getShareData();
                    e.innerHTML = t.template, a.setup()
                }(), window.requestAnimationFrame((function() {
                    window.requestAnimationFrame((function() {
                        n.classList.add("in"), O()
                    }))
                })))
            }))
        })),
        r = Ev((function() {
            if (e.config.embed.outro === en.VOD) return s = en.VOD, void(d = L(s));
            m = !0;
            const t = e.config.embed.email_capture_form || e.config.embed.email || {},
                n = e.config.video.unlisted_hash ? `h=${e.config.video.unlisted_hash}&` : "",
                i = `https://${e.config.player_url}/video/${e.config.video.id}/outro?${n}on_site=${e.config.embed.on_site}&type=${e.config.embed.outro}&email=${t?1:0}`;
            return function(e) {
                if (e && e.then) return e.then(bv)
            }(function(e, t) {
                try {
                    var n = yv(T(i, {
                        withCredentials: !0
                    }), (function(e) {
                        return yv(e.json(), (function(e) {
                            s = e.type, (d = L(s, e.data)) && (d.bgimage && Vr(d.bgimage), d.contexts && d.contexts.forEach(e => {
                                e.videos.forEach(e => {
                                    Vr(e.thumbnail)
                                })
                            }))
                        }))
                    }))
                } catch (De) {
                    return
                }
                return n && n.then ? n.then(void 0, t) : n
            }(0, (function(e) {})))
        }));
    var a, s, l, c = n.querySelector(".vp-outro"),
        d = null,
        u = !1,
        p = !1,
        _ = !1,
        v = !1,
        m = !1,
        f = P(O, 250);
    let h = !1,
        b = null,
        E = e.config.request.ads instanceof Object,
        y = !1;
    const C = () => !m && null === d && !e.config.embed.loop;

    function L(t, n = {}) {
        const {
            width: i,
            height: r
        } = xr(e.element.clientWidth * o.devicePixelRatio, e.element.clientHeight * o.devicePixelRatio);
        if (n.img_base && (n.bgimage = Br({
                width: i,
                height: r,
                baseUrl: n.img_base
            })), t === en.VOD) {
            const t = void 0 !== e.config.video.vod.is_preorder ? e.config.video.vod.is_preorder : !!e.config.video.vod.date_available,
                i = e.config.video.vod.is_coming_soon,
                o = e.config.video.vod.date_available_formatted_datetime || e.config.video.vod.date_available;
            let r = "Coming soon to Vimeo On Demand.";
            i && o && (r = "Coming soon to Vimeo On Demand on " + o + "."), t && (r = "Pre-order now. Watch on " + o + "."), n = {
                purchased: e.config.user.purchased,
                title: e.config.video.vod.feature_title,
                url: e.config.video.vod.url,
                currency: e.config.request.currency,
                countries: e.config.video.vod.countries,
                country: e.config.request.country,
                buttons: e.config.video.vod.purchase_options,
                translationMap: e.config.request.dynamic_translation_map,
                isPreorder: t,
                isComingSoon: i,
                releaseDate: o,
                strings: {
                    watch: t ? "Watch on " + o : "Watch Now",
                    preRelease: r
                }
            }
        }
        return [en.VIDEOS, en.THREEVIDEOS, en.PROMOTED].includes(t) && (e.config.user.following = n.following, (n = {
            contexts: Array.isArray(n) ? n : [n],
            owner: e.config.video.owner.id,
            bgimage: n.bgimage,
            following: n.following
        }).contexts && n.contexts.forEach(e => {
            e.videos.forEach(t => {
                if (t.fullTitle = t.title, t.byline = "", t.owner.id !== n.owner && (t.fullTitle = t.title + " from " + t.owner.name, t.byline = "from " + t.owner.name), t.thumbnail_base) {
                    const n = Math.round(i / e.videos.length);
                    t.thumbnail = Br({
                        width: n,
                        height: Math.round(n / 1.778),
                        baseUrl: t.thumbnail_base
                    })
                }
            })
        })), t === en.LINK && (n.url = Xi(n.url), n.url2 = Xi(n.url2)), t === en.SHARE && (n.strings = {
            back: "Back"
        }), n
    }

    function w(e) {
        c.classList.toggle("vp-outro--link-medium", e)
    }

    function S(e) {
        c.classList.toggle("vp-outro--link-large", e)
    }

    function I() {
        if (p) return a.destroy(), u = !1, _ = !1, p = !1, void window.requestAnimationFrame((function() {
            n.classList.remove("in"), e.events.fire(Kt._outroHidden), R()
        }));
        u && (u = !1, e.events.fire(Kt._outroHidden))
    }

    function O() {
        var t;
        if (!_ && n.clientWidth) {
            N(window).off("resize", f), _ = !0;
            var i = [];
            (null == (t = d) ? void 0 : t.contexts) && d.contexts.forEach(e => {
                e.videos && e.videos.forEach(e => {
                    var t = e.id,
                        n = c.querySelector('[data-video-id="' + t + '"]');
                    n && n.clientWidth > 0 && i.push(t)
                })
            }), e.events.fire(Kt._outroDisplayed, i)
        }
    }

    function k() {
        const t = e.config.embed.email_capture_form || e.config.embed.email || {};
        "after-video" !== t.position && "after" !== t.position || h ? e.events.fire(xt._showOutro) : (h = !0, l = setTimeout(() => {
            e.events.fire(Kt._showEmailCaptureForm), e.events.once(Kt._emailCaptureEnd, () => {
                e.events.fire(xt._showOutro)
            })
        }, 250))
    }

    function R() {
        N(window).off("resize", f), N(window).on("resize", f)
    }
    return e.events.on(A, (function() {
            [en.NOTHING, en.BEGINNING, en.EMAIL].includes(e.config.embed.outro) && (s = e.config.embed.outro, d = !1)
        })), e.events.on(Kt._allAdsCompleted, () => {
            y = !0
        }), e.events.on(g.TIME_UPDATE, Ev((function({
            currentTime: t,
            duration: n
        }) {
            const i = function(e, t, n, i) {
                return t ? i - n : e
            }(n, e.segmentedPlaybackEnabled, e.startTime, e.endTime);
            return v = !1, h = !1,
                function(e) {
                    var n = function() {
                        if (t >= i - 10 && C()) return gv(r, (function() {
                            v && k()
                        }))
                    }();
                    if (n && n.then) return n.then(bv)
                }()
        }))), e.events.on(Kt._ended, () => {
            if (v = !0, E && !y) return e.events.once(Kt._allAdsCompleted, k), void(E = !1);
            k()
        }), e.events.on(Kt._loadVideo, () => {
            clearTimeout(l)
        }), e.events.on(Kt._webinarRegistrantBlocked, () => {
            e.config.video.webinar && clearTimeout(l)
        }), e.events.on(xt._showOutro, (function(t, n) {
            e.performDelegateAction(qt, () => {
                t && (s = t, d = null, m = !1), n && n.data && (d = L(t, n.data)), i()
            })
        })), N(n).on("click", ".js-videoLink", (function(t) {
            const n = parseInt(this.getAttribute("data-video-id"), 10);
            e.events.fire(Kt._outroVideoPressed, n), Ss(e.config.video.owner) && !$i(e.config.embed.context) && (t.preventDefault(), e.startTime = null, e.endTime = null, e.loadVideoViaIframe(n, {
                autoplay: !0
            }))
        })), N(n).on("click", ".js-cta", (function(t) {
            e.events.fire(Kt._outroCtaPressed, this.href)
        })), N(n).on("click", ".js-link", (function(t) {
            e.events.fire(Kt._outroLinkPressed, this.href)
        })), N(n).on("click", ".js-imageLink", (function(t) {
            e.events.fire(Kt._outroImagePressed, this.href)
        })), N(n).on("transitionend", (function(e) {
            n.classList.contains("in") || (n.classList.add("hidden"), n.setAttribute("hidden", ""))
        }), !1), e.events.on([xt._hideOutro, xt._reset, g.PLAY, g.SEEKED, Kt._scrubbingStarted], I), e.events.on(Kt._outroDisplayed, (function() {
            e.element.classList.add("player-outroVisible")
        })).on(Kt._outroHidden, (function() {
            e.element.classList.remove("player-outroVisible")
        })), fv(n, ".js-outro-follow", (function() {
            e.events.fire(Kt._followButtonPressed)
        })), N(n).on("mouseleave", ".js-outro-follow", (function(e) {
            const t = document.querySelector(".js-outro-follow");
            t && t.classList.remove("vp-outro-follow--activated")
        })), e.events.on(Kt._followed, (function() {
            const e = document.querySelector(".js-outro-follow");
            e && (e.setAttribute("aria-pressed", !0), e.classList.add("vp-outro-follow--activated"))
        })), e.events.on(Kt._unfollowed, (function() {
            const e = document.querySelector(".js-outro-follow");
            e && e.setAttribute("aria-pressed", !1)
        })),
        function() {
            function t() {
                setTimeout((function() {
                    n.classList.add("hidden")
                }), 150)
            }

            function i() {
                n.classList.contains("in") && n.classList.remove("hidden")
            }
            e.events.on(xt._showOverlay, t), e.events.on(Kt._accessGateOpened, t), e.events.on(Kt._overlayClosed, i), e.events.on(Kt._accessGateClosed, i)
        }(), e.events.on(xt._reset, (function() {
            d = null, m = !1, E = e.config.request.ads instanceof Object
        })), fv(n, ".js-vod-button", (function() {
            var t = this.getAttribute("data-product-id");
            return e.events.fire(Kt._vodButtonPressed, t), !1
        })), fv(n, ".js-vod-watch", (function() {
            if (!("date_available" in e.config.video.vod)) return I(), e.events.fire(Kt._vodButtonPressed), !1
        })), c && ((a = new hv(e, c)).events.on(Kt._embedViewShown, (function() {
            e.config.embed.settings.share.embed_only || (n.querySelector(".js-back").classList.remove("cloaked"), n.classList.add("embed-active"))
        })).on(Kt._shareViewShown, (function() {
            n.classList.remove("embed-active")
        })), fv(n, ".js-back", (function() {
            return a.showShareView(), !1
        })), a.events.on(Kt._shareViewEnd, (function() {
            n.querySelector(".js-back").classList.add("cloaked")
        }))), R(), {}
}

function Tv(e, t = null) {
    return "after-video" === (t = t || e.position) || "after" === t
}

function Lv(e) {
    return Br({
        height: 72 * o.devicePixelRatio,
        width: 640 * o.devicePixelRatio,
        baseUrl: e
    })
}
let wv = function() {
    function e(e) {
        this.element = e, this.cachedElements = {}
    }
    var t = e.prototype;
    return t.getElement = function(e) {
        return this.cachedElements[e] || (this.cachedElements[e] = this.element.querySelector(e)), this.cachedElements[e]
    }, t.removeElement = function(e) {
        this.getElement(e) && (this.cachedElements[e].remove(), this.cachedElements[e] = null)
    }, t.updateAll = function(e, t) {
        this.updateTitle(e.text || e.custom_message), this.updateSkipBtn(e.allow_skip || e.skippable, e.position), this.updatePrivacyPolicy(e.privacy_policy), this.updateCustomLogo(e.custom_logo), this.updateFields(e.custom_fields, t)
    }, t.updateTitle = function(e) {
        const t = this.getElement(".vp-email-capture-title");
        e && t ? t.textContent = Ov(e) : !e && t && (t.textContent = "")
    }, t.updateSkipBtn = function(e, t) {
        const n = this.getElement(".vp-email-capture-form-button--cancel");
        if (e && n) n.value = Tv(null, t) ? "Skip" : "Skip to video";
        else if (e && !n) {
            const e = this.getElement(".vp-email-capture-form-skip");
            let n = Ls.render("email_capture_skip", {
                position: t,
                skipText: "Skip",
                skipToVideoText: "Skip to video",
                positionIsAfter: Tv(null, t)
            });
            e.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-form-button--cancel")
    }, t.updatePrivacyPolicy = function(e) {
        const t = this.getElement(".vp-email-capture-privacy-policy");
        if (e && t) t.href = encodeURI(e);
        else if (e && !t) {
            const t = this.getElement(".vp-email-capture-disclaimer-wrapper"),
                n = Ls.render("email_capture_privacy_policy", {
                    text: "Privacy policy",
                    url: e
                });
            t.insertAdjacentHTML("beforeend", n)
        } else !e && t && this.removeElement(".vp-email-capture-privacy-policy")
    }, t.updateCustomLogo = function(e) {
        const t = this.getElement(".vp-email-capture-title-logo-wrap"),
            n = this.getElement(".vp-email-capture-logo");
        if (e && n) n.src = Lv(e);
        else if (e && !n && t) {
            const n = Ls.render("email_capture_logo", {
                url: Lv(e)
            });
            t.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-logo")
    }, t.updateFields = function(e, t) {
        if (e) {
            let n = this.getElement(".vp-email-capture-form-fields-slider").children;
            n.length && Array.from(n).forEach(t => {
                e.some(e => t.dataset.id === String(e.id)) || t.remove()
            }), e.forEach(e => {
                this.updateField(e, t)
            })
        }
        t()
    }, t.updateField = function(e) {
        const {
            id: t,
            position_in_form: n
        } = e, i = this.getElement(".vp-email-capture-form-fields-slider");
        let o = this.element.querySelector(`[for=custom-field-${t}]`),
            r = this.element.querySelector(`#custom-field-${t}`);
        if (o && r) {
            let t = r.parentElement,
                o = i.children;
            const s = Array.from(o).indexOf(t),
                l = Ls.render("email_capture_field", {
                    field: e
                });
            var a = document.createElement("div");
            a.innerHTML = l, i.children[s].replaceWith(a.children[0]), s !== n && i.insertBefore(o[s], o[n])
        } else {
            const t = Ls.render("email_capture_field", {
                field: e
            });
            n === i.children.length ? i.insertAdjacentHTML("beforeend", t) : i.children[n].insertAdjacentHTML("beforebegin", t)
        }
    }, t.updateWebinarStartTime = function(e, t) {
        const n = this.getElement(".vp-email-capture-wrapper"),
            i = n.querySelectorAll(".vp-email-capture-start-time"),
            o = ti(new Date(e), t);
        if (e && i.length) Array.from(i).forEach(e => {
            e.textContent = o
        });
        else if (e && !i.length) {
            const e = this.getElement(".vp-email-capture-title-logo-wrap"),
                t = n.querySelectorAll(".vp-email-capture-thank-you-title");
            let i = Ls.render("email_capture_start_time", {
                startTime: o
            });
            e.insertAdjacentHTML("afterbegin", i), Array.from(t).forEach(e => {
                i = Ls.render("email_capture_start_time", {
                    startTime: o
                }), e.insertAdjacentHTML("afterbegin", i)
            })
        } else !e && i.length && Array.from(i).forEach(e => {
            e.parentNode.removeChild(e)
        })
    }, t.clearCachedElements = function() {
        this.cachedElements = {}
    }, e
}();
const Av = "vp-email-capture-form-dropdown-option-active",
    Sv = {
        skip_to_video: "Skip to video",
        skip: "Skip",
        next: "Next",
        back: "Back",
        submit: "Submit",
        disclaimer: "Share your information with the owner of this video",
        privacy_policy: "Privacy policy",
        thank_you: "Thank you!",
        video_starts: "Video starts in",
        successful: "Your information was successfully submitted.",
        step: "Step",
        of: "of",
        aria_label: "Email capture form",
        webinar: {
            disclaimer: 'I agree that the host will see my viewing activities for this webinar, and I agree to <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/terms" target="_blank" rel="noopener">Vimeo\'s Terms of Service</a> and <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>',
            host_privacy_policy: "and the webinar host's Privacy Policy",
            reg_full: "Sorry, registration is full.",
            reg_login_title: "Enter your email to see if you’re registered",
            reg_thank_you: "Thanks for registering!",
            reg_thank_you_subtitle: "Check your email for your registration confirmation. We'll also send you a reminder and a link to the event 24 hours before it begins.",
            reg_bypass: "Already registered?",
            reg_go_back: "Register for this event",
            login_thank_you: "Great news! You’re already registered.",
            login_thank_you_subtitle: "Check your email for your registration confirmation.",
            email_not_valid: "Email address not valid. Please try another email address.",
            email_not_registered: "Email not registered for this event",
            opt_in: "Opt into emails from this event host",
            event_is_live: "This event is live",
            unscheduled: "Unscheduled",
            add_to_calendar: "Add to calendar",
            opt_in_error: "Opting in is required to register for this webinar.",
            opt_in_login_error: "Opting in is required to check your registration status."
        }
    };

function Iv(e = []) {
    return e.map(e => E(E({}, e), {}, {
        field_label: Pv(e.field_name)
    })).sort((e, t) => e.position_in_form - t.position_in_form)
}

function Pv(e) {
    switch (e) {
        case "Email address":
            return "Email address";
        case "First name":
            return "First name";
        case "Last name":
            return "Last name";
        default:
            return e
    }
}

function Ov(e) {
    switch (e) {
        case "Sign up for our mailing list":
            return "Sign up for our mailing list";
        case "Register to watch live":
            return "Register to watch live";
        default:
            return e
    }
}

function kv(e, t, n) {
    var i, o, r, a;
    const s = O(),
        c = !l(null == (i = e.config.video.webinar) ? void 0 : i.registration_form),
        d = "started" === (null == (o = e.config.video.webinar) ? void 0 : o.status),
        u = e.config.embed.context,
        p = ["Vimeo\\Controller\\VideoSettings\\ServiceController.getInteractions", "Vimeo\\Controller\\Api\\Resources\\Webinar\\WebinarController."].includes(u);
    let _, v, m, f, h, g, b, E, y, C, T, L, w, A, S, I, P = new wv(n),
        k = !1,
        R = !1,
        D = B(e.config),
        M = null == (r = D) || null == (a = r.custom_fields) ? void 0 : a[b - 1],
        x = e.config.view === Xt.webinarFull;

    function B(e) {
        var t, n, i;
        return c ? (null == (i = e.video.webinar) ? void 0 : i.registration_form) || {} : (null == (t = e.embed) ? void 0 : t.email_capture_form) || (null == (n = e.embed) ? void 0 : n.email) || {}
    }

    function V() {
        var e;
        const t = T.querySelector(".vp-validation-bubble-message"),
            n = null == (e = M) ? void 0 : e.field_type;
        t.innerHTML = y.validationMessage || ("dropdown" === n ? "This field is required." : "There is an error with this input."), T.classList.remove("hidden"), T.classList.remove("vp-validation-bubble-animate"), window.requestAnimationFrame((function() {
            T.classList.add("vp-validation-bubble-animate")
        })), y.focus()
    }

    function U() {
        E.classList.add("vp-email-capture-input-invalid"), V()
    }

    function F() {
        T.classList.remove("vp-validation-bubble-animate"), E.classList.remove("vp-email-capture-input-invalid"), L && (S.classList.remove("vp-webinar-compliance-checkbox-invalid"), L.classList.remove("vp-opt-in-bubble-animate"), L.classList.add("hidden"))
    }
    const H = ({
        target: e
    }) => {
        e === m && (m.removeEventListener("transitionend", H), y.focus())
    };

    function G(e, t = !0) {
        var i, o;
        const r = n.querySelector(".vp-email-capture-disclaimer-wrapper"),
            a = n.querySelector(".vp-email-capture-current-step"),
            s = n.querySelector(".vp-email-capture");
        E && (E.setAttribute("aria-hidden", !0), y.tabIndex = -1), b && (!v && !p || p) && (v = ht(_).height), b = e, M = null == (i = D) || null == (o = i.custom_fields) ? void 0 : o[b - 1], E = f[b - 1], y = h[b - 1], E && y && (E.setAttribute("aria-hidden", !1), y.tabIndex = 0), window.requestAnimationFrame(() => {
                m.style.transform = `translateY(-${v*(b-1)}px)`, a.textContent = b, C.style.width = `${b/f.length*100}%`
            }), t && m.addEventListener("transitionend", H), s.classList.toggle("vp-email-capture-first-step", 1 === b), c && (r.classList.toggle("hidden", b < f.length), R ? r.classList.add("vp-email-capture-login-disclaimer-wrapper") : (A.classList.toggle("hidden", b === f.length), r.classList.remove("vp-email-capture-login-disclaimer-wrapper"))),
            function() {
                const e = n.querySelector(".vp-email-capture-form-button--back"),
                    t = n.querySelector(".vp-email-capture-form-button--next");
                1 === b && (g.classList.remove("half"), e.classList.remove("show"), e.classList.add("hidden"), e.tabIndex = -1), b > 1 && (g.classList.add("half"), e.classList.remove("hidden"), e.tabIndex = 0, e.setAttribute("aria-hidden", !1), window.requestAnimationFrame(() => {
                    e.classList.add("show")
                })), b < f.length ? (t.tabIndex = 0, t.setAttribute("aria-hidden", !1), w.tabIndex = -1, w.setAttribute("aria-hidden", !0), g.classList.remove("showSubmitBtn")) : (w.tabIndex = 0, w.setAttribute("aria-hidden", !1), t.tabIndex = 1, t.setAttribute("aria-hidden", !0), g.classList.add("showSubmitBtn"))
            }()
    }

    function W() {
        if (!y.required) return !0;
        var e;
        if (c && "dropdown" === (null == (e = M) ? void 0 : e.field_type)) return !(M.required && !y.value.length && (y.setCustomValidity("This field is required."), 1));
        return "email" !== y.type || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(y.value) ? !(y.checkValidity && !y.checkValidity() && ((y.validity.valueMissing || y.validity.typeMismatch) && y.setCustomValidity("This field is required."), y.validity.typeMismatch && y.setCustomValidity("Please enter a valid response."), 1)) : (y.setCustomValidity("Please enter a valid email address."), !1)
    }
    const Y = () => {
        N(n).off(["click", "touchend"], ".vp-email-capture-form-button--cancel"), N(n).off(["click", "keydown"], ".vp-email-capture-form-button--next"), N(n).off(["click", "keydown"], ".vp-email-capture-form-button--back"), N(n).off(["click"], ".vp-email-capture-form-button--submit"), N(n).off(["keyup", "blur"], ".vp-email-capture-form-button--next-submit-wrapper"), N(n).off("click", ".vp-email-capture-wrapper"), N(n).off(["keyup", "input", "focus", "blur"], ".vp-email-capture-form-input"), N(n).off("submit", ".vp-email-capture-form"), N(n).off(["keyup", "click", "focus", "blur"], ".vp-disclaimer-checkbox"), N(window).off("resize"), k = !1, s.fire(Kt._emailCaptureEnd)
    };

    function q() {
        function t(t) {
            w.classList.remove("loading"), y.setCustomValidity("Uh oh. There was a problem. Please try again."), y.setAttribute("aria-invalid", "true"), e.events.fire(Kt._emailCaptureFailure), V()
        }
        w.classList.add("loading"),
            function(i, o) {
                wt(n);
                const r = Array.from(h),
                    a = new XMLHttpRequest,
                    {
                        referrer: s,
                        signature: l,
                        timestamp: c,
                        expires: d
                    } = e.config.request,
                    u = `https://${e.config.player_url}/video/${e.config.video.id}/submit-email?signature=${l}&time=${c}&expires=${d}&referrer=${s}`;
                a.open("POST", u + window.location.search, !0);
                const p = {};
                r.forEach(e => {
                    p[e.name] = e.value
                });
                const _ = JSON.stringify(p);
                a.setRequestHeader("Content-Type", "application/json"), a.withCredentials = !0, a.timeout = 3e3, a.onload = function() {
                    var i;
                    try {
                        i = JSON.parse(a.responseText)
                    } catch (De) {}! function(i, o) {
                        !1 !== i ? (e.config.embed.email_capture_form = null, e.config.embed.email = null, e.events.fire(Kt._emailCaptureSuccess), function() {
                            const e = n.querySelector(".vp-email-capture"),
                                t = n.querySelector(".vp-email-capture-thank-you");
                            e.classList.add("hidden"), t.classList.remove("hidden"), window.requestAnimationFrame(() => {
                                const e = n.querySelector(".vp-email-capture-video-countdown-timer"),
                                    i = n.querySelector(".vp-email-capture-video-countdown-meter");
                                t.classList.add("in"), e && (i.classList.add("vp-email-capture-video-countdown-meter--active"), e.textContent = 3);
                                let o = 2;
                                const r = setInterval(() => {
                                    o <= 0 ? (Y(), clearInterval(r)) : (e && (e.textContent = o), o -= 1)
                                }, 1e3)
                            })
                        }()) : t(o.status)
                    }(i, a)
                }, a.onerror = function(e) {
                    o(e)
                }, a.send(_)
            }(0, t)
    }
    const $ = e => W() ? (F(), G(b + 1), !0) : (U(), !1),
        K = () => {
            var t, i;
            return b === f.length && (c && !I.getAttribute("checked") ? (I.classList.add("vp-disclaimer-checkbox-invalid"), n.querySelector(".vp-opt-in-bubble-message").innerText = R ? Sv.webinar.opt_in_login_error : Sv.webinar.opt_in_error, L.classList.remove("hidden"), L.classList.remove("vp-opt-in-bubble-animate"), window.requestAnimationFrame((function() {
                L.classList.add("vp-opt-in-bubble-animate")
            })), S.classList.add("vp-webinar-compliance-checkbox-invalid"), I.focus(), !1) : W() ? ((function(e, t = null) {
                return "before-video" === (t = t || e.position) || "before" === t
            }(D) && !e.config.video.live_event || "started" === (null == (t = e.config.video.live_event) ? void 0 : t.status)) && (e.events.fire(Kt._playButtonPressed), e.events.fire(Kt._pauseButtonPressed)), F(), e.events.fire(Kt._emailCaptureSubmitted), q(), (Tv(D) || e.config.video.live_event) && "started" !== (null == (i = e.config.video.live_event) ? void 0 : i.status) || e.events.fire(Kt._playButtonPressed), !1) : (U(), !1))
        };

    function j(e) {
        R = e;
        let t = D.custom_fields;
        R && (t = [{
                field_name: "Email address",
                required: 1,
                position_in_form: 0,
                id: 1,
                locked: 1
            }]),
            function(e) {
                const t = Ls.render("email_capture_fields", {
                    customFields: Iv(e),
                    strings: Sv
                });
                document.querySelector(".vp-email-capture-form-fields-slider").innerHTML = t, n.querySelector(".vp-email-capture-total-steps").innerText = e.length, f = n.querySelectorAll(".vp-email-capture-form-custom-field"), h = n.querySelectorAll(".vp-email-capture-form-input"), E = f[b - 1], y = h[b - 1], v = null, Q(), G(b > f.length ? f.length : b, !1)
            }(t), A.innerHTML = Ls.render("webinar_registration_bypass_btn", {
                showWebinarLogin: R,
                regBypass: Sv.webinar.reg_bypass,
                regGoBack: Sv.webinar.reg_go_back,
                registrationFull: x
            });
        let i = R ? Sv.webinar.reg_login_title : D.custom_message;
        document.querySelector(".vp-email-capture-title").innerHTML = Ls.render("email_capture_title", {
            title: i
        }), F(), x && function(e = !1) {
            const t = n.querySelector(".vp-email-capture"),
                i = n.querySelector(".vp-email-capture-reg-full");
            e ? (t.classList.remove("hidden"), i.classList.add("hidden")) : (t.classList.add("hidden"), i.classList.remove("hidden")), x = !0
        }(R), R || Z()
    }
    const z = () => {
            const e = n.querySelectorAll(".vp-email-capture-form-dropdown-options"),
                t = n.querySelector(".vp-email-capture-form-custom-field");
            e.forEach(e => {
                if ((null == t ? void 0 : t.offsetWidth) && e) {
                    const n = `${Math.ceil(.85*t.offsetWidth)}px`;
                    e.style.width !== n && (e.style.width = n)
                }
            })
        },
        X = e => {
            const t = n.querySelector(`.vp-email-capture-form-dropdown-${e}`),
                i = n.querySelector(`#custom-field-${e}`),
                o = n.querySelector(".vp-email-capture-dropdown-overlay"),
                r = n.querySelector(`#custom-field-options-overlay-${e}`),
                a = n.querySelector(`#custom-field-options-${e}`),
                s = null == a ? void 0 : a.querySelectorAll(".vp-email-capture-form-dropdown-option");
            if (!(i && o && a && s && r)) return;
            let l = -1,
                c = !1;
            z();
            const d = (e, t) => {
                    for (let n = 0; n < e.length; n++) e[n].classList.remove(t)
                },
                u = (e, t) => {
                    d(e, t), e[l].classList.add(t), e[l].focus()
                },
                p = () => {
                    c && (c = !1, o.classList.remove("active"), o.setAttribute("aria-expanded", "false"), o.removeChild(a), r.appendChild(a), y.focus(), y.readOnly = !0)
                },
                _ = (e, t) => {
                    ! function(e) {
                        e.forEach((function(e) {
                            e.classList.remove("selected")
                        }))
                    }(s), 0 !== t || M.required ? (i.value = e.innerText, E.classList.add("active"), e.classList.add("selected")) : (i.value = "", E.classList.remove("focus"), E.classList.remove("active")), p()
                },
                v = () => {
                    var e;
                    T.classList.add("hidden"), E.classList.remove("vp-email-capture-input-invalid"), o.classList.contains("active") ? (i.value.length ? E.classList.add("focus") : E.classList.remove("focus"), o.classList.remove("active"), o.removeChild(a), r.appendChild(a)) : (o.classList.add("active"), o.appendChild(a), null == (e = s[0]) || e.focus()), c = !0, y.readOnly = !0, o.setAttribute("aria-expanded", "true");
                    const t = Array.from(s).findIndex(e => e.classList.contains("selected"));
                    l = t < 0 ? 0 : t, u(s, Av)
                },
                m = e => {
                    (null == a ? void 0 : a.contains(e.target)) || p()
                };
            o.removeEventListener("click", m), o.addEventListener("click", m), t.removeEventListener("click", v), t.addEventListener("click", v);
            const f = e => {
                if (c && s.length > 0) {
                    switch (e.code) {
                        case "Escape":
                            p();
                            break;
                        case "ArrowUp":
                            l--, l < 0 && (l = s.length - 1), u(s, Av);
                            break;
                        case "ArrowDown":
                        case "Tab":
                            l++, l > s.length - 1 && (l = 0), u(s, Av);
                            break;
                        case "Enter":
                        case "Space":
                            d(s, Av), l > -1 && (s[l].click(), l = -1)
                    }
                    e.preventDefault()
                }
            };
            a.removeEventListener("keydown", f), a.addEventListener("keydown", f);
            const h = e => {
                c || "Enter" !== e.code && "Space" !== e.code || (v(), e.preventDefault(), e.stopPropagation())
            };
            i.removeEventListener("keydown", h), i.addEventListener("keydown", h), s.forEach((function(e, t) {
                const n = () => {
                        _(e, t)
                    },
                    i = n => {
                        "Enter" === n.key && _(e, t)
                    };
                e.removeEventListener("click", n), e.addEventListener("click", n), e.removeEventListener("keydown", i), e.addEventListener("keydown", i)
            }))
        };

    function Z() {
        D.custom_fields.forEach(e => {
            "dropdown" === e.field_type && X(e.id)
        })
    }
    let J = {
        get events() {
            return s
        },
        getData(t = {}, n = {}) {
            var i;
            D = B(e.config);
            const o = n.custom_logo || D.custom_logo,
                r = n.custom_fields || D.custom_fields || [{
                    field_name: "Email address",
                    required: 1,
                    position_in_form: 0,
                    id: 1,
                    locked: 1
                }, {
                    field_name: "Name",
                    required: 0,
                    position_in_form: 1,
                    id: 2,
                    static_field: 1
                }];
            r.sort((e, t) => e.position_in_form - t.position_in_form);
            const a = n.privacy_policy || D.privacy_policy,
                s = (null == (i = e.config.video.webinar) ? void 0 : i.scheduled_start_time) || null,
                l = s ? ti(new Date(s), e.config.request.lang) : "";
            return t.template = Ls.render("email_capture", {
                allowSkip: n.allow_skip || D.skippable || D.allow_skip,
                customLogo: o ? Lv(o) : null,
                text: Ov(n.text || D.custom_message || D.text),
                customFields: Iv(r),
                privacyPolicy: a,
                positionIsAfter: Tv(D),
                strings: Sv,
                showWebinarForm: c,
                showWebinarLogin: R,
                webinarStartTime: l,
                isWebinarStarted: d,
                registrationFull: n.registration_full || x
            }), P.clearCachedElements(), t._firstFocusElement = ".vp-email-capture-form-input", t.modal = !0, t.logo = !1, t.preventBackgroundClose = !0, t.noblur = n.noblur, t.nofocus = n.nofocus, t
        }
    };

    function Q() {
        const e = n.querySelector(".locked_field"),
            t = n.querySelectorAll(".static_field");
        e && (e.type = "email", e.name = "email"), t && Array.from(t).forEach(e => {
            "Name" === e.name && (e.name = "name")
        })
    }
    return e.events.on(Kt._overlayOpened, i => {
                if ("email-capture" === i) {
                    if (_ = n.querySelector(".vp-email-capture-form-fields-wrapper"), m = n.querySelector(".vp-email-capture-form-fields-slider"), f = n.querySelectorAll(".vp-email-capture-form-custom-field"), h = n.querySelectorAll(".vp-email-capture-form-input"), g = n.querySelector(".vp-email-capture-form-button--next-submit-wrapper"), C = n.querySelector(".vp-email-capture-progress-meter"), T = n.querySelector(".vp-validation-bubble"), L = n.querySelector(".vp-opt-in-bubble"), w = n.querySelector(".vp-email-capture-form-button--submit"), A = document.querySelector(".vp-email-capture-reg-bypass-wrapper"), S = document.querySelector(".vp-webinar-compliance-checkbox-border"), I = n.querySelector(".vp-disclaimer-checkbox"), I) {
                        const e = function(e) {
                                return `${(e=(e=(e=e.replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g,"")).replace(/[\r\n%#()<>?\\[\\\]^` { |
                                }] / g,
                            encodeURIComponent)
                }
                `}(Ls.render("icon_check"));I.style.backgroundImage=`
                url("data:image/svg+xml;,${e}")
                `}Q(),G(1,!1),function(){var i;if(k)return;t.watch("ui.player.breakpoint",()=>{v=ht(_).height,window.requestAnimationFrame(()=>{m.style.transform=`
                translateY(-$ {
                        v * (b - 1)
                    }
                    px)
                `})});let o=!1;fv(n,".vp-email-capture-form-button--cancel",()=>{var t;Y(),(Tv(D)||e.config.video.live_event)&&"started"!==(null==(t=e.config.video.live_event)?void 0:t.status)||e.events.fire(Kt._playButtonPressed)}),N(n).on("click",".vp-email-capture-form-button--next",$),N(n).on("click",".vp-email-capture-form-button--back",e=>{F(),G(b-1)}),N(n).on("keyup",".vp-email-capture-form-button--next-submit-wrapper",e=>{g.classList.add("showfocus")}),N(n).on("blur",".vp-email-capture-form-button--next-submit-wrapper",e=>{g.classList.remove("showfocus")}),N(n).on("click",".vp-email-capture-wrapper",()=>{g.classList.remove("showfocus"),y.classList.remove("showfocus")}),N(n).on("keydown",".vp-email-capture-form-button--back",e=>{o=!0}),N(n).on("keydown",".vp-email-capture-form-button--next",e=>{o=!0}),N(n).on("keyup",".vp-email-capture-form-input",e=>{var t;"dropdown"!==(null==(t=M)?void 0:t.field_type)&&("Enter"===e.key&&b<f.length&&!o&&$(),9!==e.which||y.classList.contains("showfocus")||y.classList.add("showfocus"),o=!1)}),N(n).on("submit",".vp-email-capture-form",e=>!1),N(n).on("click",".vp-email-capture-form-button--submit",K),N(n).on("input",".vp-email-capture-form-input",()=>{y.value.length?(E.classList.add("active"),y.setCustomValidity(""),W()&&F()):E.classList.remove("active")}),N(n).on("focus",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");if(null==e?void 0:e.classList.contains("active")){const t=M.id,i=n.querySelector(`#
                custom - field - options - overlay - $ {
                    t
                }
                `),o=n.querySelector(`#
                custom - field - options - $ {
                    t
                }
                `);e.classList.remove("active"),e.removeChild(o),i.appendChild(o)}E.classList.add("focus")}),N(n).on("blur",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");e&&e.classList.contains("active")||E.classList.remove("focus"),y.value.length?E.classList.add("active"):E.classList.remove("active")}),N(n).on("focus",".vp-disclaimer-checkbox",()=>{S.classList.add("showFocus")}),N(n).on("blur",".vp-disclaimer-checkbox",()=>{S.classList.remove("showFocus")}),N(n).on("click",".vp-disclaimer-checkbox",()=>{if(I.getAttribute("checked"))return I.removeAttribute("checked"),void F();I.setAttribute("checked","checked"),F()}),c&&(N(n).on("click",".vp-email-capture-reg-bypass",()=>{j(!0)}),N(n).on("click",".vp-email-capture-reg-go-back",()=>{j(!1)})),null==(i=D.custom_fields)||i.forEach(e=>{"dropdown"===e.field_type&&N(window).on("resize",z)}),k=!0}(),c&&Z()}}),c&&e.events.on(xt._updateWebinarStartTime,t=>{P.updateWebinarStartTime(t,e.config.request.lang)}),e.events.on(xt._setActivePage,e=>{G(e,!1)}),e.events.on(xt._updateEmailCapture,e=>{if(!n.querySelector(".vp-email-capture-form"))return;c&&R&&j(!1);const t=Object.assign(e,{custom_fields:Iv(e.custom_fields)});P.updateAll(t,()=>{const e=n.querySelector(".vp-email-capture-form-fields-slider").children;e.length&&Array.from(e).forEach(e=>{"dropdown"===e.dataset.type&&X(e.dataset.id)}),f=n.querySelectorAll(".vp-email-capture-form-custom-field"),h=n.querySelectorAll(".vp-email-capture-form-input"),n.querySelector(".vp-email-capture-total-steps").innerText=f.length,E=f[b-1],y=h[b-1],G(b>f.length?f.length:b,!1)})}),e.events.on(Kt._configChanged,()=>{const n=B(e.config);t.get(Ja)||!l(D)&&!l(n)&&D.id===n.id||e.events.fire(xt._hideOverlay,{name:"email-capture",unmakeModal:!0})}),J}function Rv(e,i,r){var a,s,l,c=r.querySelector(".vp-overlay-cell"),d=r.querySelector(".vp-overlay"),u=r.querySelector(".vp-overlay-icon-wrapper"),p=u.querySelector(".vp-overlay-icon"),_=r.querySelector(".vp-overlay-logo"),v=!1,m=null,f=null;const h=new hv(e,d),b=new kv(e,i,d);let E=!1,y=!1,C=un.POPUP,T=!1,L=null;function w(){var e=ht(r),t=ht(d),n=ht(_),i=t.bottom+(e.height-t.bottom)/2;return e.height-i-n.height/2+"px"}function A(){var e=ht(r),t=ht(d),n=ht(u),i=e.height/2,o=e.height-(e.bottom-t.bottom)/2;return{top:i-n.height/2+"px",transform:"translateY("+(o-i)+"px)"}}function S(t,n){r.setAttribute("data-name",t),d.innerHTML=n.template,o.iOS&&de.element&&(e.events.fire(Kt._willExitFullscreen),de.exit()),n.noblur||mt(l=document.activeElement),n.modal&&(r.classList.add("modal"),r.setAttribute("data-modal","true")),n.preventBackgroundClose&&r.setAttribute("data-background-close","false"),n.wrapperClass&&r.classList.add(n.wrapperClass),n.icon.type&&(n.logo?(_.classList.remove("hidden"),u.classList.add("cloaked"),window.requestAnimationFrame((function(){_.innerHTML=Ls.render("logo"),_.style.bottom=w()}))):u.classList.remove("cloaked"),u.classList.remove("hidden"),p.innerHTML=n.icon.html,window.requestAnimationFrame((function(){var e=A();u.style.top=e.top,u.style[o.transformProperty]=e.transform})),r.setAttribute("data-icon",n.icon.type),u.setAttribute("data-icon",n.icon.type),p.setAttribute("data-icon",n.icon.type)),r.classList.add("invisible"),r.classList.remove("hidden"),r.removeAttribute("hidden"),r.classList.remove("out"),r.classList.add("in"),f=n,m=t,v=!0,e.events.fire(Kt._overlayOpened,t),e.element.classList.add("player-overlayVisible"),window.requestAnimationFrame((function(){r.classList.remove("invisible"),!n.nofocus&&e.element.contains(l)&&function(e){if(e){const t=r.querySelector(e);t&&t.focus()}}(n._firstFocusElement),window.requestAnimationFrame((function(){d.classList.add("in"),c.classList.add("in")}))}))}function I(){d.classList.remove("in"),d.classList.add("out")}function P(t){if("true"!==r.getAttribute("data-modal")&&v){r.removeAttribute("data-background-close"),c.classList.remove("in"),c.classList.add("out"),I(),r.classList.remove("in"),r.classList.add("out"),clearTimeout(a),a=setTimeout(O,200),(null==t?void 0:t.preventDefault)&&t.preventDefault();var n=r.querySelector(".js-back");n&&n.classList.add("cloaked"),h.destroy(),e.events.fire(Kt._overlayClosed,m),e.element.classList.remove("player-overlayVisible"),v=!1,L=null,m=null,f=null,window.requestAnimationFrame((function(){l&&(ft(l),l=null)}))}}function O(){v||(r.setAttribute("hidden",""),r.removeAttribute("data-name"),r.removeAttribute("data-icon"),r.classList.add("hidden"),r.classList.remove("out"),r.classList.remove("embed-active"),r.classList.remove("modal"),r.classList.remove("embed-only"),c.classList.remove("out"),c.classList.remove("in"),u.removeAttribute("data-icon"),u.classList.add("hidden"),u.classList.remove("animate"),p.removeAttribute("data-icon"),p.innerHTML="",_.classList.add("hidden"),d.classList.remove("out"),d.innerHTML="",e.events.fire(Kt._overlayCleared))}function k(){r.classList.remove("modal"),r.setAttribute("data-modal","false")}function R(e){if("yes"===e.form.getAttribute("data-bubble")){e.form.setAttribute("data-bubble","no");var t=r.querySelector(".vp-validation-bubble");t.querySelector(".vp-validation-bubble-message").innerHTML=e.validationMessage||"There is an error with this input.";var n=ht(e),i=ht(e.form);t.style.left=n.left-i.left+"px",t.style.top=n.height+1+"px",t.classList.remove("hidden"),e.focus(),window.requestAnimationFrame((function(){t.classList.add("vp-validation-bubble-animate")})),D()}}function D(e){var t=r.querySelector(".vp-validation-bubble");if(t){if(e)return clearTimeout(s),void t.classList.remove("vp-validation-bubble-animate");clearTimeout(s),s=setTimeout((function(){t.classList.remove("vp-validation-bubble-animate")}),5e3)}}function M(e){var t=r.querySelector("input[type=password]");return t.form.classList.contains("submitted")?(t.setAttribute("aria-invalid","false"),t.setCustomValidity(""),t.checkValidity&&!t.checkValidity()?(t.setAttribute("aria-invalid","true"),t.validity.valueMissing&&t.setCustomValidity("Please enter the password."),e||R(t),!1):(D(!0),!0)):null}function x(){p.classList.add("open")}function B(){p.classList.add("pulled-back")}function V(t,n={}){t.icon={type:"lock",html:Ls.render("icon_lock")},t._firstFocusElement=".js-login",t.modal=!0,t.logo=!0;const{loginText:i,buttonTarget:o}=((e=jo.NOT_LOGGED_IN)=>{const t={loginText:no()?{title:"Sign in to Vimeo to watch this video",subtitle:"You may need to allow cookies first. If asked, select <b>Allow</b> to continue.",buttonText:"Sign in"}:{title:"Sign in to Vimeo",subtitle:"This video is private. Sign in to watch.",buttonText:"Sign in"}};switch(e){case jo.LOGGED_IN_STORAGE_ACCESS_REQUIRED:t.loginText={title:"Allow cookies",subtitle:"Your browser will ask if you want to allow cookies. Select <b>Allow</b> to continue.",buttonText:"Continue"};break;case jo.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED:t.loginText={title:"Continue to sign in",subtitle:"You may now sign in to watch this video.",buttonText:"Continue"};break;case jo.ALL_ACCESS_ATTEMPTS_FAILED:t.loginText={title:"Video unavailable",subtitle:"Try watching on vimeo.com.",buttonText:"Watch on Vimeo"},t.buttonTarget=un.ON_SITE}return t})(n.loginState);return t.template=Ls.render("private_locked",{action:`
                https: //${e.config.vimeo_url}/log_in`,strings:i}),C=null!=o?o:C,t}function U(){const t=e.config.embed.email_capture_form||e.config.embed.email||{};if(e.backbone){const n=t.timecode||0;E=e.backbone.currentTime>n}("before-video"===t.position||"before"===t.position)&&!E&&F()}function F(){i.get("ui.overlay.isEmailCaptureVisible")?e.events.fire(xt._showOverlay,"email-capture"):y=!0}return e.events.on(xt._hideOverlay,(function(e={}){e.name&&m!==e.name||(e.unmakeModal&&k(),P())})),e.events.on(xt._showOverlay,(function(t,n={}){var i=function(){var i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};switch(t){case"help":return m=t,void(v=!0);case"share":return S(t,h.getShareData(i,n)),void h.setup();case"private-locked":return void S(t,V(i));case"password":return void S(t,function(t){return t.icon={type:"lock",html:Ls.render("icon_lock")},t.template=Ls.render("password",{action:`https://${e.config.player_url}/video/${e.config.video.id}/check-password?referrer=${e.config.request.referrer}`,strings:{title:"Password Required",subtitle:"If you’ve got it, enter it below.",password:"Password",watch:"Watch Video"}}),t._firstFocusElement=".js-password",t.modal=!0,t.logo=!!e.config.embed.settings.logo,t}(i));case"error":return void S(t,function(e,t){return e.template=Ls.render("error",{title:t.title,message:t.message,aria_label:"Error"}),e._firstFocusElement=".js-close",e.modal=!!t.modal,e.logo=!!t.logo,t.icon&&"lock"===t.icon&&(e.icon={type:"lock",html:Ls.render("icon_lock")}),e}(i,n));case"email-capture":return void S(t,b.getData(i,n));case"app-redirect":return void S(t,function(t,{redirectUrl:n,title:i,buttonText:o,ignoreText:r,bottomText:a,newWindow:s}={}){const l=St(e.config.video.privacy,["disable","unlisted"]);return t.template=Ls.render("app_redirect",{hideRedirectButton:l,redirectUrl:n,newWindow:s,strings:{title:i,buttonText:o,ignoreText:r,bottomText:a}}),t.modal=!1,t.logo=!1,t.preventBackgroundClose=!0,t}(i,n))}};return v&&!n.nohide?"share"!==m&&"help"!==m||m!==t?(e.events.once(Kt._overlayCleared,i),k(),void P()):void P():T?(e.events.once(Kt._accessGateClosed,i),k(),void P()):void i()})),e.events.on(xt._updateOverlay,(function(e,t={}){const n={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if("private-locked"===e){const{template:e}=V(n,t);d.innerHTML=e}})),N(r).on("input","input",(function(){this.form.classList.add("interacted")})).on("transitionend",".vp-validation-bubble",(function(e){"opacity"===e.propertyName&&"0"===window.getComputedStyle(this,"").opacity&&this.classList.add("hidden")})),e.events.on([Kt._overlayCloseButtonPressed,g.PLAY],P),e.events.on(Kt._privateUnlocked,(function(){"private-locked"===m&&(k(),P())})),e.events.on(Kt._configChanged,(function(){"share"===m&&(f=h.getShareData({modal:!1,template:null,logo:!1,icon:{type:null,html:null}}),d.innerHTML=f.template,h.setup())})),N(window).on("resize",(function(){if(v){_.style.bottom=w();var e=A();u.style.top=e.top,u.style[o.transformProperty]=e.transform}})),N(r).on("transitionend",".vp-overlay-logo",(function(e){"opacity"===e.propertyName&&this.classList.contains("animate")&&(_.classList.add("hidden"),_.classList.remove("animate"))})),N(r).on("transitionend",".vp-overlay-icon-wrapper",(function(e){e.propertyName.indexOf("transform")>-1&&(""===this.style[o.transformProperty]?(this.classList.remove("centered"),"lock"!==this.getAttribute("data-icon")||p.classList.contains("open")||p.querySelector("canvas")?B():setTimeout(x,100)):"translateY(-10px)"===this.style[o.transformProperty]&&(u.classList.add("centered"),u.style[o.transformProperty]=""))})),N(r).on("transitionend",".vp-overlay-icon",(function(e){e.propertyName.indexOf("transform")>-1&&(this.classList.contains("out")?(k(),P()):this.classList.contains("pulled-back")?(p.classList.add("out"),p.classList.remove("pulled-back")):this.classList.contains("open")&&B())})),i.watch("ui.overlay.isEmailCaptureVisible",(function(t){!t&&v&&"email-capture"===m?(y=v,k(),P()):t&&y&&(y=!1,e.events.fire(xt._showOverlay,"email-capture"))})),e.events.on(Kt._ready,U),e.events.on(Kt._configChanged,U),e.events.on(g.TIME_UPDATE,(function({currentTime:t=0}){const n=e.config.embed.email_capture_form||e.config.embed.email||{};("during-video"===n.position||"during"===n.position)&&(t<n.timecode&&(E=!1),t>=n.timecode&&!E&&(E=!0,F()))})),e.events.on(Kt._showEmailCaptureForm,(function(){F()})),b.events.on(Kt._emailCaptureEnd,()=>{e.events.fire(Kt._emailCaptureEnd),k(),P()}),h.events.on(Kt._embedViewShown,(function(){e.config.embed.settings.share.embed_only||(r.querySelector(".js-back").classList.remove("cloaked"),r.classList.add("embed-active"))})).on(Kt._shareViewShown,(function(){r.classList.remove("embed-active")})),fv(r,".js-back",(function(){return h.showShareView(),!1})),h.events.on(Kt._shareViewEnd,(function(){r.querySelector(".js-back").classList.add("cloaked")})),o.stereoscopic&&(e.events.on(Kt._showAndroidVRDeepLink,(function(){e.events.fire(xt._showOverlay,"app-redirect",{redirectUrl:e.doNotTrackEnabled?e.config.video.share_url:Fa(e.config.video.id,"player-spatial-redirect"),title:"Headset viewing isn’t currently supported in your mobile browser.",buttonText:"Watch in the Vimeo app",ignoreText:null,bottomText:null,newWindow:!e.config.embed.on_site})})),N(d).on("click",".app-redirect-ignore",(function(){P()})),N(d).on("click","[data-new-window]",(function(e){return window.open(document.querySelector(".app-redirect-button").getAttribute("href")),!1}))),N(d).on("click",".popup",(function(){if(C===un.POPUP&&e.events.fire(xt._openPopup,"login-private-locked"),C===un.ON_SITE){const{video:t,vimeo_url:n}=e.config,i=`https://${n}/${t.id}`;window.open(i,"_blank")}return!1})),N(d).on("click",".password input[type=submit]",(function(){this.form.classList.add("submitted"),this.form.setAttribute("data-bubble","yes"),M(!0)})).on("submit",".password form",(function(){return function(i){if(!M())return!1;var a=i.querySelector("input[type=password]"),s=i.querySelector("input[type=submit]");function l(e){s.classList.remove("loading"),a.setCustomValidity("Uh oh. There was a problem. Please try again."),a.setAttribute("aria-invalid","true"),R(a)}s.classList.add("loading"),function(e,i,o){wt(r);var a=Array.from(e.querySelectorAll("input")).map((function(e){return e.name?encodeURIComponent(e.name)+"="+encodeURIComponent(window.btoa(function(e){return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(e,t)=>String.fromCharCode("0x"+t))}(e.value))):encodeURIComponent(e.value)})).join("&"),s=new XMLHttpRequest;const l=n(e.action,t(window.location.search));s.open(e.method,l,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.withCredentials=!0,s.timeout=3e3,s.onload=function(){var e;try{e=JSON.parse(s.responseText)}catch(De){}i(e,s)},s.onerror=function(e){o(e)},s.send(a)}(i,(function(t,n){if(!1!==t){if(e.events.fire(Kt._passwordUnlocked,t),"icon-hidden"===window.getComputedStyle(c,":after").content)return k(),void P();_.classList.add("animate"),u.classList.remove("cloaked"),u.classList.add("animate"),window.requestAnimationFrame((function(){u.style[o.transformProperty]="translateY(-10px)"})),k(),I()}else l(n.status)}),l)}(this),!1})).on(["focus","input"],[".password input[type=email]",".password input[type=password]"],(function(){M()})),e.events.on(Kt._error,(function(t,n={modal:!0,final:!0}){if(v&&L===t||!1===n.final)return;L=t;let i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if(i.modal=n.modal,i.template=Ls.render("error",{title:n.title,message:n.message}),i._firstFocusElement=".js-close",v)return P(),void e.events.once(Kt._overlayCleared,()=>S(t,i));S(t,i)})),e.events.on(Kt._assetUrlsRefreshed,(function(){v&&"network"===L&&P()})),e.events.on(Kt._configChanged,(function(){window.requestAnimationFrame((function(){"email-capture"!==m&&(k(),P())}))})),fv(r,".js-close",(function(){e.events.fire(Kt._overlayCloseButtonPressed)})),N(r).on(["click","touchend"],[".vp-overlay-content",".js-share",".vp-overlay-logo"],(function(e){e.stopPropagation()})).on(["click","touchend"],[".vp-overlay-cell","nav"],(function(){return"false"===r.getAttribute("data-background-close")||(e.events.fire(Kt._overlayCloseButtonPressed),!1)})),e.events.on(xt._showOutro,(function(){r.classList.add("hidden")})),e.events.on(Kt._outroHidden,(function(){r.classList.contains("in")&&r.classList.remove("hidden")})),e.events.on(Kt._accessGateOpened,(function(){T=!0})),e.events.on(Kt._accessGateClosed,(function(){T=!1})),e.events.fire(Kt._overlayModuleReady),{}}const Nv=["a",".button-link",".vp-overlay-wrapper .footnote.share a:hover",".menu li:hover",".menu li.active",".vp-outro-link:hover",".vp-outro-videosTitle a:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-share-footnote a:hover",".vp-panel-collapsible button.vp-panel-button:hover"],Dv=["a:hover",".button-link:hover"],Mv=[".vp-overlay-wrapper .close:hover .fill",".vp-overlay-wrapper .back:hover .fill"],xv=[".controls-outro a:hover .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],Bv=[".vp-overlay .buttons li",".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',"li.vp-panel-item-on:before",".vp-share-buttons li","button.vp-share-embedCopy",".vp-outro-button","a.vp-outro-vodButton",".vp-email-capture-progress-meter",".vp-chapters-active-indicator"],Vv=["li.vp-panel-item-on:before"],Uv=[".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',".vp-share-footnote--embed a",".vp-outro-button",".vp-outro-button:hover",".vp-outro-wrapper .vp-outro-link:hover","button.vp-share-embedCopy",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-panel-collapsible button.vp-panel-button:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],Fv=['.vp-share-wrapper a[role="button"] .fill',".vp-outro-vodButton .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],Hv=["li.vp-panel-item-on:before"],Gv=["li.vp-panel-item-on:before"],Wv=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],Yv=[".vp-share-button .fill",".vp-outro-vodButton .fill"],qv=["li.vp-panel-item-on:before",".vp-email-capture-form-fields-slider .vp-email-capture-form-custom-field.focus",".vp-email-capture-disclaimer-wrapper .vp-webinar-compliance-checkbox-border.showFocus"],$v=['.vp-overlay .vp-overlay-content input[type="submit"]:active','.vp-overlay a[role="button"]:active',".vp-outro-vodWrapper a.vp-outro-vodButton:active",".vp-email-capture-form-button--next:hover",".vp-email-capture-form-button--next:focus",".vp-email-capture-form-button--submit:hover",".vp-email-capture-form-button--submit:focus"],Kv=[".vp-email-capture-form-button--next",".vp-email-capture-form-button--submit"],jv=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],zv=[".vp-share-button .fill",".vp-outro-vodButton .fill"];function Xv(e,{uuid:t,id:n,isMobileDevice:i}){var o=null;function a(e,o){var r=`.player-${t} `,a=r+e.join(","+r);if(o){var s=`${n} `;a+=`,${s}${e.join(","+s)}`}return i&&(a=a.replace(/:hover/g,":active")),a.replace(/ &/g,"")}return e.events.on(xt._changeColor,(n,i)=>{let s;const l=ln[i],c=sn[i];try{s=new r(n)}catch(u){s=new r(c)}if(i===on){let n=function(e){o?function(){for(;o.cssRules.length>0;)o.deleteRule(0)}():function(){var e=document.createElement("style");e.setAttribute("data-player",t),document.querySelector("head").appendChild(e),o=e.sheet}();var n=e.complement,i=new r(30,30,30,.9),s=new r(0,0,0,.15).overlayOn(e);i.contrast(n).ratio<3&&n.lighten(5,3,i);var l,c=e.lightness<40?e.clone().lighten(15,3,e):e.clone().darken(15,3,e),d=r.white.contrast(e).ratio<4.5?r.black:r.white;vt(a(qv),"border-color:"+s.hex,o),vt(a(Nv),"color:"+e.hex,o),vt(a(xv),"fill:"+e.hex,o),vt(a(Bv),"background-color:"+e.hex,o),vt(a(Vv),"border-color:"+e.hex,o),vt(a(Dv),"color:"+n.hex,o),vt(a(Mv),"fill:"+n.hex,o),vt(a($v),"background-color:"+s.hex,o),e.luminance>.95&&(n=e.clone().darken(15,3,e),vt(a(Uv),"color:"+n.hex,o),vt(a(Fv),"fill:"+n.hex,o),vt(a(Hv),"background-color:"+n.hex,o),vt(a(Gv),"border-color:"+n.hex,o),c=n.clone().darken(15,3,n)),e.yiq>175&&e.luminance<.95&&(l=c.clone().darken(15,3,c),vt(a(Wv),"color:"+c.hex,o),vt(a(Yv),"fill:"+c.hex,o));let u=new r(e.hex);return u.alpha=.8,vt(a(Kv),"background-color:"+u.rgba,o),vt(a(jv),"color:"+d.hex,o),vt(a(zv),"fill:"+d.hex,o),{main:e.hex,selected:c.hex,sidedockHover:l?c.hex:e.luminance>.95?n.hex:r.white.hex,sidedockSelected:e.luminance>.95?n.hex:e.hex,sidedockSelectedHover:l?l.hex:c.hex}}(s);e.config._colors=n}const d=ri(n)?s.hexWithAlpha:s.hex;e.config.embed[l]=d.replace("#","")}),e.events.fire(xt._changeColor,e.config.embed.color_one,nn),e.events.fire(xt._changeColor,e.config.embed.color_two||e.config.embed.color,on),e.events.fire(xt._changeColor,e.config.embed.color_three,rn),e.events.fire(xt._changeColor,e.config.embed.color_four,an),{}}function Zv(e){let t=null;return function(){const n=function({player:e,dependencies:t=zo}){const n={onLoginRequested:function(t){c=t,!i()||a?(d(),u()):(s++,o(d).then(t=>t?(a=!0,r||u(),void e.events.fire(Kt._userLogIn,"private")):void(m(1)?_(jo.ALL_ACCESS_ATTEMPTS_FAILED):u())).catch(e=>{}))}},{storageAccessRequired:i,requestCookieAccess:o}=t;let r=!1,a=!1,s=0,l=0,c=li;function d(){r=!0,c()}function u(){e.events.once(Kt._loginFailure,p)}function p(){l++;const e=v();m()?_(jo.ALL_ACCESS_ATTEMPTS_FAILED):_(!e&&r?jo.LOGGED_IN_STORAGE_ACCESS_REQUIRED:jo.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED)}function _(t){e.events.fire(xt._updateOverlay,"private-locked",{loginState:t})}function v(){return s>=2}function m(e=2){const t=!i()&&r&&l>0,n=l>=e,o=v();return n&&o||t}return n}({player:e});e.events.on(xt._openPopup,(function(i,o){let r=`https://${e.config.player_url}`,a=`${r}/video/${e.config.video.id}`;switch(i){case"basic":t=yt(`${a}/login/basic`,"login",{width:670,height:545}),e.events.fire(Kt._popupOpened,i);break;case"login-like":t=yt(`${a}/login/like`,"login",{width:670,height:545}),e.events.fire(Kt._popupOpened,i);break;case"login-watch-later":t=yt(`${a}/login/watch-later`,"login",{width:670,height:545}),e.events.fire(Kt._popupOpened,i);break;case"login-private-locked":n.onLoginRequested((function(){t=yt(`${a}/login/private`,"login",{width:670,height:545}),e.events.fire(Kt._popupOpened,i)}));break;case"purchase":let s=`${r}/video/${e.config.video.vod.feature_id||e.config.video.id}/purchase/vod`;(null==o?void 0:o.productId)&&(s+=`/${o.productId}`),s+=`?referrer=${encodeURIComponent(e.config.request.referrer)}`,t=yt(s,"purchase",{width:790,height:670}),e.events.fire(Kt._popupOpened,i)}})),window.closePopup=function(n){if(t){try{t.close(),e.events.fire(Kt._popupClosed,n)}catch(De){}t=null}}}(),e.config.embed.on_site||(window.confirmPurchase=function(t,n,i){n?e.loadVideoViaIframe(t):i&&e.events.fire(Kt._playButtonPressed)}),e.config.embed.on_site||(window.confirmLoginAction=function(t,n){e.events.fire(Kt._userLogIn,n)}),{}}const Jv={16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down",74:"j",75:"k",76:"l"},Qv={106:"j",107:"k",108:"l"},em=["up","down","left","right"],tm=["right","l"],nm=["left","j"],im=["scrub"],om=[Vn.TRANSCRIPT_LIST];function rm(e,t,n){var i,r=!!e.config.embed.on_site,a=n.querySelector(".volume"),s=!1,l=null,c=!1,d=e.config.video.fps/5,u=d,p=0,_=!1,v=b(C,80);function m(n){var i;return!t.get(Xr)||!(im.includes(n)&&(null==(i=e.config.video.live_event)||!i.dvr))&&(t.get(na)||t.get(ra))}function f(t){return"d"===t||!r&&(e.config.view===Xt.main||e.config.view===Xt.privateUnlocked||e.config.view===Xt.webinarUnlocked)}function h(){s&&i===Wn.HELP&&e.events.fire(Kt._overlayCloseButtonPressed)}function g(e){return"number"!=typeof e.which&&(e.which=e.keyCode),e}function E(e){if(!e)return"";if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in Jv?Jv[e.which]:String.fromCharCode(e.which).toLowerCase()}function y(t){if(e.config.embed.settings.background)return!0;var n=t.target||t.srcElement;return"INPUT"===n.tagName||"SELECT"===n.tagName||"TEXTAREA"===n.tagName||n.isContentEditable}function C(n,i){var o,r,a;const s=tm.includes(n);if(!m("scrub"))return;if((null==(o=e.backbone)||null==(r=o.telecine)?void 0:r.ended)&&s)return;if((null==(a=e.config.video.live_event)?void 0:a.dvr)&&s&&e.backbone.atLiveEdge)return;_||(i&&!e.backbone.paused&&e.events.fire(Kt._pauseButtonPressed),e.events.fire(Kt._scrubbingStarted,{seekType:"keyboard",isFrameByFrame:i}),_=!0),function(n){var i=n,o=Math.ceil(d),r=Math.ceil(function(){const n=t.get(Xr)?e.backbone.liveEdgeTime-e.backbone.liveTailTime:e.config.video.duration;return Math.max(d,.618*n)}()-d);u=function(e,t,n,i){return e/=100,n*(--e*e*e+1)+t}(i,o,r)}(p),1==++p&&(u=5*e.config.video.fps);const l=i?1:u,c=s?l:-l,v=e.currentTime*e.config.video.fps;!function(n,i){let o,r;t.get(Xr)?(o=e.backbone.liveTailTime,r=e.backbone.liveEdgeTime):(o=e.fragmentsHandler.currentFragment.startTime,r=e.fragmentsHandler.currentFragment.endTime);let a=n/e.config.video.fps;a<o?a=o:a>=r?a=r-.001:e.events.fire(Kt._showNudgeNotification,{direction:a-e.currentTime>0?"forward":"backward",time:1!==p||i?null:5}),e.events.fire(xt._seek,a)}((s?Math.ceil(v):Math.floor(v))+c,i)}function T(e){if("preact-menu"===l)return!1;var t=l.getTabIndexItems(),n=t.indexOf(document.activeElement),i="up"===e?n-1:n+1,o=null;return!(o=i>=t.length?t[0]:i<0?t[t.length-1]:t[i])||(o.focus(),!1)}function L(){if(l)return!0;if(!m("play/pause"))return!0;if(!document.activeElement||document.activeElement===document.body){const t=e.backbone.paused?Kt._playButtonPressed:Kt._pauseButtonPressed;return e.events.fire(t),h(),!1}}function w(){const t=e.backbone.muted,n=e.backbone.volume;return t?(e.events.fire(xt._changeMuted,!1),0===n&&e.events.fire(xt._changeVolume,1)):t||0!==n?!t&&n>0&&e.events.fire(xt._changeMuted,!0):e.events.fire(xt._changeVolume,1),!1}function A(){return"preact-menu"!==l&&(l?(l.element.contains(document.activeElement)&&l.button.focus(),l.hide(),!1):s?(e.events.fire(Kt._overlayCloseButtonPressed),!1):void 0)}function S(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||T("up"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(xt._changeVolume,.05,!1,!0),!1)))}function I(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||T("down"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(xt._changeVolume,-.05,!1,!0),!1)))}function P(t,n){const r=em.includes(n);if("preact-menu"===l)return!0;if(e.displayContext===e.adHandler)return!0;if(l)return!l.element.contains(document.activeElement)||!r||T("left"===n?"up":"down");if(s&&i!==Wn.HELP)return!0;if(h(),o.spatialPlayback&&e.config.video.spatial&&r)return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n),!1;if(document.activeElement&&document.activeElement===a&&r){var c="left"===n?-.05:.05;return e.events.fire(xt._changeVolume,c,!1,!0),!1}t.shiftKey||0===p?C(n,t.shiftKey):v(n,t.shiftKey)}return function(){function t(e){s=!0,i=e,e!==Wn.NOT_SUPPORTED&&e!==Wn.EMAIL_CAPTURE&&e!==Mo.LEAD_CAPTURE_FORM||(r=!0)}function n(){s=!1,i=null}e.events.on(Kt._overlayOpened,t),e.events.on(Kt._accessGateOpened,t),e.events.on(Kt._overlayClosed,n),e.events.on(Kt._accessGateClosed,n)}(),e.events.on(Kt._menuVisibilityChanged,(function(e,t){l=e?t||e:null})),e.events.on(Kt._transcriptNavActive,(function(e){c=e})),e.events.on(Kt._configChanged,(function(e){e&&(r=!1)})),function(){const{like:t,watch_later:n,share:r}=e.config.embed.settings,a={c:[Kt._ccButtonPressed,!0],h:[Kt._prefsButtonPressed,!0],T:Kt._transcriptKeyPressed,f:Kt._fullscreenButtonPressed,d:Kt._debugButtonPressed,A:Kt._aiWidgetKeyPressed,k:L,j:P,l:P,m:w,space:L,up:S,down:I,left:P,right:P,esc:A,"?":[xt._showOverlay,Wn.HELP]};function c(t){g(t);const n=E(t);if(function(e){return!(e.ctrlKey||e.metaKey||e.altKey||"keypress"===e.type&&e.charCode in Qv||(e.which in Jv?"keydown"!==e.type:"keypress"!==e.type))}(t)&&!y(t)&&f(n)&&n in a){if("function"==typeof a[n]){if(!1===a[n](t,n)){var o;if(t.preventDefault(),om.includes(null==(o=t.target)?void 0:o.id))return;t.stopPropagation()}return}if(!1===function(t){if(t=Array.isArray(t)?t:[t],s&&i===Wn.HELP){if(e.events.fire(Kt._overlayCloseButtonPressed),t[0]===xt._showOverlay&&"help"===t[1])return!1;if(t[0]!==xt._openVimeo)return setTimeout((function(){e.events.fire.apply(null,t)}),250),!1}return e.events.fire.apply(null,t),!1}(a[n])){var r;if(t.preventDefault(),om.includes(null==(r=t.target)?void 0:r.id))return;t.stopPropagation()}}}e.config.embed.on_site||(a.v=xt._openVimeo),t&&(a.x=Kt._likeButtonPressed),n&&(a.w=Kt._watchLaterButtonPressed),r&&(a.s=Kt._shareButtonPressed),e.config.embed.keyboard&&(document.addEventListener("keydown",c,!1),document.addEventListener("keypress",c,!1),document.addEventListener("keyup",(function(t){if("preact-menu"!==l&&(g(t),!y(t)&&f())){var n=E(t);o.spatialPlayback&&e.config.video.spatial&&em.includes(n)?e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(n):m("scrub")&&(nm.includes(n)||tm.includes(n))&&function(t){v.cancel(),u=d,p=0;var n=t.shiftKey;e.events.fire(Kt._scrubbingEnded,n),_=!1}(t)}}),!1))}(),e.events.on(Kt._becameActive,(function(){r=!1})).on(Kt._becameInactive,(function(){r=!0})),e.config.embed.on_site&&document.querySelector(".player")===n&&(r=!1),function(){let e,t=!1;document.body.addEventListener("keyup",e=>{9!==e.which||document.body.classList.contains("showfocus")||document.body.classList.add("showfocus")}),document.body.addEventListener("keydown",n=>{32!==n.which&&13!==n.which||(t=!0,clearTimeout(e),e=setTimeout(()=>{t=!1},200))}),document.body.addEventListener("click",e=>{t||document.body.classList.remove("showfocus")})}(),e.events.on(xt._destroy,()=>{r=!0}),{pause:function(){r=!0},unpause:function(){r=!1}}}function am(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}function sm(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}var lm=Object.freeze({__proto__:null,formatVodLabel:function(e,t,n,i){var o=i[t];return o?(o=am(o=sm(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null},getDisplayPrice:am,isAvailableInCountry:function(e,t){return!e||0===e.length||-1!==e.indexOf(t)},translateFromRequest:sm});function cm(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function dm(e,t){try{var n=e()}catch(De){return t(De)}return n&&n.then?n.then(void 0,t):n}function um(){}let pm=function(){function e(e,t){this._player=e,this._store=t,this._failedRequests=0,this._viewerCount=0,this._setUpEvents()}var t=e.prototype;return t._setUpEvents=function(){this._player.events.on(K.STREAM_ONLINE,()=>{this._getViewerCount()})},t._getViewerCount=function(){try{const e=this;if(!e._store.get(na)||!e._player.config.video.live_event.show_viewer_count)return;const t=setTimeout(()=>{e._getViewerCount()},3e4);let n=`${e._player.config.video.id}`;"unlisted"===e._player.config.video.privacy&&(n+=`:${e._player.config.video.unlisted_hash}`);let i=`https://${e._player.config.vimeo_api_url}/videos/${n}/stats/live`,o={jwt_token:e._player.config.user.vimeo_bucketed_live_client_token};return _m(dm((function(){return cm(e._player.updatePhpTokens(),(function(){return _m(dm((function(){return cm(T({url:i,searchParams:o}).json(),(function(t){t.viewers?(e._failedRequests=0,e._viewerCount=t.viewers.current,e._player.events.fire(K.LIVE_STATS_SUCCESS,{viewerCount:e._viewerCount})):e._failedRequests++}))}),(function(){e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(K.LIVE_STATS_FAILURE)})))}))}),(function(n){Nr.captureException(n),e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(K.LIVE_STATS_FAILURE)})))}catch(De){return Promise.reject(De)}},t._hideViewerCount=function(){return this._failedRequests>3},e}();function _m(e){if(e&&e.then)return e.then(um)}function vm(e){if(void 0===vm._sdkScriptPromise){let t;t="PROD"===function(e){switch(e.player_url){case"player.vimeo.com":return"PROD";case"master.playerci.vimeows.com":case"player-backend-ci.vimeows.com":return"CI";case"player2.vimeo.dev":return"DEV";default:return}}(e.config)?"https://embedder-sdk.wirewax.com/latest/wirewax-embedder-sdk@beta.umd.js":"https://embedder-sdk.wirewax.tv/latest/wirewax-embedder-sdk@beta.umd.js",vm._sdkScriptPromise=window.WIREWAX?Promise.resolve():at(t)}return vm._sdkScriptPromise}let mm=function(){function e(e){this.embedders={},this.player=e,this.playerContainer=e.element.querySelector(".vp-vimeo-interactive-wrapper"),this.embedderInstanceId=`vp-vimeo-interactive-instance-${Math.random().toString(36).substring(2)}`,this.vimeoInteractiveContainer=(e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList.add("vp-vimeo-interactive-container"),t})(this.embedderInstanceId),this.playerContainer.appendChild(this.vimeoInteractiveContainer),this.playHandlerCalled=!1,this.playHandler=this.handlePlay.bind(this),this.pauseHandler=this.handlePause.bind(this),this.seekedHandler=this.handleSeeked.bind(this),this.endedHandler=this.handleEnded.bind(this),this.init()}var t=e.prototype;return t.init=function(){let e=!1;this.cancelInit=()=>{e=!0},this.initialized=!1,vm(this.player).then(()=>{var t;e||(this.initialized=!0,this.setupEmbedder(this.player.config.embed.interactive_id,null==(t=this.player.config.embed)?void 0:t.interactive_params,this.player.config.embed.create_interactive))}).catch(e=>{})},t.setupEmbedder=function(e,t,n){try{t=JSON.parse(t)}catch(r){}const i=n.has_create_interactive?{vidDataURL:n.viddata_url,metricsClient:new Or(this.player)}:{vidId:e,interactiveParams:t||null},o=window.WIREWAX(this.embedderInstanceId,i);return this.embedder=o,this.embedder.ready().then(()=>{if(null===this.embedder)return void o.destroy();this.embedderReady=!0,this.registerVimeoInteractive();const e=this.embedder.getInteractiveData("hotspots"),t=this.embedder.getInteractiveData("polls");this.player.events.fire(Kt._interactiveReady,{hotspots:e,polls:t})}).catch(e=>{})},t.registerVimeoInteractive=function(){this.setVimeoInteractiveCurrentTime=()=>{this.embedder.setCurrentTime(this.player.backbone.currentTime),this.animationId=window.requestAnimationFrame(this.setVimeoInteractiveCurrentTime)},this.player.events.on(g.PLAY,this.playHandler),this.player.events.on(g.PAUSE,this.pauseHandler),this.player.events.on(g.SEEKED,this.seekedHandler),this.player.events.on(g.ENDED,this.endedHandler),this.player.events.once(g.TIME_UPDATE,()=>{this.playHandlerCalled||this.playHandler()}),this.player.config.embed.autoplay&&(this.startTimeUpdate(),this.embedder.play()),this.addVimeoInteractiveEventListeners(),this.embedders[this.player.backbone.element.id]=this.embedder},t.addVimeoInteractiveEventListeners=function(){this.embedder.on("play",()=>{this.player.backbone.play()}),this.embedder.on("pause",()=>{this.player.backbone.pause()}),this.embedder.on("seeked",({seekTo:e,seekType:t})=>{this.player.events.fire(Kt._interactiveSeekCall,{type:t}),this.player.backbone.currentTime=e}),this.embedder.on("hotspotClick",this.handleHotspotClick.bind(this)),this.embedder.on("overlayPanelClick",this.handleOverlayPanelClick.bind(this)),this.embedder.on("toggleOverlay",this.handleToggleOverlay.bind(this))},t.destroyVimeoInteractive=function(){this.initialized?this.embedderReady?(this.stopTimeUpdate(),this.embedder.destroy(),this.embedder=null,this.embedders[this.player.backbone.element.id]={},this.playerContainer.removeChild(this.vimeoInteractiveContainer),this.playHandlerCalled=!1,this.player.events.off(g.PLAY,this.playHandler),this.player.events.off(g.PAUSE,this.pauseHandler),this.player.events.off(g.SEEKED,this.seekedHandler),this.player.events.off(g.ENDED,this.endedHandler),this.embedderReady=!1):this.embedder=null:this.cancelInit()},t.handlePlay=function(){this.startTimeUpdate(),this.embedder.play(),this.playHandlerCalled=!0},t.handlePause=function(){this.stopTimeUpdate(),this.embedder.pause()},t.handleSeeked=function(e){const{currentTime:t}=e;this.embedder.setCurrentTime(t)},t.handleEnded=function(){this.embedder.setEnded(!0),this.embedder.setCurrentTime(this.player.backbone.duration)},t.startTimeUpdate=function(){window.cancelAnimationFrame(this.animationId),this.animationId=window.requestAnimationFrame(this.setVimeoInteractiveCurrentTime)},t.stopTimeUpdate=function(){window.cancelAnimationFrame(this.animationId)},t.handleHotspotClick=function(e){this.player.events.fire(Kt._interactiveHotspotClicked,e)},t.handleOverlayPanelClick=function(e){this.player.events.fire(Kt._interactiveOverlayPanelClicked,e)},t.handleToggleOverlay=function(e){e.overlayOnDisplay?(this.player.events.fire(Kt._overlayOpened,"interactive"),this.vimeoInteractiveContainer.classList.add("vp-interactive-overlay-open")):(this.player.events.fire(Kt._overlayClosed,"interactive"),this.vimeoInteractiveContainer.classList.remove("vp-interactive-overlay-open"))},e}();function fm(e,t,n,i){Ls.helpers=lm;const r=function(e){if(!0===e)return Promise.resolve(null);let t=!1;return new Promise((n,i)=>{e.link.addEventListener("load",()=>{if(!t){t=!0;const i=(new Date).getTime()-e.startTime;setTimeout(()=>n(i),100)}},!1)})}(n),a=new uv({element:e,delegate:i,cssLoadedPromise:r}),s=a.store;e.classList.add("js-player-fullscreen");let c=a.expose,d=null,u=null,p=null,_=null,v=null,m=null,f=null,h=null,g=null,b=null;const E=e.querySelector(".vp-controls"),y={tiny:Kt._enteredTinyMode,mini:Kt._enteredMiniMode,normal:Kt._enteredNormalMode,none:Kt._enteredNormalMode};function C(t){t&&void 0!==y[t]&&(a.events.fire(y[t]),e.classList.toggle("player-normal","normal"===t),e.classList.toggle("player-mini","mini"===t),e.classList.toggle("player-tiny","tiny"===t))}function L(t){t&&void 0!==y[t]&&(e.classList.toggle("app-normal","normal"===t),e.classList.toggle("app-mini","mini"===t),e.classList.toggle("app-tiny","tiny"===t))}function w(t){Object.keys(cs).forEach(n=>e.classList.toggle(`player-${n}`,t===n))}function A(t){Object.keys(cs).forEach(n=>e.classList.toggle(`app-${n}`,t===n))}function S(){const t=a.config.embed.settings;e.classList.toggle("with-fullscreen",!!t.fullscreen);const n=t.custom_logo;e.classList.toggle("with-custom-logo",!!n),e.classList.toggle("with-sticky-custom-logo",n&&n.sticky),e.classList.toggle("hide-controls-mode",!!t.background||0===t.controls),e.classList.toggle("touch-support",o.touch),e.classList.toggle("is-google-bot",o.isGoogleBot)}function I(e,t=a.config.video.url){if(!(!t||e&&e.metaKey)){if(-1===t.indexOf("#")&&a.backbone.currentTime>0&&a.backbone.currentTime<a.config.video.duration-30&&!a.backbone.paused&&(t+=`#at=${Math.floor(a.backbone.currentTime)}`),!a.config.embed.on_site)return window.open(t),function(e){if(e&&e.detail>0)try{document.activeElement.blur()}catch(De){}}(e),a.events.fire(Kt._pauseButtonPressed),!1;window.location=t}}function P(){f||(C(s.get("ui.player.mode")),f=s.watch("ui.player.mode",C)),h||(C(s.get("ui.app.mode")),h=s.watch("ui.app.mode",L))}function O(){v||(w(s.get("ui.player.breakpoint")),v=s.watch("ui.player.breakpoint",w)),m||(A(s.get("ui.app.breakpoint")),m=s.watch("ui.app.breakpoint",A))}function k(){a.config.video.live_event?s.get(ia)||s.get(ra)?b&&(b.disable(),b=null):(b=new vv(e,a,s),new pm(a,s)):b&&(b.disable(),b=null)}function R(){S(),g=new Promise((e,t)=>{let n=null;const i=()=>{clearTimeout(n),window.innerWidth>0&&window.innerHeight>0?e():n=setTimeout(i,250)};a.events.once(Kt._ready,i),a.events.once(Kt._error,i)}),function(){const e=(e,t)=>a.updatePhpTokens().then(()=>{const n="following"===e?a.config.video.owner.id:a.config.video.id,i=a.config.user.vimeo_api_interaction_tokens;let o="";if(i)switch(o="?auth=",e){case"likes":o+=i.likes;break;case"watchlater":o+=i.watch_later;break;case"following":o+=i.following}const r=a.config.video.unlisted_hash&&"following"!==e?`:${a.config.video.unlisted_hash}`:"",s=`https://${a.config.vimeo_api_url}/users/${a.config.user.id}/${e}/${n}${r}${o}`;return T(s,{method:t,jwt:a.config.user.vimeo_api_client_token}).catch(n=>{Nr.captureException(n,{extra:{action:e,method:t}})})}).catch(e=>{Nr.captureException(e)});a.events.on(Kt._vodButtonPressed,e=>{if(a.config.user.purchased)return!a.config.video.vod.is_feature&&a.config.video.vod.feature_id?void a.loadVideoViaIframe(a.config.video.vod.feature_id):void a.events.fire(Kt._playButtonPressed);a.config.video.vod&&a.config.video.vod.is_coming_soon?I(null,a.config.video.vod.url):a.performDelegateAction(Ht,()=>{a.events.fire(xt._openPopup,"purchase",{productId:e})},[e])}),a.events.on(Kt._likeButtonPressed,()=>{a.config.user.logged_in?a.config.user.id!==a.config.video.owner.id&&(a.config.user.liked?a.performDelegateAction(Vt,(function(){e("likes","DELETE"),a.config.user.liked=!1,a.events.fire(Kt._unliked)})):a.performDelegateAction(Bt,(function(){e("likes","PUT"),a.config.user.liked=!0,a.events.fire(Kt._liked)}))):a.performDelegateAction(Wt,()=>{a.events.fire(xt._openPopup,"login-like")})}),a.events.on(Kt._watchLaterButtonPressed,()=>{(a.config.video.url||"unlisted"===a.config.video.privacy)&&(a.config.user.logged_in?a.config.user.watch_later?a.performDelegateAction(Ft,()=>{e("watchlater","DELETE"),a.config.user.watch_later=!1,a.events.fire(Kt._removedFromWatchLater)}):a.performDelegateAction(Ut,()=>{e("watchlater","PUT"),a.config.user.watch_later=!0,a.events.fire(Kt._addedToWatchLater)}):a.performDelegateAction(Wt,()=>{a.events.fire(xt._openPopup,"login-watch-later")}))}),a.events.on(Kt._collectionsButtonPressed,()=>{a.performDelegateAction(Yt,()=>{a.config.video.vod&&a.config.video.vod.url?I(null,`${a.config.video.vod.url}#collections`):a.config.video.url&&I(null,`${a.config.video.url}#collections`)})}),a.events.on(Kt._shareButtonPressed,()=>{const e=a.config.embed.settings.share&&a.config.embed.settings.share.embed_only,t=()=>{a.events.fire(xt._showOverlay,"share",e)};de.element?t():a.performDelegateAction(Gt,t)}),a.events.on(Kt._embedButtonPressed,()=>{a.config.embed.settings.share.embed_only&&a.performDelegateAction(Gt,()=>{a.events.fire(xt._showOverlay,"share",!0)})}),a.events.on(Kt._followButtonPressed,()=>{if(a.config.user.logged_in&&a.config.user.id!==a.config.video.owner.id){if(a.config.user.following)return e("following","DELETE"),a.config.user.following=!1,void a.events.fire(Kt._unfollowed);e("following","PUT"),a.config.user.following=!0,a.events.fire(Kt._followed)}})}(),a.events.on(Kt._pausedForAd,()=>{e.classList.add("player-ad")}),a.events.on([Kt._resumedAfterAd,xt._reset],()=>{e.classList.remove("player-ad")}),function(){const t=function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(g,(function(){const t=function(){const{width:t,height:n}=ht(e);return so?n<=200?"10px":t<450?"12px":t<=1024?"11px":"10px":"10px"}();E&&(E.style.fontSize=t);const n=e.querySelector(".vp-sidedock");n&&(n.style.fontSize=t)}))};a.events.on(Kt._didEnterFullscreen,t),a.events.on(Kt._didExitFullscreen,t),window.addEventListener("orientationchange",t),so&&(e.classList.add("mobile"),t())}(),P(),O(),function(){function t(){let t=e;if(i&&i.getFullscreenElement&&"function"==typeof i.getFullscreenElement){const n=i.getFullscreenElement();n&&n instanceof HTMLElement&&n.contains(e)&&n.classList.contains("js-player-fullscreen")&&(t=n)}return t}a.config.embed.fullscreen=!0,o.iPad&&e.classList.add("no-fullscreen-api-support");const n=a.config.embed.playsinline&&(o.iOS>=10||Qt),r=o.iPad||n;de.enabled||r||(e.classList.add("no-fullscreen-support"),o.iOS||(a.config.embed.fullscreen=!1));let s=!1,l=!1;a.events.on(xt._forceFullscreen,(function(){de.enabled||de.videoEnabled(e)?(a.events.fire(Kt._willEnterFullscreen),l=!1,de.request(t())):a.events.fire(xt._toggleNativeControls,!0)})),a.events.on(Kt._fullscreenButtonPressed,(function(){a.backbone.pictureInPictureActive&&a.backbone.exitPictureInPicture(),de.element?(a.events.fire(Kt._willExitFullscreen),de.exit()):(a.events.fire(Kt._willEnterFullscreen),l=!0,de.request(t()))}));var c=de.onenter,d=de.onexit;if(de.onenter=function(e){null!==document.webkitFullScreenElement&&(s||(t().contains(e)?function(e,n){s||(s=!0,a.events.fire(Kt._didEnterFullscreen,t()===e,l))}(e):"function"==typeof c&&c(e)))},de.onexit=function(){document.webkitFullScreenElement||(s?s&&(s=!1,a.events.fire(Kt._didExitFullscreen,l),l||a.events.fire(xt._toggleNativeControls,!1),l=!1):"function"==typeof d&&d())},N(e).on("click","a",(function(e){de.element===t()&&de.exit()})),N(e).on("gestureend",(function(e){e.scale>1&&a.events.fire(Kt._fullscreenButtonPressed)})),"undefined"!=typeof MSGesture){var u=1,p=new MSGesture;p.target=e,N(e).on("pointerdown",(function(e){p.addPointer(e.pointerId)})).on(["MSGestureChange"],(function(e){u*=e.scale})).on(["MSGestureEnd"],(function(){(!s&&u>=2||s&&u<1)&&a.events.fire(Kt._fullscreenButtonPressed),u=1}))}}(),function(){const t=Ui("vimeo-logo",a.config);fv(e,"a[data-clip-link]",e=>I(e,t)),a.events.on(xt._openVimeo,I)}(),k(),a.events.on(Kt._configChanged,()=>{S(),k()}),a.events.on(xt._destroy,()=>{var e,t;null==(e=b)||e.disable(),null==(t=_)||t.destroyVimeoInteractive(),_=null})}function D(){d||(d=new Rv(a,s,e.querySelector(".vp-overlay-wrapper")))}function M(){u||(u=new Xv(a,{uuid:a.uuid,id:e.id,isMobileDevice:!1}))}function x(){p||(p=new Zv(a))}let B;function V(e=400){var t,n;B&&clearTimeout(B),null==(t=a.element)||null==(n=t.classList)||n.add("animating"),B=setTimeout(()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.remove("animating")},e)}function U(e){const{embed:t}=e;return!l(t.interactive)}const F={initializationHandler:()=>(function(){D(),M(),x(),function(){if(o.browser.ie)return;U(a.config)&&(_=new mm(a));const e=()=>{_&&(_.destroyVimeoInteractive(),_=null),U(a.config)&&(_=new mm(a))};a.events.on(Kt._createInteractiveChanged,e),a.events.on(Kt._configChanged,t=>{t&&e()})}(),a.events.on(Kt._rightContentAreaVisibilityChange,e=>{e&&!a.element.classList.contains("right-content-area-open")?(V(),a.element.classList.add("right-content-area-open")):!e&&a.element.classList.contains("right-content-area-open")&&(V(),a.element.classList.remove("right-content-area-open"))}),a.events.on(Kt._rightContentAreaEnabled,()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.add("right-content-area-supported"),Array.from(a.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.add("content-area-sibling-enabled")})}),a.events.on(Kt._rightContentAreaDisabled,()=>{var e,t;null==(e=a.element)||null==(t=e.classList)||t.remove("right-content-area-supported"),Array.from(a.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.remove("content-area-sibling-enabled")})}),new pv(a,s,e);const t=new rm(a,s,e);new mv(a,e.querySelector(".vp-notification-wrapper")),new Cv(a,s,e.querySelector(".vp-outro-wrapper")),Object.defineProperties(c,{pauseKeyboard:{enumerable:!0,value:t.pause},unpauseKeyboard:{enumerable:!0,value:t.unpause}})}(),R(),Promise.resolve()),postInitializationHandler:()=>Promise.resolve(),authorizationHandler(e){O(),P(),e(),D(),M();let t="Error",n="Unhandled video privacy";switch(a.config.view){case Xt.privatePassword:return new Promise((e,t)=>{a.events.fire(xt._showOverlay,"password"),a.events.once(Kt._passwordUnlocked,t=>{e(t)})});case Xt.privateLocked:x();const e={loggedIn:{name:"error",data:{title:"Private Video",message:"Sorry, you don’t have permission to watch.",modal:!0,logo:!!a.config.embed.settings.logo,icon:"lock"}},notLoggedIn:{name:"private-locked",data:null}};let i,o;return a.config.user.logged_in?(i=e.loggedIn,o=Promise.reject()):(i=e.notLoggedIn,o=new Promise((t,n)=>{a.events.once(Kt._privateUnlocked,o=>{if(o.view===Xt.privateLocked)return i=e.loggedIn,a.events.fire(xt._showOverlay,i.name,i.data),void n();t(o)})})),a.events.fire(xt._showOverlay,i.name,i.data),o;case Xt.error:t=a.config.title,n=a.config.message}return a.events.fire(xt._showOverlay,"error",{title:t,message:n,modal:!0}),Promise.reject()}};return a.init(t,F).catch(t=>{Nr.captureException(t),D(),M(),e.classList.remove("loading"),a.events.fire(Kt._error,_n.id,_n)}),c}window.requestModule=window.requestModule||st,window.BigScreen=window.BigScreen||de;export{hd as $,yd as A,Yd as B,xn as C,Ll as D,Vd as E,dd as F,rr as G,wd as H,vd as I,bd as J,Xl as K,Mn as L,Zl as M,md as N,Dl as O,Kd as P,m_ as Q,So as R,yl as S,Rd as T,Is as U,er as V,fm as VimeoPlayer,Kl as W,p_ as X,uu as Y,_c as Z,f_ as _,Cn as a,jd as a0,Eo as a1,yo as a2,bo as a3,Od as b,mn as c,mc as d,El as e,mi as f,Yi as g,xt as h,Nl as i,Rl as j,d_ as k,Vn as l,Fd as m,li as n,Tl as o,kl as p,nc as q,ic as r,Il as s,ct as t,ad as u,Ol as v,Pl as w,vr as x,Cl as y,or as z};