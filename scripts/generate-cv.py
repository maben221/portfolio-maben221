"""Generate a polished bilingual CV PDF for Mohamed Aymane Bencheikh."""
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem,
)

ACCENT = HexColor("#2563eb")
DARK = HexColor("#1f2937")
GREY = HexColor("#6b7280")

NAME = "Mohamed Aymane Bencheikh"
CONTACT = (
    "581-307-1221 &nbsp;|&nbsp; maben221@ulaval.ca &nbsp;|&nbsp; "
    "linkedin.com/in/maben221 &nbsp;|&nbsp; github.com/maben221"
)

# ---------- styles ----------
name_style = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=20,
                            leading=24, textColor=DARK)
contact_style = ParagraphStyle("contact", fontName="Helvetica", fontSize=9,
                               leading=12, textColor=GREY, alignment=TA_LEFT)
section_style = ParagraphStyle("section", fontName="Helvetica-Bold",
                               fontSize=11, leading=14, textColor=ACCENT,
                               spaceBefore=12, spaceAfter=2)
role_style = ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10,
                            leading=13, textColor=DARK, spaceBefore=6)
sub_style = ParagraphStyle("sub", fontName="Helvetica-Oblique", fontSize=9.5,
                           leading=12, textColor=GREY)
body_style = ParagraphStyle("body", fontName="Helvetica", fontSize=9.5,
                            leading=12.5, textColor=DARK)
bullet_style = ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.5,
                              leading=12.5, textColor=DARK)

def hline():
    return HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=4)

def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(i, bullet_style), leftIndent=14, value="\u2022")
         for i in items],
        bulletType="bullet", bulletColor=ACCENT, leftIndent=14, bulletFontSize=7,
    )

story = []
story.append(Paragraph(NAME, name_style))
story.append(Spacer(1, 2))
story.append(Paragraph(CONTACT, contact_style))
story.append(hline())

# Education
story.append(Paragraph("Education", section_style))
story.append(Paragraph("Universit\u00e9 Laval", role_style))
story.append(Paragraph("Baccalaur\u00e9at en G\u00e9nie Logiciel &nbsp;\u2014&nbsp; Qu\u00e9bec, QC", sub_style))
story.append(Paragraph("Sept. 2022 \u2013 Aujourd\u2019hui", sub_style))

# Technical skills
story.append(Paragraph("Comp\u00e9tences techniques", section_style))
story.append(Paragraph("<b>Langages :</b> Python, C++, JavaScript, CSS, HTML", body_style))
story.append(Paragraph("<b>Outils de d\u00e9veloppeur :</b> VS Code, Git, Docker, Terraform, AWS SageMaker, MLFlow, Anaconda Enterprise", body_style))
story.append(Paragraph("<b>Langues :</b> Fran\u00e7ais (maternel), Anglais (avanc\u00e9), Arabe (interm\u00e9diaire), Espagnol (d\u00e9butant)", body_style))

# Experience
story.append(Paragraph("Exp\u00e9rience", section_style))

def role(title, org, loc, dates, items):
    story.append(Paragraph(f"{title} \u2014 <font color='#6b7280'>{org}</font>", role_style))
    story.append(Paragraph(f"{loc} &nbsp;&nbsp; {dates}", sub_style))
    story.append(bullets(items))

role("Analyste d\u00e9veloppeur MLOps (stagiaire)", "Beneva", "Qu\u00e9bec, QC", "2025 \u2013 Aujourd\u2019hui", [
    "Collaboration aux projets d\u2019am\u00e9lioration des technologies, des mod\u00e8les d\u2019intelligence artificielle et des outils de d\u00e9veloppement",
    "Soutien au bon fonctionnement et \u00e0 la performance des logiciels utilis\u00e9s par l\u2019\u00e9quipe",
    "Participation \u00e0 l\u2019\u00e9volution et \u00e0 la coh\u00e9rence de l\u2019\u00e9cosyst\u00e8me MLOps",
    "Mise en \u0153uvre de l\u2019architecture technologique pour op\u00e9rationnaliser les solutions d\u2019IA",
    "Utilisation de Terraform, Anaconda Entreprise, AWS SageMaker et MLFlow",
])

