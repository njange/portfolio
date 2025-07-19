export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable CI/CD Pipelines with Jenkins and Docker",
    slug: "ci-cd-jenkins-docker",
    excerpt: "Learn how to create robust, scalable CI/CD pipelines using Jenkins and Docker containers. This comprehensive guide covers best practices for DevOps automation.",
    author: "James Njange",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "DevOps",
    tags: ["Jenkins", "Docker", "CI/CD", "Automation", "DevOps"],
    featuredImage: "/images/blog/jenkins-docker.jpg",
    published: true,
    contentFile: "ci-cd-jenkins-docker.md"
  },
  {
    id: 2,
    title: "Kubernetes Deployment Strategies: Rolling vs Blue-Green vs Canary",
    slug: "kubernetes-deployment-strategies",
    excerpt: "Compare different Kubernetes deployment strategies and learn when to use each one for zero-downtime deployments in production environments.",
    author: "James Njange",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "DevOps",
    tags: ["Kubernetes", "Deployment", "DevOps", "Production"],
    featuredImage: "/images/blog/kubernetes-deployment.jpg",
    published: true,
    contentFile: "kubernetes-deployment-strategies.md"
  },
  {
    id: 3,
    title: "Securing Django APIs: Authentication, Authorization, and Best Practices",
    slug: "django-api-security",
    excerpt: "Deep dive into Django REST Framework security. Learn how to implement JWT authentication, role-based access control, and protect against common vulnerabilities.",
    author: "James Njange",
    date: "2025-01-05",
    readTime: "15 min read",
    category: "Backend",
    tags: ["Django", "Security", "API", "Authentication", "Python"],
    featuredImage: "/images/blog/django-security.jpg",
    published: true,
    contentFile: "django-api-security.md"
  },
  {
    id: 4,
    title: "Infrastructure as Code with Terraform: AWS Best Practices",
    slug: "terraform-aws-best-practices",
    excerpt: "Master Terraform for AWS infrastructure management. Learn modular design patterns, state management, and security best practices for production environments.",
    author: "James Njange",
    date: "2024-12-28",
    readTime: "10 min read",
    category: "Cloud",
    tags: ["Terraform", "AWS", "Infrastructure", "IaC", "Cloud"],
    featuredImage: "/images/blog/terraform-aws.jpg",
    published: true,
    contentFile: "terraform-aws-best-practices.md"
  },
  {
    id: 5,
    title: "Cybersecurity in DevOps: Implementing DevSecOps Pipeline",
    slug: "devsecops-pipeline",
    excerpt: "Integrate security into your DevOps pipeline. Learn about SAST, DAST, container scanning, and security automation for continuous security.",
    author: "James Njange",
    date: "2024-12-20",
    readTime: "14 min read",
    category: "Security",
    tags: ["DevSecOps", "Security", "SAST", "DAST", "Automation"],
    featuredImage: "/images/blog/devsecops.jpg",
    published: true,
    contentFile: "devsecops-pipeline.md"
  },
  {
    id: 6,
    title: "Node.js Performance Optimization: Monitoring and Scaling",
    slug: "nodejs-performance-optimization",
    excerpt: "Optimize your Node.js applications for production. Learn about performance monitoring, memory management, and horizontal scaling strategies.",
    author: "James Njange",
    date: "2024-12-15",
    readTime: "11 min read",
    category: "Backend",
    tags: ["Node.js", "Performance", "Scaling", "Monitoring", "JavaScript"],
    featuredImage: "/images/blog/nodejs-performance.jpg",
    published: true,
    contentFile: "nodejs-performance-optimization.md"
  }
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "DevOps", slug: "devops" },
  { name: "Backend", slug: "backend" },
  { name: "Cloud", slug: "cloud" },
  { name: "Security", slug: "security" }
];

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category) => {
  if (category === "all") return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedPosts = (limit = 3) => {
  return blogPosts.slice(0, limit);
};
