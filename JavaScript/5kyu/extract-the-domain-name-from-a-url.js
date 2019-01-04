const domainName = (url) => {
  return /(https?:\/\/)?(www\.)?(.+?)\.+.+/mi.exec(url)[3];
};

module.exports = domainName;
