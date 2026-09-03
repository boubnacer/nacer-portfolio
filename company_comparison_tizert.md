# Company Comparison — Tizert / Taroudant Cluster vs. My Profile

**Candidate:** Nacer Boubkraoui — Master's in Embedded Artificial Intelligence, Ibn Zohr University (defended 04/07/2026)
**Target area:** Taroudant Province, Morocco (Tizert copper project cluster)
**Date of analysis:** September 2026

---

## 0. Executive Summary — Read This First

The companies on my list are **the Tizert copper project ecosystem**: Managem (owner/operator) plus its
mining-services contractors. Tizert is a $440M underground copper mine in Taroudant Province that entered
commercial production in Q4 2025, with an 18-year mine life and 107 kt/yr of copper concentrate capacity.

Three conclusions changed my plan:

1. **My original 5-star ranking is upside-down.** I rated Managem, GMC, MAA and CA2E equally at 5 stars.
   But GMC, MAA, CADEX and TALPA are *mining and civil-works* companies. For an Embedded AI graduate they
   offer generic maintenance or electrical-technician roles that waste the degree.

2. **The best-fit employer on the Tizert project was not on my list: `Mana Technology`** — the
   Managem x ABA Technology joint venture that designed and deployed the **Digital Twin at Tizert**, plus
   the CBM (condition-based maintenance), data platform, fleet management and AI roadmap. That is exactly
   my domain.

3. **The good roles are not in Taroudant.** The jobs posted *at the Tizert site* are Bac+2/Bac+3
   mechanical-maintenance agents. The digital, data and AI roles sit at Casablanca and Marrakech HQ.
   Restricting myself to Taroudant means competing for jobs below my qualification level.

### Corrected priority order