role("Analyste technologique (\u00e9tudiant)", "Beneva", "Qu\u00e9bec, QC", "2024 \u2013 2025", [
    "Coordination entre les \u00e9quipes de d\u00e9veloppement et les partenaires d\u2019affaires",
    "Documentation des processus d\u2019architecture et des guides de configuration",
    "Participation au choix et \u00e0 l\u2019implantation de nouveaux logiciels",
    "Identification des risques techniques et proposition de plans de contingence",
    "Veille technologique et soutien \u00e0 la gestion du changement",
])

role("Soutien au centre de services TI", "Beneva", "Qu\u00e9bec, QC", "2023 \u2013 2024", [
    "Installation et entretien des logiciels sur les postes de travail",
    "Maintien \u00e0 jour de la CMDB (Jira) et prises d\u2019inventaire",
    "Gestion des identit\u00e9s et acc\u00e8s (Azure Entra ID, SCCM, Active Directory)",
    "Livraison, installation et entretien des \u00e9quipements de bureautique",
])

role("Agent de bureau", "Beneva", "Qu\u00e9bec, QC", "2023", [
    "Fournir de l\u2019aide aux clients quant \u00e0 la facturation de leurs polices d\u2019assurance",
    "Obtention du titre d\u2019agent en assurances de dommages des particuliers",
])

role("T\u00e9l\u00e9phoniste", "Statistiques Canada", "Qu\u00e9bec, QC", "2022", [
    "Contact avec les citoyens canadiens pour les aider \u00e0 remplir leur formulaire de recensement",
    "R\u00e9solution de dossiers probl\u00e9matiques ou manquants d\u2019informations",
])

# Projects
story.append(Paragraph("Projets", section_style))
story.append(Paragraph("Site web \u2014 HTML, CSS, JavaScript, PHP", role_style))
story.append(Paragraph("Mars 2019 \u2013 Aujourd\u2019hui", sub_style))
story.append(bullets([
    "Conceptualisation d\u2019un site web sur l\u2019intelligence artificielle (projet scolaire)",
    "Programmation d\u2019un serveur en PHP",
]))

story.append(Paragraph("Projet de design \u2014 LaTeX", role_style))
story.append(Paragraph("Janvier 2023 \u2013 Mai 2023", sub_style))
story.append(bullets([
    "R\u00e9daction d\u2019un rapport sur un appareil de d\u00e9tection de lemmings en \u00e9quipe",
    "Recherche d\u2019une solution de d\u00e9tection mat\u00e9rielle soutenue par une solution IdO",
    "Calcul des co\u00fbts des solutions logicielles",
    "Collaboration avec 7 membres pour un rapport final not\u00e9 92 %",
]))

story.append(Paragraph("Plugin Tampermonkey \u2014 JavaScript", role_style))
story.append(Paragraph("D\u00e9cembre 2023", sub_style))
story.append(bullets([
    "Cr\u00e9ation d\u2019un plugin int\u00e9grable sur les sites de vente de jeux vid\u00e9o",
    "Proposition d\u2019alternatives moins dispendieuses pour l\u2019obtention d\u2019un jeu",
]))

# Volunteer
story.append(Paragraph("Implications extracurriculaires", section_style))
story.append(Paragraph("B\u00e9n\u00e9volat \u2014 Qu\u00e9bec, QC &nbsp;&nbsp; 2015 \u2013 Aujourd\u2019hui", role_style))
story.append(Paragraph("Plusieurs activit\u00e9s et projets de b\u00e9n\u00e9volat de caract\u00e8re scolaire", body_style))

doc = SimpleDocTemplate(
    "public/resume.pdf",
    pagesize=letter,
    rightMargin=0.75 * inch, leftMargin=0.75 * inch,
    topMargin=0.6 * inch, bottomMargin=0.6 * inch,
    title="Mohamed Aymane Bencheikh - CV",
    author="Mohamed Aymane Bencheikh",
)
doc.build(story)
print("CV generated at public/resume.pdf")
