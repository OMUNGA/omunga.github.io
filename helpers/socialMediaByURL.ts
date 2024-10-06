export default function socialMediaByURL(url: string): string {
  const socialMediaIcons = {
    github: "i-carbon-logo-github",
    linkedin: "i-carbon-logo-linkedin",
    facebook: "i-carbon-logo-facebook",
    youtube: "i-carbon-logo-youtube",
    twitter: "i-carbon-logo-x",
    discord: "i-carbon-logo-discord",
    instagram: "i-carbon-logo-instagram",
    medium: "i-carbon-logo-medium",
    snapchat: "i-carbon-logo-snapchat",
    null: "i-heroicons-link-20-solid",
  };

  if (url.includes("github.com")) {
    return socialMediaIcons.github;
  } else if (url.includes("linkedin.com")) {
    return socialMediaIcons.linkedin;
  }

  return socialMediaIcons.null;
}
