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
  
    static trackResumeDownload() {
      this.event('download', 'Resume', 'Resume Download');
    }
  
    static trackLinkClick(label: string) {
      this.event('click', 'Link', label);
    }
  }
  
  export default GoogleAnalytics;
  