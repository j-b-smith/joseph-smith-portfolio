class GoogleAnalytics {
  static event(eventAction: string, eventCategory: string, eventLabel: string, value?: number) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventAction, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: value,
      });
    }
  }

  static trackLinkClick(label: string) {
    this.event('click', 'Link', label);
  }
}

export default GoogleAnalytics;
