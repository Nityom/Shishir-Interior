const team = [
  { name: "Rakesh Kumar", role: "MANAGING DIRECTOR", platform: "facebook", profile: "https://www.facebook.com/profile.php?id=100003143724310" },
  { name: "Sashank Shekhar", role: "PROJECT DIRECTOR", platform: "instagram", profile: "https://www.instagram.com/_sh_asha_nk_/" },
  { name: "Shishir Shekhar", role: "ARCHITECT AND INTERIOR DESIGNER", platform: "instagram", profile: "https://www.instagram.com/shishir_shekhar/" },
  { name: "Kislay Kumar", role: "PROJECT HEAD", platform: "instagram", profile: "https://www.instagram.com/kumar.__.kislay/" },
  { name: "Ashutosh Raj", role: "SITE SUPERVISOR", platform: "instagram", profile: "https://www.instagram.com/ashutoshraj9796/" },
  { name: "Santu Kumar", role: "SURVEYOR", platform: "instagram", profile: "https://www.instagram.com/santukumar5738/" },
  { name: "Laxmi Kant Mishra", role: "ACCOUNTANT", platform: "facebook", profile: "https://www.facebook.com/prakash.kumar.mishra.627977/" },
  { name: "Munna Lal Azad", role: "OPERATION HEAD", platform: null, profile: null },
] as const;

function getEmbedUrl(member: (typeof team)[number]) {
  if (member.platform === "facebook") {
    return `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(member.profile)}&tabs=timeline&width=500&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;
  }

  if (member.platform === "instagram") {
    return `${member.profile}embed/`;
  }

  return null;
}

type TeamSectionProps = {
  description?: string;
};

export default function TeamSection({
  description = "At Shishir Consultants Pvt. Ltd., meet the professionals who shape inspired spaces.",
}: TeamSectionProps) {
  return (
    <section className="shared-team-section">
      <div className="shared-team-heading">
        <p>EXPERTS YOU CAN TRUST</p>
        <h2>Expertise and Excellence in Our Team</h2>
        <span>{description}</span>
      </div>
      <div className="shared-team-grid">
        {team.map((member) => {
          const embedUrl = getEmbedUrl(member);

          return (
            <article className="shared-team-member" key={member.name}>
              <div className="team-name">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
              {embedUrl ? (
                <div className={`team-social-card ${member.platform}`}>
                  <iframe
                    src={embedUrl}
                    title={`${member.name} ${member.platform} profile`}
                    loading="lazy"
                    allow="encrypted-media; picture-in-picture; web-share"
                  />
                  <a href={member.profile ?? undefined} target="_blank" rel="noreferrer">
                    Open {member.platform} profile &nearr;
                  </a>
                </div>
              ) : (
                <div className="team-social-fallback">
                  <span>{member.name.charAt(0)}</span>
                  <strong>{member.name}</strong>
                  <p>Designing thoughtful spaces with precision, creativity, and care.</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}