/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  SignupForm,
} from './util/auth';
import {
  TabType,
} from './components/react-capacitor/react-capacitor';
import {
  ComponentType,
} from './components/react-components/react-components';

export namespace Components {
  interface BarChart {
    'color': string;
    'graphData': string | object;
  }
  interface HomeComponents {}
  interface HomeNative {}
  interface HubspotDynamicContent {
    'listId': string;
  }
  interface HubspotForm {
    'formId': string;
  }
  interface IconExternal {}
  interface IonicAppWizard {}
  interface IonicAppflowActivator {}
  interface IonicBarChart {
    'color': string;
    'data': string;
  }
  interface IonicButton {
    'color': string;
    'disabled': boolean;
    'type': string;
  }
  interface IonicEmojiPicker {
    'open': boolean;
    'openEvent': MouseEvent;
  }
  interface IonicNewsletterSignup {
    'arrowMode': boolean;
    'buttonText': string;
    'darkMode': boolean;
    'homepageMode': boolean;
    'kind': string;
    'lg': boolean;
    'placeholder': string;
    'srLabel': { id: string; text: string; };
  }
  interface IonicQuickSignup {
    'buttonColor': string;
    'showPricingNotice': boolean;
    'transparentInput': boolean;
  }
  interface IonicReactDemo {}
  interface IonicSearch {
    'mobile': boolean;
  }
  interface IonicSignupForm {
    'allowLogin': boolean;
    'gaEventLabel': any;
    'gaEventName': any;
    'hubspotEventId': string;
    'oauthRedirect': boolean;
    'source': any;
  }
  interface IonicSlider {}
  interface IonicSnapBar {}
  interface IonicSubHeader {
    'darkMode': boolean;
  }
  interface IonicToggle {}
  interface IonicToggleButton {
    'deselect': () => Promise<void>;
    'select': () => Promise<void>;
    'tab': string;
    'title': string;
  }
  interface IonicToggleTab {
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
    'tab': string;
  }
  interface ReactCapacitor {
    'tab': TabType;
  }
  interface ReactComponents {
    'component': ComponentType;
  }
  interface TwitterScript {}
  interface UiFloatingInput {
    'autocomplete': string;
    'disabled': boolean;
    'inputId': string;
    'inputTabIndex': number;
    'label': string;
    'message': string;
    'name': string;
    'onChange': (e) => void;
    'required': boolean;
    'setFocus': (focused: any) => Promise<void>;
    'type': string;
    'value': string;
  }
  interface UiTip {
    'disabled': boolean;
    'position': 'top' | 'right' | 'bottom' | 'left';
    'text': string;
  }
}

