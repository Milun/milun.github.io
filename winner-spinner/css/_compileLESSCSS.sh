#EDGE MENU LESSCSS COMPILING SCRIPT.

#Note: LESSCSS v3.5.0 or higher is required for compiling.

#When developing LESSCSS, better to test for bugs using Git Bash invoking this script file.
#Call script with:
# ./_compileLESSCSS.sh

#Store the directory of this script (it will need to be navigated back to).
MYDIR=$PWD

#Delete the directory first (if it exists).
rm -rf __less_temp || true

#Setup temporary directory.
mkdir __less_temp

#Create the file which will have the combined LESSCSS. It has a different extension so that the "find" call below won't target it.

#Combine all .less files into one, then compile them. Note: @variable dependencies will be added in alphabetical file order as a result.
#Each file is seperated with a return character.
find * -maxdepth 2 -type f -name '*.less' -exec cat {} \; -exec echo "" \; > __less_temp/_combined.lessc

#Add the CSS '@charset "utf-8";' header. Needs to be prepended after the above call has written to it.
sed -i '1s;^;@charset \"utf-8\"\;\n\n;' __less_temp/_combined.lessc

#Add -x before the > to make the output CSS be minified (takes longer to compile).
lessc __less_temp/_combined.lessc > styles.css

#Delete the temporary directory.
rm -rf __less_temp || true

echo "Done!"

#read -p "Press any key..."

exit 1

# EXTREMELY IMPORTANT! NEVER EDIT A FILE WHILE IT'S BEING COMPILED! IT CAUSES MEMORY LEAKS EACH TIME THIS IS USED UNTIL THE COMPUTER IS RESET. 