| Rank | Company | Match | Why |
|------|---------|-------|-----|
| 1 | **Mana Technology** *(not on original list)* | 5/5 | Digital twin + CBM + AI for Tizert. Direct domain match. |
| 2 | **ABA Technology** *(not on original list)* | 5/5 | Sovereign AI / IoT / robotics. Actively hires new graduates. Parent of the JV above. |
| 3 | **Managem Group** — digital & Reminex only | 4/5 | Only via the digital/R&D arm, never via a Tizert site maintenance posting. |
| 4 | **CA2E Maroc** | 3/5 | Real industrial engineering. Closable gap: I have no PLC/SCADA experience. |
| 5 | **MAA (Métallurgie de l'Anti-Atlas)** | 2/5 | Process plant. Instrumentation angle only. |
| 6 | **CADEX Group** | 2/5 | One narrow angle: computer-vision blast fragmentation analysis. |
| 7 | **TALPA S.A.** | 1/5 | Drilling/haulage contractor. Fleet telematics angle at best. |
| 8 | **GMC** | 1/5 | Could not verify a Morocco/Managem link at all. Verify before spending effort. |
| — | **Texibl**, **IRM** | ? | No credible evidence either exists as named. Do not apply blind. |

---

## 1. My Profile — What I Actually Sell

| Asset | Detail |
|-------|--------|
| **TinyML on microcontrollers** | PFE at SiliconeSignal Technologies: real-time snoring detection fully on an ESP32-S3 — no cloud, no AI accelerator. PDM mic capture, embedded C++ DSP (FFT, mel-spectrogram), INT8-quantized CNN via TFLite-Micro, six retraining iterations. 97.80% test accuracy, 97.0% recall, ROC AUC 0.9976, 1s latency. |
| **Industrial telemetry stack** | Edge Health Gateway: ESP32 sensors -> MQTT -> Raspberry Pi gateway -> Node-RED -> InfluxDB -> Grafana. |
| **Computer vision** | Autonomous vehicle system on Raspberry Pi 4: lane detection, traffic-sign recognition, obstacle detection, sensor fusion. 23+ FPS, 90%+ accuracy, OpenCV/Python. |
| **RF / wireless security** | NRF24L01+ 2.4 GHz analysis: jamming, eavesdropping, countermeasures (encryption, frequency hopping). |
| **Software engineering** | Founder/CTO of mafqoudat.com (live MERN platform). 2 RAG applications (web + native Android). |
| **MLOps** | Docker, MLflow, Kafka, Git. |
| **Languages** | Arabic (fluent), French (fluent), English (advanced), Tamazight. |

### The two transfers that make me credible in mining

These are the arguments to lead with in every application:

> **1. My PFE is literally industrial predictive maintenance, in a different costume.**
> Acoustic anomaly detection on a microcontroller — microphone -> FFT -> mel-spectrogram -> CNN -> INT8 ->
> MCU — is the *exact* signal chain used for vibration and acoustic monitoring of rotating machinery:
> crushers, ball mills, conveyors, pumps, ventilation fans. I built and shipped that pipeline end to end.
> Swap the snore class for a bearing-fault class and the architecture is unchanged.
>
> **2. My Edge Health Gateway is a condition-monitoring system.**
> ESP32 -> MQTT -> gateway -> Node-RED -> InfluxDB -> Grafana is the same architecture a mine uses for
> equipment telemetry. Replace SpO2/BPM/temperature with vibration/current/temperature on a crusher and it
> is a CBM system. InfluxDB + Grafana are already the mining industry's default time-series and
> visualisation tools.

---

## 2. Company-by-Company Analysis

### 1. Managem Group — the owner/operator

**Match: 4/5 — but only through one specific door**

Moroccan mining group founded in 1930, part of the Al Mada holding. Exploration, extraction, hydrometallurgy;
base metals, precious metals, cobalt. Operations across Morocco and Africa.

**Tizert:** 611,000 t of contained copper, $440M investment, 1,068 Mt resources, 600 Mt reserves (end-2025),
18-year mine life, 3.6 Mt/yr ore, 107 kt/yr concentrate. Underground (room-and-pillar + longhole stoping).
An aerial ropeway carries ore across an 800 m wide, 250 m deep canyon to the process plant. Commercial
production reached 2025, first concentrate sales Q4 2025; contributed 33,824 t of copper in 2025.

**Why it matters to me:** Tizert is presented in the Moroccan press as **the first "intelligent mine" in
Morocco**. Managem's digital roadmap covers OMS, APC, **CBM (condition-based maintenance)**, fleet
management, a data platform, and AI. Managem also owns **Reminex** — its R&D and engineering subsidiary,
with 30+ industrial processes developed and 12 patents filed, plus Reminex Ingénierie for external
engineering and project management.

**The trap:** The Tizert *site* vacancies are "Agent de Maintenance Mécanique" / "Technicien Maintenance
Mécanique" — Bac+2/Bac+3, 0-3 years. Applying to those with a Master's in Embedded AI gets me either
rejected as overqualified or hired into a job that never uses the degree.

**What to actually target:** Reminex (R&D/engineering, Marrakech-Casablanca), the Managem digital/IT
directorate, or the Mana Technology JV below. Roles to search: data engineer, IoT engineer, digital
transformation engineer, CBM/predictive-maintenance engineer, instrumentation & automation engineer.

**Gaps they will probe:** no mining-domain knowledge, no PLC/SCADA, no industrial safety training.

**Verdict:** Apply — but to the digital/R&D arm, with the CBM pitch. Never to a site maintenance posting.

---

### 2. Mana Technology *(missing from my list — highest priority)*

**Match: 5/5**

Joint venture between **Groupe Managem and ABA Technology**, created to drive Managem's digital
transformation toward the "mine of the future" — more connected, efficient, resilient, lower carbon.

It has deployed a digital roadmap covering OMS, APC, **CBM**, fleet management, a data platform and AI,
and **designed and deployed its own Digital Twin solution at the Tizert mine** — virtual replication of
mining operations, process optimisation, **predictive maintenance**, resource management.

**Why this is my top target:** This is an embedded-AI/IIoT engineering company operating on the exact site
I want to work near. Digital twin + predictive maintenance + IoT data platform is the intersection of every
single thing on my CV. My Node-RED/InfluxDB/Grafana/MQTT stack and my TinyML anomaly-detection pipeline are
directly on-mission, not analogies.

**Action:** Find Mana Technology on LinkedIn, identify engineering managers, apply through both Managem and
ABA Technology channels. Lead with the digital-twin/CBM framing of my PFE.

---

### 3. ABA Technology *(missing from my list — second priority)*

**Match: 5/5**

Moroccan technology company building **sovereign AI**, positioned around electronics, digital and life
sciences. Parent partner of the Mana Technology JV. Central to the Maroc Digital 2030 strategy.

**Why this is a strong fit — they explicitly hire people like me:**
- They actively recruit **young graduates into data, AI and robotics** teams.
- They run **GEN AIoT** with the Ministry of Digital Transition and the CTPES Association: a free national
  programme training 1,200 young people per year from 2026 in AI, IoT and robotics. Eight months
  (4 training + 4 on real company projects), with specialisations in **Agentic AI** and **Physical AI**.
- ABA has committed to **integrating ~240 of those talents per year into its own workforce** — 20% of each
  cohort, a direct route to a permanent job.

**My position:** The programme's floor is Bac+2 in CS/maths/science. I hold a **Bac+5 Master's in Embedded
AI with a shipped TinyML product**. "Physical AI" is exactly my specialism. I should be in the top decile
of any cohort — and I should apply for a **direct engineering role first**, using GEN AIoT only as a
fallback route in.

**Action:** Apply directly via aba.technology and ReKrute. Mention Tizert/Mana Technology explicitly to
show I understand their mining work.

---

### 4. CA2E Maroc — Company of Automation & Electrical Engineering

**Match: 3/5 — the most realistic conventional employer**

Subsidiary of the French **Ibitek Group** (HQ Marseille; ~120 staff across France, Morocco, Algeria,
Tunisia, Czech Republic, Brazil/South America). Based at 36 Lot. SNCI, Bd. Al Binaa, Z.I. Sidi Bernoussi,
Casablanca. Tel. 05 22 34 20 24 / info@ca2e.ma.

**Activities:** industrial electricity (MV/LV), **automation and control systems**, **instrumentation and
regulation**, process control, and **business intelligence** — engineering and services for construction,
renovation, maintenance and optimisation of industrial processes.

**Fit:** Genuine engineering work, and their industrial-data/BI line overlaps my Grafana/InfluxDB/Kafka
experience. This is the kind of firm that does the automation and instrumentation on projects like Tizert.

**The honest gap:** their core skill is **PLC/DCS programming** — Siemens TIA Portal/Step7, Schneider,
ABB 800xA, Rockwell — plus SCADA (WinCC, PcVue) and industrial protocols (Modbus, Profinet, OPC-UA).
**None of that is on my CV.** I have MQTT and embedded C, which is adjacent but not the same. This is the
single most valuable gap I can close, and it unlocks CA2E, MAA, Managem instrumentation roles and most of
the industrial market at once.

**Angle:** apply as an automation engineer with an Industry 4.0 / industrial-data specialisation — "I bring
the edge-AI and data layer above your PLC layer, and I will learn your PLC stack fast."

**Verdict:** Apply. Best conventional-industry fit on the list. Start OPC-UA and Siemens/Schneider
self-training now.

---

### 5. MAA — Métallurgie de l'Anti-Atlas

**Match: 2/5**

A subsidiary **99% held by AGM** (itself a Managem subsidiary), created around a metallurgy project in the
Anti-Atlas with regional investment incentives and infrastructure financing conventions. Managem's copper
belt in the western Anti-Atlas runs through this region (Akka is ~280 km southeast of Agadir).

**Fit:** A metallurgical plant means process control, instrumentation, sensors and quality data — where
embedded/AI work can land eventually. But they primarily hire **metallurgists, process engineers, chemists
and mineral-processing specialists**. My degree does not target those.

**Verdict:** Low priority. Only worth applying to a specifically posted instrumentation, process-control
or process-data role. Treat as a Managem-group side door, not a primary target.

---

### 6. CADEX Group

**Match: 2/5 — one interesting niche**

North Africa's leading manufacturer and distributor of **civil and industrial explosives** and initiation
systems, established in Morocco since 1912. Five activity lines: explosives and firing-accessory
manufacture; drilling; mining and blasting; technical advice and assistance; training; and trading in
chemicals, raw materials and mining/quarry equipment. Operations across the Middle East and Africa;
50M+ MAD invested in an Oriental-region facility.

**Fit:** Almost none for embedded AI as a core role — they hire mining engineers, blasting specialists,
chemists and process operators.

**The one real angle:** CADEX offers "analysis and exploitation of **fragmentation results**". Blast
fragmentation analysis is a genuine **computer-vision** problem — photographing muck piles and measuring
rock size distribution automatically. That is squarely my autonomous-vehicle-vision skillset (OpenCV,
image segmentation, real-time processing on a Raspberry Pi). If I apply here, that must be the entire pitch.

**Verdict:** Low priority. Speculative application only, built entirely around CV-based fragmentation
analysis. Do not send a generic embedded-AI CV.

---

### 7. TALPA S.A.

**Match: 1/5**

Founded 2009, based in Casablanca. Moroccan/African specialist in **quarry drilling, loading, transport and
crushing**, plus terrestrial and marine mining, special blasting and demolition by explosives. Positions
itself on project management and optimisation.

**Fit:** A heavy civil-works and mining-services contractor. Their engineering staff are mining, civil and
mechanical engineers plus heavy-equipment specialists. There is no embedded-AI function.

**The only angle:** fleet telematics and equipment monitoring — GPS tracking, fuel/utilisation monitoring,
predictive maintenance on haul trucks and crushers. Real, but almost certainly not a role they have
budgeted or posted.

**Verdict:** Skip unless a specific digital/monitoring vacancy appears.

---

### 8. GMC — La Générale des Mines et des Carrières

**Match: 1/5 — and unverified**

**Warning:** I could not confirm this company as a Morocco-based Managem subsidiary or Tizert contractor.
The strongest online match for "La Générale des Mines et des Carrières (GMC)" is a company operating in
**Conakry, Guinea**, not Morocco. Managem's published reference documents do not clearly show a
Morocco-based GMC subsidiary.

**Verdict:** **Verify before investing any effort.** Confirm the legal name and registration on charika.ma
or the Moroccan trade register, or ask the local contact who gave me this list. Even if confirmed, a mining
and quarrying operator is a weak fit for an Embedded AI Master's.

---

### 9. Texibl — unverifiable

No credible evidence of a company under this name connected to Tizert, Taroudant, or the Moroccan mining
sector. The spelling is probably wrong, or it is a very small local firm with no online presence.

**Verdict:** Get the exact legal name and ICE number before doing anything. Do not send a blind application.

---

### 10. IRM — unverifiable

No credible evidence of a company named "IRM" as a Tizert subcontractor. The acronym is too generic (it is
also the French abbreviation for MRI). There *are* confirmed industrial piping fabrication and assembly
subcontractors on the Tizert project, so a company by this name may exist — but I cannot confirm it, and in
any case fabrication/assembly work is a poor fit for my degree.

**Verdict:** Get the exact legal name first. Low expected value even then.

---

## 3. Gap Analysis — What I Must Fix

| # | Gap | Impact | Fix |
|---|-----|--------|-----|
| 1 | **No PLC / SCADA / DCS experience** | Blocks CA2E, MAA, and most instrumentation roles | Learn Siemens TIA Portal basics + **OPC-UA**, Modbus TCP. Build one demo: ESP32 -> Modbus/OPC-UA -> Node-RED -> InfluxDB -> Grafana. |
| 2 | **No industrial vocabulary on the CV** | Recruiters cannot see the transfer | Add the words: condition-based maintenance (CBM), predictive maintenance, vibration analysis, GMAO/CMMS, digital twin, SCADA, industrial IoT (IIoT), OT/IT convergence. |
| 3 | **CV is out of date** | Says "Master's *student*, seeking a 6-month internship from February 2026". I graduated in July 2026. | Rewrite as a **graduate engineer** CV. Update the profile statement and availability. |
| 4 | **Application documents are stale** | `cover_letter_adas_validation.md`, `linkedin_message_adas.md`, `email_nlp_rag_internship.md` all pitch an internship | Rewrite for full-time roles; produce one mining/industrial-specific version. |
| 5 | **No French-language CV** | The Moroccan mining industry runs on French | Produce a French CV. The existing cover letters are already in French — good. |
| 6 | **Best asset is buried** | Node-RED/InfluxDB/Grafana/MQTT is filed under "Edge Computing & Data Engineering" | Promote it to a headline block named **Industrial IoT & Condition Monitoring**. |
| 7 | **No vibration/rotating-machinery content** | The core CBM skill | Add a project: bearing-fault classification on a public vibration dataset (CWRU / MFPT / NASA IMS), deployed to ESP32. This is a weekend-to-two-week project and it would change every application. |
| 8 | **No mining domain knowledge** | Interview credibility | Read Managem's annual report and the Tizert project pages. Learn crusher/mill/conveyor basics. |
| 9 | **No industrial safety awareness** | Mining is safety-obsessed | Mention ATEX/hazardous-area awareness and a willingness to take site safety induction. |

---

## 4. Reframing My Projects for Industry

| My project | How to pitch it to a mining/industrial employer |
|------------|------------------------------------------------|
| **Snoring detection on ESP32-S3 (PFE)** | "Real-time **acoustic anomaly detection** on a microcontroller with no cloud dependency: mic -> FFT -> mel-spectrogram -> INT8 CNN -> 1 s latency, 97.8% accuracy, ROC AUC 0.9976. The identical pipeline detects bearing faults, cavitation and belt misalignment on rotating equipment — at the machine, underground, with no network." |
| **Intelligent Edge Health Gateway** | "A complete **condition-monitoring architecture**: sensor nodes -> MQTT -> edge gateway -> Node-RED -> InfluxDB -> Grafana dashboards. Same stack the industry uses for equipment telemetry; I have built and operated it end to end." |
| **Autonomous vehicle vision** | "Real-time computer vision at 23+ FPS on a Raspberry Pi with multi-sensor fusion — applicable to **blast fragmentation analysis**, conveyor-belt monitoring, ore sorting, and PPE/safety detection." |
| **NRF24L01+ security analysis** | "Practical 2.4 GHz RF work: interference characterisation, jamming, and countermeasures including frequency hopping — directly relevant to **wireless connectivity in underground environments**." |
| **mafqoudat.com (Founder/CTO)** | "I ship and operate production systems, alone, over years. Autonomy and delivery, not just prototypes." |
| **RAG applications** | "LLM-based document Q&A — applicable to **technical documentation, maintenance procedures and HSE assistants**." |

---

## 5. Action Plan

**This week**
1. Update `updated_cv.tex` — graduate, not student. Add the industrial vocabulary from Gap #2.
2. Produce a French CV.
3. Rewrite the three application documents for full-time roles.
4. Get the exact legal names for **GMC**, **Texibl** and **IRM** before wasting applications.

**Week 2**
5. Apply to **ABA Technology** (direct engineering role) and ask about **Mana Technology**.
6. Apply to **Managem** — Reminex / digital transformation / CBM roles only. Not site maintenance.
7. Apply to **CA2E Maroc** as an automation engineer with an Industry 4.0 angle.
8. Start Siemens TIA Portal + OPC-UA self-training.

**Weeks 3-4**
9. Build the **bearing-fault detection on ESP32** project. Publish it on GitHub and add it to the portfolio.
10. Speculative application to **CADEX**, built solely around CV fragmentation analysis.
11. Add an "Industrial IoT & Predictive Maintenance" section to nacerboubkraoui.dev.

**Reality check on geography**
Tizert is in Taroudant Province, but the engineering and digital jobs are in **Casablanca, Marrakech and
Agadir**. I should widen the search to Agadir at minimum, and accept Casablanca for the roles that actually
match my degree. Staying strictly in Taroudant means applying for Bac+2 maintenance jobs.

---

## 6. Sources

- [Tizert project | Managem](https://www.managemgroup.com/en/tizert-project)
- [Tizert mine | Managem](https://www.managemgroup.com/en/tizert-mine)
- [Tizert copper project, Morocco – update | Mining Weekly](https://www.miningweekly.com/article/tizert-copper-project-morocco-update-2024-11-29)
- [Projet de Tizert : Managem s'apprête à inaugurer la première mine intelligente au Maroc | Medias24](https://medias24.com/2025/03/19/projet-de-tizert-managem-sapprete-a-inaugurer-la-premiere-mine-intelligente-au-maroc/)
- [Managem Group and ABA Technology sign a joint-venture dedicated to the acceleration of the digital transformation of the group | Managem](https://www.managemgroup.com/en/managem-group-and-aba-technology-sign-joint-venture-dedicated-acceleration-digital-transformation)
- [Mana Technology, une joint-venture signée Managem et ABA Technology | Le Matin](https://lematin.ma/express/2023/mana-technology-joint-venture-signee-managem-aba-technology/388905.html)
- [Transformation digitale : Managem se projette sur la mine du futur | LesEco](https://leseco.ma/maroc/transformation-digitale-managem-cree-se-projette-sur-la-mine-du-futur.html)
- [ABA Technology : une année 2024 marquée par la souveraineté, l'IA et la création d'emploi | Le Desk](https://ledesk.ma/2025/02/11/aba-technology-une-annee-2024-marquee-par-la-souverainete-lia-et-la-creation-demploi/)
- [ABA Technology](https://aba.technology/en/)
- [GEN AIoT](https://gen-aiot.tech/english/)
- [GEN AIoT : un programme national pour faire de la jeunesse marocaine un moteur technologique | Le360](https://fr.le360.ma/economie/gen-aiot-un-programme-national-pour-faire-de-la-jeunesse-marocaine-un-moteur-technologique_47JSW3RJDNAW5I3EWIKDTYDIFQ/)
- [Recrutement jeunes diplômés: data, IA et robotique chez ABA | Dreamjob.ma](https://www.dreamjob.ma/emploi/recrutement-jeunes-diplomes-data-ia-et-robotique-chez-aba/)
- [Emploi ABA Technology | ReKrute](https://www.rekrute.com/aba-technology-emploi-recrutement-335001.html)
- [Research & Development | Managem](https://www.managemgroup.com/en/who-we-are/our-expertises-services/research-development)
- [Engineering | Managem](https://www.managemgroup.com/en/who-we-are/our-expertises-services/engineering)
- [CA2E Maroc | Telecontact.ma](https://www.telecontact.ma/annonceur/ca2e-maroc/3155054/casablanca.php)
- [Ca2E Maroc S.A. System Integrator | Automa.net](https://automa.net/company/ca2e-maroc-sa)
- [IBITEK Group](https://www.ibitek-group.com/en/)
- [Fiche d'Identité Société : CA2E MAROC | Charika](https://www.charika.ma/societe-ca2e-maroc-190537)
- [Fiche d'Identité Société : METALLURGIE DE L'ANTI-ATLAS | Charika](https://www.charika.ma/societe-metallurgie-de-l-anti-atlas-1101195)
- [CADEX Group | LinkedIn](https://www.linkedin.com/company/compagnieafricainedesexplosifs)
- [Le fabricant d'explosifs Cadex investit plus de 50 millions de DH dans l'Oriental | Challenge](https://archive.challenge.ma/le-fabricant-dexplosifs-cadex-investit-plus-de-50-millions-de-dh-dans-loriental-152122/)
- [Talpa | Étude et réalisation des travaux publics](https://talpa.co.ma/)
- [Nos Services | Talpa](https://talpa.co.ma/nos-services/)
- [Groupe Managem : Offres de stage, PFE et Emploi Maroc | Stagiaires.ma](https://www.stagiaires.ma/entreprise/groupe-managem/)
- [Managem Emploi et Recrutement | Dreamjob.ma](https://www.dreamjob.ma/emploi/managem-emploi-recrutement/)
- [Managem: Plus de 20 opportunités de carrière disponibles | Dreamjob.ma](https://www.dreamjob.ma/emploi/managem-plus-de-20-opportunites-de-carriere-disponibles/)
- [Document de référence Managem | AMMC](https://www.ammc.ma/sites/default/files/DR_MANAGEM_003_2025_3.pdf)
- [Groupe Managem | Wikipédia](https://fr.wikipedia.org/wiki/Groupe_Managem)
- [Tizert Mine, Adas Caïdat, Igherm Cercle, Taroudant Province | Mindat](https://www.mindat.org/loc-25320.html)

*Note: managemgroup.com, medias24.com, rekrute.com and stagiaires.ma could not be fetched directly from the
analysis environment due to network egress policy; their content is reported here via search-engine
summaries and should be re-verified directly before applying.*