declare global {


  interface HTMLBarChartElement extends Components.BarChart, HTMLStencilElement {}
  var HTMLBarChartElement: {
    prototype: HTMLBarChartElement;
    new (): HTMLBarChartElement;
  };

  interface HTMLHomeComponentsElement extends Components.HomeComponents, HTMLStencilElement {}
  var HTMLHomeComponentsElement: {
    prototype: HTMLHomeComponentsElement;
    new (): HTMLHomeComponentsElement;
  };

  interface HTMLHomeNativeElement extends Components.HomeNative, HTMLStencilElement {}
  var HTMLHomeNativeElement: {
    prototype: HTMLHomeNativeElement;
    new (): HTMLHomeNativeElement;
  };

  interface HTMLHubspotDynamicContentElement extends Components.HubspotDynamicContent, HTMLStencilElement {}
  var HTMLHubspotDynamicContentElement: {
    prototype: HTMLHubspotDynamicContentElement;
    new (): HTMLHubspotDynamicContentElement;
  };

  interface HTMLHubspotFormElement extends Components.HubspotForm, HTMLStencilElement {}
  var HTMLHubspotFormElement: {
    prototype: HTMLHubspotFormElement;
    new (): HTMLHubspotFormElement;
  };

  interface HTMLIconExternalElement extends Components.IconExternal, HTMLStencilElement {}
  var HTMLIconExternalElement: {
    prototype: HTMLIconExternalElement;
    new (): HTMLIconExternalElement;
  };

  interface HTMLIonicAppWizardElement extends Components.IonicAppWizard, HTMLStencilElement {}
  var HTMLIonicAppWizardElement: {
    prototype: HTMLIonicAppWizardElement;
    new (): HTMLIonicAppWizardElement;
  };

  interface HTMLIonicAppflowActivatorElement extends Components.IonicAppflowActivator, HTMLStencilElement {}
  var HTMLIonicAppflowActivatorElement: {
    prototype: HTMLIonicAppflowActivatorElement;
    new (): HTMLIonicAppflowActivatorElement;
  };

  interface HTMLIonicBarChartElement extends Components.IonicBarChart, HTMLStencilElement {}
  var HTMLIonicBarChartElement: {
    prototype: HTMLIonicBarChartElement;
    new (): HTMLIonicBarChartElement;
  };

  interface HTMLIonicButtonElement extends Components.IonicButton, HTMLStencilElement {}
  var HTMLIonicButtonElement: {
    prototype: HTMLIonicButtonElement;
    new (): HTMLIonicButtonElement;
  };

  interface HTMLIonicEmojiPickerElement extends Components.IonicEmojiPicker, HTMLStencilElement {}
  var HTMLIonicEmojiPickerElement: {
    prototype: HTMLIonicEmojiPickerElement;
    new (): HTMLIonicEmojiPickerElement;
  };

  interface HTMLIonicNewsletterSignupElement extends Components.IonicNewsletterSignup, HTMLStencilElement {}
  var HTMLIonicNewsletterSignupElement: {
    prototype: HTMLIonicNewsletterSignupElement;
    new (): HTMLIonicNewsletterSignupElement;
  };

  interface HTMLIonicQuickSignupElement extends Components.IonicQuickSignup, HTMLStencilElement {}
  var HTMLIonicQuickSignupElement: {
    prototype: HTMLIonicQuickSignupElement;
    new (): HTMLIonicQuickSignupElement;
  };

  interface HTMLIonicReactDemoElement extends Components.IonicReactDemo, HTMLStencilElement {}
  var HTMLIonicReactDemoElement: {
    prototype: HTMLIonicReactDemoElement;
    new (): HTMLIonicReactDemoElement;
  };

  interface HTMLIonicSearchElement extends Components.IonicSearch, HTMLStencilElement {}
  var HTMLIonicSearchElement: {
    prototype: HTMLIonicSearchElement;
    new (): HTMLIonicSearchElement;
  };

  interface HTMLIonicSignupFormElement extends Components.IonicSignupForm, HTMLStencilElement {}
  var HTMLIonicSignupFormElement: {
    prototype: HTMLIonicSignupFormElement;
    new (): HTMLIonicSignupFormElement;
  };

  interface HTMLIonicSliderElement extends Components.IonicSlider, HTMLStencilElement {}
  var HTMLIonicSliderElement: {
    prototype: HTMLIonicSliderElement;
    new (): HTMLIonicSliderElement;
  };

  interface HTMLIonicSnapBarElement extends Components.IonicSnapBar, HTMLStencilElement {}
  var HTMLIonicSnapBarElement: {
    prototype: HTMLIonicSnapBarElement;
    new (): HTMLIonicSnapBarElement;
  };

  interface HTMLIonicSubHeaderElement extends Components.IonicSubHeader, HTMLStencilElement {}
  var HTMLIonicSubHeaderElement: {
    prototype: HTMLIonicSubHeaderElement;
    new (): HTMLIonicSubHeaderElement;
  };

  interface HTMLIonicToggleElement extends Components.IonicToggle, HTMLStencilElement {}
  var HTMLIonicToggleElement: {
    prototype: HTMLIonicToggleElement;
    new (): HTMLIonicToggleElement;
  };

  interface HTMLIonicToggleButtonElement extends Components.IonicToggleButton, HTMLStencilElement {}
  var HTMLIonicToggleButtonElement: {
    prototype: HTMLIonicToggleButtonElement;
    new (): HTMLIonicToggleButtonElement;
  };

  interface HTMLIonicToggleTabElement extends Components.IonicToggleTab, HTMLStencilElement {}
  var HTMLIonicToggleTabElement: {
    prototype: HTMLIonicToggleTabElement;
    new (): HTMLIonicToggleTabElement;
  };

  interface HTMLReactCapacitorElement extends Components.ReactCapacitor, HTMLStencilElement {}
  var HTMLReactCapacitorElement: {
    prototype: HTMLReactCapacitorElement;
    new (): HTMLReactCapacitorElement;
  };

  interface HTMLReactComponentsElement extends Components.ReactComponents, HTMLStencilElement {}
  var HTMLReactComponentsElement: {
    prototype: HTMLReactComponentsElement;
    new (): HTMLReactComponentsElement;
  };

  interface HTMLTwitterScriptElement extends Components.TwitterScript, HTMLStencilElement {}
  var HTMLTwitterScriptElement: {
    prototype: HTMLTwitterScriptElement;
    new (): HTMLTwitterScriptElement;
  };

  interface HTMLUiFloatingInputElement extends Components.UiFloatingInput, HTMLStencilElement {}
  var HTMLUiFloatingInputElement: {
    prototype: HTMLUiFloatingInputElement;
    new (): HTMLUiFloatingInputElement;
  };

  interface HTMLUiTipElement extends Components.UiTip, HTMLStencilElement {}
  var HTMLUiTipElement: {
    prototype: HTMLUiTipElement;
    new (): HTMLUiTipElement;
  };
  interface HTMLElementTagNameMap {
    'bar-chart': HTMLBarChartElement;
    'home-components': HTMLHomeComponentsElement;
    'home-native': HTMLHomeNativeElement;
    'hubspot-dynamic-content': HTMLHubspotDynamicContentElement;
    'hubspot-form': HTMLHubspotFormElement;
    'icon-external': HTMLIconExternalElement;
    'ionic-app-wizard': HTMLIonicAppWizardElement;
    'ionic-appflow-activator': HTMLIonicAppflowActivatorElement;
    'ionic-bar-chart': HTMLIonicBarChartElement;
    'ionic-button': HTMLIonicButtonElement;
    'ionic-emoji-picker': HTMLIonicEmojiPickerElement;
    'ionic-newsletter-signup': HTMLIonicNewsletterSignupElement;
    'ionic-quick-signup': HTMLIonicQuickSignupElement;
    'ionic-react-demo': HTMLIonicReactDemoElement;
    'ionic-search': HTMLIonicSearchElement;
    'ionic-signup-form': HTMLIonicSignupFormElement;
    'ionic-slider': HTMLIonicSliderElement;
    'ionic-snap-bar': HTMLIonicSnapBarElement;
    'ionic-sub-header': HTMLIonicSubHeaderElement;
    'ionic-toggle': HTMLIonicToggleElement;
    'ionic-toggle-button': HTMLIonicToggleButtonElement;
    'ionic-toggle-tab': HTMLIonicToggleTabElement;
    'react-capacitor': HTMLReactCapacitorElement;
    'react-components': HTMLReactComponentsElement;
    'twitter-script': HTMLTwitterScriptElement;
    'ui-floating-input': HTMLUiFloatingInputElement;
    'ui-tip': HTMLUiTipElement;
  }
}

