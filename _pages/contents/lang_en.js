export default {
  nav: {
    id: "nav",
    Title: "IP Toolbox",
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
      "The leak test method involves accessing a newly generated domain name to detect which region's DNS is being used as per your VPN/proxy settings.",
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
      "You seem to be not connected to a VPN/proxy, some content may not be displayed.",
    Congrats_Message:
      "You are now connected to a VPN/proxy, welcome to the new world.",
  },
  page: {
    title:
      "Check My IP Address | Check My IP Address and Geolocation | Check WebRTC Connection IP | DNS Leak Test | Jason Ng Open Source",
  },
};
