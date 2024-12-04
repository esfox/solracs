export const workTypes = {
  photography: {
    label: 'photography',
    slug: 'photography',
    featuredImage: '/photography-bg.jpeg',
  },
  graphicDesign: {
    label: 'graphic design',
    slug: 'graphic-design',
    featuredImage: '/graphic-design-bg.jpeg',
  },
  sandbox: {
    label: 'sandbox',
    slug: 'sandbox',
    featuredImage: '/sandbox-bg.png',
  },
};

export const works = [
  {
    slug: 'sg',
    title: 'Singapore',
    type: workTypes.photography,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur dapibus vestibulum. Phasellus elementum nisl eu quam pellentesque elementum. Ut placerat auctor porttitor. Donec placerat sem neque, congue aliquet elit pulvinar ut. Cras imperdiet lectus nec tortor laoreet, sit amet egestas metus condimentum.\n\nMauris neque justo, interdum ut massa laoreet, ullamcorper scelerisque urna. Ut consectetur, nisi ac consectetur rutrum, libero lorem sagittis orci, ut vehicula neque mi eu dui.',
    featuredImage: '/singapore-featured.jpeg',
    images: [
      '/singapore-featured.jpeg',
      'https://fastly.picsum.photos/id/374/1920/1080.jpg?hmac=LW6TDkcIkYUXC9JxvhTpZeh7tnJr5A9N0KgsHLIxlRE',
      'https://fastly.picsum.photos/id/193/1920/1080.jpg?hmac=BG_krGRTZ0G7BKRtciVSQRihKjRrzdZfWPczWZvfi7M',
    ],
  },
  {
    slug: 'gd',
    featuredImage: '/graphic-design-bg.jpeg',
    title: 'Graphic Design',
    type: workTypes.graphicDesign,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur dapibus vestibulum. Phasellus elementum nisl eu quam pellentesque elementum. Ut placerat auctor porttitor. Donec placerat sem neque, congue aliquet elit pulvinar ut. Cras imperdiet lectus nec tortor laoreet, sit amet egestas metus condimentum.\n\nMauris neque justo, interdum ut massa laoreet, ullamcorper scelerisque urna. Ut consectetur, nisi ac consectetur rutrum, libero lorem sagittis orci, ut vehicula neque mi eu dui.',
    images: [
      'https://fastly.picsum.photos/id/358/1920/1080.jpg?hmac=1FA7Zn5y4_b671yi9SPafeIjAymnftxjw8iqqo2rHik',
      'https://fastly.picsum.photos/id/274/1920/1080.jpg?hmac=Qk7nStiIk5NMcJq82t5BTjNZcOd8z2b4GGl3EIQ0SYA',
      'https://fastly.picsum.photos/id/178/1920/1080.jpg?hmac=5j-Pqc6_zieQ7ow1Cqnxhyb3CjqwzGj32Spn9ripOPk',
    ],
  },
  {
    slug: 'sandbox',
    featuredImage: '/sandbox-bg.png',
    title: 'Sandbox',
    type: workTypes.sandbox,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur dapibus vestibulum. Phasellus elementum nisl eu quam pellentesque elementum. Ut placerat auctor porttitor. Donec placerat sem neque, congue aliquet elit pulvinar ut. Cras imperdiet lectus nec tortor laoreet, sit amet egestas metus condimentum.\n\nMauris neque justo, interdum ut massa laoreet, ullamcorper scelerisque urna. Ut consectetur, nisi ac consectetur rutrum, libero lorem sagittis orci, ut vehicula neque mi eu dui.',
    images: [
      'https://fastly.picsum.photos/id/301/1920/1080.jpg?hmac=-h20lEcazeSzwCALlmynk0Tgufw8NUP3OP4Bgz91jSs',
      'https://fastly.picsum.photos/id/774/1920/1080.jpg?hmac=fNc6p6L2yaXaNKdG4V3n7Icr0-Jk65TIYSPeH8v8JeI',
      'https://fastly.picsum.photos/id/851/1920/1080.jpg?hmac=8dpXaXykD3QOXMLOFPAMyWGveKGA1pbxbw1PxSZgaX0',
    ],
  },
];