declare namespace LocalJSX {
  interface BarChart {
    'color'?: string;
    'graphData'?: string | object;
  }
  interface HomeComponents {}
  interface HomeNative {}
  interface HubspotDynamicContent {
    'listId'?: string;
  }
  interface HubspotForm {
    'formId'?: string;
  }
  interface IconExternal {}
  interface IonicAppWizard {}
  interface IonicAppflowActivator {}
  interface IonicBarChart {
    'color'?: string;
    'data'?: string;
  }
  interface IonicButton {
    'color'?: string;
    'disabled'?: boolean;
    'type'?: string;
  }
  interface IonicEmojiPicker {
    'onClosed'?: (event: CustomEvent<any>) => void;
    'onEmojiPick'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
    'openEvent'?: MouseEvent;
  }
  interface IonicNewsletterSignup {
    'arrowMode'?: boolean;
    'buttonText'?: string;
    'darkMode'?: boolean;
    'homepageMode'?: boolean;
    'kind'?: string;
    'lg'?: boolean;
    'placeholder'?: string;
    'srLabel'?: { id: string; text: string; };
  }
  interface IonicQuickSignup {
    'buttonColor'?: string;
    'showPricingNotice'?: boolean;
    'transparentInput'?: boolean;
  }
  interface IonicReactDemo {}
  interface IonicSearch {
    'mobile'?: boolean;
  }
  interface IonicSignupForm {
    'allowLogin'?: boolean;
    'gaEventLabel'?: any;
    'gaEventName'?: any;
    'hubspotEventId'?: string;
    'oauthRedirect'?: boolean;
    'onLoginInstead'?: (event: CustomEvent<void>) => void;
    'onSignedUp'?: (event: CustomEvent<SignupForm>) => void;
    'source'?: any;
  }
  interface IonicSlider {}
  interface IonicSnapBar {}
  interface IonicSubHeader {
    'darkMode'?: boolean;
  }
  interface IonicToggle {}
  interface IonicToggleButton {
    'onToggleSelected'?: (event: CustomEvent<any>) => void;
    'tab'?: string;
    'title'?: string;
  }
  interface IonicToggleTab {
    'tab'?: string;
  }
  interface ReactCapacitor {
    'tab'?: TabType;
  }
  interface ReactComponents {
    'component'?: ComponentType;
  }
  interface TwitterScript {}
  interface UiFloatingInput {
    'autocomplete'?: string;
    'disabled'?: boolean;
    'inputId'?: string;
    'inputTabIndex'?: number;
    'label'?: string;
    'message'?: string;
    'name'?: string;
    'onChange'?: (e) => void;
    'required'?: boolean;
    'type'?: string;
    'value'?: string;
  }
  interface UiTip {
    'disabled'?: boolean;
    'position'?: 'top' | 'right' | 'bottom' | 'left';
    'text'?: string;
  }

