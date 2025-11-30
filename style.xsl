<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
  <title>Person Details</title>
  <style>
    body { font-family: Arial, sans-serif; background: #fafafa; margin: 40px; }
    table { border-collapse: collapse; width: 50%; margin: auto; }
    th, td { border: 1px solid #333; padding: 8px 12px; text-align: center; }
    th { background: #333; color: white; }
    h2 { text-align: center; color: #333; }
  </style>
</head>

<body>
  <h2>Person Details Table</h2>

  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Number</th>
    </tr>

    <!-- Loop through every <user> node -->
    <xsl:for-each select="personname/user">
      <tr>
        <td><xsl:value-of select="@id"/></td>
        <td><xsl:value-of select="name"/></td>
        <td><xsl:value-of select="age"/></td>
        <td><xsl:value-of select="number"/></td>
      </tr>
    </xsl:for-each>

  </table>
</body>
</html>
</xsl:template>

</xsl:stylesheet>
