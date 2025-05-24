
export function Pagination({ currentPage, totalPages, onPageChange }) {
  const createPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <PaginationContent className="flex justify-center mt-4 space-x-2">
      {createPageNumbers().map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
    </PaginationContent>
  );
}

export function PaginationContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function PaginationItem({ children }) {
  return <div>{children}</div>;
}

export function PaginationLink({ href, onClick, children, className }) {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
