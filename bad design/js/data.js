// Data-driven configuration for all designs
const designsData = {
    designs: [
        {
            id: 1,
            title: "Bad Design 1",
            teaser: "A striking example of poor visual hierarchy and overwhelming typography choices.",
            finalImage: "assets/finals/bad design 1.png",
            reasons: [
                {
                    title: "Poor Typography Hierarchy",
                    description: "The design lacks a clear typographic hierarchy, making it difficult for viewers to understand which information is most important. Multiple font weights and sizes compete for attention without establishing a clear reading order."
                },
                {
                    title: "Inadequate Contrast",
                    description: "Text elements fail to provide sufficient contrast against their backgrounds, creating accessibility issues and making the content difficult to read for users with visual impairments or in different lighting conditions."
                },
                {
                    title: "Inconsistent Spacing",
                    description: "Spacing between elements appears arbitrary and inconsistent throughout the design. This creates visual tension and makes the composition feel unbalanced and unprofessional."
                },
                {
                    title: "Overuse of Visual Effects",
                    description: "Excessive use of shadows, gradients, or other effects creates visual clutter and distracts from the core message. These decorative elements compete with the content rather than supporting it."
                },
                {
                    title: "Lack of Breathing Room",
                    description: "The design is cramped with insufficient white space, making it feel claustrophobic and difficult to navigate. Proper margins and padding are essential for creating a comfortable reading experience."
                }
            ],
            processSteps: [1, 2, 3]
        },
        {
            id: 2,
            title: "Bad Design 2",
            teaser: "Demonstrates critical failures in color theory and visual balance that undermine usability.",
            finalImage: "assets/finals/bad design 2.png",
            reasons: [
                {
                    title: "Poor Color Harmony",
                    description: "The color palette lacks cohesion and creates visual discord. Colors clash rather than complement each other, resulting in an unprofessional appearance that fails to establish a clear brand identity or mood."
                },
                {
                    title: "Broken Visual Balance",
                    description: "Elements are distributed unevenly across the composition, creating an unbalanced design that feels unstable. The visual weight is concentrated in certain areas while other sections appear empty or neglected."
                },
                {
                    title: "Illegible Text Elements",
                    description: "Font choices and sizing make text difficult to read. Either the typeface is inappropriate for the context, or the text is too small, too thin, or poorly kerned, resulting in a frustrating user experience."
                },
                {
                    title: "Confusing Information Architecture",
                    description: "The structure and organization of information is unclear, making it difficult for users to find what they need. Related content is scattered, and the logical flow of information is disrupted."
                },
                {
                    title: "Non-Responsive Layout Decisions",
                    description: "The design fails to consider how it will adapt to different screen sizes and devices. Fixed dimensions and poor scaling choices result in a layout that breaks or becomes unusable on smaller screens."
                }
            ],
            processSteps: [1, 2, 3, 4]
        },
        {
            id: 3,
            title: "Bad Design 3",
            teaser: "Showcases fundamental UX failures and misalignment between form and function.",
            finalImage: "assets/finals/bad design 3.png",
            reasons: [
                {
                    title: "Unclear Call-to-Action",
                    description: "The primary action users should take is either hidden, unclear, or competing with multiple other elements. Effective designs guide users toward desired actions through clear visual cues and prominent placement."
                },
                {
                    title: "Inconsistent Design Language",
                    description: "Visual elements lack consistency in style, creating a disjointed experience. Buttons, icons, and interface components don't follow a unified design system, making the interface feel cobbled together."
                },
                {
                    title: "Misaligned Content and Purpose",
                    description: "The visual treatment doesn't match the content's purpose or audience. The design style, tone, and sophistication level are inappropriate for the intended use case or target demographic."
                },
                {
                    title: "Ignoring Design Conventions",
                    description: "The design arbitrarily breaks established UI conventions and user expectations without good reason. This forces users to relearn common interactions and increases cognitive load unnecessarily."
                },
                {
                    title: "Accessibility Failures",
                    description: "The design fails to meet basic accessibility standards, excluding users with disabilities. Issues include insufficient color contrast, missing alt text, poor keyboard navigation, and inadequate support for screen readers."
                }
            ],
            processSteps: [1, 2, 3]
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = designsData;
}
