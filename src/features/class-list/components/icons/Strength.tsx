interface Props {
  size: number;
}

export const Strength = ({ size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Strength</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5.333a1.333 1.333 0 1 1 2.667 0 1.333 1.333 0 0 1-2.667 0Zm1.334-2.667a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.333ZM16 16v-4.913l3.23 3.632a2 2 0 0 0 2.909.086L25 11.943l1.724 1.723-.528.53a.667.667 0 1 0 .942.942l2-2a.667.667 0 0 0-.942-.943l-.529.529-4.39-4.39.528-.53a.667.667 0 0 0-.943-.942l-2 2a.667.667 0 1 0 .943.943l.529-.529L24.058 11l-2.862 2.862a.667.667 0 0 1-.97-.029l-3.229-3.632c-.812-.914-2.33-.345-2.33.884V16c0 3.939-.66 6.383-2.471 8.195-.417.417-1.165.878-2.121 1.34-.94.455-2.02.884-3.05 1.254a57.865 57.865 0 0 1-3.788 1.212l-.06.017-.014.004-.005.001a.667.667 0 1 0 .351 1.287h.002l.004-.002.017-.005.064-.017.24-.068a59.195 59.195 0 0 0 3.64-1.174c1.054-.38 2.182-.826 3.18-1.309.98-.474 1.9-1.014 2.483-1.597C15.327 22.95 16 20.061 16 16ZM3.334 28.667l.175.643-.175-.643Zm14-8c0-.369.298-.667.666-.667h4.667V20.667 20H22.698l.017.001.08.006a1.95 1.95 0 0 1 .938.376c.536.402.934 1.12.934 2.284v5.999a.667.667 0 0 1-1.333 0v-6c0-.837-.27-1.118-.4-1.216a.621.621 0 0 0-.28-.117H18a.667.667 0 0 1-.666-.666Z"
        fill="#697180"
      />
    </svg>
  );
};
