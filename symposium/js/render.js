const SymposiumRenderer = {
    // Helper to resolve asset paths
    // If the page is in symposium/, assets are in assets/
    // If the page is in root, assets are in symposium/assets/
    getAssetPath: (path) => {
        // Simple check: if path starts with http, return as is
        if (path.startsWith('http')) return path;
        // For now, assume we are in the symposium/ directory
        return path;
    },

    renderKeynotes: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.speakers.keynote.map(speaker => `
            <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left h-full min-h-[14rem]">
                <img class="w-32 h-32 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-4 border-blue-50 flex-shrink-0 shadow-sm"
                    src="${SymposiumRenderer.getAssetPath(speaker.image)}"
                    alt="${speaker.name}">
                <div>
                    <h4 class="text-xl font-bold text-slate-800 serif-font mb-1">${speaker.name}</h4>
                    <p class="text-blue-600 text-sm font-bold uppercase mb-1">${speaker.affiliation}</p>
                    <p class="text-slate-500 text-sm italic mb-3">${speaker.title}</p>
                    <p class="text-slate-700 font-bold text-sm">"${speaker.talkTitle}"</p>
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    },

    renderSessionSpeakers: (containerId, speakers) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = speakers.map(speaker => {
            const imgHtml = speaker.isPlaceholder
                ? `<div class="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0 border-4 border-slate-50 shadow-sm"><i class="fas fa-user-tie text-4xl"></i></div>`
                : `<img src="${SymposiumRenderer.getAssetPath(speaker.image)}" alt="${speaker.name}" class="w-32 h-32 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-4 border-slate-50 flex-shrink-0 shadow-sm">`;

            return `
            <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left h-full min-h-[14rem]">
                ${imgHtml}
                <div>
                    <h4 class="text-xl font-bold text-slate-800 serif-font mb-1">${speaker.name}</h4>
                    <p class="text-blue-600 text-sm font-bold uppercase mb-1">${speaker.affiliation}</p>
                    <p class="text-slate-500 text-sm italic mb-3">${speaker.title}</p>
                    <p class="text-slate-700 font-bold text-sm">"${speaker.talkTitle}"</p>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderSchedule: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.schedule.map(item => {
            let rowClass = "hover:bg-slate-50";
            let timeClass = "text-slate-600";
            let contentHtml = `<span class="font-bold text-slate-800">${item.event}</span>`;

            if (item.type === "keynote") {
                rowClass = "hover:bg-blue-50/30 bg-blue-50/20";
                contentHtml = `
                    <span class="font-bold text-blue-800 block mb-1">${item.event}</span>
                    <div class="text-slate-600 pl-4 border-l-2 border-blue-200">
                        ${item.details.join('<br>')}
                    </div>
                `;
            } else if (item.type === "break") {
                rowClass = "bg-orange-50/50";
                timeClass = "text-orange-700";
                contentHtml = `
                    <span class="font-bold text-orange-800"><i class="fas fa-coffee mr-2"></i>${item.event}</span>
                    <span class="block text-xs text-orange-600 mt-1">${item.details[0]}</span>
                `;
            } else if (item.type === "session") {
                contentHtml = `
                    <span class="font-bold text-slate-800 block mb-1">${item.event}</span>
                    <div class="text-slate-600 pl-4 border-l-2 border-slate-200 text-sm">
                        ${item.details.join(' • ')}
                    </div>
                `;
            } else if (item.type === "social") {
                rowClass = "bg-slate-800 text-white";
                timeClass = "text-slate-300";
                contentHtml = `
                    <span class="font-bold text-white"><i class="fas fa-utensils mr-2"></i>${item.event}</span>
                    <span class="block text-xs text-slate-400 mt-1">${item.details[0]}</span>
                `;
            } else if (item.details) {
                contentHtml += `<span class="block text-xs text-slate-500">${item.details.join(' ')}</span>`;
            }

            return `
                <tr class="${rowClass}">
                    <td class="p-4 font-semibold ${timeClass}">${item.time}</td>
                    <td class="p-4">${contentHtml}</td>
                </tr>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderWelcomeChairs: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = SYMPOSIUM_DATA.committee.chairs.map(chair => `
            <div class="flex items-center space-x-4">
                <img class="w-28 h-28 rounded-full border-2 border-slate-100 shadow-sm object-cover object-top"
                    src="${SymposiumRenderer.getAssetPath(chair.image)}" alt="${chair.name}">
                <div>
                    <h3 class="text-lg font-bold text-slate-800 serif-font">${chair.name}</h3>
                    <p class="text-blue-700 font-bold text-xs uppercase tracking-wide">${chair.role}</p>
                    <p class="text-slate-500 text-sm">${chair.affiliation}</p>
                </div>
            </div>
        `).join('');
    },

    renderCommitteeChairs: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = SYMPOSIUM_DATA.committee.chairs.map(chair => `
            <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600 flex items-center gap-4">
                <img src="${SymposiumRenderer.getAssetPath(chair.image)}" alt="${chair.name}"
                    class="w-28 h-28 rounded-full object-cover border-2 border-slate-100 shadow-sm object-top">
                <div>
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">${chair.role}</div>
                    <div class="font-bold text-lg text-slate-800">${chair.name}</div>
                    <div class="text-slate-600">${chair.affiliation}</div>
                </div>
            </div>
        `).join('');
    },

    renderCommitteeMembers: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = SYMPOSIUM_DATA.committee.members.map(member => `
            <div class="text-center flex flex-col items-center">
                <img src="${SymposiumRenderer.getAssetPath(member.image)}" alt="${member.name}"
                    class="w-24 h-24 rounded-full object-cover mb-3 border-2 border-slate-100 shadow-sm object-top">
                <div class="text-blue-600 text-xs font-bold uppercase mb-1">${member.role}</div>
                <div class="font-bold text-slate-800">${member.name}</div>
                <div class="text-sm text-slate-500">${member.affiliation}</div>
            </div>
        `).join('');
    },

    renderBookletKeynotes: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.speakers.keynote.map((speaker, index) => {
            const colorClass = index === 0 ? 'blue' : 'purple'; // Alternating colors
            return `
            <div class="bg-white p-5 rounded-2xl border border-${colorClass}-200 shadow-md flex flex-col gap-4">
                <div class="flex items-start gap-4">
                    <img src="${SymposiumRenderer.getAssetPath(speaker.image)}"
                        class="w-20 h-20 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-4 border-${colorClass}-100 flex-shrink-0 shadow-sm"
                        alt="${speaker.name}">
                    <div>
                        <span class="text-[10px] font-bold text-white bg-${colorClass}-600 px-2 py-0.5 rounded-full uppercase mb-1 inline-block tracking-wide">Keynote Speaker</span>
                        <h4 class="text-xl font-black text-slate-900 leading-tight mb-0.5">${speaker.name}</h4>
                        <p class="text-xs text-slate-600 font-bold mb-0.5">${speaker.title}</p>
                        <p class="text-[10px] text-slate-500 italic mb-1">${speaker.affiliation}</p>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderBookletSchedule: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.schedule.map(item => {
            let timeClass = "font-bold text-slate-500";
            let eventClass = "";
            let rowClass = "flex justify-between border-b border-blue-200/50 pb-1";

            if (item.type === "keynote") {
                eventClass = "font-bold text-blue-700";
            } else if (item.type === "social") {
                eventClass = "font-bold text-purple-700";
                rowClass = "flex justify-between pt-1"; // No border for last item usually
            }

            // Simplify event name for booklet "At a Glance"
            let eventName = item.event;
            if (item.type === "session") {
                eventName = item.event.replace("SESSION #", "Session "); // Shorten
                // Extract just the session name if needed, but the full string is okay
                if (eventName.includes(":")) {
                    eventName = eventName.split(":")[0] + " (" + eventName.split(":")[1].trim().split(" ")[0] + ")"; // Hacky shortening?
                    // Actually, let's just use a mapped short name or logic
                    if (item.event.includes("Precision Medicine")) eventName = "Session 1 (Precision Med)";
                    if (item.event.includes("Future Science")) eventName = "Session 2 (Future Sci)";
                }
            }
            if (item.type === "break") eventName = "Poster Session & Break";
            if (item.type === "general" && item.event.includes("Closing")) eventName = "Awards & Closing";
            if (item.type === "general" && item.event.includes("Welcome")) eventName = "Welcome Remarks";

            // Time formatting (strip PM if redundant? Keep as is)
            let time = item.time.split(" – ")[0]; // Just start time
            if (item.type === "social") time = "5:00 PM - <br>&nbsp;&nbsp;&nbsp;&nbsp;9:00 PM"; // Special case

            return `
                <div class="${rowClass}">
                    <span class="${timeClass}">${time}</span>
                    <span class="${eventClass}">${eventName}</span>
                </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderBookletInvitedSpeakers: (containerId, speakers) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = speakers.map(speaker => {
            const imgHtml = speaker.isPlaceholder
                ? `<div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-3xl border-4 border-slate-200 flex-shrink-0 mb-3"><i class="fas fa-user-tie"></i></div>`
                : `<img src="${SymposiumRenderer.getAssetPath(speaker.image)}" class="w-20 h-20 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-4 border-slate-100 flex-shrink-0 mb-3 shadow-sm" alt="${speaker.name}">`;

            return `
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center h-full">
                ${imgHtml}
                <div class="flex-grow flex flex-col justify-center w-full">
                    <div class="mb-0">
                        <h4 class="font-bold text-slate-900 text-base leading-tight mb-1">${speaker.name}</h4>
                        <p class="text-[10px] text-slate-600 font-bold mb-0.5 leading-tight">${speaker.title}</p>
                        <p class="text-[10px] text-slate-500 uppercase tracking-wide leading-tight">${speaker.affiliation}</p>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderBookletCommittee: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Combine chairs and members
        const allMembers = [
            ...SYMPOSIUM_DATA.committee.chairs,
            ...SYMPOSIUM_DATA.committee.members
        ];

        const html = allMembers.map(member => {
            // Map roles to short versions if needed
            let role = member.role;
            if (role.includes("Program")) role = "Program Director";
            if (role.includes("Publication")) role = "Publication";
            if (role.includes("Public Relations")) role = "Public Relations";
            if (role === "Chair") role = "Symposium Chair";

            let colorClass = "blue";
            if (member.role.includes("Director") || member.role.includes("Public")) colorClass = "purple";

            return `
            <div class="flex items-center gap-4">
                <img src="${SymposiumRenderer.getAssetPath(member.image)}"
                    class="w-16 h-16 rounded-full border-2 border-slate-600 object-cover object-top" alt="${member.name}">
                <div>
                    <h4 class="font-bold text-lg">${member.name.split(",")[0]}</h4>
                    <p class="text-xs text-${colorClass}-400 uppercase font-bold">${role}</p>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderPosterKeynotes: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.speakers.keynote.map((speaker, index) => {
            const borderClass = index === 0 ? 'border-blue-500' : 'border-purple-500';
            return `
            <div class="glass-card p-6 rounded-2xl flex items-center gap-6 border-l-4 ${borderClass}">
                <img src="${SymposiumRenderer.getAssetPath(speaker.image)}" alt="${speaker.name}"
                    class="w-24 h-24 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-2 border-white/20 shadow-lg">
                <div>
                    <h3 class="text-2xl font-bold text-white mb-1 serif-font">${speaker.name}</h3>
                    <p class="text-blue-300 text-sm font-bold uppercase tracking-wide mb-1">${speaker.affiliation}</p>
                    <p class="text-slate-400 text-xs italic mb-2">${speaker.title}</p>
                    <p class="text-slate-200 font-bold text-sm leading-tight">"${speaker.talkTitle}"</p>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderPosterInvitedSpeakers: (containerId, speakers) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = speakers.map(speaker => {
            const imgHtml = speaker.isPlaceholder
                ? `<div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-2xl border-2 border-white/10 flex-shrink-0"><i class="fas fa-user-tie"></i></div>`
                : `<img src="${SymposiumRenderer.getAssetPath(speaker.image)}" alt="${speaker.name}" class="w-16 h-16 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-2 border-white/20 flex-shrink-0">`;

            return `
            <div class="glass-card p-4 rounded-xl flex items-center gap-4">
                ${imgHtml}
                <div>
                    <h4 class="text-lg font-bold text-white leading-tight">${speaker.name}</h4>
                    <p class="text-slate-400 text-xs">${speaker.affiliation}</p>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderPosterSchedule: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.schedule.map(item => {
            let timeClass = "text-blue-400 font-bold w-24 flex-shrink-0";
            let eventClass = "text-slate-200 flex-1";

            if (item.type === "keynote") eventClass = "text-white font-bold text-glow";
            if (item.type === "break" || item.type === "social") timeClass = "text-purple-400 font-bold w-24 flex-shrink-0";

            // Simplify event name for poster
            let eventName = item.event;
            if (item.type === "session") {
                if (item.event.includes("Precision Medicine")) eventName = "Session 1: Precision Med";
                if (item.event.includes("Future Science")) eventName = "Session 2: Future Sci";
            }

            return `
            <div class="flex items-center justify-between border-b border-slate-700 pb-2">
                <span class="${timeClass}">${item.time.split(" – ")[0]}</span>
                <span class="${eventClass}">${eventName}</span>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    // --- Booklet Bio Pages ---
    renderBookletSpeakerPages: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const allSpeakers = [
            ...SYMPOSIUM_DATA.speakers.keynote,
            ...SYMPOSIUM_DATA.speakers.session1,
            ...SYMPOSIUM_DATA.speakers.session2
        ];

        let pageNumber = 5; // Starting page number for bios

        const html = allSpeakers.map(speaker => {
            if (speaker.isPlaceholder) return ''; // Skip placeholders

            // Determine type based on source array or property (adding type to data would be cleaner, but we can infer)
            // Actually, let's check if the speaker is in the keynote list
            const isKeynote = SYMPOSIUM_DATA.speakers.keynote.some(k => k.name === speaker.name);

            const badgeColor = isKeynote ? (speaker.name.includes('Deok') ? 'bg-purple-600' : 'bg-blue-600') : 'bg-blue-100 text-blue-700';
            const badgeText = isKeynote ? 'Keynote Speaker' : 'Invited Speaker';
            const badgeClass = isKeynote ? 'text-white' : 'text-blue-700';
            const nameColor = isKeynote ? (speaker.name.includes('Deok') ? 'text-purple-700' : 'text-blue-700') : 'text-blue-700';

            // Mock Abstract/Bio if missing (since data might not have it yet)
            const abstract = speaker.abstract || "Abstract to be updated.";
            const bio = speaker.bio || "Biography to be updated.";

            return `
            <div class="page bg-white speaker-bio-page">
                <div class="page-content bg-white flex flex-col h-full">
                    <div class="flex items-end gap-6 border-b-2 border-slate-100 pb-4 mb-4 speaker-header">
                        <img src="${SymposiumRenderer.getAssetPath(speaker.image)}"
                            class="w-24 h-24 rounded-xl object-cover ${speaker.imagePosition || 'object-top'} shadow-lg border border-slate-200">
                        <div>
                            <span class="${badgeColor} ${badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1 inline-block">${badgeText}</span>
                            <h2 class="text-xl font-black text-slate-900 leading-tight mb-0.5">${speaker.name}</h2>
                            <p class="${nameColor} font-bold text-xm uppercase mb-0.5">${speaker.affiliation}</p>
                            <p class="text-slate-500 text-[12px] italic">${speaker.title}</p>
                        </div>
                    </div>

                    <div class="flex-grow speaker-content text-justify text-slate-700 text-[10px]">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">"${speaker.talkTitle}"</h3>

                        <p class="mb-2"><strong class="text-slate-900">Abstract:</strong> ${abstract}</p>

                        <div class="mt-4 pt-4 border-t border-slate-100">
                            <p><strong class="text-slate-900">Bio:</strong> ${bio}</p>
                        </div>
                    </div>
                    <span class="page-number">${pageNumber++}</span>
                </div>
            </div>
            `;
        }).join('');

        // Insert after the container
        container.insertAdjacentHTML('afterend', html);
    },

    // --- Save The Date ---
    renderSaveTheDateKeynotes: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.speakers.keynote.map((speaker, index) => {
            const color = index === 0 ? 'blue' : 'purple';
            return `
            <div class="flex flex-col items-center group/speaker cursor-pointer">
                <div class="relative w-32 h-32 mb-4">
                    <div class="absolute inset-0 bg-${color}-500 rounded-full blur opacity-50 group-hover/speaker:opacity-80 group-hover/speaker:blur-xl transition-all duration-500 animate-pulse-glow"></div>
                    <img src="${SymposiumRenderer.getAssetPath(speaker.image)}"
                        alt="${speaker.name}"
                        class="w-32 h-32 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-2 border-slate-700 relative z-10 transition-all duration-500 grayscale group-hover/speaker:grayscale-0 group-hover/speaker:scale-110 group-hover/speaker:border-${color}-400">
                </div>
                <h4 class="text-xl font-bold text-white mb-1 group-hover/speaker:text-${color}-400 transition-colors">${speaker.name}</h4>
                <p class="text-${color}-400 text-sm font-bold uppercase tracking-wide">${speaker.affiliation}</p>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderSaveTheDateInvited: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const allInvited = [...SYMPOSIUM_DATA.speakers.session1, ...SYMPOSIUM_DATA.speakers.session2];

        const html = allInvited.map(speaker => {
            if (speaker.isPlaceholder) return '';
            return `
            <div class="flex flex-col items-center group/speaker">
                <div class="w-20 h-20 mb-3 relative">
                    <div class="absolute inset-0 bg-blue-500 rounded-full blur opacity-0 group-hover/speaker:opacity-40 transition-opacity duration-300"></div>
                    <img src="${SymposiumRenderer.getAssetPath(speaker.image)}"
                        alt="${speaker.name}"
                        class="w-20 h-20 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border border-slate-600 relative z-10 grayscale group-hover/speaker:grayscale-0 transition-all duration-300">
                </div>
                <h5 class="text-sm font-bold text-slate-300 group-hover/speaker:text-white transition-colors">${speaker.name}</h5>
                <p class="text-[10px] text-slate-500 uppercase tracking-wide">${speaker.affiliation}</p>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderFundraisingKeynotes: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = SYMPOSIUM_DATA.speakers.keynote.map((speaker, index) => {
            const colorClass = index === 0 ? 'blue' : 'purple';
            return `
            <div class="bg-white p-5 rounded-2xl border border-${colorClass}-200 shadow-md flex flex-col gap-4 flex-1 justify-between h-full">
                <div class="flex items-start gap-4">
                    <img src="${SymposiumRenderer.getAssetPath(speaker.image)}"
                        class="w-20 h-20 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-4 border-${colorClass}-100 flex-shrink-0 shadow-sm"
                        alt="${speaker.name}">
                    <div>
                        <span class="text-[10px] font-bold text-white bg-${colorClass}-600 px-2 py-0.5 rounded-full uppercase mb-1 inline-block tracking-wide">Keynote Speaker</span>
                        <h4 class="text-xl font-black text-slate-900 leading-tight mb-0.5">${speaker.name}</h4>
                        <p class="text-xs text-slate-600 font-bold mb-0.5">${speaker.title}</p>
                        <p class="text-[10px] text-slate-500 italic mb-1">${speaker.affiliation}</p>
                    </div>
                </div>
                <p class="text-sm text-${colorClass}-800 font-bold border-t border-${colorClass}-50 pt-2">"${speaker.talkTitle}"</p>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    renderFundraisingInvitedSpeakers: (containerId, speakers) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = speakers.map(speaker => {
            const imgHtml = speaker.isPlaceholder
                ? `<div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-3xl border-4 border-slate-200 flex-shrink-0"><i class="fas fa-user-tie"></i></div>`
                : `<img src="${SymposiumRenderer.getAssetPath(speaker.image)}" class="w-20 h-20 rounded-full object-cover ${speaker.imagePosition || 'object-top'} border-4 border-slate-100 flex-shrink-0" alt="${speaker.name}">`;

            return `
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-6">
                ${imgHtml}
                <div class="flex-grow">
                    <div class="flex justify-between items-start">
                        <div>
                            <h4 class="font-bold text-slate-900 text-lg">${speaker.name}</h4>
                            <p class="text-xs text-slate-500 font-bold">${speaker.title}, ${speaker.affiliation}</p>
                        </div>
                    </div>
                    <p class="text-xs text-blue-800 font-bold mt-1">"${speaker.talkTitle}"</p>
                </div>
            </div>
            `;
        }).join('');

        container.innerHTML = html;
    },

    init: () => {
        // Web
        SymposiumRenderer.renderKeynotes('keynote-speakers-container');
        SymposiumRenderer.renderSessionSpeakers('session1-speakers-container', SYMPOSIUM_DATA.speakers.session1);
        SymposiumRenderer.renderSessionSpeakers('session2-speakers-container', SYMPOSIUM_DATA.speakers.session2);
        SymposiumRenderer.renderSchedule('schedule-tbody');
        SymposiumRenderer.renderWelcomeChairs('welcome-chairs-container');
        SymposiumRenderer.renderCommitteeChairs('committee-chairs-container');
        SymposiumRenderer.renderCommitteeMembers('committee-members-container');

        // Booklet Fundraising
        SymposiumRenderer.renderFundraisingKeynotes('fundraising-keynote-container');
        SymposiumRenderer.renderBookletSchedule('booklet-schedule-container');
        SymposiumRenderer.renderFundraisingInvitedSpeakers('fundraising-session1-container', SYMPOSIUM_DATA.speakers.session1);
        SymposiumRenderer.renderFundraisingInvitedSpeakers('fundraising-session2-container', SYMPOSIUM_DATA.speakers.session2);
        SymposiumRenderer.renderBookletCommittee('booklet-committee-container');

        // Booklet Program (Bio Pages & Distinguished Speakers)
        SymposiumRenderer.renderBookletKeynotes('booklet-keynote-container');
        SymposiumRenderer.renderBookletInvitedSpeakers('booklet-session1-container', SYMPOSIUM_DATA.speakers.session1);
        SymposiumRenderer.renderBookletInvitedSpeakers('booklet-session2-container', SYMPOSIUM_DATA.speakers.session2);

        // Booklet Program (Bio Pages)
        SymposiumRenderer.renderBookletSpeakerPages('booklet-bio-pages-start');

        // Poster
        SymposiumRenderer.renderPosterKeynotes('poster-keynote-container');
        SymposiumRenderer.renderPosterInvitedSpeakers('poster-invited-container', [...SYMPOSIUM_DATA.speakers.session1, ...SYMPOSIUM_DATA.speakers.session2]);
        SymposiumRenderer.renderPosterSchedule('poster-schedule-container');

        // Save The Date
        SymposiumRenderer.renderSaveTheDateKeynotes('std-keynote-container');
        SymposiumRenderer.renderSaveTheDateInvited('std-invited-container');
    }
};

// Auto-init if document is ready, or wait for it
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', SymposiumRenderer.init);
} else {
    SymposiumRenderer.init();
}