  interface IntrinsicElements {
    'bar-chart': BarChart;
    'home-components': HomeComponents;
    'home-native': HomeNative;
    'hubspot-dynamic-content': HubspotDynamicContent;
    'hubspot-form': HubspotForm;
    'icon-external': IconExternal;
    'ionic-app-wizard': IonicAppWizard;
    'ionic-appflow-activator': IonicAppflowActivator;
    'ionic-bar-chart': IonicBarChart;
    'ionic-button': IonicButton;
    'ionic-emoji-picker': IonicEmojiPicker;
    'ionic-newsletter-signup': IonicNewsletterSignup;
    'ionic-quick-signup': IonicQuickSignup;
    'ionic-react-demo': IonicReactDemo;
    'ionic-search': IonicSearch;
    'ionic-signup-form': IonicSignupForm;
    'ionic-slider': IonicSlider;
    'ionic-snap-bar': IonicSnapBar;
    'ionic-sub-header': IonicSubHeader;
    'ionic-toggle': IonicToggle;
    'ionic-toggle-button': IonicToggleButton;
    'ionic-toggle-tab': IonicToggleTab;
    'react-capacitor': ReactCapacitor;
    'react-components': ReactComponents;
    'twitter-script': TwitterScript;
    'ui-floating-input': UiFloatingInput;
    'ui-tip': UiTip;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bar-chart': LocalJSX.BarChart & JSXBase.HTMLAttributes<HTMLBarChartElement>;
      'home-components': LocalJSX.HomeComponents & JSXBase.HTMLAttributes<HTMLHomeComponentsElement>;
      'home-native': LocalJSX.HomeNative & JSXBase.HTMLAttributes<HTMLHomeNativeElement>;
      'hubspot-dynamic-content': LocalJSX.HubspotDynamicContent & JSXBase.HTMLAttributes<HTMLHubspotDynamicContentElement>;
      'hubspot-form': LocalJSX.HubspotForm & JSXBase.HTMLAttributes<HTMLHubspotFormElement>;
      'icon-external': LocalJSX.IconExternal & JSXBase.HTMLAttributes<HTMLIconExternalElement>;
      'ionic-app-wizard': LocalJSX.IonicAppWizard & JSXBase.HTMLAttributes<HTMLIonicAppWizardElement>;
      'ionic-appflow-activator': LocalJSX.IonicAppflowActivator & JSXBase.HTMLAttributes<HTMLIonicAppflowActivatorElement>;
      'ionic-bar-chart': LocalJSX.IonicBarChart & JSXBase.HTMLAttributes<HTMLIonicBarChartElement>;
      'ionic-button': LocalJSX.IonicButton & JSXBase.HTMLAttributes<HTMLIonicButtonElement>;
      'ionic-emoji-picker': LocalJSX.IonicEmojiPicker & JSXBase.HTMLAttributes<HTMLIonicEmojiPickerElement>;
      'ionic-newsletter-signup': LocalJSX.IonicNewsletterSignup & JSXBase.HTMLAttributes<HTMLIonicNewsletterSignupElement>;
      'ionic-quick-signup': LocalJSX.IonicQuickSignup & JSXBase.HTMLAttributes<HTMLIonicQuickSignupElement>;
      'ionic-react-demo': LocalJSX.IonicReactDemo & JSXBase.HTMLAttributes<HTMLIonicReactDemoElement>;
      'ionic-search': LocalJSX.IonicSearch & JSXBase.HTMLAttributes<HTMLIonicSearchElement>;
      'ionic-signup-form': LocalJSX.IonicSignupForm & JSXBase.HTMLAttributes<HTMLIonicSignupFormElement>;
      'ionic-slider': LocalJSX.IonicSlider & JSXBase.HTMLAttributes<HTMLIonicSliderElement>;
      'ionic-snap-bar': LocalJSX.IonicSnapBar & JSXBase.HTMLAttributes<HTMLIonicSnapBarElement>;
      'ionic-sub-header': LocalJSX.IonicSubHeader & JSXBase.HTMLAttributes<HTMLIonicSubHeaderElement>;
      'ionic-toggle': LocalJSX.IonicToggle & JSXBase.HTMLAttributes<HTMLIonicToggleElement>;
      'ionic-toggle-button': LocalJSX.IonicToggleButton & JSXBase.HTMLAttributes<HTMLIonicToggleButtonElement>;
      'ionic-toggle-tab': LocalJSX.IonicToggleTab & JSXBase.HTMLAttributes<HTMLIonicToggleTabElement>;
      'react-capacitor': LocalJSX.ReactCapacitor & JSXBase.HTMLAttributes<HTMLReactCapacitorElement>;
      'react-components': LocalJSX.ReactComponents & JSXBase.HTMLAttributes<HTMLReactComponentsElement>;
      'twitter-script': LocalJSX.TwitterScript & JSXBase.HTMLAttributes<HTMLTwitterScriptElement>;
      'ui-floating-input': LocalJSX.UiFloatingInput & JSXBase.HTMLAttributes<HTMLUiFloatingInputElement>;
      'ui-tip': LocalJSX.UiTip & JSXBase.HTMLAttributes<HTMLUiTipElement>;
    }
  }
}


