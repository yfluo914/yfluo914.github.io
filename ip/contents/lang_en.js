export default {
  nav: {
    id: "nav",
    Title: "Yfluo's IP",
    IPinfo: "IP Infos",
    Connectivity: "Connectivity",
    WebRTC: "WebRTC Test",
    DNSLeakTest: "DNS Leak Test",
  },
  ipInfos: {
    id: "ipinfos",
    Title: "IP Infos",
    Notes:
      "IP data will be checked from 6 sources. If there is only 1 IP stack currently, sources without data will show as empty.",
    Simple: "Simple",
    Map: "Map",
    MapUnavailable: "Map Unavailable",
    Source: "Source",
    IP: "IP Address",
    Country: "Country",
    Region: "Region",
    City: "City",
    ISP: "ISP",
    ASN: "ASN",
    IPv4Error: "Fetch Failed or No IPv4 Address",
    IPv6Error: "Fetch Failed or No IPv6 Address",
  },
  connectivity: {
    id: "connectivity",
    Title: "Network Connectivity",
    Note: "Testing is done by loading small images from corresponding websites. Delay values are for reference only and will be smaller in reality.",
    StatusWait: "Awaiting Test",
    StatusAvailable: "OK",
    StatusUnavailable: "Unavailable",
    StatusTimeout: "Timeout or Unavailable",
    checking: "Checking...",
  },
  webrtc: {
    id: "webrtc",
    Title: "WebRTC Test",
    Note: "WebRTC often establishes connections directly via UDP. If the test returns your real IP, it means your proxy settings do not cover these connections.",
    StatusWait: "Awaiting Test or Connection Error",
    StatusError: "Test Error",
  },
  dnsleaktest: {
    id: "dnsleaktest",
    Name: "Test",
    Title: "DNS Leak Test",
    Note: "A DNS leak means that when you are connected to a VPN/proxy, your domain name resolutions are still done through your local ISP, thus posing a risk of DNS leaks.",
    Note2:
      "The method to test for DNS leaks involves accessing a newly generated domain name to detect which regional DNS exit you are resolving through. If the endpoint region returned matches your local service provider's region, there is a risk of DNS leakage. In this case, you may need to modify your VPN/proxy settings.",
    Endpoint: "DNS Endpoint",
    EndpointCountry: "Endpoint Region",
    StatusWait: "Awaiting Test",
    StatusError: "Test Error",
  },
  ipcheck: {
    id: "ipcheck",
    Title: "IP Check",
    Placeholder: "Please enter an IP address",
    Button: "Check",
    Error: "Please enter a valid IPv4 or IPv6 address.",
  },
  alert: {
    id: "alert",
    OhNo: "Oh No!",
    Congrats: "Congrats!",
    OhNo_Message:
      "You are not connected to a proxy.",
    Congrats_Message:
      "You are connected to a proxy.",
      maskedInfoTitle: "Infos masked",
      maskedInfoMessage:"Information has been masked, you can now safely take screenshots.",
      unmaskedInfoTitle: "Infos Unmasked",
      unmaskedInfoMessage:"Information has been unmasked, please be careful when taking screenshots.",
  },
  page: {
    title:
      "Yfluo's IP",
  },
  addBingMapKey : {
    Title: "Add Bing Map API Key",
    Note: "After adding, the map can be displayed in the IP information. The API Key will only be saved in the current browser for the next use, and will not be uploaded to the server.",
    Placeholder: "Please enter Bing Map API Key",
    Button: "Save",
    removeButton: "Remove",
    Error: "Please enter a valid Bing Map API Key.",
  }
};
